let start = true;
let arr_rør;
let player1;
let player_x;
let player_y;
let points = 0;
let dead = false;
let highscore = 0;
let state = false;

function setup() {
  // Sætter skærm størrelsen
  createCanvas(900, 600);

  player_x = width/2;
  player_y = height/2;

  player = new player(player_x, player_y, 35, 15); // x, y, rect (x;y)
  arr_rør = [new rør(width, 25, 3.5), // x, b, hastighed
             new rør(width * 1.5, 25, 3.5)];
}

function draw() {
  // Fjerne alt på skærmen for en fram tegnes
  clear();
  // Baggrundsfarve
  background(0,100,255);

  // Velkomst besked
  if (!state) {
    textAlign(CENTER);
    textSize(18)
    fill(0)
    text("VELKOMMEN", width/2, height/3);
    text("Benyt piletasterne for at spille", width/2, height/2.7);
    text("Tryk 'Enter' for at forsætte", width/2, height/1.5);
  }

  if (state) {
  // Kalder update og vis for player
  player.update();
  player.vis();

  // Kalder update og vis for hver rør
  arr_rør.forEach(r => {
    if (!dead) r.update();
    r.vis();
  });

  if (points > highscore) highscore = points

  // Visser spillerens score samt highscore
  textAlign(RIGHT, TOP);
  textSize(16);
  fill(0)
  text(points + " point",width-10, 10);
  text(highscore + " highscore", width-10, 40)


  // Hvis man dør visses dette
  if (dead) {
    fill(150)
    rect(width/2.75,height/2.3,245,150)

    textAlign(CENTER);
    textSize(18)
    fill(255, 0, 0)
    text("GAME OVER. Du fik " + points + " point", width/2, height/1.9);
    text("Tryk 'r' for at spille igen", width/2, height/1.75)
    }
  }
}