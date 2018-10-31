class Api::BookingsController < ApplicationController
  def index
    if current_user
      @bookings = current_user.bookings
      render "api/bookings/index"
    else
      render json: ["No current User is logged in"], status: 404
    end
  end

  def show
    @booking = Booking.find(params[:id])
    if @booking
      render :show
    else
      render json: ["Booking not found"], status: 404
    end
  end

  def create
    @booking = Booking.new(booking_params)
    if @booking.save
      render "api/bookings/show"
    else
      render json: ["Please fill out all the booking fields"], status: 422
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
