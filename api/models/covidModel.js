import mongoose from 'mongoose';

var Schema = mongoose.Schema;

export var CountrySchema = new Schema ({
    name: {
        type: String,
    }
});

export var countryDetailsSchema = new Schema ({
    region: {
        type: String
    },

    total_confirmed_cases: {
        type: Number,
        default: ""
    },

    total_deaths: {
        type: Number,
        default: ""
    },

    total_recovered: {
        type: Number,
        default: ""
    }


});

