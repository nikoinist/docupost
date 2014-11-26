/*
modul za citanje pdf dokumenta, kreiranje tumbnail-a i spremanja u json

@param pdfDir direktorij kroz koji cita

*/

var pdfutils = require('pdfutils').pdfutils;
var fs = require('fs');
var path = require('path');

module.exports = function(pdfDir, callback){
	//filter
        var pdf = "pdf";
	var data = [];

	//citanje direktorija
	fs.readdir(pdfDir, function(err, list){
            //provjeri za pogreske
	    if(err)
 	    return callback(err) //vraca gresku ako postoji
            
            //funkcija koja provjerava listu pdf-ova
	    list.forEach(function(file){
	       if(path.extname(file)=== "." + pdf){
		data =  pdfutils(file, function(err, doc){
                   		    
                  });
	       }
	    });
	callback(null, data);
	});	

	/* 
	*  pdflist = pdfutils(pdfDir, function(err, doc){
        *  doc[0].asPNG({maxWidth: 100, maxHeight: 100}).toFile(doc.title + ".png")
        *  doc[0].title;
	*  doc[0].subject;
	*/
};

