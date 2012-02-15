class ApplicationController < ActionController::Base
  protect_from_forgery
  
  respond_to :json
  
  def show
    respond_with(object_type.find(params[:id]))
  end

  def create
    @obj = object_type.new(params[:question])
    if @obj.save
      render :json => @obj
    end
  end
  
  def index
    respond_with(object_type.all)
  end
  
  private
  
  def object_type
    controller_name.singularize.camelize.constantize
  end
  
end
