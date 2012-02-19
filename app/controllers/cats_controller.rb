class CatsController < ApplicationController
  
  
  respond_to :json, :html
  
  def show
    respond_with(Cat.find(params[:id]))
  end

  def create
    @cat = Cat.new(params[:question])
    if @cat.save
      render :json => @cat
    end
  end
  
  def index
    respond_with(Cat.all)
  end
  
  # private
  # 
  # def object_type
  #   controller_name.singularize.camelize.constantize
  # end
  
end