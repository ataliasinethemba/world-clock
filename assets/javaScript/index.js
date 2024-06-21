//paris
setInterval(() => {
    
let parisElememnt = document.querySelector("#paris");
let parisDateElement =parisElememnt.querySelector(".date");
let parisTimeElement =parisElememnt.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");


parisDateElement.innerHTML=parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML=parisTime.format("h:mm:ss [<small>]A[</small>]");


//los angeles
let losAngelesElememnt = document.querySelector("#los-angeles");
let losAngelesDateElement =losAngelesElememnt.querySelector(".date");
let losAngelesTimeElement =losAngelesElememnt.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");


losAngelesDateElement.innerHTML=losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML=losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
},1000);
