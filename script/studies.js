window.onload = function () {

	var tds = document.getElementsByTagName('td');
	var trs = document.getElementsByTagName('tr');

	for (var i=0; i<tds.length; i++){
		console.log(tds[i].innerText);

		tds[i].addEventListener('click', function(event){
			event.preventDefault();
			alert(this.innerText);
		});

	}
	

	for (var i = trs.length - 1; i >= 0; i--) {
		trs[i].addEventListener('click', function(event){
			event.preventDefault();
			console.log(this.innerHTML);
		})
	}


	trs[0].addEventListener('mouseover', function(event){
		event.preventDefault();
		alert('Micky Mouse has come here !');
	});
}