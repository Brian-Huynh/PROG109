//Function that creates the Rhombus

function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) { 
  upLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  upRight(pHeight, pColorEven, pColorOdd, pSymbol);
  downLeft(pHeight, pColorEven, pColorOdd, pSymbol);
  downRight(pHeight, pColorEven, pColorOdd, pSymbol);
  
}

//UpperLeft Rhombus poriton
function upLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  
  for (i=1;i<=pHeight;i++){
    
    rLine +="<p>";
    
    //Fill spaces in the row
    for(x=1;x<=pHeight-i;x++){
      rLine +="<span class='space'>" + pSymbol+ "</span>";
      
    }

    //Create each line on the Rhombus
    for(j=x;j<=pHeight;j++){

      //Is the position even or odd so we change the color
      if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";

      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    
    rLine +="</p>";

  }
  
  document.getElementById("upLeft").innerHTML = rLine; //Enter resulting HTML code in upLeft div

}

//Upper Right Rhombus portion
function upRight(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  
  for (i=0;i<pHeight;i++){
    
    rLine +="<p>";
    

    //Create each line on the Rhombus
    for(j=0;j<=i;j++){

      //Is the position even or odd so we change the color
      
      if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";

      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
    
    rLine +="</p>";

  }
  
  document.getElementById("upRight").innerHTML = rLine; //Enter resulting code in upRight div

}

//Lower left rhombus portion
function downLeft(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  
  for (i=pHeight;i > 0;i--){
    
  rLine +="<p>"; 
    
    if (i < pHeight) { //Checks to see if the first row is finished and can begin to add spaces
      
      //Add spaces for lower portion of the rhombus
      for (x=1;x<=pHeight-i;x++) {
        rLine +="<span class='space'>" + pSymbol+ "</span>";

      }
          
    }
    
    
    
    //Create each line on the Rhombus
    for(j=x;j<=pHeight;j++){


      //Is the position even or odd so we change the color
      if (j%2)
        
        //even       
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";

      else
        
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";


    }

    rLine +="</p>";

  }

  document.getElementById("downLeft").innerHTML = rLine;

}


//Lower Right Rhombus poriton
function downRight(pHeight, pColorEven, pColorOdd, pSymbol){

  var rLine ="";

  for (i=pHeight;i > 0;i--){

  rLine +="<p>";

    //Create each line on the Rhombus
    for(j=0;j<i;j++){


      //Is the position even or odd so we change the color
      if (j%2)
        
        //even       
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";

      else
        
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";


    }

    rLine +="</p>";

  }

  document.getElementById("downRight").innerHTML = rLine;

}

