const express = require('express');
const router = express.Router();
const Model = require('../Models/ServiceModal');

router.post('/add', (req, res) => {
    console.log(req.body);
// Storing data to mongodb
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
    });
});
router.get('/getall', (req, res) => {
    Model.find({}) //empty brackets will give all the data
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });
});
// since mongodb automatically generates id so we can use it also
router.get('/getbyid/:id', (req, res) => {
    // getting data from client
    console.log(req.params.id);

    // finding the data with given id
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    }); 
});
router.get('/getbyscategory/:scategory', (req, res) => {
    // getting data from client
    console.log(req.params.id);

    // finding the data with given id
    Model.find({scategory: req.params.scategory})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    }); 
});
//  : denotes a url parameter
router.get("/getbyemail/:email", (req, res) => {
    console.log(req.params.email);
    Model.find({email: req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });   
});

router.get('/getbyname/:name', (req, res) => {
    console.log(req.params.name);
    Model.findOne({name: req.params.name}) //findone will give the first occurence of data if there is multiple similar data
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
});
});
router.put('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new:true}) //new will give updated response
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err)
    });

});
module.exports = router;