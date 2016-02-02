$(document).ready(function() {	
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
			return color;
	}
	function change_color(){
		var rdColor = getRandomColor();
		$("body").animate({
			backgroundColor: rdColor
		}, 500);
		$("#quoteDiv").animate({
			color: rdColor
		}, 500);
		$("p").animate({
			color: rdColor
		}, 500);
		$("button").animate({
			backgroundColor: rdColor
		}, 500);
	}	
	function quote_color()
	{
		var currentQuote = '', currentAuthor = '';
		$.ajax({
				headers: {
					"X-Mashape-Key": "B155nULFIWmshd4UYY7fGutBhhXyp19qpI2jsnzjfb4AzEJEUF",
					Accept: "application/json",
					"Content-Type": "application/x-www-form-urlencoded"
					},
				url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
				success: function(response) {
					var r = JSON.parse(response);
					currentQuote = r.quote;
					currentAuthor = r.author;
					$("#quoteDiv").stop().hide(0).fadeIn("slow");
					$("#quoteDiv").stop().html("<i class='fa fa-quote-left'></i> "+currentQuote).hide(0).fadeIn("slow");
					$("#authorP").html("- "+currentAuthor);
					}
			});
		change_color();
	}
	quote_color();
	$("#btnColor").click(quote_color);
	$("#btnTweet").on('click', function(){
		var txt = "https://twitter.com/intent/tweet?text="+$("#quoteDiv").text()+" "+$("#authorP").text();
		window.open(txt,'name','width=600,height=400');
	});
});