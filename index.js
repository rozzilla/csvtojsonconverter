const fs = require('fs');
const path = require('path');
const csvtojson = require('csvtojson');

const uniqueid = new Date().valueOf();
const INPUTFILE = path.join(__dirname, 'customer-data.csv');
const OUTPUTFILE = path.join(__dirname, `${uniqueid}.json`);

csvtojson().fromFile(INPUTFILE).then((jsonres) => {
	fs.writeFileSync(OUTPUTFILE, JSON.stringify(jsonres), (error) => {
		if (error) {
			return console.log(error.message);
		}
	});
	console.log(`File correctly converted from csv (${INPUTFILE}) to json (${OUTPUTFILE})`);
});
