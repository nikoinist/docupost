var modPdf = require('./modPdf.js');
var pdfDir = process.argv[2];

modPdf(pdfDir, function(err, list){
    var pdflist = list;
    if(err){
	throw err;}
   else{ 	
	console.log(list);
   }
});
