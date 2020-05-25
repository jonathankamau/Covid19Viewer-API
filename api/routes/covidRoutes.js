import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();
import { getCountriesData } from '../controllers/countriesData.js';

var Countries = mongoose.model('Country');
getCountriesData();

router.get('/countries', (req, res) => {
    Countries.find({}, function(err, country) {
        if (err)
          res.send(err);
          //console.log('HERE', country);
        res.json(country);
        
      });

});

export default router;
