let bool = true;
class rør {
  // Constructor af rør
  // x = der hvor røret spawner
  // b = bredden af rør
  // hastighed = hvor hurtigt et rør bevæger sig
  constructor(x, b, hastighed) {
    // Tilfældig størrelse af rør
    this.top = random(80, (height / 2) - 65);
    this.bund = random(80, (height / 2) - 65);

    // Sætter variablerne til lokale i denne klasse
    this.x = x;
    this.b = b;
    this.hastighed = hastighed;
  }

  vis() {
    // Rør farve
    //fill(0,150,255);
    fill(255);
    // Render rør
    rect(this.x, 0, this.b, this.top);
    rect(this.x, height - this.bund, this.b, this.bund);
  }

  update() {
    // Sætter rørne til at bevæge sig med 'hastisghed'
    this.x -= this.hastighed;

    // Stopper røret når den går ud af venstre side og sætter...
    // ...den i højre side
    if (this.x < 0) {
      this.x = width;
      // randomizer rørnes størrelse igen
      this.top = random(120, (height / 2) - 50);
      this.bund = random(120, (height / 2) - 50);
      bool = true;
    }

    // Giver point
    if (this.x <= player.x && bool) {
      points++;
      bool = false;
    }

    // Tjekker om man dør
    // Rect
    let xBund = height - this.bund;
    if ((this.x < player.x + (player.w / 2) && this.x + this.b > player.x - player.w / 2) && (player.y - player.h / 2 < this.top || player.y + player.h / 2 > xBund)) dead = true;

    // Ellipse
    if ((this.x < cxo + m && this.x + this.b > cxo - m) && (cyo - m < this.top || cyo + m > xBund)) dead = true;
  }
}