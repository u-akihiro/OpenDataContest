class CreateAccounts < ActiveRecord::Migration
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :mail
      t.text :password

      t.timestamps
    end
  end
end
