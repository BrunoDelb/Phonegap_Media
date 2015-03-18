// Une fois la fen�tre du navigateur charg�e, initialise PhoneGap
window.addEventListener('load', function () {
    document.addEventListener('deviceready', onDeviceReady, false);
}, false);

// Cette m�thode est appel�e une fois que PhoneGap est charg�
function onDeviceReady(){
	document.querySelector("#btnCaptureCamera").addEventListener("touchstart", onCaptureCamera);
}

// Cette m�thode est appel�e quand le bouton "Capture photo" est press�
function onCaptureCamera() {
    navigator.camera.getPicture (getPhotoData, null, {sourceType: 1, quality: 60});
}

// Cette m�thode est appel�e une fois la photo prise avec l'application de cam�ra
function getPhotoData (data){
    //cameraPicture.src = "data:image/jpeg;base64," + data;
    navigator.notification.alert ('Photo r�cup�r�e', okay, 'Photo lue', 'OK');
}
