class Event < ActiveRecord::Base
  
  belongs_to :cat
  has_many :attachments, as:attachable
  
  
end