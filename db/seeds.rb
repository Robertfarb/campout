require 'date'
require 'open-uri'

User.destroy_all
Listing.destroy_all
Activity.destroy_all

rob = User.create({username: "robfarb", first_name: "Robert", last_name: "Farb", zip_code: "94103", password: "12345678"})
smokey = User.create({username: "smokeythebear", first_name: "Smokey", last_name: "Bear", zip_code: "94103", password: "12345678"})
ranger_rick = User.create({username: "parkranger10", first_name: "Ranger", last_name: "Rick", zip_code: "92234", password: "ilovenationalparks"})
national_park_service = User.create({username: "nationalparkservice", first_name: "National", last_name: "Park Service", zip_code: "92234", password: "natparkservice10"})
stella = User.create({username: "stellathedawg", first_name: "Stella", last_name: "Appleton", zip_code: "91403", password: "stellabork!"})

yos = Listing.create!({title: "Yosemite", host_id: national_park_service.id, description: "Yosemite National Park lies in the heart of California. It flaunts 'hanging' valleys, many waterfalls, cirque lakes, polished domes, moraines and U-shaped valleys.",
                address: "Yosemite National Park", long: -119.538329, lat: 37.865101, price_daily: 55, is_glamping: false, 
                pet_friendly: false, is_toilets: false, max_capacity: 5, has_showers: false, checkin_after: "10 AM", 
                checkout_before: "4 PM"})
                
                yos.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yosemite_1.jpg"), filename: "yosemite-1.jpg")
                yos.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yosemite_2.jpg"), filename: "yosemite-2.jpg")
                yos.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yosemite_3.jpg"), filename: "yosemite-3.jpg")
                yos.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yosemite_4.jpg"), filename: "yosemite-4.jpg")
                yos.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yosemite_5.jpg"), filename: "yosemite-5.jpg")

                # Must use below filepath to seed locally

                # yos.photos.attach(io: File.open("./app/assets/images/yosemite/yosemite_1.jpg"), filename: "yosemite-1.jpg")
                # yos.photos.attach(io: File.open("./app/assets/images/yosemite/yosemite_2.jpg"), filename: "yosemite-2.jpg")
                # yos.photos.attach(io: File.open("./app/assets/images/yosemite/yosemite_3.jpg"), filename: "yosemite-3.jpg")
                # yos.photos.attach(io: File.open("./app/assets/images/yosemite/yosemite_4.jpg"), filename: "yosemite-4.jpg")
                # yos.photos.attach(io: File.open("./app/assets/images/yosemite/yosemite_5.jpg"), filename: "yosemite-5.jpg")
                
big_sur = Listing.create!({title: "Big Sur", host_id: national_park_service.id, description: "Experience one of the world's most unforgettable stretches of coastline in and around Big Sur, California.", 
                address: "Big Sur National Park", long: -121.856261, lat: 36.361475, price_daily: 120, is_glamping: false, 
                pet_friendly: true, is_toilets: true, max_capacity: 6, has_showers: true, checkin_after: "11 AM", 
                checkout_before: "3 PM"})

                big_sur.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/big_sur1.jpg"), filename: "big_sur-1.jpg")
                big_sur.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/big_sur2.jpg"), filename: "big_sur-2.jpg")
                big_sur.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/big_sur3.jpg"), filename: "big_sur-3.jpg")
                big_sur.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/big_sur4.jpg"), filename: "big_sur-4.jpg")
                big_sur.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/big_sur5.jpg"), filename: "big_sur-5.jpg")
                big_sur.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/big_sur6.jpg"), filename: "big_sur-6.jpg")


                # big_sur.photos.attach(io: File.open("./app/assets/images/big_sur/big_sur1.jpg"), filename: "big_sur-1.jpg")
                # big_sur.photos.attach(io: File.open("./app/assets/images/big_sur/big_sur2.jpg"), filename: "big_sur-2.jpg")
                # big_sur.photos.attach(io: File.open("./app/assets/images/big_sur/big_sur3.jpg"), filename: "big_sur-3.jpg")
                # big_sur.photos.attach(io: File.open("./app/assets/images/big_sur/big_sur4.jpg"), filename: "big_sur-4.jpg")
                # big_sur.photos.attach(io: File.open("./app/assets/images/big_sur/big_sur5.jpg"), filename: "big_sur-5.jpg")
                # big_sur.photos.attach(io: File.open("./app/assets/images/big_sur/big_sur6.jpg"), filename: "big_sur-6.jpg")

