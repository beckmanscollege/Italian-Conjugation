function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
        image.src = "https://cdn.glitch.global/c896f6e6-d7af-4ea2-9fc7-177abcd86656/pasta.png?v=1649161090573";
    } else {
        image.src = "https://cdn.glitch.global/9f0d80ff-6f73-4341-8555-a12aee54c6b7/noodleGIF2.gif?v=1649162191043";
    }
}

  function playSound(dog) {
  document.getElementById(dog).play();
};

var cursor = document.getElementById("cursor");
      document.addEventListener("mousemove", function(e){
      var x = e.clientX; 
      var y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
});