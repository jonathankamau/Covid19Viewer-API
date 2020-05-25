import mongoose from 'mongoose';;

const Schema = mongoose.Schema;



const countrySchema = new Schema ({
    name: {
        type: String
    }
});

 const countryDetailsSchema = new Schema ({
    region: {
        type: String,
        default: ""
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

export const Country = mongoose.model('Country', countrySchema);
//module.exports = mongoose.model('CountryData', countryDetailsSchema);

