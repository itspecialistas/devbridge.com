/*
 * Scripts File
 * Author: Jekaterina Osipova
*/


$(function(){
	var pull    = $('.resp-menu');
	menu        = $('.main-menu-resp ul');
	menuHeight  = menu.height();
 
	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
});


function checkForm(form) {
	// validation fails if the input is blank
	if(document.myform.name.value == "") {
		document.getElementById('klaida1').innerHTML="Please provide your name";
		myform.name.focus();
	return false;
	}
	// validation fails if the input is blank
	if(document.myform.lname.value == "") {
		document.getElementById('klaida2').innerHTML="Please provide your last name";
		myform.lname.focus();
	return false;
	}
	if(document.myform.msg.value == "") {
		document.getElementById('klaida3').innerHTML="Message can not be empty";
		myform.msg.focus();
	return false;
	}
	// regular expression to match only alphanumeric characters and spaces
	var re = /^[a-zA-Z\s]*$/;
	// validation fails if the input doesn't match our regular expression
	if(!re.test(document.myform.name.value)) {
		document.getElementById('klaida1').innerHTML="Name contains invalid characters";
		myform.name.focus();
	return false;
	}
	if(!re.test(document.myform.lname.value)) {
		document.getElementById('klaida2').innerHTML="Your last name contains invalid characters";
		myform.lname.focus();
	return false;
	}
	// validation was successful
	else {
		alert("Form successfully submitted");
	}
return true;
};
	
//check is this a mobile browser
function is_touch_device() {
return !!('ontouchstart' in window);
};	
$(document).ready(function(){ 
	/* If mobile browser, prevent click on parent nav item from redirecting to URL */
	if(is_touch_device()) {	
		$('#mainmenu li > ul').each(function (index, domEle) {
			/*  Use this to keep the href on the <a> intact but prevent the default action */
			$(domEle).prev('a').click(function(event) {
			event.preventDefault();
			});
		});
	}
});