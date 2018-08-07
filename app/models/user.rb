class User < ApplicationController
  validates :username, :first_name, :last_name, :email, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validate :password, length {minimum: 8}, allow_nil: true
  attr_reader :password

  after_initialize :ensure_session_token

  # has_many :bookings,
  #   through: :listings

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
  end

  def ensure_session_token
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end
end
