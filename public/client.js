function launchPlain() {

	var url = 'http://localhost:9091/time';
	var data = {};
	var success = function (some, thing) {
		console.log(some, thing)
	};

	var beforeSend =  function(xhr) {
		xhr.setRequestHeader('Cache-Control', document.querySelector('#cache-control').value);
	};

	$.ajax({
	  url: url,
	  data: data,
	  success: success,
	  beforeSend: beforeSend
	});
}

var today = new Date();
var hh = today.getHours();
var mm = today.getMinutes();
var ss = today.getSeconds();

document.querySelector('.date').innerText = 'Client load time: ' + hh + ':' + mm + ':' + ss;