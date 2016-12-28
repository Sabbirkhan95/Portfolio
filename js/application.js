$(document).ready(function(){
	$('.bxslider').bxSlider({
	  	auto: true,
	  	infiniteLoop: false,
  		hideControlOnEnd: true
	});


	// Back To TOP
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300){
			$(".back_to_top").fadeIn(200);
		} else {
			$(".back_to_top").fadeOut(200);
		}
	});

	$(".back_to_top").click(function(event){
		event.preventDefault();

		$('html, body').animate({scrollTop: 0},300);
	});
	// Back To TOP

	
	var post 			=	$('#post_form');
	var post_feedback 	=	$('#post_feedback');
	var post_max_length	=	20;

	post_feedback.html(post_max_length +' charecters remaining');

	post.keyup(function(event) {
		
		var post_length 		=	$(this).val().length;
		var char_left			=	post_max_length - post_length;

		if(post_length < post_max_length){
			$(this).closest('.form-group').addClass('has-success');
			post_feedback.html( 'You have '+ char_left + ' charecters left').addClass('text-success');
		}else if(post_length > post_max_length){
			$(this).closest('.form-group').addClass('has-error');
			post_feedback.html('Your limited charecters are '+ post_max_length +' & you wrote '+ post_length).addClass('text-danger');
		}

	});


			
});


