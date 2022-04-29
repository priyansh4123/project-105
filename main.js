Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camara=document.getElementById("camara");
Webcam.attach("#camara");
function takesnapshot(){
    Webcam.snap(function(data_Uri)
    {
        document.getElementById("result").innerHTML='<img id="capture-image" src="'+data_Uri+'"/>';
    })
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/35DIPDnxC/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelloaded")
}
function check(){
    img=document.getElementById("capture-image");
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("resultimageobject").innerHTML=results[0].label;
    document.getElementById("resultimageaccuracy").innerHTML=results[0].confidence.toFixed(2);
}
}