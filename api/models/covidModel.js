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
        default: 0
    },

    total_deaths: {
        type: Number,
        default: 0
    },

    total_recovered: {
        type: Number,
        default: 0
    }


});

export const Country = mongoose.model('Country', countrySchema);
export const countryDetails = mongoose.model('countryDetails', countryDetailsSchema);


