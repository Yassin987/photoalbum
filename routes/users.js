let mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Yassin09:Abc100123@cluster0.x1ngv.mongodb.net/photoalbum?retryWrites=true&w=majority')
.then(function(){
  console.log('Database connected')
})
.catch(function(e){
  console.log(e)
})
let userSchema = mongoose.Schema({
  name: String,
  avatar: String
})
module.exports = mongoose.model('photo', userSchema)