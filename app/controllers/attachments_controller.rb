class AttachmentsController < ApplicationController
  # before_filter :authorize
  respond_to :json, :html

  def create
    attachment = current_thing.attachments.new({ :upload => params[:upload] })
    attachment.save
    respond_with(current_thing, attachment)
  end
  
  private
  
  def current_thing
    if params[:event_id]
      Event.find(params[:event_id])
    elsif params[:cat_id]
      Cat.find(params[:cat_id])
    end
  end
end
