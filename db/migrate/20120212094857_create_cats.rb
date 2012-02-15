class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats, :force => true do |t|
      t.string :name
      t.datetime :birthday
    end
  end
end