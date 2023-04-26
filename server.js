const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const Students = require('./schema')

const app = express();
//express is an backend web application framework for nodejs

mongoose.connect('mongodb+srv://employee:employee@cluster0.onigan7.mongodb.net/?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));  

app.use(bodyParser.json());   //it is an middleware

//Get all students
app.get('/Students', (req, res) => {
    Students.find()
        .then(students => res.json(students))  // it is used to send a JSON response containing the data returned from the database.
        .catch(err => res.status(400).json(`Error: ${err}`));  
           ////.catch() is used to handle any errors that occur when the Promise is rejected
});
app.get('/Students/:id',(req,res) => {
    Students.findById(req.params.id)
    .then(Student => res.json(Student))
    .catch(err => res.status(400).json(`Error: ${err}`));
})
// Add a new student
app.post('/Students', (req, res) => {
    const newstudents = new Students(req.body);
    newstudents.save()
        .then(() => res.json('Student added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//Delete a student
app.delete('/Students/:id', (req, res) => {
    Students.findByIdAndDelete(req.params.id)  //params means parameter value
        .then(() => res.json('student deleted'))
        .catch(err => res.status(400).json(`Error: ${err}`));

})

//update a student
app.put('/Students/:id', (req, res) => {
    Students.findByIdAndUpdate(req.params.id,req.body)  //params means parameter value
        .then(() => res.json('student updated'))
        .catch(err => res.status(400).json(`Error: ${err}`));

})


app.listen(8000, () => console.log('server running'))