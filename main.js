noseX = 0;
noseY = 0;

function setup()
{
video = createCapture(VIDEO);
video.size(550, 500);


canvas = createCanvas(550,500);
canvas.position(700, 150);

poseNet = ml5.poseNet(video, model_loaded);

poseNet.on('pose', got_poses);
}


function model_loaded()
{
console.log("poseNet is initialised");
}

function got_poses(results)
{
if (results.length > 0)
{
console.log(results);
}
}

