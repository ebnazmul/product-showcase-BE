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
// db
mongoose.connect(process.env.URI).then(() => console.log("Connected to DB!"))


// const newData = [
//     {
//         "productName": "MacBook Air M2",
//         "productImage": "https://adminapi.applegadgetsbd.com/storage/media/large/MacBook-Air-M2-Midnight-8137.jpg",
//         "description": "13-inch MacBook Air with M2 chip, 8GB RAM, and 256GB SSD.",
//         "price": 999.99,
//         "category": "Laptops",
//         "brandName": "Apple",
//         "ratings": 4.8,
//         "createdAt": "2024-07-15T08:00:00Z"
//     },
//     {
//         "productName": "Dell XPS 13",
//         "productImage": "https://computermania-bd.b-cdn.net/wp-content/uploads/Dell-XPS-13-Plus-BD-Price-1.jpg",
//         "description": "13-inch Dell XPS with Intel i7, 16GB RAM, and 512GB SSD.",
//         "price": 1299.99,
//         "category": "Laptops",
//         "brandName": "Dell",
//         "ratings": 4.7,
//         "createdAt": "2024-07-16T09:30:00Z"
//     },
//     {
//         "productName": "Lenovo ThinkPad X1 Carbon",
//         "productImage": "https://mcsolution.com.bd/wp-content/uploads/2022/03/Lenovo-ThinkPad-X1-Carbon-Gen-9-MC-Solution-BD-1200x900.webp",
//         "description": "14-inch Lenovo ThinkPad with Intel i7, 16GB RAM, and 1TB SSD.",
//         "price": 1499.99,
//         "category": "Laptops",
//         "brandName": "Lenovo",
//         "ratings": 4.9,
//         "createdAt": "2024-07-17T10:15:00Z"
//     },
//     {
//         "productName": "HP Spectre x360",
//         "productImage": "https://computermania-bd.b-cdn.net/wp-content/uploads/HP-Spectre-x360-15-Price-in-BD.jpg",
//         "description": "13-inch HP Spectre with Intel i5, 8GB RAM, and 256GB SSD.",
//         "price": 1099.99,
//         "category": "Laptops",
//         "brandName": "HP",
//         "ratings": 4.6,
//         "createdAt": "2024-07-18T11:00:00Z"
//     },
//     {
//         "productName": "Microsoft Surface Laptop 4",
//         "productImage": "https://computermania-bd.b-cdn.net/wp-content/uploads/Surface-Laptop-4-Price-in-BD-3-600x450.jpg",
//         "description": "13.5-inch Surface Laptop with AMD Ryzen 5, 8GB RAM, and 256GB SSD.",
//         "price": 999.99,
//         "category": "Laptops",
//         "brandName": "Microsoft",
//         "ratings": 4.5,
//         "createdAt": "2024-07-19T12:45:00Z"
//     },
//     {
//         "productName": "Asus ZenBook 14",
//         "productImage": "https://computermania-bd.b-cdn.net/wp-content/uploads/Asus-13.jpg",
//         "description": "14-inch Asus ZenBook with AMD Ryzen 7, 16GB RAM, and 512GB SSD.",
//         "price": 1199.99,
//         "category": "Laptops",
//         "brandName": "Asus",
//         "ratings": 4.7,
//         "createdAt": "2024-07-20T13:30:00Z"
//     },
//     {
//         "productName": "Acer Swift 3",
//         "productImage": "https://ryans.com/storage/products/main/acer-swift-3-sf314-42-amd-ryzen-5-4500u-21604137233.webp",
//         "description": "14-inch Acer Swift with Intel i5, 8GB RAM, and 512GB SSD.",
//         "price": 849.99,
//         "category": "Laptops",
//         "brandName": "Acer",
//         "ratings": 4.4,
//         "createdAt": "2024-07-21T14:00:00Z"
//     },
//     {
//         "productName": "Razer Blade Stealth 13",
//         "productImage": "https://www.custommacbd.com/cdn/shop/products/razer-blade-stealth-13-rz09-03272e82-r341-133-fhd-gaming-laptop-i7-1165g7-16gb-512gb-ssdgtx1650ti-4gb-w10-_2.png?v=1613635005",
//         "description": "13-inch Razer Blade Stealth with Intel i7, 16GB RAM, and 512GB SSD.",
//         "price": 1799.99,
//         "category": "Laptops",
//         "brandName": "Razer",
//         "ratings": 4.8,
//         "createdAt": "2024-07-22T15:15:00Z"
//     },
//     {
//         "productName": "Google Pixelbook Go",
//         "productImage": "https://m.media-amazon.com/images/I/81sDDc7rKqL.jpg",
//         "description": "13.3-inch Pixelbook Go with Intel i5, 8GB RAM, and 128GB SSD.",
//         "price": 649.99,
//         "category": "Laptops",
//         "brandName": "Google",
//         "ratings": 4.3,
//         "createdAt": "2024-07-23T16:00:00Z"
//     },
//     {
//         "productName": "Samsung Galaxy Book Pro",
//         "productImage": "https://images.samsung.com/is/image/samsung/assets/uk/galaxy-book/buy/02_image-carousel/product-kv/book-pro-360/GalaxyBook_Pro360_Navy_ProductKV_Dynamic_MO_img.jpg?imbypass=true",
//         "description": "13.3-inch Galaxy Book Pro with Intel i5, 8GB RAM, and 256GB SSD.",
//         "price": 999.99,
//         "category": "Laptops",
//         "brandName": "Samsung",
//         "ratings": 4.6,
//         "createdAt": "2024-07-24T17:00:00Z"
//     },
//     {
//         "productName": "iPhone 14 Pro",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_mOrgdq2iyXBxy9rniyPDxA8Fbgozo17n-Q&s",
//         "description": "6.1-inch iPhone 14 Pro with A16 Bionic chip, 128GB storage.",
//         "price": 999.99,
//         "category": "Mobile Phones",
//         "brandName": "Apple",
//         "ratings": 4.9,
//         "createdAt": "2024-07-15T08:00:00Z"
//     },
//     {
//         "productName": "Samsung Galaxy S23 Ultra",
//         "productImage": "https://cdn.dxomark.com/wp-content/uploads/medias/post-139011/Samsung-Galaxy-S23-Ultra_-featured-image-packshot-review-1024x691.jpg",
//         "description": "6.8-inch Samsung Galaxy S23 Ultra with Snapdragon 8 Gen 2, 256GB storage.",
//         "price": 1199.99,
//         "category": "Mobile Phones",
//         "brandName": "Samsung",
//         "ratings": 4.8,
//         "createdAt": "2024-07-16T09:30:00Z"
//     },
//     {
//         "productName": "Google Pixel 7 Pro",
//         "productImage": "https://cdn.dxomark.com/wp-content/uploads/medias/post-126764/Google-Pixel-7-Pro_featured-image-packshot-review.jpg",
//         "description": "6.7-inch Google Pixel 7 Pro with Google Tensor G2, 128GB storage.",
//         "price": 899.99,
//         "category": "Mobile Phones",
//         "brandName": "Google",
//         "ratings": 4.7,
//         "createdAt": "2024-07-17T10:15:00Z"
//     },
//     {
//         "productName": "OnePlus 11",
//         "productImage": "https://oasis.opstatics.com/content/dam/oasis/page/2023/global/home/salami-share.jpg",
//         "description": "6.55-inch OnePlus 11 with Snapdragon 8 Gen 2, 128GB storage.",
//         "price": 799.99,
//         "category": "Mobile Phones",
//         "brandName": "OnePlus",
//         "ratings": 4.6,
//         "createdAt": "2024-07-18T11:00:00Z"
//     },
//     {
//         "productName": "Xiaomi Mi 13 Pro",
//         "productImage": "https://i02.appmifile.com/mi-com-product/fly-birds/m/xiaomi-13-pro/9037ae0a41f4a46506b64dd64afed775.jpg",
//         "description": "6.73-inch Xiaomi Mi 13 Pro with Snapdragon 8 Gen 2, 256GB storage.",
//         "price": 999.99,
//         "category": "Mobile Phones",
//         "brandName": "Xiaomi",
//         "ratings": 4.7,
//         "createdAt": "2024-07-19T12:45:00Z"
//     },
//     {
//         "productName": "Sony Xperia 1 IV",
//         "productImage": "https://cdn.dxomark.com/wp-content/uploads/medias/post-126231/Sony-Xperia-1-IV_featured-image-packshot-review-1024x691.jpg",
//         "description": "6.5-inch Sony Xperia 1 IV with Snapdragon 8 Gen 1, 256GB storage.",
//         "price": 1299.99,
//         "category": "Mobile Phones",
//         "brandName": "Sony",
//         "ratings": 4.5,
//         "createdAt": "2024-07-20T13:30:00Z"
//     },
//     {
//         "productName": "Huawei P60 Pro",
//         "productImage": "https://cdn.dxomark.com/wp-content/uploads/medias/post-147160/Huawei-P60-Pro_featured-image-packshot-review-Recovered.jpg",
//         "description": "6.6-inch Huawei P60 Pro with Kirin 9000, 256GB storage.",
//         "price": 999.99,
//         "category": "Mobile Phones",
//         "brandName": "Huawei",
//         "ratings": 4.4,
//         "createdAt": "2024-07-21T14:00:00Z"
//     },
//     {
//         "productName": "Oppo Find X5 Pro",
//         "productImage": "https://cdn.dxomark.com/wp-content/uploads/medias/post-119684/Oppo-Find-X5-Pro-featured-image-packshot-review-Recovered-1.jpg",
//         "description": "6.7-inch Oppo Find X5 Pro with Snapdragon 8 Gen 1, 256GB storage.",
//         "price": 1099.99,
//         "category": "Mobile Phones",
//         "brandName": "Oppo",
//         "ratings": 4.6,
//         "createdAt": "2024-07-22T15:15:00Z"
//     },
//     {
//         "productName": "Realme GT 3",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-S8iYSdxI2PxPD_6BFm2KAGpFlOvqv-C5w&s",
//         "description": "6.43-inch Realme GT 3 with Snapdragon 870, 128GB storage.",
//         "price": 499.99,
//         "category": "Mobile Phones",
//         "brandName": "Realme",
//         "ratings": 4.3,
//         "createdAt": "2024-07-23T16:00:00Z"
//     },
//     {
//         "productName": "Vivo X90 Pro",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuX-743lhx8DZgOzB5Cgx6mjLE_QbrjeUjQ&s",
//         "description": "6.78-inch Vivo X90 Pro with Snapdragon 8 Gen 2, 256GB storage.",
//         "price": 1099.99,
//         "category": "Mobile Phones",
//         "brandName": "Vivo",
//         "ratings": 4.7,
//         "createdAt": "2024-07-24T17:00:00Z"
//     },

