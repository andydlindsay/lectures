class CarsController < ApplicationController
  def index
    if params[:search_term].length > 0
      @cars = Car.joins(:model).where("model LIKE ?", "%#{params[:search_term]}%")
    else
      @cars = Car.all
    end
  end

  def show
    @car = Car.find(params[:id])
  end
end
