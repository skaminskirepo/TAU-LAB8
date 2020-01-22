(function( $ ) {
	$.fn.validate = function(regex) {
		return this.each(function() {
			$(this).on('input', function() {
				console.log("Checking if \'" + $(this).val() + "\' matches " + regex);
				$(this).swapClasses(regex.test($(this).val()));
				$(this).tagField();
			});
		});
	}
}( jQuery ));

(function( $ ) {
	$.fn.swapClasses = function(isValid) {
		return this.each(function() {
			if (isValid) {
				$(this).removeClass("invalid");
				$(this).addClass("valid");
				console.log("Changing element to: valid");
			} else {
				$(this).removeClass("valid");
				$(this).addClass("invalid");
				console.log("Changing element to: invalid");
			}
		});
	}
}( jQuery ));	

(function( $ ) {
	$.fn.tagField = function() {
		return this.each(function() {
			$(this)[0].className.split(' ').map(x => {
				if(x.localeCompare("invalid") == 0){
					$(this).css("background-color", "red");
				} else if(x.localeCompare("valid") == 0){
					$(this).css("background-color", "");
				}
			})
		});
	}
}( jQuery ));