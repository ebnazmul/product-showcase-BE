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


const data = [{
    "productName": "XPS 13 Ultrabook",
    "productImage": "https://example.com/images/dellxps13.jpg",
    "description": "13-inch ultra-thin laptop with Intel i7 processor, 16GB RAM, and 512GB SSD.",
    "price": 1299.99,
    "category": "Laptops",
    "brandName": "Dell",
    "ratings": 4.8,
    "createdAt": "2024-07-30T09:00:00Z"
},
{
    "productName": "MacBook Pro 14",
    "productImage": "https://example.com/images/macbookpro14.jpg",
    "description": "14-inch MacBook Pro with M2 chip, 16GB RAM, and 1TB SSD.",
    "price": 1999.99,
    "category": "Laptops",
    "brandName": "Apple",
    "ratings": 4.9,
    "createdAt": "2024-07-29T14:20:00Z"
},
{
    "productName": "ZenBook 14",
    "productImage": "https://example.com/images/zenbook14.jpg",
    "description": "14-inch lightweight laptop with AMD Ryzen 7, 16GB RAM, and 512GB SSD.",
    "price": 1099.99,
    "category": "Laptops",
    "brandName": "ASUS",
    "ratings": 4.7,
    "createdAt": "2024-07-28T10:40:00Z"
},
{
    "productName": "ThinkPad X1 Carbon",
    "productImage": "https://example.com/images/thinkpadx1carbon.jpg",
    "description": "14-inch business laptop with Intel i7 processor, 16GB RAM, and 512GB SSD.",
    "price": 1399.99,
    "category": "Laptops",
    "brandName": "Lenovo",
    "ratings": 4.8,
    "createdAt": "2024-07-27T11:10:00Z"
},
{
    "productName": "Spectre x360",
    "productImage": "https://example.com/images/spectrex360.jpg",
    "description": "13-inch 2-in-1 laptop with Intel i7 processor, 16GB RAM, and 1TB SSD.",
    "price": 1499.99,
    "category": "Laptops",
    "brandName": "HP",
    "ratings": 4.7,
    "createdAt": "2024-07-26T12:00:00Z"
},
{
    "productName": "Gram 17",
    "productImage": "https://example.com/images/lggram17.jpg",
    "description": "17-inch ultra-lightweight laptop with Intel i7, 16GB RAM, and 1TB SSD.",
    "price": 1699.99,
    "category": "Laptops",
    "brandName": "LG",
    "ratings": 4.6,
    "createdAt": "2024-07-25T08:50:00Z"
},
{
    "productName": "Surface Laptop 4",
    "productImage": "https://example.com/images/surfacelaptop4.jpg",
    "description": "13.5-inch touchscreen laptop with Intel i5 processor, 8GB RAM, and 256GB SSD.",
    "price": 999.99,
    "category": "Laptops",
    "brandName": "Microsoft",
    "ratings": 4.5,
    "createdAt": "2024-07-24T13:15:00Z"
},
{
    "productName": "Pavilion 15",
    "productImage": "https://example.com/images/pavilion15.jpg",
    "description": "15.6-inch laptop with Intel i5, 8GB RAM, and 512GB SSD.",
    "price": 749.99,
    "category": "Laptops",
    "brandName": "HP",
    "ratings": 4.4,
    "createdAt": "2024-07-23T15:30:00Z"
},
{
    "productName": "Yoga 9i",
    "productImage": "https://example.com/images/yoga9i.jpg",
    "description": "14-inch 2-in-1 laptop with Intel i7, 16GB RAM, and 1TB SSD.",
    "price": 1399.99,
    "category": "Laptops",
    "brandName": "Lenovo",
    "ratings": 4.8,
    "createdAt": "2024-07-22T11:40:00Z"
},
{
    "productName": "Blade 15",
    "productImage": "https://example.com/images/blade15.jpg",
    "description": "15.6-inch gaming laptop with Intel i7, 16GB RAM, and 1TB SSD.",
    "price": 1999.99,
    "category": "Laptops",
    "brandName": "Razer",
    "ratings": 4.9,
    "createdAt": "2024-07-21T14:25:00Z"
},
{
    "productName": "Aero 15",
    "productImage": "https://example.com/images/aero15.jpg",
    "description": "15.6-inch laptop with Intel i7, 16GB RAM, and 512GB SSD.",
    "price": 1299.99,
    "category": "Laptops",
    "brandName": "Gigabyte",
    "ratings": 4.7,
    "createdAt": "2024-07-20T13:50:00Z"
},
{
    "productName": "ROG Zephyrus G14",
    "productImage": "https://example.com/images/zephyrusg14.jpg",
    "description": "14-inch gaming laptop with AMD Ryzen 9, 16GB RAM, and 1TB SSD.",
    "price": 1499.99,
    "category": "Laptops",
    "brandName": "ASUS",
    "ratings": 4.8,
    "createdAt": "2024-07-19T12:30:00Z"
},
{
    "productName": "Inspiron 15 5000",
    "productImage": "https://example.com/images/inspiron15.jpg",
    "description": "15.6-inch laptop with Intel i5, 8GB RAM, and 256GB SSD.",
    "price": 599.99,
    "category": "Laptops",
    "brandName": "Dell",
    "ratings": 4.4,
    "createdAt": "2024-07-18T11:10:00Z"
},
{
    "productName": "Predator Helios 300",
    "productImage": "https://example.com/images/helios300.jpg",
    "description": "15.6-inch gaming laptop with Intel i7, 16GB RAM, and 1TB SSD.",
    "price": 1599.99,
    "category": "Laptops",
    "brandName": "Acer",
    "ratings": 4.7,
    "createdAt": "2024-07-17T15:45:00Z"
},
{
    "productName": "Latitude 9420",
    "productImage": "https://example.com/images/latitude9420.jpg",
    "description": "14-inch business laptop with Intel i7, 16GB RAM, and 512GB SSD.",
    "price": 1799.99,
    "category": "Laptops",
    "brandName": "Dell",
    "ratings": 4.6,
    "createdAt": "2024-07-16T09:20:00Z"
},
{
    "productName": "MacBook Air M2",
    "productImage": "https://example.com/images/macbookairm2.jpg",
    "description": "13-inch MacBook Air with M2 chip, 8GB RAM, and 256GB SSD.",
    "price": 999.99,
    "category": "Laptops",
    "brandName": "Apple",
    "ratings": 4.8,
    "createdAt": "2024-07-15T08:00:00Z"
},
{
    "productName": "VivoBook 15",
    "productImage": "https://example.com/images/vivobook15.jpg",
    "description": "15.6-inch laptop with Intel i3, 8GB RAM, and 256GB SSD.",
    "price": 549.99,
    "category": "Laptops",
    "brandName": "ASUS",
    "ratings": 4.3,
    "createdAt": "2024-07-14T10:30:00Z"
}]

mongoose.connect(process.env.URI).then(() => console.log("Connected to DB!"))


// app.get('/', async (req, res) => {
//     // await Product.insertMany(data).catch(err => console.log(err))
//     const result = await Product.distinct("brandName")
//     res.send(result)
// })

app.get('/products', async (req, res) => {
    try {
        const { search, page = 1, category, sort } = req.query;

        let query = Product.find({})

        if (search) {
            query = query.find({ productName: { $regex: search, $options: "i" } })
        }

        if (sort) {
            console.log(sort);
            const newSort = sort.split(",").join(" ")
            query = query.sort(newSort)
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

app.get('/products/filterOptions', async (req, res) => {

    const [brandNames, categorys] = await Promise.all([Product.distinct("brandName"), Product.distinct("category")])

    res.status(200).json({
        brandNames,
        categorys
    })
})


app.listen(port, () => {
    console.log("running at", port);
})