//     {
//         "productName": "Apple Watch Series 8",
//         "productImage": "https://img.etimg.com/thumb/width-420,height-315,imgsize-29322,resizemode-75,msid-92667788/magazines/panache/apple-watch-series-8-may-come-with-bigger-display-3-different-screen-sizes/apple-watch-series-8.jpg",
//         "description": "Apple Watch Series 8 with GPS, 44mm case, and midnight aluminum case.",
//         "price": 399.99,
//         "category": "Wearable Gadgets",
//         "brandName": "Apple",
//         "ratings": 4.8,
//         "createdAt": "2024-07-15T08:00:00Z"
//     },
//     {
//         "productName": "Samsung Galaxy Buds Pro 2",
//         "productImage": "https://images.samsung.com/is/image/samsung/assets/uk/galaxy-buds-two/galaxy-buds2-pro-kv-mo.jpg",
//         "description": "Samsung Galaxy Buds Pro 2 with active noise cancellation and wireless charging.",
//         "price": 199.99,
//         "category": "Audio Gadgets",
//         "brandName": "Samsung",
//         "ratings": 4.7,
//         "createdAt": "2024-07-16T09:30:00Z"
//     },
//     {
//         "productName": "Amazon Echo Dot (5th Gen)",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gjt40VvTKzRiC9wHuuEiNVnS0m5UhZ4wLA&s",
//         "description": "Amazon Echo Dot (5th Gen) smart speaker with Alexa, charcoal color.",
//         "price": 49.99,
//         "category": "Smart Home Gadgets",
//         "brandName": "Amazon",
//         "ratings": 4.6,
//         "createdAt": "2024-07-17T10:15:00Z"
//     },
//     {
//         "productName": "Fitbit Charge 6",
//         "productImage": "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/fitbitcharge6.jpg",
//         "description": "Fitbit Charge 6 fitness and health tracker with heart rate monitoring and GPS.",
//         "price": 149.99,
//         "category": "Wearable Gadgets",
//         "brandName": "Fitbit",
//         "ratings": 4.5,
//         "createdAt": "2024-07-18T11:00:00Z"
//     },
//     {
//         "productName": "Sony WH-1000XM5",
//         "productImage": "https://www.sony-asia.com/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
//         "description": "Sony WH-1000XM5 wireless noise-canceling headphones with 30-hour battery life.",
//         "price": 349.99,
//         "category": "Audio Gadgets",
//         "brandName": "Sony",
//         "ratings": 4.9,
//         "createdAt": "2024-07-19T12:45:00Z"
//     },
//     {
//         "productName": "DJI Mini 3 Pro",
//         "productImage": "https://media.dcrainmaker.com/images/2022/05/DJI-MIni3-Pro-SD-USB.jpg",
//         "description": "DJI Mini 3 Pro drone with 4K camera, 34-minute flight time, and obstacle sensing.",
//         "price": 749.99,
//         "category": "Drones",
//         "brandName": "DJI",
//         "ratings": 4.8,
//         "createdAt": "2024-07-20T13:30:00Z"
//     },
//     {
//         "productName": "GoPro HERO12 Black",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowWnj_xRyS2BsQRBG72NS3jzyeiVwvSi-pQ&s",
//         "description": "GoPro HERO12 Black waterproof action camera with 5.3K video and 23MP photos.",
//         "price": 499.99,
//         "category": "Cameras",
//         "brandName": "GoPro",
//         "ratings": 4.7,
//         "createdAt": "2024-07-21T14:00:00Z"
//     },
//     {
//         "productName": "Kindle Paperwhite 11th Gen",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zNtAHwfXlXOfqEBwU20yfTmxf3T-K-8OGQ&s",
//         "description": "Kindle Paperwhite 11th Gen e-reader with 6.8-inch display and 8GB storage.",
//         "price": 129.99,
//         "category": "E-Readers",
//         "brandName": "Amazon",
//         "ratings": 4.8,
//         "createdAt": "2024-07-22T15:15:00Z"
//     },
//     {
//         "productName": "Oculus Quest 3",
//         "productImage": "https://media.npr.org/assets/img/2023/10/09/01_hero-view_wide-ee8d9c8a7065e34024e854c5383b8818daa5e241.jpg?s=1100&c=50&f=jpeg",
//         "description": "Oculus Quest 3 VR headset with 128GB storage and 4K resolution.",
//         "price": 399.99,
//         "category": "Virtual Reality Gadgets",
//         "brandName": "Oculus",
//         "ratings": 4.9,
//         "createdAt": "2024-07-23T16:00:00Z"
//     },
//     {
//         "productName": "Tile Pro (2024)",
//         "productImage": "https://m.media-amazon.com/images/I/51XdMjYkzLL._AC_UF1000,1000_QL80_.jpg",
//         "description": "Tile Pro Bluetooth tracker with 400ft range and replaceable battery.",
//         "price": 34.99,
//         "category": "Tracking Gadgets",
//         "brandName": "Tile",
//         "ratings": 4.6,
//         "createdAt": "2024-07-24T17:00:00Z"
//     },

