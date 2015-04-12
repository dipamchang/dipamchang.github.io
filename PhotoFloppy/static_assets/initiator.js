$(document).ready(function(){
	$('.right.menu.open').on("click",function(e){
		e.preventDefault();
		$('.ui.vertical.menu').toggle();
	});

	$('.ui.dropdown').dropdown();


//	_500px.init({
//		sdk_key: '18b1f18f98ff6255e8000e1f655ce68ddb44c83d'
//	});
//	var me;
//	var count = 1;
//	_500px.on('authorization_obtained', function (status) {
//		_500px.api('/users', function (response) {
//			me = response.data.user;
//			loadImages(count);
//			$('#avatar').html('<a class="active item" ><img class="ui avatar image" src="'+me.userpic_url+'">'+me.username+'</a>');
//		});
//	});
//
//	_500px.getAuthorizationStatus(function (status) {
//		if (status == 'not_logged_in' || status == 'not_authorized') {
//			_500px.login();
//		}
//	});
//
//
//	$(window).scroll(function(){
//		if  ($(window).scrollTop() == ($(document).height() - $(window).height())){
//			loadImages(count);
//			count++;
//		}
//	});

//	function loadImages(pagenum){
//
//		_500px.api('/photos', { feature: 'user', user_id: me.id, page: pagenum, rpp: 9, image_size:3 }, function (response) {
//			if (response.data.photos.length == 0) {
//				$('#loadMessage').html('<p><h2 align="center">No more Images to load</h2></p>');
//			} else {
//				$.each(response.data.photos, function () {
//					$('#imagegrid').append('<div class="column"><div class="ui fluid purple card"><div class="image"><img src="' + this.image_url + '" /></div><div class="content"><a class="header">' + this.name + '</a></div></div></div>');
//				});
//			}
//		});
//
//	}

//	function loadTrendingImages(pagenum){
//
//		_500px.api('/photos', { feature: 'popular', page: pagenum, rpp: 9, image_size:3 }, function (response) {
//			if (response.data.photos.length == 0) {
//				$('#loadMessage').html('<p><h2 align="center">No more Images to load</h2></p>');
//			} else {
//				$.each(response.data.photos, function () {
//					$('#trendingImageGrid').append('<div class="column"><div class="ui fluid purple card"><div class="image"><img src="' + this.image_url + '" /></div><div class="content"><i class="right floated external big link square icon"></i><a class="header">' + this.name + '</a><a class="meta">' + this.user.username + '</a></div><div class="extra content"><span class="left floated like"> <i class="like icon"></i> ' + this.positive_votes_count + ' Likes</span><span class="right floated star"> <i class="star icon"></i> ' + this.favorites_count + ' Favorites</span></div></div></div>');
//				});
//			}
//		});
//
//	}


});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

