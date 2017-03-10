/*
This is empty on purpose! Your code to build the resume will go here.
 */

var myName = "Aline Noronha Favretto";
// $("#main").append(myName);

var formattedName = HTMLheaderName.replace("%data%", myName);
var formattedRole = HTMLheaderRole.replace("%data%", "Software Developer");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// var meuArray = [9, 1];
// var ultimo = meuArray.pop();
// ultimo = ultimo + 1;
// meuArray.push(ultimo);
// $("#main").append(meuArray);

function formatName(name)
{
    var partsOfName = name.split(" ");
    var firstLetterOfFirstName = partsOfName[0].slice(0,1).toUpperCase();
    var firstName = partsOfName[0].slice(1).toLowerCase();
    var lastName = partsOfName[1].toUpperCase();

    return firstLetterOfFirstName + firstName + " " + lastName;
}

$("#main").append(formatName("aLiNe FavREtTo"));