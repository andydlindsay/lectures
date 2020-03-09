class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :num_pages
      t.references :author, index: true, foreign_key: true
      t.timestamps
    end
  end
end
