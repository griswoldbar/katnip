class EventsController < ApplicationController
  respond_to :json, :html
  
  before_filter :get_cat
  
  def show
    respond_with(Event.find(params[:id]))
  end

  def create
    @event = Event.new(params[:question])
    if @event.save
      render :json => @event
    end
  end
  
  def index
    @events = @cat.nil? ? Event.all : @cat.events
    respond_with(@events)
  end

  private
  
  def get_cat
    @cat = Cat.find(params[:cat_id]) unless params[:cat_id].blank?
  end
end