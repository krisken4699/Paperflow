const db = require('./MongoDB')
// db.find({}, {}, 'Users', "Students").then((value, err) => {
//     console.log(value)
//     console.log(err)
// })
db.findOne({ username: "Admin1"},{}, 'Users','Admins').then(result=>{
    console.log(result)
})