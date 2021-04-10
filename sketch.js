var database ,dog,dog1,dog2
var position
var feed,add
var foodStock
var Feedtime
var Lastfeed
//Create variables here

function preload()

{
  dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  


  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
  var dogo = database.ref('Food');
  dogo.on("value", readFoodStock, showError);
  feed = createButton("FEED DRAGO")
  feed.position(500,15)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,15)
  add.mousePressed(AddFood)

} 

function draw(){
 background(46,139,87);
 
 drawSprites();
  
 fill(255,255,254);
 textSize(15);

drawSprites();
fill (rgb(0,0,20))
textSize(20)
text("Press the Up Arrow to feed Drago",100,50)

textSize (30)
text("Food Remaining :"+ foodStock , 115 , 100)
}
function readFoodStock(data){
  position = data.val();
  //foodStock.updateFoodStock
}

function showError(){
  console.log("Error in writing to the database");
}

function writeFoodStock(nazo){
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('/').set({
    'Food': nazo
  })

}
function AddFood(){

database.ref('/').update({
  Food:x
}

)
}
function FeedDog(){

dog.addImage(dogimg2)
foodStock.updateFoodStock(foodStock.getFoodStock()-1)
 database.ref('/').update({
   Food:foodStock.getFoodStock(),
   FeedTime:hour ()
  })
}