//     {
//         "productName": "MacBook Pro 16-inch M2 Max",
//         "productImage": "https://img.freepik.com/free-psd/laptop-mock-up-isolated_1310-1469.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717286400&semt=ais_user",
//         "description": "16-inch MacBook Pro with M2 Max chip, 32GB RAM, and 1TB SSD.",
//         "price": 3499.99,
//         "category": "Laptops",
//         "brandName": "Apple",
//         "ratings": 4.9,
//         "createdAt": "2024-07-25T08:00:00Z"
//     },
//     {
//         "productName": "Samsung Galaxy Z Fold 5",
//         "productImage": "https://beebom.com/wp-content/uploads/2023/07/Samsung-Galaxy-Z-Fold-5.jpg?w=750",
//         "description": "7.6-inch Samsung Galaxy Z Fold 5 with Snapdragon 8 Gen 2, 256GB storage.",
//         "price": 1799.99,
//         "category": "Mobile Phones",
//         "brandName": "Samsung",
//         "ratings": 4.7,
//         "createdAt": "2024-07-26T09:30:00Z"
//     },
//     {
//         "productName": "Apple AirPods Pro 3rd Gen",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-GVJtPGKm5OkD-L8fm8VVZapCnKFqs-vYQ&s",
//         "description": "Apple AirPods Pro (3rd Gen) with active noise cancellation and spatial audio.",
//         "price": 249.99,
//         "category": "Audio Gadgets",
//         "brandName": "Apple",
//         "ratings": 4.8,
//         "createdAt": "2024-07-27T10:15:00Z"
//     },
//     {
//         "productName": "Asus ROG Zephyrus G14",
//         "productImage": "https://assetsio.gnwcdn.com/asus-rog-zephyrus-g14-2022-(1).jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
//         "description": "14-inch Asus ROG Zephyrus G14 gaming laptop with AMD Ryzen 9, 16GB RAM, and 1TB SSD.",
//         "price": 1599.99,
//         "category": "Laptops",
//         "brandName": "Asus",
//         "ratings": 4.9,
//         "createdAt": "2024-07-28T11:00:00Z"
//     },
//     {
//         "productName": "Sony PlayStation 5",
//         "productImage": "https://assetsio.gnwcdn.com/playstation-5-review-digitalfoundry-1604678146723.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
//         "description": "Sony PlayStation 5 with 825GB SSD and 4K gaming support.",
//         "price": 499.99,
//         "category": "Gaming Consoles",
//         "brandName": "Sony",
//         "ratings": 4.9,
//         "createdAt": "2024-07-29T12:45:00Z"
//     },
//     {
//         "productName": "Microsoft Surface Pro 9",
//         "productImage": "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-side-render-of-Surface-Pro-9-with-5G-RE52G7p?wid=834&hei=470&fit=crop",
//         "description": "13-inch Microsoft Surface Pro 9 with Intel i7, 16GB RAM, and 512GB SSD.",
//         "price": 1299.99,
//         "category": "Tablets",
//         "brandName": "Microsoft",
//         "ratings": 4.7,
//         "createdAt": "2024-07-30T13:30:00Z"
//     },
//     {
//         "productName": "Bose QuietComfort Earbuds II",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZUwgj0ZzoUnfFXiAFJDpEp1n7DnKJmwMNQ&s",
//         "description": "Bose QuietComfort Earbuds II with noise cancellation and up to 6 hours of battery life.",
//         "price": 299.99,
//         "category": "Audio Gadgets",
//         "brandName": "Bose",
//         "ratings": 4.8,
//         "createdAt": "2024-07-31T14:00:00Z"
//     },
//     {
//         "productName": "Nintendo Switch OLED",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_GBaUeSINwz7xhoEugF5a8B_JFIuZr6AvBg&s",
//         "description": "Nintendo Switch OLED model with enhanced screen and 64GB storage.",
//         "price": 349.99,
//         "category": "Gaming Consoles",
//         "brandName": "Nintendo",
//         "ratings": 4.8,
//         "createdAt": "2024-08-01T15:15:00Z"
//     },
//     {
//         "productName": "Razer Blade 15 Advanced",
//         "productImage": "https://www.cnet.com/a/img/resize/993de627f997b61eca59f6a336a485fea689c889/hub/2022/06/01/fddc7977-232b-4c3f-ac7d-9df52757ad12/razer-blade-15-2022-1050289.jpg?auto=webp&fit=crop&height=362&width=644",
//         "description": "15.6-inch Razer Blade 15 Advanced gaming laptop with Intel i9, 32GB RAM, and 1TB SSD.",
//         "price": 2999.99,
//         "category": "Laptops",
//         "brandName": "Razer",
//         "ratings": 4.9,
//         "createdAt": "2024-08-02T16:00:00Z"
//     },
//     {
//         "productName": "Garmin Fenix 7X Solar",
//         "productImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1aG8LW9potkc4IqwdIglX6ct7wrTV8OvRQ&s",
//         "description": "Garmin Fenix 7X Solar multisport GPS watch with solar charging and health monitoring.",
//         "price": 899.99,
//         "category": "Wearable Gadgets",
//         "brandName": "Garmin",
//         "ratings": 4.7,
//         "createdAt": "2024-08-03T17:00:00Z"
//     }
// ]

