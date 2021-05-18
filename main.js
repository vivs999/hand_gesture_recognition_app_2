Webcam.set({
    height:300,
    width:350 ,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach('#camera');

function check(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/i1tkr2MkE/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded');
}

function speak(){
    var synth = window.speechSynthesis;
    speek_data = "The first prediction is "+prediction_1+"and the second prediction is "+prediction_2;
    var mutterThis = new SpeechSynthesisUtterance(speek_data);
    synth.speak(mutterThis);
}