import axios from "axios";
import cheerio from "cheerio";

const siteUrl = "https://www.worldometers.info/coronavirus/";
const countries = new Array();

export const getCountriesData = async () => {
    const html = await axios.get(siteUrl);
    const $ = cheerio.load(html.data);

    const countriesMap = $(
        "table").first().find("tbody").first().find("tr")
    .each( (index, element) => {
        let tds = $(element).find("td");
        
        let countryData =
            {
                "Region": $(tds[1]).text().trim(),
                "Total Confirmed Cases": $(tds[2]).text().trim(),
                "Total Deaths": $(tds[4]).text().trim(),
                "Total Recovered": $(tds[6]).text().trim()
            };

        countries.push(countryData);  

    });
    return countries;
    
};
