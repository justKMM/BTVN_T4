function registration()
	{
		var name= document.getElementById("t1").value;
		var email= document.getElementById("t2").value;
		var uname= document.getElementById("t3").value;
		var pwd= document.getElementById("t4").value;			
		var cpwd= document.getElementById("t5").value;
        var language= document.getElementById("t6").value;
		
		var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
		var letters = /^[A-Za-z]+$/;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(name=='')
		{
			alert('Enter your name');
		}
		else if(!letters.test(name))
		{
			alert('Alphabet characters only');
		}
		else if(email=='')
		{
			alert('Enter your user email');
		}
		else if (!filter.test(email))
		{
			alert('Invalid email');
		}
		else if(uname=='')
		{
			alert('Please enter the user name.');
		}
		else if(!letters.test(uname))
		{
			alert('User name field required only alphabet characters');
		}
		else if(pwd=='')
		{
			alert('Please enter Password');
		}
		else if(cpwd=='')
		{
			alert('Enter Confirm Password');
		}
		else if(pwd != cpwd)
		{
			alert ('Password not Matched');
		}
		else if(document.getElementById("t5").value.length < 6)
		{
			alert ('Password minimum length is 6');
		}
		else if(document.getElementById("t5").value.length > 12)
		{
			alert ('Password max length is 12');
		}
        else if(language=='')
        {
            alert ('Choose your language');
		}
		else
		{				                            
               alert('Registration Completed');
	
		}
	}

function clearFunc(){
	document.getElementById("t1").value="";
	document.getElementById("t2").value="";
	document.getElementById("t3").value="";
	document.getElementById("t4").value="";
	document.getElementById("t5").value="";
    document.getElementById("t6").value="";
	}

// let user = localStorage.getItem("nguoidung");
// user = JSON.parse(user);

// document.getElementById("showInfo").innerHTML = `
//     <p>Name: ${user.name} </p>
//     <p>Email: ${user.email} </p>
//     <p>Username: ${user.uname} </p>
//     <p>Password: ${user.pwd} </p>
//     <p>Language: ${user.language} </p>
// `;