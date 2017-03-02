$(function(){

	$('tr').on('click', function(){
		console.log($(this).html());
	});


	$('td').each(function(){
		
		$(this).on('mouseover', function(){
			$('#my-td').html('<span class="my-td-span">' 
				+ $(this).text() 
				+ '</span>'
			);
		});

		$(this).on('mouseout', function(){
			$('#my-td').html(null);
		});

		$(this).on('click', function(){

			$('.highlighted').removeClass('highlighted');
			$(this).addClass('highlighted');
		});

	});

});