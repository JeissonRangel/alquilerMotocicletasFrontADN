export class Factura {
    id: number;
    idAlquiler: number;
    valorTotal: number;
    seguroVehiculo: number;
    polizaPersonal: number;
    fechCompra: Date;

    constructor(
        
        idAlquiler: number,
        
    ){
        this.idAlquiler=idAlquiler;
    }
}