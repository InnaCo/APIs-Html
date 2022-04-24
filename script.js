
if(window.File && window.FileReader && window.FileList){
    console.log("Todas las APIs soportadas");
}else{
    console.log("La API de File no es soportada en este navegador");
}

function selectedFile(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(e){
        var src = document.createAttribute("src");
        src.value = e.target.result;
        video.setAttributeNode(src);
        alert("Wait please! Your video is downloading now!"); 
    };
    reader.readAsDataURL(file);
}
document.getElementById("fileVideo").addEventListener("change", selectedFile, false);