app.get('/', (req, res)=>{
    res.sendStatus(200)
})

// app.get('/', async (req, res) => {
//     await Product.insertMany(newData).catch(err => console.log(err))
//     // const result = await Product.distinct("brandName")
//     res.send("|")
// })


app.get('/products/filterOptions', async (req, res) => {
    try {
        const [brandNames, categorys] = await Promise.all([Product.distinct("brandName"), Product.distinct("category")])

        res.status(200).json({
            brandNames,
            categorys
        })
    } catch (error) {
        console.log(error);
        res.sendStatus(500)
    }
})

app.get('/products', async (req, res) => {
    try {
        const { search, page = 1, category, sort, brand, priceRange } = req.query;
        let query = Product.find({})

        if (search) {
            query = query.find({ productName: { $regex: search, $options: "i" } })
        }
        if (sort) {
            console.log(sort);
            const newSort = sort.split(",").join(" ")
            query = query.sort(newSort)
        }
        if (category) {
            query = query.find({ category })
        }
        if (brand) {
            query = query.find({ brandName: brand })
        }
        if (priceRange) {
            const range = priceRange.split(",")
            query = query.find({
                price: {
                    $gt: range[0],
                    $lt: range[1]
                }
            })
        }

        const estProducts = await query.clone().countDocuments()

        query = query.skip((page - 1) * 12).limit(12)
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
