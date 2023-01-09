var express = require("express")
var app = express()
var cors = require('cors')
let projectCollection;
let dbConnect = require("./dbConnect");
let projectRoutes = require("./routes/projectRoutes");

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects', projectRoutes)



// const createCollection = (collectionName) => {
//     client.connect((err, db) => {
//         projectCollection = client.db().collection(collectionName);
//         if(!err) {
//             console.log('MongoDb Connected')
//         }
//         else {
//             console.log("DB Error: ", err);
//             process.exit(1);
//         }
//     })
// }

//insert project

// const insertProjefcts = (project, callback) => {
//     projectCollection.insert(project, callback);
// }

// // //post api

// app.post('/api/projects', (req, res) => {
//     console.log("New Project added", req.body)
//     var newProject = req.body;
//     insertProjefcts(newProject, (err, result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err})
//         }
//         else {
//             res.json({statusCode: 200, message:"Project Successfully added", data: result})
//         }
//     })
// })

// // const cardList = [

// //     {

// //         title: "Kitten 2",

// //         image: "images/image-outline-filled.png",

// //         link: "About Kitten 2",

// //         desciption: "Demo desciption about kitten 2"

// //     },

// //     {

// //         title: "Kitten 3",

// //         image: "images/image-outline-filled.png",

// //         link: "About Kitten 3",

// //         desciption: "Demo desciption about kitten 3"

// //     }

// // ]

// //get project
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }


// app.get('/api/projects',(req,res) => {
//     getProjects((err, result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err})
//         }
//         else {
//             res.json({statusCode: 200, message:"Success", data: result})
//         }
//     })

// })



var port = process.env.port || 3000;

app.listen(port,()=>{
    
    console.log("App listening to: http://localhost:"+port)
    // createCollection('Pets')
    
})