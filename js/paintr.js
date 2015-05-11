$(document).ready(function(){
	var addColor = function(){
		console.log("return the color");
		var color = $('#color-picker').val();
		var $box = $('<div></div>').addClass('box');
		$box.css('background-color',color);
		$('#palette').append($box);
	};
	$('#add-color').on('click',addColor);

	var pickColor = function(){
		var color = $(this).css('background-color');
		$('#picked-color').css('background-color', color);
	}
	$('#palette').on('click','.box',pickColor);
	console.log('current box count' + $('.box').length);

	var createCanvas = function(pixelCount){
		for(var i = 0; i < pixelCount; i++){
			$('<div></div>').addClass('pixel').appendTo('#canvas');
		}
	}
	createCanvas(10000);
	var paint = function(event){
		if(event.ctrlKey){
			var color = $('#picked-color').css('background-color');
			$(this).css('background-color', color);
		}
	}
	$('#canvas').on('mouseenter','.pixel',paint);
});