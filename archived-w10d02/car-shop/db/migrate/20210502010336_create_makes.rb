class CreateMakes < ActiveRecord::Migration[6.1]
  def change
    create_table :makes do |t|
      t.string :make

      t.timestamps
    end
  end
end