j_tree = Listing.create!({title: "Joshua Tree", host_id: ranger_rick.id, description: "Arid low desert and vegetated high desert meet in Joshua Tree National Park, offering visitors stunning vistas and rewarding hikes, and incredible climbs.", 
                address: "Joshua Tree National Park", long: -115.900993, lat: 33.873417, price_daily: 60, is_glamping: false, 
                pet_friendly: false, is_toilets: true, max_capacity: 10, has_showers: false, checkin_after: "10 AM", 
                checkout_before: "4 PM"})

                j_tree.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/joshua_tree1.jpg"), filename: "jtree1.jpg")
                j_tree.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/joshua_tree2.jpg"), filename: "jtree2.jpg")
                j_tree.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/joshua_tree3.jpg"), filename: "jtree3.jpg")
                j_tree.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/joshua_tree4.jpg"), filename: "jtree4.jpg")
                j_tree.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/joshua_tree5.jpg"), filename: "jtree5.jpg")

                # j_tree.photos.attach(io: File.open("./app/assets/images/joshua_tree/joshua_tree1.jpg"), filename: "jtree1.jpg")
                # j_tree.photos.attach(io: File.open("./app/assets/images/joshua_tree/joshua_tree2.jpg"), filename: "jtree2.jpg")
                # j_tree.photos.attach(io: File.open("./app/assets/images/joshua_tree/joshua_tree3.jpg"), filename: "jtree3.jpg")
                # j_tree.photos.attach(io: File.open("./app/assets/images/joshua_tree/joshua_tree4.jpg"), filename: "jtree4.jpg")
                # j_tree.photos.attach(io: File.open("./app/assets/images/joshua_tree/joshua_tree5.jpg"), filename: "jtree5.jpg")


zion = Listing.create!({title: "Zion", host_id: national_park_service.id, description: "Zion is a beautiful, vast nature reserve in Southwest Utah offering hikes through slot canyons and endless trails through renowned red canyons", 
                address: "Zion National Park", long: -113.026299, lat: 37.298203, price_daily: 105, is_glamping: false, 
                pet_friendly: true, is_toilets: false, max_capacity: 10, has_showers: false, checkin_after: "10 AM", 
                checkout_before: "4 PM"})

                zion.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/zion1.jpg"), filename: "zion1.jpg")
                zion.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/zion2.jpg"), filename: "zion2.jpg")
                zion.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/zion3.jpg"), filename: "zion3.jpg")
                zion.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/zion4.jpg"), filename: "zion4.jpg")
                zion.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/zion5.jpg"), filename: "zion5.jpg")

                # zion.photos.attach(io: File.open("./app/assets/images/zion/zion1.jpg"), filename: "zion1.jpg")
                # zion.photos.attach(io: File.open("./app/assets/images/zion/zion2.jpg"), filename: "zion3.jpg")
                # zion.photos.attach(io: File.open("./app/assets/images/zion/zion3.jpg"), filename: "zion4.jpg")
                # zion.photos.attach(io: File.open("./app/assets/images/zion/zion4.jpg"), filename: "zion5.jpg")
                # zion.photos.attach(io: File.open("./app/assets/images/zion/zion5.jpg"), filename: "zion6.jpg")

                
crater_lake = Listing.create!({title: "Crater Lake", host_id: national_park_service.id, description: "Explore the beatuty that is Crater Lake National Park in the Cascade Mountains of southern Oregon. It’s known for its namesake Crater Lake, formed by the now-collapsed volcano, Mount Mazama.", 
                address: "Crater Lake National Park", long: -122.1685, lat: 42.8684, price_daily: 100, is_glamping: false, 
                pet_friendly: false, is_toilets: true, max_capacity: 8, has_showers: false, checkin_after: "10 AM", 
                checkout_before: "4 PM"})

                crater_lake.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/crater_lake1.jpg"), filename: "crater_lake1.jpg")
                crater_lake.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/crater_lake2.jpg"), filename: "crater_lake2.jpg")
                crater_lake.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/crater_lake3.jpg"), filename: "crater_lake3.jpg")
                crater_lake.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/crater_lake4.jpg"), filename: "crater_lake4.jpg")
                crater_lake.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/crater_lake5.jpg"), filename: "crater_lake5.jpg")

                # crater_lake.photos.attach(io: File.open("./app/assets/images/crater_lake/crater_lake1.jpg"), filename: "crater_lake1.jpg")
                # crater_lake.photos.attach(io: File.open("./app/assets/images/crater_lake/crater_lake2.jpg"), filename: "crater_lake2.jpg")
                # crater_lake.photos.attach(io: File.open("./app/assets/images/crater_lake/crater_lake3.jpg"), filename: "crater_lake3.jpg")
                # crater_lake.photos.attach(io: File.open("./app/assets/images/crater_lake/crater_lake4.jpg"), filename: "crater_lake4.jpg")
                # crater_lake.photos.attach(io: File.open("./app/assets/images/crater_lake/crater_lake5.jpg"), filename: "crater_lake5.jpg")


