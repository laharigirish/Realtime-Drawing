noseX=0;
noseY=0
right_wristX=0;
left_wristX=0;
difference=0;


function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    
    canvas= createCanvas(550,550);
    canvas.position(560,100);
    posenet= ml5.poseNet(video,modelloaded);
    posenet.on('pose', gotposes);
}
function draw(){
    background("white");
    document.getElementById("square_size").innerHTML="Size of square is:" + difference +"px";
    fill("#584aa1");
    stroke("#010003");
    square(noseX, noseX, difference);
    
}

function modelloaded(){
    console.log("Model Loaded");
}

function gotposes(results){
if(results.length>0){
    console.log(results);
    noseX= results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    left_wristX= results[0].pose.leftWrist.x;
    right_wristX=results[0].pose.rightWrist.x;
    console.log("Nose x is"+ noseX);
    console.log("Nose Y is"+ noseY);
    console.log("Left wrist x is"+ left_wristX);
    console.log("Right wrist x is"+ right_wristX);
    difference= Math.floor(left_wristX-right_wristX);
    console.log("Difference is" + difference);
}
}

