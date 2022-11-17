let ball, floor;

function setup() {
	new Canvas(242, 200);
	world.gravity.y = 10;

	ball = new Sprite();
	ball.diameter = 50;
	ball.y = 30;

	// floor = new Sprite();
	// floor.collider = 'static';
	// floor.y = 190;
	// floor.w = 400;
	// floor.h = 5;
}