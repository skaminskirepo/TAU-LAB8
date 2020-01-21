var header =
	'<h1 id="test_header">User data</h1>';

var div_with_form = 
	'<div id="test_div">' +
	'	<form>' +
	'		<p>First name:</p>' +
	'		<input class="random_class" id="firstname" type="text" name="firstname">' +
	'		</br>' +
	'		<p>Last name:</p>' +
	'		<input class="random_class" id="surname" type="text" name="surname">' +
	'		</br></br>' +
	'		<input type="submit" value="Submit">' +
	'		</br></br>' +
	'	</form>' +
	'</div>';

//TEST CASES
describe("Testing correctness of form fields validation: ", function () {
	beforeEach(function () {
		console.log("Building test form");
		document.body.insertAdjacentHTML('afterbegin', header);
		document.body.insertAdjacentHTML('beforeend', div_with_form);
	});

	afterEach(function() {
		console.log("Cleaning up test form");
		document.body.removeChild(document.getElementById('test_div'));
		document.body.removeChild(document.getElementById('test_header'));
	});
	
	it("TEST", function () {
		
	});
});