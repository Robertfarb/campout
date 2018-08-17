class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    
    render :show
  end

  def update
    @review = Review.find(params[:id])

    if @review.update(review_params)
      listing = @review.listing

      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private
  def review_params
    params.require(:review).permit(:id, :user_id, :listing_id, :review_body)
  end
end