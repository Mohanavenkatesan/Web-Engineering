            function formvalidate() {
                var name = 
                document.forms["RegForm"]["Name"];
                var email = 
                document.forms["RegForm"]["EMail"];
                var phone = 
                document.forms["RegForm"]["ContactNumber"];
                var what = 
                document.forms["RegForm"]["Subject"];
                var password = 
                document.forms["RegForm"]["Password"];
                var address = 
                document.forms["RegForm"]["Address"];
		var id_proof = 
                document.forms["RegForm"]["AadharNumber"];
                
                if (name.value == "") {
                    window.alert("Please enter your name.");
                    name.focus();
                    return false;
                }
                
                if (address.value == "") {
                    window.alert("Please enter your address.");
                    address.focus();
                    return false;
                }
                
                if (email.value == "") {
                    window.alert(
                      "Please enter a valid e-mail address.");
                    email.focus();
                    return false;
                }
                
                if (phone.value == "") {
                    window.alert(
                      "Please enter your telephone number.");
                    phone.focus();
                    return false;
                }
                
                if (password.value == "") {
                    window.alert("Please enter your password");
                    password.focus();
                    return false;
                }
		
		if (id_proof.value == "") {
                    window.alert("Please enter your Aadhar number");
                    id_proof.focus();
                    return false;
                }
                
                if (what.selectedIndex < 1) {
                    alert("Please enter your course.");
                    what.focus();
                    return false;
                }
                
                return true;
            }
