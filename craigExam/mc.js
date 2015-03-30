$(document).ready(function() {
	$('#loading').onload(function() {
		$.getJSON('cc.json', function(cc) {
			$('#result').append('<p>' + cc.text + '<br/> Question:' + cc.answer + '<br/> Answer: ' + cc.decoys + '<br/> deocys: '+ '</p>');
		});

	});

});
