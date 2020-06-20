$('button').on('click', () => {
    console.log("Yeah, you clicked me");
  });

  $('#second').click(() => {
    $("#first").text("CHANGE!");
    $("#first").css("color", "red");
  });

 /*function myFunction () {
var barva = document.getElementById("barva").value;
document.getElementById("second").style.backgroundColor = barva;
document.getElementById("first").style.backgroundColor = barva;
document.getElementById("third").style.backgroundColor = barva;

}*/

$('#third').on('click',() =>{
    
  let changeColor = document.getElementById("barva").value;
  $('button').css('background', changeColor);
  
  
});

