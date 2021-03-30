//Create variables here
var dog, happydog;
var dogimg, happydogimg;
var database;
var foodS, foodStock;

function preload()
{
	//load images here
  dogimg = loadImage("images/dogImg.png");
  happydogimg = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,30,40);
  dog.scale = 0.2;
  dog.addImage("dog", dogimg);
  var foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background("lightgreen");

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dog", happydogimg);
  }
  drawSprites();
  //add styles here
    textSize(15);
    fill("black");
    text("Note: Press UP_ARROW Key To Feed Drago Milk.", 100, 50);


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  
  database.ref('Food').update({
    Food:x
  })
  

}


