import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colours';
import users from './data/users.js'
import products from './data/products.js'
import User from './models/uersModels.js';
import Product from './models/productModels.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config()

connectDB()

const importData = async () =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product =>{
            return { ...product, user: adminUser}
        })

        await Product.insertMany(sampleProducts)
        console.log('Data Imported!! '.green);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red)
        process.exit(1)
        
    }
}
const destroyData = async () =>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!! '.red);
        process.exit()
    } catch (error) {
        console.error(`${error}`.red)
        process.exit(1)
        
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}
