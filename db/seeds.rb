# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "robfarb", first_name: "Robert", last_name: "Farb", zip_code: "94103", password: "12345678"})
User.create({username: "smokeythebear", first_name: "Smokey", last_name: "Bear", zip_code: "94103", password: "12345678"})