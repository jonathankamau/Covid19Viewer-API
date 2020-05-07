const siteUrl = "https://www.worldometers.info/coronavirus/";
const BaseUrl = "https://en.wikipedia.org/wiki/List_of_European_countries_by_population";
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
        //console.log(tds.text());
        // if ($(element).find("a").first().text() == "USA") {
        //     //const tds = $(element)
        //     console.log($(element).text(), "\n")

    //}
        

    });
    
  };

getCountriesData();

// const fetchData = async () => {
//     const result = await axios.get(siteUrl);
//     return cheerio.load(result.data);
//   };


// const getResults = async () => {
//     const $ = await fetchData();
//     $("table").find("tbody").first().each((index, element) => {
//         const tds = $(element).find("tr > td")
//         //console.log($(tds[0]).text())
//         countries.add($(element).text());
//     });
//     return countries;
// };
// console.log('Results \n')
// console.log(getResults());
// console.log(countries)
// const postJobButton = $('.main_table_countries_today').text();
// console.log(postJobButton) 