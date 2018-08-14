# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Listing.destroy_all
Activity.destroy_all

rob = User.create({username: "robfarb", first_name: "Robert", last_name: "Farb", zip_code: "94103", password: "12345678"})
smokey = User.create({username: "smokeythebear", first_name: "Smokey", last_name: "Bear", zip_code: "94103", password: "12345678"})
ranger_rick = User.create({username: "parkranger10", first_name: "Ranger", last_name: "Rick", zip_code: "92234", password: "ilovenationalparks"})
national_park_service = User.create({username: "nationalparkservice", first_name: "National", last_name: "Park Service", zip_code: "92234", password: "natparkservice10"})

yos = Listing.create!({title: "Yosemite", host_id: national_park_service.id, description: "Yosemite National Park lies in the heart of California. It flaunts 'hanging' valleys, many waterfalls, cirque lakes, polished domes, moraines and U-shaped valleys.",
                address: "Yosemite National Park", long: -119.538329, lat: 37.865101, price_daily: 55, is_glamping: false, 
                pet_friendly: false, is_toilets: false, max_capacity: 5, has_showers: false, checkin_after: "10 AM", 
                checkout_before: "4 PM"})
                
                yos.photos.attach(io: File.open("app/assets/images/yosemite/yosemite_1.jpg"), filename: "yosemite-1")
                yos.photos.attach(io: File.open("app/assets/images/yosemite/yosemite_2.jpg"), filename: "yosemite-2")
                yos.photos.attach(io: File.open("app/assets/images/yosemite/yosemite_3.jpg"), filename: "yosemite-3")
                yos.photos.attach(io: File.open("app/assets/images/yosemite/yosemite_4.jpg"), filename: "yosemite-4")
                yos.photos.attach(io: File.open("app/assets/images/yosemite/yosemite_5.jpg"), filename: "yosemite-5")
                
big_sur = Listing.create!({title: "Big Sur", host_id: national_park_service.id, description: "Experience one of the world's most unforgettable stretches of coastline in and around Big Sur, California.", 
                address: "Big Sur National Park", long: -121.856261, lat: 36.361475, price_daily: 120, is_glamping: false, 
                pet_friendly: true, is_toilets: true, max_capacity: 6, has_showers: true, checkin_after: "11 AM", 
                checkout_before: "3 PM"})

                big_sur.photos.attach(io: File.open("app/assets/images/big_sur/big_sur1.jpg"), filename: "big_sur-1")
                big_sur.photos.attach(io: File.open("app/assets/images/big_sur/big_sur2.jpg"), filename: "big_sur-2")
                big_sur.photos.attach(io: File.open("app/assets/images/big_sur/big_sur3.jpg"), filename: "big_sur-3")
                big_sur.photos.attach(io: File.open("app/assets/images/big_sur/big_sur4.jpg"), filename: "big_sur-4")
                big_sur.photos.attach(io: File.open("app/assets/images/big_sur/big_sur5.jpg"), filename: "big_sur-5")
                big_sur.photos.attach(io: File.open("app/assets/images/big_sur/big_sur6.jpg"), filename: "big_sur-6")

j_tree = Listing.create!({title: "Joshua Tree", host_id: ranger_rick.id, description: "Arid low desert and vegetated high desert meet in Joshua Tree National Park, offering visitors stunning vistas and rewarding hikes, and incredible climbs.", 
                address: "Joshua Tree National Park", long: -115.900993, lat: 33.873417, price_daily: 60, is_glamping: false, 
                pet_friendly: false, is_toilets: true, max_capacity: 10, has_showers: false, checkin_after: "10 AM", 
                checkout_before: "4 PM"})

                j_tree.photos.attach(io: File.open("app/assets/images/joshua_tree/joshua_tree1.jpg"), filename: "jtree1")
                j_tree.photos.attach(io: File.open("app/assets/images/joshua_tree/joshua_tree2.jpg"), filename: "jtree2")
                j_tree.photos.attach(io: File.open("app/assets/images/joshua_tree/joshua_tree3.jpg"), filename: "jtree3")
                j_tree.photos.attach(io: File.open("app/assets/images/joshua_tree/joshua_tree4.jpg"), filename: "jtree4")
                j_tree.photos.attach(io: File.open("app/assets/images/joshua_tree/joshua_tree5.jpg"), filename: "jtree5")


zion = Listing.create!({title: "Zion", host_id: national_park_service.id, description: "Zion is a beautiful, vast nature reserve in Southwest Utah offering hikes through slot canyons and endless trails through renowned red canyons", 
                address: "Zion National Park", long: -113.026299, lat: 37.298203, price_daily: 105, is_glamping: false, 
                pet_friendly: true, is_toilets: false, max_capacity: 10, has_showers: false, checkin_after: "10 AM", 
                checkout_before: "4 PM"})

                zion.photos.attach(io: File.open("app/assets/images/zion/zion1.jpg"), filename: "zion1")
                zion.photos.attach(io: File.open("app/assets/images/zion/zion2.jpg"), filename: "zion3")
                zion.photos.attach(io: File.open("app/assets/images/zion/zion3.jpg"), filename: "zion4")
                zion.photos.attach(io: File.open("app/assets/images/zion/zion4.jpg"), filename: "zion5")
                zion.photos.attach(io: File.open("app/assets/images/zion/zion5.jpg"), filename: "zion6")

                
