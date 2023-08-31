function myFunction(button) {
    var buttonId = button.id;
    console.log("Clicked button ID:", buttonId[5]);
    var dots = document.getElementById("dots"+buttonId[5]);
    var moreText = document.getElementById("more"+buttonId[5]);
    var btnText = document.getElementById("myBtn"+buttonId[5]);
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }