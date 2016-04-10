$(document).ready(function(){

$('#mytools button').on('click', function(){

if ($("#mytools ul").hasClass("invisible")) {

$("#mytools ul").removeClass("invisible").addClass("visible"), $("#plusminus").innerHTML='-';

}

else {

$("#mytools ul").removeClass("visible").addClass("invisible"), $("#plusminus").innerHTML='+';

}

});

});