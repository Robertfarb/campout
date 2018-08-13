class Api::BookingsController < ApplicationController
  def index
    @bookings = current_user.bookings
    render "api/bookings/index"
  end

  def show
    @booking = Booking.find(params[:id])
    render :show
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render "api/bookings/show"
    else
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def destroy
    @booking = Booking.find(params[:id])
    @booking.destroy

    render :show
  end

  private
  def booking_params
    params.require(:booking).permit(:guest_id, :listing_id, :check_in, 
    :check_out, :total_price, :total_guests)
  end
end
