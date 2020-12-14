var ball;
database=firebase.database("ball.position");
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var dbref=database.ref('ball/position');
    dbref.on("value" ,readposition,ShowError )

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        Writeposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        Writeposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        Writeposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        Writeposition(0,+1);
    }
    drawSprites();
}
function Writeposition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })}

function readpositionData(data){
position =data.val()
    ball.x=position.x
    ball.x=position.x
}

function ShowError(){
    console.log("Error in writing to the database")
}
