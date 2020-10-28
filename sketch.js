const Engine = Matter.Engine // Universe
const World = Matter.World // to create a physical world
const Bodies = Matter.Bodies // to create physical objects

var myEngine, myWorld;

var box1, box2, ground;

function setup() {
    createCanvas(400, 400);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 100, 50, 100);
    ground = new Ground(200, 390, 400, 20);
}

function draw() {

    background("lightblue");


    Engine.update(myEngine)

    box1.display();
    box2.display();
    ground.display();


}