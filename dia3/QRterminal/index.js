import qrcode from 'qrcode-terminal';

qrcode.generate("Bienvenidos a Fullstack");
qrcode.generate('https://cei.es', {small: true}, function (qrcode) {
    console.log(qrcode)})// objeto con propiedades orque la libreria lo dice asi fue copiar y pegar el codigo