import { getCountriesData } from './countriesData.js';
const countryFile = "./data/countries.json";
import fs from "fs";


const writeToFile = async () => {
    const country = await getCountriesData();
    fs.writeFileSync(countryFile, 
        JSON.stringify(country, null, 2), err => {

        if (err) {
            throw err;
        }
    });

};

export { writeToFile };
