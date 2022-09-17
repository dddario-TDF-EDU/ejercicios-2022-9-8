var Auto = /** @class */ (function () {
    //el metodo constructor es publico por defecto.
    function Auto(auxModelo, auxMarca, auxPrecio) {
        this.modelo = auxModelo;
        this.marca = auxMarca;
        this.precio = auxPrecio;
        this.descuento = false;
        this.precioFinal = this.precio * 1.25;
        this.premium = false;
    }
    Auto.prototype.getDescuento = function () {
        if (this.descuento === true) {
            console.log("Tiene descuento");
        }
        else {
            console.log("No tiene descuento");
        }
    };
    Auto.prototype.setDescuento = function () {
        if (this.descuento === false) {
            this.descuento = true;
            this.setPrecioBase();
        }
    };
    Auto.prototype.setPrecioBase = function () {
        this.precio = this.precio * 0.85;
    };
    Auto.prototype.getPrecioBase = function () {
        console.log(this.precio);
    };
    Auto.prototype.setPrecioFinalPremium = function () {
        if (this.premium === true) {
            this.precioFinal = this.precioFinal * 1.25;
        }
    };
    Auto.prototype.getPremium = function () {
        if (this.premium === true) {
            console.log("Usted contrato el servicio premium, precio final: " + this.precioFinal);
        }
        else {
            console.log("Usted no contrato el servicio premium, precio final: " + this.precioFinal);
        }
    };
    Auto.prototype.setPremium = function () {
        console.log("Usted decidio añadir el servicio premium.");
        this.premium = true;
        this.setPrecioFinalPremium();
        console.log("El precio final es: " + this.precioFinal);
    };
    return Auto;
}());
var primerAuto = new Auto("Kombi", "Volkswagen", 35000);
var segundoAuto = new Auto("Nivus", "Volkswagen", 35000);
console.log(primerAuto);
console.log(segundoAuto);
primerAuto.setPremium();
primerAuto.getDescuento();
primerAuto.getPrecioBase();
primerAuto.getPremium();
console.log(primerAuto);
console.log(segundoAuto);
