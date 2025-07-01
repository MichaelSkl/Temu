modalOn = false;
let linkButton;
let spinning = false;
let ruletka;
let pointer;
let ctaYposRelative = 200;
let spin = 0;
// Load the image.
function preload() {
  ruletka = loadImage('Ruletka temu v1.2.png');
  pointer = loadImage('Pointer v1.png');
  modal = loadImage("gratulacje.png");
  navbar = loadImage("Temu Header Pasek.png");
  cta = loadImage("cta.png")
  
}

function setup() {
  imageMode(CENTER);
  createCanvas(960, 540);
}

function draw() {
  background(220);
  
  translate(width/2, height/2-10);
  
  //CTA
  image(cta, 0, ctaYposRelative , cta.width/2.5,       cta.height/2.5);
  
  //Kreciolek
  if (spinning) {
  spin += 0.1219;
  spin *= 0.99;
  }
  
  rotate(spin);
  image(ruletka, 0 , 0, 300, 300);
  //spin *= 0.99;
  
  
  //Pointer
  resetMatrix();
  translate(width/2, height/2);
  image(pointer, 0, -150 , 70, 100);
  
   //Navbar
  image(navbar, 0, -20, 960, 500);
  
  //Modal
  if (spin >= 12.055) {
    modalOn = true;
    background("#0000002B")
    image(modal, 0, 0, modal.width/2.5, modal.height/2.5);
    }
}
// Koniec draw()

 function mouseClicked() {
  console.log("click detected success");
   
  //Zmienne dla CTA 
  let ctaX = width/2;
  let ctaY = height/2-10+ctaYposRelative;

  let ctaHeight = cta.height/2.5;
  let ctaWidth = cta.width/2.5;
    
  //Zmienne dla Modal
  let modalX = width/2;
  let modalY = height/2;

  let modalWidth = modal.width/2.5;  
  let modalHeight = modal.height/2.5;
  
  if (
    //CTA click
      modalOn === false &&
      mouseX < ctaX + ctaWidth/2 &&
      mouseX > ctaX - ctaWidth/2 &&
      mouseY < ctaY + ctaHeight/2 &&
      mouseY > ctaY - ctaHeight/2) 
    {
      spinning = true;
      console.log("Spin initiated!");
    } else if (
    //Modal click
    modalOn === true &&
    mouseX < modalX + modalWidth/2 &&
    mouseX > modalX - modalWidth/2 &&
    mouseY < modalY + modalHeight/2 &&
    mouseY > modalY - modalHeight/2) 
    
    {
      console.log("click detected modal");
      window.open("https://michaelskl.github.io/Temu-2/");
    }
}
