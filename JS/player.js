let l = 90;
let m = 15;
let a = 0.01;
let a_vel = 0;
let a_acc = 0;
let g = 0.02;
let cx;
let cy;
let cxo;
let cyo;

class player {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  vis() {
    fill(255);

    fill(0);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    rectMode(CORNER)

    stroke(0);
    strokeWeight(2);

    cx = l * sin(a);
    cy = l * cos(a);

    cxo = -cx + this.x;
    cyo = -cy + this.y;

    // Tegner pendulet
    line(this.x, this.y, -cx + this.x, -cy + this.y);
    fill(0);
    ellipse(cxo, cyo, m, m);


    // Udregner acceleration, hastighed og pendulets position
    // Se evt. opgave for udledelse
    a_acc = -g / -l * sin(a);
    a_vel += a_acc;
    a += a_vel;
  }

  update() {
    //this.y = this.y + 1;
    //print(x);
    if (cy < 0 && (a = PI / 2)) {
      a = (3 * PI) / 2;
    }

    // Tjekker om man dør ved at tabe pendulet
    if (a == ((3 * PI) / 2)) dead = true;



    if (this.y > height - 15) {
      this.y = height - 15;
    }
  }
}

// Movement
function keyPressed() {
  if (!dead) {
    if (keyCode == LEFT_ARROW) {
      if (a < 1) {
        a_vel += 0.02;
      } else if (a > -1) {
        a_vel += 0.02;
      } else {
        a_vel += 0.04;
      }

    } else if (keyCode == RIGHT_ARROW) {
      if (a < 1) {
        a_vel -= 0.02;
      } else if (a > -1) {
        a_vel -= 0.02;
      } else {
        a_vel -= 0.04;
      }
    }

    if (keyCode == UP_ARROW) {
      player.y -= 7;
    } else if (keyCode == DOWN_ARROW) {
      player.y += 7;
    }
  }

  if (keyCode == 82) {
    a = 0.01;
    a_vel = 0;
    a_acc = 0;
    g = 0.02;
    cx = l * sin(a);
    cy = l * cos(a);
    cxo = -cx + this.x;
    cyo = -cy + this.y;
    points = 0;
    player.x = width / 2;
    player.y = height / 2;
    arr_rør[0].x = width;
    arr_rør[1].x = width * 1.5;
    dead = false;
    bool = true;
  }
}