const mongoose = require('mongoose');

const StudentsSchema =  mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    branch: { type: String },
    course: { type: String },
    college: { type: String },
    place: { type: String }
  });

module.exports = mongoose.model('Students', StudentsSchema);

//module.exports' is used in Node.js to export a module from one file so that it can be used in another file
// In this case, 'mongoose.model' is used to create a model for a collection in MongoDB using the 'StudentsSchema' schema.
// The model is given the name 'Students'.//first students is used to passing the schema in variablestudents
//second studentsschema is used to passing the schema