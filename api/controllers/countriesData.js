import axios from "axios";
import cheerio from "cheerio";
import mongoose from 'mongoose';

const siteUrl = "https://www.worldometers.info/coronavirus/";
const countries = new Array();
const Country = mongoose.model('Country');
//const countryData = mongoose.model('CountryData');


export const getCountriesData = async () => {
    const html = await axios.get(siteUrl);
    const $ = cheerio.load(html.data);

    const countriesMap = $(
        "table").first().find("tbody").first().find("tr")
    .each( (index, element) => {
        let tds = $(element).find("td");

        // let country = {
        //     "Region": $(tds[1]).text().trim(),
        // }
        
        let countryData =
            {
                "Region": $(tds[1]).text().trim(),
                "Total Confirmed Cases": $(tds[2]).text().trim(),
                "Total Deaths": $(tds[4]).text().trim(),
                "Total Recovered": $(tds[6]).text().trim()
            };
        
        const newCountry = new Country({name: $(tds[1]).text().trim()});
        newCountry.save(function (err, country) {
            if (err) return console.error(err);
            console.log(country.name + " has been successfully saved!");
          });

        countries.push(countryData);  

    });
    return countries;
    
};
