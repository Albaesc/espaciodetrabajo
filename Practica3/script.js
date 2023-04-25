if(window.file && window.FileReader && window.FileList){

  const videoUploaded=document.getElementById("video-uploaded");
  const playButton=document.getElementById("play-button");
  const pauseButton= document.getElementById("pause-button");
  const volumeUpButton= document.getElementById("volume-up-button");
  const volumeDownButton= document.getElementById("volume-down-button");
  const controls= document.getElementById("controls");
  
  //creamos funcion para leer archivo file y mostrarlo
  
  function onFileSelected (e){
    let file= e.target.files[0];
    let reader= new FileReader();
    reader.readAsDataURL(file);
    reader.onload= function (e) {
      video.src = e.target.result;
    };
  }
//comprobamos que el formato sea el correcto
  
  if(!file.type.match ('video.*')){
    let loadingMessage= document.createElement ('p');
    loadingMessage.innerHTML= 'El formato no es correcto. Debe ser de tipo video';
    videoUploaded.insertBefore(loadingMessage, null);
  } else {
    controls.removeAttribute ('hidden');
    let loadingVideo = document.createElement('p');
    loadingVideo.innerHTML = 'Cargando...Puede tardar unos minutos...';
    videoUploaded.insertBefore(loadingVideo, null);
  }
videoUploaded.addEventListener ('canplay',() => {
  videoUploaded.removeChild (loadingVideo);
});
  //añadimos eventos de botones de control
 
  playButton.addEventListener ('click', () => {
   videoUploaded.play();
  });
  pauseButton.addEventListener ('click', () => {
   videoUploaded.pause();
  });
  volumeUpButton.addEventListener ('click', () => {
   videoUploaded.volume += 0.1;
  });
  volumeDownButton.addEventListener ('click', () => {
   videoUploaded.volume -= 0.1;
  });
}; else {
   alert ('File APIs no están soportadas por este navegador');
}
    
    
