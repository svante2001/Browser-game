let arr_rør;
let player1;
let player_x;
let player_y;
let points = 0;
let dead = false;
let highscore = 0;

function setup() {
  // Sætter skærm størrelsen
  createCanvas(600, 600);

  player_x = width/2;
  player_y = height/2;

  player = new player(player_x, player_y, 35, 15); // x, y, rect (x;y)
  arr_rør = [new rør(width, 25, 4), // x, b, hastighed
             new rør(width * 1.5, 25, 4)];
}

function draw() {
  // Baggrundsfarve
  background(0,100,255);

  // Kalder update og vis for player
  player.update();
  player.vis();

  // Kalder update og vis for hver rør
  arr_rør.forEach(r => {
    if (!dead) r.update();
    r.vis();
  });

  if (points > highscore) highscore = points

  textAlign(RIGHT, TOP);
  textSize(16);
  fill(0)
  text(points + " point",width-10, 10);
  text(highscore + " highscore", width-10, 40)

  textAlign(CENTER);
  textSize(18)
  fill(255, 0, 0)
  if (dead) {
    text("GAME OVER. Du fik " + points + " point", width/2, height/1.9);
    text("Tryk 'r' for at spille igen", width/2, height/1.75)
  }
}