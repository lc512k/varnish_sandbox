function launchPlain() {

	var url = 'http://localhost:9091/time';
	var data = {};
	var success = function (data, status, xhr) {
		console.log(data)

		document.querySelector('#response-headers').innerText = xhr.getAllResponseHeaders();
		document.querySelector('#response-body').innerText = data;
	};

	var beforeSend = function(xhr) {
		xhr.setRequestHeader('Cache-Control', document.querySelector('#cache-control').value);
		xhr.setRequestHeader('Test-Header', document.querySelector('#test-header').value);
	};

	$.ajax({
	  url: url,
	  data: data,
	  success: success,
	  beforeSend: beforeSend
	});
}

(function bindCacheControlEvents() {
	var checkboxes = document.querySelectorAll('input[name="no-cache-option"]');
	var resultField = document.querySelectorAll('input#Cache-Control')[0];

	for (var i = 0; i < checkboxes.length; i++) {
		checkboxes[i].addEventListener('click', function () {

			if(!resultField.value) {
				resultField.value = this.value;
			}
			else {
				if (resultField.value.indexOf(this.value) == -1) {
					resultField.value += ',' + this.value;
				}
				else if (resultField.value.indexOf(',' + this.value) != -1) {
					resultField.value = resultField.value.replace(',' + this.value, '')
				}
				else {
					resultField.value = resultField.value.replace(this.value, '')
				}
			}
		})
	}
})();

var today = new Date();
var hh = today.getHours();
var mm = today.getMinutes();
var ss = today.getSeconds();

document.querySelector('.date').innerText = 'Client load time: ' + hh + ':' + mm + ':' + ss;