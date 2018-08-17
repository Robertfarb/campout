class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  private
  def review_params
    params.require(:review).permit(:user_id, :listing_id, :review_body)
  end
end