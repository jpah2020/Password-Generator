//generate random password
function generate() {
	var complexity = document.getElementById('slider').value;

	//possible password values
	var values = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+1234567890';

	var password = '';

	for (var i = 0; i <= complexity; i++) {
		password =
			password +
			values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
	}

	document.getElementById('display').value = password;
}
