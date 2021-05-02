class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.references :make, null: false, foreign_key: true
      t.references :model, null: false, foreign_key: true
      t.references :body, null: false, foreign_key: true
      t.references :trim, null: false, foreign_key: true
      t.integer :year
      t.string :color

      t.timestamps
    end
  end
end
