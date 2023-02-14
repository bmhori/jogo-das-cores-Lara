var quadrado1,quadrado2,quadrado3,quadrado4,quadrado5,quadrado6,quadrado7,quadrado8,quadrado9;
var R
var G
var B
var i;


function setup() {
 createCanvas(600,600)
 quadrado1 = createSprite( 50,50,60,60 ) 
 
 quadrado2 = createSprite( 50,120,60,60 )

 quadrado3 = createSprite( 50,190,60,60 )
 quadrado4 = createSprite( 120,50,60,60 )
 quadrado5 = createSprite( 120,120,60,60)
 quadrado6 = createSprite( 120,190,60,60)
 quadrado7 = createSprite( 190,50,60,60 )
 quadrado8 = createSprite( 190,120,60,60 )
 quadrado9 = createSprite( 190,190,60,60 )

colorir();
}
  



function draw() {
  background("black")
    
   
  drawSprites();


}

function randomColor(){
  
  R = Math.floor(random(0,256))
 
  G = Math.floor(random(0,256))
  
  B = Math.floor(random(0,256))
  
}

function colorir(){
  
  for(i=0; i <= 9; i++){

    if(i===1){
      quadrado1.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
  
    if(i===2){
      quadrado2.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
  
    if(i===3){
      quadrado3.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
  
    if(i===4){
      quadrado4.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
    if(i===5){
      quadrado5.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
  
    if(i===6){
      quadrado6.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
  
    if(i===7){
      quadrado7.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
  
    if(i===8){
      quadrado8.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
  
    if(i===9){
      quadrado9.shapeColor = (rgb(R,G,B));
      console.log(R,G,B)
    }
  
   randomColor();
  
    }
}
