//all js selector
let imgBox = document.getElementById("imgBox");
let qrimage = document.getElementById("qrimage");
let qrtext = document.getElementById("qrtext");


//main function generator
function generateQR() {
    if (qrtext.value.length > 0) {
        // qr code api
        qrimage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        imgBox.classList.add("show-img");
    }
    else {
        qrtext.classList.add('error');
        setTimeout(() => {
            qrtext.classList.remove('error');
        }, 1000);
    }
}


// Reset function 
function clr() {

    qrtext.value = " ";

}