app.route('/countries')
.get(fetchCountryInfo.get_countries);

app.route('/country')
.get(fetchCountryInfo.get_country_data);