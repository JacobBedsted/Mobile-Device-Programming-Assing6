const express = require('express');
const app = express();
const nodemon = require('nodemon');
app.use(express.json());

const PORT = 1150;

let user = {
    username: "Jacob",
    password: "Bedsted1234",
    email: "jacob@mail.com",
    courses:{
        course1: {
            courseId: "01",
            courseName: "math",
            startDate: "10/29/2022",
            endDate: "12/30/2022"
        },
        course2: {
            courseId: "02",
            courseName: "science",
            startDate: "10/29/2022",
            endDate: "12/30/2022"
        },
        course: {
            courseId: "00",
            courseName: "english",
            startDate: "10/29/2022",
            endDate: "12/30/2022"
        } 
    }
}

app.get('/getUser', (req, res) =>{
    try{
        return res.status(200).json(user);
    }
    catch{
        return res.status(500);
    }
});

app.post('/addUser', (req, res) =>{
    try{
        return res.status(200).json(`Added user ${req.body.user.username} succesfully`);
    }
    catch{
        return res.status(500);
    }
})

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`)
})