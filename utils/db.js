const mongoose = require('mongoose');
// const URI = "mongodb+srv://todaygolu:zAE0jkGCxDqbnyfU@cluster0.d7w9amm.mongodb.net/"
// const URI = "mongodb+srv://todaygolu:zAE0jkGCxDqbnyfU@cluster0.d7w9amm.mongodb.net/my-ind?retryWrites=true&w=majority&appName=Cluster0"
const URI = process.env.MONGODB_URI;
mongoose.connect(URI);

const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log('Connection succesfull to DB');
    } catch(error){
        console.error("database connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;
