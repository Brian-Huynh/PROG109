var myImages =["https://www.betterathomehc.com/wp-content/uploads/2019/09/denial.jpg", 
               "https://www.hsdinstitute.org/assets/images/face-anger-with-focus.2.png",
               "https://www.storageunitauctionlist.com/blog/wp-content/uploads/2018/06/haggling.jpg",
               "https://static01.nyt.com/images/2016/01/11/upshot/2up-healthdepress-illo-promo/2up-healthdepress-illo-promo-articleLarge-v4.jpg?quality=75&auto=webp&disable=upscale",
               "https://mytherapynyc.com/wp-content/uploads/2020/02/zac-durant-_6HzPU9Hyfg-unsplash-1-1030x687.jpg"
              ];


var captionImages =["Denial","Anger","Bargains","Sadness","Acceptance"];

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

setInterval(autoSlide,1000);