grand_canyon = Listing.create!({title: "Grand Canyon", host_id: national_park_service.id, description: "Come explore the vast canyon carved out by the Colorado River. The Grand Canyon is the most spectacular gorge in the world. Located in the state of Arizona, it cuts across the Grand Canyon National Park.", 
                address: "Grand Canyon National Park", long: -112.112999, lat: 36.106964, price_daily: 50, is_glamping: false, 
                pet_friendly: true, is_toilets: true, max_capacity: 15, has_showers: false, checkin_after: "11 AM", 
                checkout_before: "4 PM"})

                grand_canyon.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/grand_canyon1.jpg"), filename: "grand_canyon1.jpg")
                grand_canyon.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/grand_canyon2.jpg"), filename: "grand_canyon2.jpg")
                grand_canyon.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/grand_canyon3.jpg"), filename: "grand_canyon3.jpg")
                grand_canyon.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/grand_canyon4.jpg"), filename: "grand_canyon4.jpg")
                grand_canyon.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/grand_canyon5.jpg"), filename: "grand_canyon5.jpg")

                # grand_canyon.photos.attach(io: File.open("./app/assets/images/grand_canyon/grand_canyon1.jpg"), filename: "grand_canyon1.jpg")
                # grand_canyon.photos.attach(io: File.open("./app/assets/images/grand_canyon/grand_canyon2.jpg"), filename: "grand_canyon2.jpg")
                # grand_canyon.photos.attach(io: File.open("./app/assets/images/grand_canyon/grand_canyon3.jpg"), filename: "grand_canyon3.jpg")
                # grand_canyon.photos.attach(io: File.open("./app/assets/images/grand_canyon/grand_canyon4.jpg"), filename: "grand_canyon4.jpg")
                # grand_canyon.photos.attach(io: File.open("./app/assets/images/grand_canyon/grand_canyon5.jpg"), filename: "grand_canyon5.jpg")


redwoods = Listing.create!({title: "Redwoods", host_id: smokey.id, description: "Come experience a true exhibit of scale and perspective when viewing the vast redwoods that this California State Park has to offer.", 
                address: "Redwoods National Park", long: -124.0046275, lat: 41.2131788, price_daily: 75, is_glamping: false, 
                pet_friendly: true, is_toilets: true, max_capacity: 8, has_showers: true, checkin_after: "9 AM", 
                checkout_before: "2 PM"})
 
                redwoods.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/redwood1.jpg"), filename: "redwood1.jpg")
                redwoods.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/redwood2.jpg"), filename: "redwood2.jpg")
                redwoods.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/redwood3.jpg"), filename: "redwood3.jpg")
                redwoods.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/redwood4.jpg"), filename: "redwood4.jpg")
                redwoods.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/redwood5.jpg"), filename: "redwood5.jpg")

                # redwoods.photos.attach(io: File.open("./app/assets/images/redwood/redwood1.jpg"), filename: "redwood1.jpg")
                # redwoods.photos.attach(io: File.open("./app/assets/images/redwood/redwood2.jpg"), filename: "redwood2.jpg")
                # redwoods.photos.attach(io: File.open("./app/assets/images/redwood/redwood3.jpg"), filename: "redwood3.jpg")
                # redwoods.photos.attach(io: File.open("./app/assets/images/redwood/redwood4.jpg"), filename: "redwood4.jpg")
                # redwoods.photos.attach(io: File.open("./app/assets/images/redwood/redwood5.jpg"), filename: "redwood5.jpg")


