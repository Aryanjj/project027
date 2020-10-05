const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bob1, bob2, bob3, bob4, bob5, roof, rope1, rope2, rope3, rope4, rope5;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width / 2, 200, 350, 30);
	bob3 = new Bob(width / 2, 500, 70);
	bob4 = new Bob(470, 500, 70);
	bob5 = new Bob(540, 500, 70);
	bob2 = new Bob(330, 500, 70);
	bob1 = new Bob(260, 500, 70);
	rope1 = new Rope(bob1.body, {
		x: 260,
		y: 200
	});
	rope2 = new Rope(bob2.body, {
		x: 330,
		y: 200
	});
	rope3 = new Rope(bob3.body, {
		x: width / 2,
		y: 200
	});
	rope4 = new Rope(bob4.body, {
		x: 470,
		y: 200
	});
	rope5 = new Rope(bob5.body, {
		x: 540,
		y: 200
	});
	keyPressed();

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(220);

	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();


	drawSprites();

}

function keyPressed() {
	if (keyDown === UP_ARROW) {

		Matter.Body.applyForce(bob1.body, bob1.body.position, {
			x: -50,
			y: -45
		})
	}
}