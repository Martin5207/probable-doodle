function setup(){
canvas=createCanvas(640,420);
canvas.center();
}
var img="";
function preload(){
    img=loadImage("dog_cat.jpg");
    
    img=loadImage("bowle and salad.jpg");

    img=loadImage("chair.jpg");

    img=loadImage("bed");

    img=loadImage("bottle.webp");


}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("dog",150,100);
    noFill()
stroke("red");
rect(100,59,200,150)

fill("blue");
text("cat",300,150);
noFill()
stroke("blue");
rect(290,100,200,150)

fill("pink");
text("bowl",300,300);
noFill()
stroke("pink");
rect(190,300,200,150)

}