aspen = Listing.create!({title: "Maroon Bells", host_id: rob.id, description: "Situated five miles southwest of downtown Aspen up Maroon Creek Road, the Maroon Bells is not just a bucket-list photo opportunity, it’s also an incredible place to car camp, 
                with excellent hiking and views that will spoil you forever. With three main camping areas, Silver Bar, Silver Bell, and Silver Queen, and 12 total campsites, the Maroon Bells camping season lasts from late May to late September.", 
                address: "Aspen, CO", long: -106.988992, lat: 39.070849, price_daily: 75, is_glamping: true, 
                pet_friendly: true, is_toilets: true, max_capacity: 20, has_showers: true, checkin_after: "10 AM", 
                checkout_before: "2 PM"})

                aspen.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/aspen1.jpg"), filename: "aspen1.jpg")
                aspen.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/aspen1.jpg"), filename: "aspen2.jpg")
                aspen.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/aspen1.jpg"), filename: "aspen3.jpg")
                aspen.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/aspen1.jpg"), filename: "aspen4.jpg")
                aspen.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/aspen1.jpg"), filename: "aspen5.jpg")


                # aspen.photos.attach(io: File.open("./app/assets/images/aspen/aspen1.jpg"), filename: "aspen1.jpg")
                # aspen.photos.attach(io: File.open("./app/assets/images/aspen/aspen2.jpg"), filename: "aspen2.jpg")
                # aspen.photos.attach(io: File.open("./app/assets/images/aspen/aspen3.jpg"), filename: "aspen3.jpg")
                # aspen.photos.attach(io: File.open("./app/assets/images/aspen/aspen4.jpg"), filename: "aspen4.jpg")
                # aspen.photos.attach(io: File.open("./app/assets/images/aspen/aspen5.jpg"), filename: "aspen5.jpg")


jackson = Listing.create!({title: "Crystal Creek Campground", host_id: smokey.id, description: "Crystal Creek Campground is located along the Gros Ventre River and Crystal Creek, both designated Wild and Scenic Rivers for the spectacular surrounding scenery and excellent fishing opportunities. This is a small and peaceful campground that has several nearby options for hiking, biking and OHV riding.", 
                address: "Crystal Creek Campground", long: -110.431422, lat: 43.610451, price_daily: 75, is_glamping: false, 
                pet_friendly: true, is_toilets: true, max_capacity: 8, has_showers: true, checkin_after: "9 AM", 
                checkout_before: "2 PM"})

                jackson.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/jackson1.jpg"), filename: "jackson1.jpg")
                jackson.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/jackson2.jpg"), filename: "jackson2.jpg")
                jackson.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/jackson3.jpg"), filename: "jackson3.jpg")

                # jackson.photos.attach(io: File.open("./app/assets/images/jackson/jackson1.jpg"), filename: "jackson1.jpg")
                # jackson.photos.attach(io: File.open("./app/assets/images/jackson/jackson2.jpg"), filename: "jackson2.jpg")
                # jackson.photos.attach(io: File.open("./app/assets/images/jackson/jackson3.jpg"), filename: "jackson3.jpg")=
               

burney = Listing.create!({title: "MacArthur Burney Falls", host_id: national_park_service.id, description: "McArthur–Burney Falls Memorial State Park is the second oldest state park in the California State Parks system, located approximately 6 miles (9.7 km) north of Burney, California. The park offers camping, fishing, watersports, hiking and horseback riding facilities", 
                address: "MacArthur Burney Falls", long: -121.6513761, lat: 41.0149, price_daily: 75, is_glamping: false, 
                pet_friendly: false, is_toilets: true, max_capacity: 10, has_showers: true, checkin_after: "9 AM", 
                checkout_before: "2 PM"})

                burney.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/burney1.jpg"), filename: "burney1.jpg")
                burney.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/burney2.jpg"), filename: "burney2.jpg")
                burney.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/burney3.jpg"), filename: "burney3.jpg")
                burney.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/burney4.jpg"), filename: "burney4.jpg")
                
                # burney.photos.attach(io: File.open("./app/assets/images/burney/burney1.jpg"), filename: "burney1.jpg")
                # burney.photos.attach(io: File.open("./app/assets/images/burney/burney2.jpg"), filename: "burney2.jpg")
                # burney.photos.attach(io: File.open("./app/assets/images/burney/burney3.jpg"), filename: "burney3.jpg")
                # burney.photos.attach(io: File.open("./app/assets/images/burney/burney4.jpg"), filename: "burney4.jpg")


