const mongoose = require('mongoose');
const url ="mongodb+srv://chaurasiadivyanshu6:divyanshu123@cluster0.5qkvjuf.mongodb.net/Business-Incubators?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)

.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;