crater_lake = Listing.create!({title: "Crater Lake", host_id: national_park_service.id, description: "Explore the beatuty that is Crater Lake National Park in the Cascade Mountains of southern Oregon. It’s known for its namesake Crater Lake, formed by the now-collapsed volcano, Mount Mazama.", 
                address: "Crater Lake National Park", long: 122.1685, lat: 42.8684, price_daily: 100, is_glamping: false, 
                pet_friendly: false, is_toilets: true, max_capacity: 8, has_showers: false, checkin_after: "10 AM", 
                checkout_before: "4 PM"})

                crater_lake.photos.attach(io: File.open("app/assets/images/crater_lake/crater_lake1.jpg"), filename: "crater1")
                crater_lake.photos.attach(io: File.open("app/assets/images/crater_lake2.jpg"), filename: "crater2")
                crater_lake.photos.attach(io: File.open("app/assets/images/crater_lake3.jpg"), filename: "crater3")
                crater_lake.photos.attach(io: File.open("app/assets/images/crater_lake4.jpg"), filename: "crater4")
                crater_lake.photos.attach(io: File.open("app/assets/images/crater_lake5.jpg"), filename: "crater5")



grand_canyon = Listing.create!({title: "Grand Canyon", host_id: national_park_service.id, description: "Come explore the vast canyon carved out by the Colorado River. The Grand Canyon is the most spectacular gorge in the world. Located in the state of Arizona, it cuts across the Grand Canyon National Park.", 
                address: "Grand Canyon National Park", long: -112.112999, lat: 36.106964, price_daily: 50, is_glamping: false, 
                pet_friendly: true, is_toilets: true, max_capacity: 15, has_showers: false, checkin_after: "11 AM", 
                checkout_before: "4 PM"})

                grand_canyon.photos.attach(io: File.open("app/assets/images/grand_canyon/grand_canyon1.jpg"), filename: "grand_canyon1")
                grand_canyon.photos.attach(io: File.open("app/assets/images/grand_canyon/grand_canyon2.jpg"), filename: "grand_canyon2")
                grand_canyon.photos.attach(io: File.open("app/assets/images/grand_canyon/grand_canyon3.jpg"), filename: "grand_canyon3")
                grand_canyon.photos.attach(io: File.open("app/assets/images/grand_canyon/grand_canyon4.jpg"), filename: "grand_canyon4")
                grand_canyon.photos.attach(io: File.open("app/assets/images/grand_canyon/grand_canyon5.jpg"), filename: "grand_canyon5")


redwoods = Listing.create!({title: "Redwoods", host_id: smokey.id, description: "Come experience a true exhibit of scale and perspective when viewing the vast redwoods that this California State Park has to offer.", 
                address: "Redwoods National Park", long: -124.0046275, lat: 41.2131788, price_daily: 75, is_glamping: false, 
                pet_friendly: true, is_toilets: true, max_capacity: 8, has_showers: true, checkin_after: "9 AM", 
                checkout_before: "2 PM"})
 
                redwoods.photos.attach(io: File.open("app/assets/images/redwood/redwood1.jpg"), filename: "redwood1")
                redwoods.photos.attach(io: File.open("app/assets/images/redwood/redwood2.jpg"), filename: "redwood2")
                redwoods.photos.attach(io: File.open("app/assets/images/redwood/redwood3.jpg"), filename: "redwood3")
                redwoods.photos.attach(io: File.open("app/assets/images/redwood/redwood4.jpg"), filename: "redwood4")
                redwoods.photos.attach(io: File.open("app/assets/images/redwood/redwood5.jpg"), filename: "redwood5")

               

#Listing Images
Activity.create!({hiking: true, biking: false, swimming: true, fishing: true, climbing: true, surfing: false, skiing: false, listing_id: 1})
Activity.create!({hiking: true, biking: true, swimming: true, fishing: true, climbing: false, surfing: true, skiing: false, listing_id: 2})
Activity.create!({hiking: true, biking: false, swimming: false, fishing: false, climbing: true, surfing: false, skiing: false, listing_id: 3})
Activity.create!({hiking: true, biking: true, swimming: true, fishing: false, climbing: true, surfing: false, skiing: false, listing_id: 4})
Activity.create!({hiking: true, biking: false, swimming: false, fishing: false, climbing: false, surfing: false, skiing: false, listing_id: 5})
Activity.create!({hiking: true, biking: false, swimming: true, fishing: true, climbing: true, surfing: false, skiing: false, listing_id: 6})
Activity.create!({hiking: true, biking: true, swimming: false, fishing: true, climbing: true, surfing: false, skiing: false, listing_id: 7})


#Test
booking1 = Booking.create!({guest_id: 1, listing_id: 1, check_in: Date.new(2018, 8, 12), check_out: Date.new(2018, 8, 14), total_price: 200, total_guests: 10})