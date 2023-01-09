let client = require("../dbConnect");
let projectCollection;

setTimeout(() => {
    projectCollection = client.db().collection("Projects");
}, 2000)

const insertProjefcts = (project, callback) => {
    projectCollection.insert(project, callback);
}

const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

module.exports = {
    insertProjefcts, getProjects
}