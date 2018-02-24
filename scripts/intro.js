var developer = "Barry Holmes"
var name =""
var defgreeting = "to the Holmes Home Automation Web"
//this is a learning project
function welcomeuser(name, greeting) {
	if (name == "Debbie") {
		return ("Hey "+name +" you should not enter here muchacha - whoooooo!!!");
	}
	else if (name == "Barry") {
		return ("Hi "+ name+ " Welcome My Master to your Home Automation page my master!");
	}
	else {
		return ("Hi "+ name+ " Welcome "+ defgreeting);
	}
}

alert(welcomeuser(prompt("Hi please enter your first name"+name), defgreeting))
