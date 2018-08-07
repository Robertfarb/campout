class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  helper_method :logged_in?, :current_user

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def logged_in?
    !!current_user
  end

  def require_login
    unless currnet_user
      render json: { base: ['invalid credentials'] }, status: 401
    end
  end
end
