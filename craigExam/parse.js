load('mm.js');
var ques = JSON.parse(questions);
//print(ques);


(function pText(word) {
	for (var i = 0;i < ques.length; i++) {
		var cur = ques[i];
		print(JSON.stringify(cur.text));
	}
})();


