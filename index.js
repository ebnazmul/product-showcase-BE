require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const Product = require('./productModel')

// middlewires
app.use(cors())
app.use(express.json())


const data = [
    {
        "productName": "Wireless Bluetooth Headphones",
        "productImage": "https://example.com/images/headphones.jpg",
        "description": "High-quality wireless Bluetooth headphones with noise-cancellation and long battery life.",
        "price": 99.99,
        "category": "Electronics",
        "ratings": 4.5,
        "createdAt": "2024-08-15T08:30:00Z"
    },
    {
        "productName": "Smart LED TV 55 inch",
        "productImage": "https://example.com/images/tv.jpg",
        "description": "55-inch 4K UHD Smart LED TV with built-in apps and voice control.",
        "price": 499.99,
        "category": "Electronics",
        "ratings": 4.7,
        "createdAt": "2024-08-10T10:45:00Z"
    },
    {
        "productName": "Ergonomic Office Chair",
        "productImage": "https://example.com/images/chair.jpg",
        "description": "Comfortable and adjustable ergonomic office chair with lumbar support.",
        "price": 149.99,
        "category": "Furniture",
        "ratings": 4.3,
        "createdAt": "2024-08-12T14:20:00Z"
    },
    {
        "productName": "Stainless Steel Water Bottle",
        "productImage": "https://example.com/images/waterbottle.jpg",
        "description": "Durable stainless steel water bottle with vacuum insulation to keep drinks cold or hot.",
        "price": 19.99,
        "category": "Outdoor",
        "ratings": 4.8,
        "createdAt": "2024-08-14T09:10:00Z"
    },
    {
        "productName": "Gaming Laptop 16GB RAM",
        "productImage": "https://example.com/images/laptop.jpg",
        "description": "Powerful gaming laptop with 16GB RAM, NVIDIA graphics, and 1TB SSD.",
        "price": 1199.99,
        "category": "Computers",
        "ratings": 4.9,
        "createdAt": "2024-08-11T16:00:00Z"
    },
    {
        "productName": "Running Shoes",
        "productImage": "https://example.com/images/shoes.jpg",
        "description": "Lightweight and breathable running shoes for daily training and marathons.",
        "price": 74.99,
        "category": "Footwear",
        "ratings": 4.2,
        "createdAt": "2024-08-09T13:30:00Z"
    },
    {
        "productName": "Smartphone 128GB",
        "productImage": "https://example.com/images/smartphone.jpg",
        "description": "Latest smartphone with 128GB storage, dual camera, and long battery life.",
        "price": 699.99,
        "category": "Electronics",
        "ratings": 4.6,
        "createdAt": "2024-08-13T11:45:00Z"
    },
    {
        "productName": "Wireless Keyboard and Mouse Combo",
        "productImage": "https://example.com/images/keyboard.jpg",
        "description": "Sleek and comfortable wireless keyboard and mouse combo with long battery life.",
        "price": 39.99,
        "category": "Accessories",
        "ratings": 4.1,
        "createdAt": "2024-08-08T08:00:00Z"
    },
    {
        "productName": "Electric Kettle",
        "productImage": "https://example.com/images/kettle.jpg",
        "description": "Fast-boiling electric kettle with auto shut-off and stainless steel body.",
        "price": 29.99,
        "category": "Home Appliances",
        "ratings": 4.7,
        "createdAt": "2024-08-07T07:30:00Z"
    },
    {
        "productName": "Yoga Mat",
        "productImage": "https://example.com/images/yogamat.jpg",
        "description": "Non-slip yoga mat with extra cushioning for comfort during workouts.",
        "price": 24.99,
        "category": "Fitness",
        "ratings": 4.4,
        "createdAt": "2024-08-06T12:00:00Z"
    },
    {
        "productName": "Smartwatch",
        "productImage": "https://example.com/images/smartwatch.jpg",
        "description": "Stylish smartwatch with fitness tracking, heart rate monitor, and GPS.",
        "price": 199.99,
        "category": "Electronics",
        "ratings": 4.6,
        "createdAt": "2024-08-05T09:20:00Z"
    },
    {
        "productName": "Bluetooth Speaker",
        "productImage": "https://example.com/images/speaker.jpg",
        "description": "Portable Bluetooth speaker with deep bass, waterproof design, and long battery life.",
        "price": 59.99,
        "category": "Electronics",
        "ratings": 4.8,
        "createdAt": "2024-08-04T15:45:00Z"
    },
    {
        "productName": "Leather Wallet",
        "productImage": "https://example.com/images/wallet.jpg",
        "description": "Genuine leather wallet with multiple card slots and a slim design.",
        "price": 34.99,
        "category": "Accessories",
        "ratings": 4.2,
        "createdAt": "2024-08-03T11:15:00Z"
    },
    {
        "productName": "Microwave Oven",
        "productImage": "https://example.com/images/microwave.jpg",
        "description": "Compact microwave oven with multiple cooking modes and easy-to-clean interior.",
        "price": 89.99,
        "category": "Home Appliances",
        "ratings": 4.4,
        "createdAt": "2024-08-02T10:25:00Z"
    },
    {
        "productName": "Digital Camera",
        "productImage": "https://example.com/images/camera.jpg",
        "description": "High-resolution digital camera with optical zoom and Wi-Fi connectivity.",
        "price": 299.99,
        "category": "Photography",
        "ratings": 4.7,
        "createdAt": "2024-08-01T12:50:00Z"
    },
    {
        "productName": "Electric Toothbrush",
        "productImage": "https://example.com/images/toothbrush.jpg",
        "description": "Electric toothbrush with multiple brushing modes and a long-lasting battery.",
        "price": 49.99,
        "category": "Personal Care",
        "ratings": 4.5,
        "createdAt": "2024-07-31T08:40:00Z"
    },
    {
        "productName": "Travel Backpack",
        "productImage": "https://example.com/images/backpack.jpg",
        "description": "Durable and spacious travel backpack with multiple compartments and water-resistant fabric.",
        "price": 69.99,
        "category": "Outdoor",
        "ratings": 4.3,
        "createdAt": "2024-07-30T14:30:00Z"
    },
    {
        "productName": "Smart Thermostat",
        "productImage": "https://example.com/images/thermostat.jpg",
        "description": "Smart thermostat with remote control, energy-saving features, and easy installation.",
        "price": 179.99,
        "category": "Home Automation",
        "ratings": 4.6,
        "createdAt": "2024-07-29T10:50:00Z"
    },
    {
        "productName": "Fitness Tracker",
        "productImage": "https://example.com/images/fitnesstracker.jpg",
        "description": "Lightweight fitness tracker with heart rate monitor, sleep tracking, and waterproof design.",
        "price": 79.99,
        "category": "Fitness",
        "ratings": 4.7,
        "createdAt": "2024-07-28T12:20:00Z"
    },
    {
        "productName": "Electric Scooter",
        "productImage": "https://example.com/images/scooter.jpg",
        "description": "Electric scooter with long-range battery, foldable design, and LED lights.",
        "price": 399.99,
        "category": "Transportation",
        "ratings": 4.8,
        "createdAt": "2024-07-27T15:00:00Z"
    },
    {
        "productName": "Portable Power Bank 10000mAh",
        "productImage": "https://example.com/images/powerbank.jpg",
        "description": "Compact portable power bank with 10000mAh capacity and dual USB ports.",
        "price": 24.99,
        "category": "Electronics",
        "ratings": 4.4,
        "createdAt": "2024-07-25T09:10:00Z"
    },
    {
        "productName": "4K Action Camera",
        "productImage": "https://example.com/images/actioncamera.jpg",
        "description": "Waterproof 4K action camera with wide-angle lens and Wi-Fi connectivity.",
        "price": 149.99,
        "category": "Photography",
        "ratings": 4.6,
        "createdAt": "2024-07-24T12:45:00Z"
    },
    {
        "productName": "Espresso Coffee Maker",
        "productImage": "https://example.com/images/coffeemaker.jpg",
        "description": "Automatic espresso coffee maker with milk frother and multiple brew settings.",
        "price": 199.99,
        "category": "Home Appliances",
        "ratings": 4.7,
        "createdAt": "2024-07-23T11:15:00Z"
    },
    {
        "productName": "Noise-Cancelling Headphones",
        "productImage": "https://example.com/images/noisecancellingheadphones.jpg",
        "description": "Over-ear noise-cancelling headphones with superior sound quality and long battery life.",
        "price": 179.99,
        "category": "Electronics",
        "ratings": 4.8,
        "createdAt": "2024-07-22T13:20:00Z"
    },
    {
        "productName": "Adjustable Dumbbell Set",
        "productImage": "https://example.com/images/dumbbells.jpg",
        "description": "Adjustable dumbbell set with various weight options and compact storage.",
        "price": 89.99,
        "category": "Fitness",
        "ratings": 4.5,
        "createdAt": "2024-07-21T15:30:00Z"
    },
    {
        "productName": "Smart Doorbell",
        "productImage": "https://example.com/images/doorbell.jpg",
        "description": "Smart doorbell with video camera, two-way audio, and motion detection.",
        "price": 129.99,
        "category": "Home Automation",
        "ratings": 4.6,
        "createdAt": "2024-07-20T10:00:00Z"
    },
    {
        "productName": "Wireless Charging Pad",
        "productImage": "https://example.com/images/chargingpad.jpg",
        "description": "Fast wireless charging pad compatible with multiple devices.",
        "price": 39.99,
        "category": "Accessories",
        "ratings": 4.3,
        "createdAt": "2024-07-19T08:40:00Z"
    },
    {
        "productName": "Electric Hair Clipper",
        "productImage": "https://example.com/images/hairclipper.jpg",
        "description": "Professional-grade electric hair clipper with adjustable blades and cordless operation.",
        "price": 59.99,
        "category": "Personal Care",
        "ratings": 4.4,
        "createdAt": "2024-07-18T14:10:00Z"
    },
    {
        "productName": "Camping Tent for 4 Persons",
        "productImage": "https://example.com/images/campingtent.jpg",
        "description": "Waterproof camping tent with easy setup and spacious interior for 4 people.",
        "price": 129.99,
        "category": "Outdoor",
        "ratings": 4.6,
        "createdAt": "2024-07-17T12:30:00Z"
    },
    {
        "productName": "Electric Pressure Cooker",
        "productImage": "https://example.com/images/pressurecooker.jpg",
        "description": "Electric pressure cooker with multiple cooking functions and easy-to-use controls.",
        "price": 99.99,
        "category": "Home Appliances",
        "ratings": 4.5,
        "createdAt": "2024-07-16T11:50:00Z"
    },
    {
        "productName": "Smart Light Bulb",
        "productImage": "https://example.com/images/lightbulb.jpg",
        "description": "Smart LED light bulb with remote control and color-changing capabilities.",
        "price": 24.99,
        "category": "Home Automation",
        "ratings": 4.4,
        "createdAt": "2024-07-15T13:00:00Z"
    },
    {
        "productName": "Wireless Gaming Mouse",
        "productImage": "https://example.com/images/gamingmouse.jpg",
        "description": "High-precision wireless gaming mouse with customizable buttons and RGB lighting.",
        "price": 59.99,
        "category": "Computers",
        "ratings": 4.7,
        "createdAt": "2024-07-14T14:25:00Z"
    },
    {
        "productName": "Waterproof Bluetooth Speaker",
        "productImage": "https://example.com/images/waterproofspeaker.jpg",
        "description": "Portable waterproof Bluetooth speaker with 360-degree sound and long battery life.",
        "price": 79.99,
        "category": "Electronics",
        "ratings": 4.8,
        "createdAt": "2024-07-13T09:40:00Z"
    },
    {
        "productName": "Air Purifier with HEPA Filter",
        "productImage": "https://example.com/images/airpurifier.jpg",
        "description": "Compact air purifier with HEPA filter for removing allergens and pollutants.",
        "price": 129.99,
        "category": "Home Appliances",
        "ratings": 4.5,
        "createdAt": "2024-07-12T16:00:00Z"
    },
    {
        "productName": "Smart Fitness Scale",
        "productImage": "https://example.com/images/fitnessscale.jpg",
        "description": "Smart fitness scale with body composition analysis and app connectivity.",
        "price": 49.99,
        "category": "Fitness",
        "ratings": 4.6,
        "createdAt": "2024-07-11T12:15:00Z"
    },
    {
        "productName": "Electric Rice Cooker",
        "productImage": "https://example.com/images/ricecooker.jpg",
        "description": "Electric rice cooker with multiple cooking functions and non-stick inner pot.",
        "price": 39.99,
        "category": "Home Appliances",
        "ratings": 4.3,
        "createdAt": "2024-07-10T08:20:00Z"
    },
    {
        "productName": "Wireless Home Security Camera",
        "productImage": "https://example.com/images/securitycamera.jpg",
        "description": "Wireless home security camera with night vision, motion detection, and two-way audio.",
        "price": 99.99,
        "category": "Home Automation",
        "ratings": 4.6,
        "createdAt": "2024-07-09T13:45:00Z"
    },
    {
        "productName": "Stainless Steel Cookware Set",
        "productImage": "https://example.com/images/cookwareset.jpg",
        "description": "10-piece stainless steel cookware set with heat-resistant handles and non-stick surface.",
        "price": 149.99,
        "category": "Home Appliances",
        "ratings": 4.7,
        "createdAt": "2024-07-08T15:20:00Z"
    },
    {
        "productName": "Smart Water Bottle",
        "productImage": "https://example.com/images/smartwaterbottle.jpg",
        "description": "Smart water bottle with hydration tracking, temperature display, and Bluetooth connectivity.",
        "price": 59.99,
        "category": "Outdoor",
        "ratings": 4.5,
        "createdAt": "2024-07-07T10:30:00Z"
    },
    {
        "productName": "Portable Projector",
        "productImage": "https://example.com/images/projector.jpg",
        "description": "Compact portable projector with HD resolution and wireless connectivity.",
        "price": 199.99,
        "category": "Electronics",
        "ratings": 4.7,
        "createdAt": "2024-07-06T14:50:00Z"
    }
]

mongoose.connect(process.env.URI).then(() => console.log("Connected to DB!"))


// app.get('/', async(req, res)=>{
//     await Product.insertMany(data).catch(err=>console.log(err))
//     res.send("Hello")
// })

app.get('/products', async (req, res) => {
    try {
        const {search, page = 1, category, sort} = req.query;

        let query = Product.find({})

        if(search){
            query = query.find({ productName: {$regex: search, $options: "i"} })
        }

        if(sort){
            console.log(sort);
            const newSort = sort.split(",").join(" ")
            query = query.sort(newSort)
        }


        const estProducts = await query.clone().countDocuments()

        query = query.skip((page -1) * 12).limit(12)

        const result = await query.limit(12).select("-__v")
        
        res.send({
            totalDocCount: estProducts,
            data: result
        })


    } catch (error) {

        console.log(error);

    }
})


app.listen(port, () => {
    console.log("running at", port);
})
