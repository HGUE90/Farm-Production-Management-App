/* this folder is to make new items */
const mongoose = require("mongoose");
const Product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => {
    console.log("MONGO connection opened!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR")
    console.log(err)
})

/* const p = new Product({
    name: 'Ruby Grapefruit',
    price: 1.99,
    category: 'Fruit'
})
p.save().then(p => {
    console.log(p)
})
.catch(e => {
    console.log(e)
}) */

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Whole Chocolate Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
.then( res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})