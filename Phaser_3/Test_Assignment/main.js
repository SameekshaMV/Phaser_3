var config = {
    type: Phaser.AUTO,
    width:1300,
    height:600,
    physics: {
        default: 'arcade',
        arcade: {
          //  gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};



var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('img1', 'assets/img1.png');
    this.load.image('img2', 'assets/img2.png');
    this.load.image('img3', 'assets/img3.png');
    this.load.image('img4', 'assets/img4.png');
    this.load.image('img5', 'assets/img5.png');
    this.load.image('img6', 'assets/img6.png');
    
}
function create ()
{
    this.load.setBaseURL('http://labs.phaser.io');
    //  A simple background for our game
   img1= this.add.image(150,300, 'img1').setScale(0.5);
 img2= this.add.image(350,300,'img2').setScale(0.5);
 img3= this.add.image(550,300, 'img3').setScale(0.5);
  img4=this.add.image(750,300,'img4').setScale(0.5);
 img5=this.add.image(950,300, 'img5').setScale(0.5);
   img6=this.add.image(1150,300,'img6').setScale(0.5);

  /*  
   var particles = this.add.particles('img1');

   var emitter = particles.createEmitter({
       speed: 100,
       scale: { start: 1, end: 0 },
       blendMode: 'ADD'
   });
*/
   var img1 = this.physics.add.image(150, 300, 'img1').setScale(0.5);
   
   img1.setVelocity(100, 200);
  img1.setBounce(1,1).setScale(0.4);
   img1.setCollideWorldBounds(true);

 //emitter.startFollow(img1).setScale(0);

 var particles = this.add.particles('img2');
/*
 var emitter = particles.createEmitter({
     speed: 100,
     scale: { start: 1, end: 0 },
     blendMode: 'ADD'
 });
*/
 var img2 = this.physics.add.image(350, 300, 'img2').setScale(0.5);
 
 img2.setVelocity(100, 200);
img2.setBounce(1, 1).setScale(0.4);
 img2.setCollideWorldBounds(true);

//emitter.startFollow(img2);

var particles = this.add.particles('img3');
/*
var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
});*/

var img3 = this.physics.add.image(550, 300, 'img3').setScale(0.5);

img3.setVelocity(100, 200);
img3.setBounce(1, 1).setScale(0.4);
img3.setCollideWorldBounds(true);
//emitter.startFollow(img3);

/*
var particles = this.add.particles('img4');

var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
});*/

var img4 = this.physics.add.image(750, 300, 'img4').setScale(0.5);

img4.setVelocity(100, 200);
img4.setBounce(1, 1).setScale(0.4);
img4.setCollideWorldBounds(true);
//emitter.startFollow(img4);

/*
var particles = this.add.particles('img5');

var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
});*/

var img5 = this.physics.add.image(950, 300, 'img5').setScale(0.5);

img5.setVelocity(100, 200);
img5.setBounce(1, 1).setScale(0.4);
img5.setCollideWorldBounds(true);
//emitter.startFollow(img5);

/*
var particles = this.add.particles('img6');

var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
});
*/
var img6 = this.physics.add.image(1150, 300, 'img6').setScale(0.5);

img6.setVelocity(100, 200);
img6.setBounce(1, 1).setScale(0.4);
img6.setCollideWorldBounds(true);
//emitter.startFollow(img6);

    

}  
function update ()
{
}