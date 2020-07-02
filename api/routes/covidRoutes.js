import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
import { getCountriesData } from '../controllers/countriesData.js';

var Countries = mongoose.model('Country');
var countryDetails = mongoose.model('countryDetails');

getCountriesData();

router.get('/countries', (req, res) => {
    Countries.find({}, function(err, country) {
        if (err)
          res.status(500).send(err);
    
        res.status(200).json(country);
        
      });

});

router.get('/searchcountry', async (req, res) => {
    countryDetails.find({region: req.query})
    .then(result => {
      res.status(200).json({
        result
      })
    })
   .catch(err => {
        res.status(500).send(err);
        
      });

});

router.get('/allcountries', (req, res) => {
  Countries.find({}, function(err, country) {
      if (err)
        res.status(500).send(err);
  
      res.status(200).json(country);
      
    });

});

export default router;
