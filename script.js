var url = "http://api.forismatic.com/api/1.0/",
	method = 'getQuote',
	format = 'json',
	lang = 'en';

function printQuote() {
	var buildURL = url+'?method='+method+'&format='+format+'&lang='+lang;
		
	console.log(buildURL);
	
	
	$.ajax({
		type: "GET",
		url: buildURL,
		data: "",
		dataType: "json",
		success: function(data) {
			console.log(data);
			var quote = data.quoteText,
				author = data.quoteAuthor;
			console.log(quote);
			$('#quote').append('<h1>'+quote+'</h1><p class="author">'+author+'</p>');
		},
		error: function(e) {
			console.log('blah');
			$('#quote').append('<h1>Through discipline comes freedom.</h1><p class="author">Aristotle</p>')
		}
	})
}

$(document).ready( function() {
	
	var newtab = 'chrome-extension://aggpfmacpaikipkicondcepmilncbakn/newtab.html';
	if ( window.location.href == newtab ) {
		printQuote();
	}
});