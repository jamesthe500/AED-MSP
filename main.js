$(document).ready(function() {

	var closestAED = {
		desc: 'Inside door to right on the wall, when entering from the tunnel',
		lat: -93.25,
		lng: 45,
		img: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'
	}

	// populate closest aed div
	$('#closestDesc').html(closestAED.desc);
	$('#closestPic').html("<img src='" + closestAED.img + '>')

	// click closest aed
	$('#closest').click(function() {
		window.location.href = '';
	})

	// click see more aeds button
	$('#more').click(function() {
		window.location.href = 'add.html';
	});

	// click add aeds button
	$('#add').click(function() {
		window.location.href = 'more.html';
	})
});