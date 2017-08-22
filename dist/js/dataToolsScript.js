
window.onload = start;

function start() {
	 
	$('#currAi').hide();
	
	$('.flip-container').click(function(){
	
		var curr = $(this);
	
		curr.find('.back').css('display', 'inline-block');
	
		curr.addClass('flipped');
		
		setTimeout(function(){
			curr.find('.front').css('display', 'none');
		}, 100);
		
		$('.flip-container').mouseleave(
			function(){
			
				curr.removeClass('flipped');
				curr.find('.front').css('display', 'inline-block');
				
				setTimeout(function(){
					curr.find('.back').css('display', 'none');
				}, 100);
				
			}
		);
		
		//return false;
	});
}

function showAiOne() {
	$('#currAi').show(500);
}