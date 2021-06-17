var myImages =["https://wallpaperaccess.com/full/490164.jpg",
               "https://wallpapercave.com/wp/wp4573758.jpg",
               "https://cdn.hipwallpaper.com/i/81/64/xLR15s.jpg",
               "https://wallpaperaccess.com/full/393963.jpg",
               "https://mcdn.wallpapersafari.com/medium/24/49/36xlYA.jpg",
               "https://mcdn.wallpapersafari.com/medium/59/50/2UjThV.jpg"
              ];


var captionImages =["Spring","Summer","Fall","Winter","Lake","Ocean Life"];

var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);


function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,2000);
