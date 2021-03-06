# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'date'
# 10.times do
#   # password = "password"
#   user = User.create(
#     email: Faker::Internet.free_email,
#     password: "password",
#     username: Faker::Name.last_name,
#     display_name: Faker::Name.first_name
#   )
# end
# 10.times do
#   Pen.create(
#     title: Faker::Book.title ,
#     html: Faker::Lorem.paragraph(sentence_count: 10),
#     css: Faker::Lorem.paragraph(sentence_count: 10),
#     created_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
#     random_url: Faker::Lorem.characters(number: 8),
#     user_id: 70
#   )
# end

# 5.times do
#   # password = "password"
#   user = User.new(
#     email: Faker::Internet.free_email,
#     password: "password",
#     username: Faker::Internet.first_name,
#     display_name: Faker::Name.first_name
#   )
#   user.save
# end

Product.create(
  [{
    plan: 'starter',
    desc: 'CodePain membership: Annual Starter',
    subtitle: 'Starter is the way to go. Welcome to CodePen.',
    period: 'year',
    price: 300,
    monthly_rate: 30
  },
  {
    plan: 'developer',
    desc: 'CodePain membership: Annual Developer',
    subtitle: 'Developer is our most popular plan. Good choice!',
    period: 'year',
    price: 450,
    monthly_rate: 45
  },
  {
    plan: 'super',
    desc: 'CodePain membership: Annual Super',
    subtitle: 'Super is loaded with super power. Well played.',
    period: 'year',
    price: 600,
    monthly_rate: 60
  },
  {
    plan: 'starter',
    desc: 'CodePain membership: Starter',
    subtitle: 'Starter is the way to go. Welcome to CodePen.',
    period: 'month',
    price: 30,
    annual_rate: 300
  },
  {
    plan: 'developer',
    desc: 'CodePain membership: Developer',
    subtitle: 'Developer is our most popular plan. Good choice!',
    period: 'month',
    price: 45,
    annual_rate: 450
  },
  {
    plan: 'super',
    desc: 'CodePain membership: Super',
    subtitle: 'Super is loaded with super power. Well played.',
    period: 'month',
    price: 60,
    annual_rate: 600
  }]
)