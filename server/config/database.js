const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(
        "mongodb+srv://gauravgcc:gcc123@cluster0.agm3kxu.mongodb.net/gcc "
    );
};



module.exports = connectDB;