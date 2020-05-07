const siteUrl = "https://www.worldometers.info/coronavirus/";
const axios = require("axios");
const cheerio = require("cheerio");

const countries = new Set();

const getCountriesData = async () => {
    const html = await axios.get(siteUrl);
    const $ = cheerio.load(html.data);

    const countriesMap = $("table").first().find("tbody").first().find("tr")
    .each( (index, element) => {
        const tds = $(element);
        console.log(tds.text());
    });
    
  };

getCountriesData();
