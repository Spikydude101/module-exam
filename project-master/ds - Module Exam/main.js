// DS - MODULE EXAM



// Canvas Setup

let cnv = document.getElementById('myCanvas');

let ctx = cnv.getContext('2d')

cnv.width = 1200;
cnv.height = 700;


let laserz = [];


// Global Vars
let space;

// Event Listeners
document.addEventListener('mousemove' , mouseEventHandler );
document.addEventListener('keydown' , keypressHandler);


// Canvas Drawing

for (let i = 0; i < 100; i++){
    laserz.push({
        x:0,
        y: Math.floor(Math.random() * cnv.height)  , 
        speed:Math.floor(Math.random() * 30 + 10 ) , 
        width:Math.floor(Math.random()* 200  + 50), 
        height:5
    });
 


       
        

}





requestAnimationFrame(drawLaserz);


function drawLaserz() {
    //draw lasers 

    //Make image appear as background
   
    let space = document.getElementById('spacebg');



    
    ctx.drawImage(space, 0, 0, cnv.width, cnv.height);


    for(let i = 0 ; i < laserz.length; i++) {

    
        ctx.fillStyle = 'red';
        
        ctx.fillRect(laserz[i].x , laserz[i].y , laserz[i].width , laserz[i].height); 
        





        
        if(laserz[i].x < cnv.width) {
            laserz[i].x +=laserz[i].speed;
        }else if(laserz[i].x >= cnv.width){
            laserz[i].x = 0;
            laserz[i].y = Math.round(Math.random()* cnv.height);
        }
    }









    


    
    requestAnimationFrame(drawLaserz);
}








// getRandomColor
function getRandomColor() {

}


// mouseEventHandler Handler
function mouseEventHandler(event){
    // Get rectangle info about canvas location
    let ident = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnv.width);
    mouseY = Math.round(event.clientY - cnv.height);
    for(let i = 0; i < laserz.length;i++){
        if(ident == mouseY){
            laserz[i].y = mouseY;
        }else if(ident != mouseY){
            laserz[i].y != mouseY;
        }
    }

    

 


}

// keypressHandler
function keypressHandler(event){
   console.log(event.code);
   if(event.code == 'KeyQ') {
       for(let i = 0; i < laserz.length; i++){
            laserz[i].speed += 1;
        }
        
    
    }else if(event.code == 'KeyZ') {
       for(let i = 0; i < laserz.length; i ++){
            laserz[i].speed -= 1;
        }
    
    }    

}

// myBonusFunction
function myBonusFunction(){

}