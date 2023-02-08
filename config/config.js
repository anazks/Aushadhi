const mongoose = require("mongoose");


const connect = () => {

  return mongoose.connect("mongodb+srv://user1:123@cluster0.jxpil.mongodb.net/aushadhi?retryWrites=true&w=majority")
}


module.exports = connect;