import qrcode from 'qrcode-terminal';

qrcode.generate("Bienvenidos a Fullstack");
qrcode.generate('https://cei.es', {small: true}, function (qrcode) {
    console.log(qrcode)})