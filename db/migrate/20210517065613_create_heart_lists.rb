class CreateHeartLists < ActiveRecord::Migration[6.1]
  def change
    create_table :heart_lists do |t|
      t.belongs_to :pen, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
