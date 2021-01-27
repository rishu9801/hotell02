let i=1;

function toggle() {

    if (i==1) {
        document.getElementById("menu").style.display = "block";
        document.getElementById("title").style.display = "none";
        i=0;
    }else{
        document.getElementById("menu").style.display= "none";
        document.getElementById("title").style.display = "inline-block";
        i=1;
    }



}
// play video
let x = 0;



function play() {
  switch (x) {
      case 0:
          document.getElementById("video-container").style.display = "block";
          
          x=1;
          break;
      case 1:
        document.getElementById("video-container").style.display = "none";
          
          x=0;
          break;
  
      default:
          break;
  }
    
} 


// services

function next() {
    document.getElementById("services").style.left = "-29%";
}


function prev() {
    document.getElementById("services").style.left = "0%";
}

// blogposts

function next1() {
    document.getElementById("blog-container").style.left = "-32%";
}


function prev1() {
    document.getElementById("blog-container").style.left = "0%";
}




