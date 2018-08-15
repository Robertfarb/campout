class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.in_bounds(params[:bounds])
  end

  def show
    @listing = Listing.find(params[:id])
    render :show
  end

  private
  def listing_params
    params.require(:listing).permit(:title, :host_id, :description, :address, :long, :lat,
    :price_daily, :is_glamping, :pet_friendly, :is_toilets, :max_capacity, :has_showers, :checkin_after,
    :checkout_before, photos: [])
  end
end