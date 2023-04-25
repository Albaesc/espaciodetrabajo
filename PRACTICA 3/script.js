if (window.File && window.FileReader && window.FileList) {

    const videoUploaded=document.getElementById("video-uploaded");
    const playButton=document.getElementById("play-button");
    const pauseButton= document.getElementById("pause-button");
    const volumeUpButton= document.getElementById("volume-up-button");
    const volumeDownButton= document.getElementById("volume-down-button");
    const controls= document.getElementById("controls");
    const videoFile= document.getElementById("video-file");
    const message=document.getElementById("loading-message");

    //creamos funcion para leer archivo file y mostrarlo
    
    videoFile.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const videoURL = URL.createObjectURL(file);
            videoUploaded.src = videoURL;
        }
        if(file && file.type.includes('video')){
            message.removeAttribute('hidden');
            controls.removeAttribute('hidden');
        setTimeout(() => {
            message.setAttribute('hidden',true);
        }, 3000);
    } else {
        alert('Formato no válido, seleccione archivo tipo video')
    }
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

} else {
        alert ('File APIs no están soportadas por este navegador');
     }
  
      
      