mountain = Listing.create!({title: "San Diego mountainside tent", host_id: ranger_rick.id, description: "A single camp spot on the top of a mountain surrounded by 160 acres of no one else! 4WD/AWD road to camp spot. Plenty of shade at spot with picnic area that is covered. Drinking water, sink and outdoor cold water shower. Bouldering (climbing), fire pit (seasonal), covered deck, hiking and VIEWS! ", 
            address: "Whiteside Mountain Resort", long: -116.750972, lat: 32.861333, price_daily: 75, is_glamping: true, 
            pet_friendly: false, is_toilets: true, max_capacity: 10, has_showers: true, checkin_after: "9 AM", 
            checkout_before: "2 PM"})


            mountain.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/mountain1.jpg"), filename: "mountain1.jpg")
            mountain.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/mountain2.jpg"), filename: "mountain2.jpg")
            mountain.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/mountain3.jpg"), filename: "mountain3.jpg")
            mountain.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/mountain4.jpg"), filename: "mountain4.jpg")



yellow = Listing.create!({title: "Yellowstone National Park", host_id: national_park_service.id, description: "Yellowstone features dramatic canyons, alpine rivers, lush forests, hot springs and gushing geysers, including its most famous, Old Faithful. It's also home to hundreds of animal species, including bears, wolves, bison, elk and antelope.", 
            address: "Yellowstone Nat. Park", long: -110.584389, lat: 44.427284, price_daily: 20, is_glamping: false, 
            pet_friendly: true, is_toilets: true, max_capacity: 10, has_showers: true, checkin_after: "10 AM", 
            checkout_before: "3 PM"})

            yellow.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yellow1.jpg"), filename: "yellow1.jpg")
            yellow.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yellow2.jpg"), filename: "yellow2.jpg")
            yellow.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yellow3.jpg"), filename: "yellow3.jpg")
            yellow.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/yellow4.jpg"), filename: "yellow4.jpg")

        
malibu = Listing.create!({title: "Malibu Creek State Park", host_id: ranger_rick.id, description: "Malibu Creek State Park is a state park of California, United States, preserving the Malibu Creek canyon in the Santa Monica Mountains. The 8,215-acre park was established in 1974. Opened to the public in 1976, the park is also a component of Santa Monica Mountains National Recreation Area.", 
            address: "Malibu Creek State Park", long: -118.731316, lat: 34.105156, price_daily: 35, is_glamping: true, 
            pet_friendly: true, is_toilets: true, max_capacity: 25, has_showers: true, checkin_after: "10 AM", 
            checkout_before: "3 PM"})
            
            malibu.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/malibu1.jpg"), filename: "malibu1.jpg")
            malibu.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/malibu2.jpg"), filename: "malibu2.jpg")
            malibu.photos.attach(open("https://s3-us-west-1.amazonaws.com/campout-prod/malibu3.jpg"), filename: "malibu3.jpg")




#Booking Seeds
booking1 = Booking.create!({guest_id: smokey.id, listing_id: yos.id, check_in: Date.new(2018, 8, 14), check_out: Date.new(2018, 8, 20), total_price: 600, total_guests: 10})
booking2 = Booking.create!({guest_id: smokey.id, listing_id: redwoods.id, check_in: Date.new(2018, 8, 14), check_out: Date.new(2018, 8, 16), total_price: 200, total_guests: 10})
booking3 = Booking.create!({guest_id: smokey.id, listing_id: zion.id, check_in: Date.new(2018, 8, 20), check_out: Date.new(2018, 8, 30), total_price: 200, total_guests: 10})
booking4 = Booking.create!({guest_id: smokey.id, listing_id: big_sur.id, check_in: Date.new(2018, 11, 20), check_out: Date.new(2018, 8, 30), total_price: 200, total_guests: 5})
booking5 = Booking.create!({guest_id: smokey.id, listing_id: burney.id, check_in: Date.new(2018, 1, 20), check_out: Date.new(2019, 2, 20), total_price: 200, total_guests: 5})
booking6 = Booking.create!({guest_id: smokey.id, listing_id: big_sur.id, check_in: Date.new(2019, 1, 20), check_out: Date.new(2019, 8, 30), total_price: 200, total_guests: 5})