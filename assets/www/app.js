// Une fois la fenêtre du navigateur chargée, initialise PhoneGap
window.addEventListener('load', function () {
    document.addEventListener('deviceready', onDeviceReady, false);
}, false);

// Cette méthode est appelée une fois que PhoneGap est chargé
function onDeviceReady(){
	document.querySelector("#btnCaptureCamera").addEventListener("touchstart", onCaptureCamera);
}

// Cette méthode est appelée quand le bouton "Capture photo" est pressé
function onCaptureCamera() {
    navigator.camera.getPicture (getPhotoData, null, {sourceType: 1, quality: 60});
}

// Cette méthode est appelée une fois la photo prise avec l'application de caméra
function getPhotoData (data){
    //cameraPicture.src = "data:image/jpeg;base64," + data;
    navigator.notification.alert ('Photo récupérée', okay, 'Photo lue', 'OK');
}
