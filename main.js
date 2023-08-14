prediction1 = "" 
prediction2 = ""
Webcam.set({ 
    width:350, 
    height:275, 
    imageFormat : 'png', 
    pngQuality:65
});
camera = document.getElementById("camera");
Webcam.attach('#camera');



function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; 
});
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J6Ip31RDM/model.json',modelLoaded);

function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}

function gotResult(error, results){
    if (error) { 
        console.error(error); 
    } else {
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML = results[0].label;
        document.getElementById("resultEmotionName2").innerHTML = results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(results[0].label == "legal") { 
            document.getElementById("updateEmoji").innerHTML = "&#129305;"; 
        }
        if(results[0].label == "tranqulo") { 
            document.getElementById("updateEmoji").innerHTML = "&#9996;"; 
        }
        if(results[0].label == "vitoria") { 
            document.getElementById("updateEmoji").innerHTML = "&#129304;";
        }
        if(results[1].label == "legal") { 
            document.getElementById("updateEmoji2").innerHTML = "&#9994;"; 
        }
        if(results[1].label == "traquilo") { 
            document.getElementById("updateEmoji2").innerHTML = "&#128077;"; 
        }
        if(results[1].label == "vitroia") { 
            document.getElementById("updateEmoji2").innerHTML = "&#128o79;";
        }
    }
}