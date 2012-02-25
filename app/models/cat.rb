class Cat < ActiveRecord::Base
  
  has_many :events
  has_many :attachments, as: :attachable

end