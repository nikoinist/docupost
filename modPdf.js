/*
modul za citanje pdf dokumenta, kreiranje tumbnail-a i spremanja u json

@param pdfDir direktorij kroz koji cita

*/

var pdfutils = require('pdfutils').pdfutils;

module.exports = function(pdfDir, callback){
	
	pdflist = pdfutils(pdfDir, function(err, doc){
	 doc[0].asPNG({maxWidth: 100, maxHeight: 100}).toFile("firstpage.png")
	});
	
return callback(null, pdflist);
		
};
