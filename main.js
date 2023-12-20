song="";
leftWristX = 0;
leftWristY = 0;
RightWristX = 0;
RightWristY = 0;
function preload()
{
 song=loadSound("music.mp3")
}
function setup()
{
canvas=createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(Video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
 console.log('Posenet Is Initialized');

}
function draw()
{
    image(video,0,0,600,500);

}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWrist X = "+leftWristX+"leftWrist Y = "+leftWristY);
        RightWristX = results[0].pose.RightWrist.X;
        RightWristY = results[0].pose.RightWristY.Y;
        console.log("RightWrist X = "+RightWristX+"RghtWrist Y = "+RightWristY);
    }
}

