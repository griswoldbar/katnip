class CreateEvents < ActiveRecord::Migration
  
  def change
    create_table :events, :force => true do |t|
      t.integer :cat_id
      t.text :description
      t.text :url
      t.datetime :date
    end
  end

end