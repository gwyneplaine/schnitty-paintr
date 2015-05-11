$(document).ready(function(){
	$('h2').funText(100, 'reverseRainbow');
});
var $videos = $('a');
var thumbnailify = function(link){
	var $link = $(link);
	var thumbnail = youtube.generateThumbnailUrl($link.attr('href'));
	var img = $('<img>').attr('src', thumbnail)
	$link.append(img);

	$link.on('click',function(){
		event.preventDefault();//don't follow the link as would usually be done.
		console.log($link);
	
		var embedurl = youtube.generateEmbedUrl($link.attr('href'));
		var embedhtml = '<iframe width="420" height="315" src="'+embedurl+'" frameborder="0" allowfullscreen></iframe>'
		console.log(embedhtml);
		$("#videoholder").html(embedhtml);
	});
}

for(var i = 0; i < $videos.length ; i++){
	thumbnailify($videos[i]);
}

// $videos.each(function(video){
// 	// var thumbnail = youtube.generateThumbnailUrl($(this).attr('href'));
// 	// var img = $('<img>').attr('src', thumbnail)
// 	// $(this).append(img);
// 	thumbnailify(video);

// });

$('body').append("<h1>DAS RACIST</h1>");


///PARALLAX EXAMPLE
var moveBill = function(){
	console.log("moveBill");
	// MOVE BILL AT hALF THE RATE OF WINDOW SCROLLIN.
	$('parallax').css('background-position-y', (window).scrollTop()*-0.5);
}