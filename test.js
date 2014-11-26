var pdfList = require('./modPdf.js')

var dir = process.argv[2];

pdfList(dir, function(err, list){
	list.forEach(function (file){
	console.log(file);
	});
});
