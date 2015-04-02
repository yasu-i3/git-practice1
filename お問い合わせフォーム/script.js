function check(){


	if(document.form1.name.value == "" || document.form1.mail.value == "" || document.form1.comment.value == ""){

		window.alert('未入力項目があります');
		return false; 

	}
	
	else{

		return true; 

	}

}