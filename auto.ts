class Auto {
    private modelo: string;
    private marca: string;
    private precio: number;
    private precioFinal: number;
    private descuento: boolean;
    private premium: boolean;

    //el metodo constructor es publico por defecto.

    constructor(auxModelo: string, auxMarca: string, auxPrecio: number) {
        this.modelo = auxModelo;
        this.marca = auxMarca;
        this.precio = auxPrecio;
        this.descuento = false;
        this.precioFinal = this.precio * 1.25;
        this.premium = false;
    }

    public getDescuento(): void {
        if (this.descuento === true) {
            console.log("Tiene descuento");
        } else {
            console.log("No tiene descuento");
        }
    }

    public setDescuento(): void {
        if (this.descuento === false) {
            this.descuento = true;
            this.setPrecioBase();
        }
    }

    public setPrecioBase(): void {
        this.precio = this.precio * 0.85;
    }

    public getPrecioBase(): void {
        console.log(this.precio);
    }

    public setPrecioFinalPremium(): void {
        if (this.premium === true) {
            this.precioFinal = this.precioFinal * 1.25;
        }
    }

    public getPremium(): void {
        if (this.premium === true) {
            console.log("Usted contrato el servicio premium, precio final: " + this.precioFinal);
        } else {
            console.log("Usted no contrato el servicio premium, precio final: " + this.precioFinal);
        }
    }

    public setPremium(): void {
        console.log("Usted decidio añadir el servicio premium.")
        this.premium = true;
        this.setPrecioFinalPremium();
        console.log("El precio final es: " + this.precioFinal);
    }
}

let primerAuto: Auto = new Auto("Kombi", "Volkswagen", 35000);
let segundoAuto: Auto = new Auto("Nivus", "Volkswagen", 35000);

console.log(primerAuto);
console.log(segundoAuto);
primerAuto.setPremium();
primerAuto.getDescuento();
primerAuto.getPrecioBase();
primerAuto.getPremium();
console.log(primerAuto);
console.log(segundoAuto);

