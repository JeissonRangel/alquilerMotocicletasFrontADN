export class Alquiler {
    id: number;
    personaId: number;
    motocicletaId: number;
    cantidadDiasAlquiler: number;
    planeaSalirDeLaCiudad: boolean;
    planeaLlevarParrillero: boolean;

    constructor(
        id: number,
        personaId: number,
        motocicletaId: number,
        cantidadDiasAlquiler: number,
        planeaSalirDeLaCiudad: boolean,
        planeaLlevarParrillero: boolean
    ){
        this.id=id;
        this.personaId=personaId;
        this.motocicletaId=motocicletaId;
        this.cantidadDiasAlquiler=cantidadDiasAlquiler;
        this.planeaSalirDeLaCiudad=planeaSalirDeLaCiudad;
        this.planeaLlevarParrillero=planeaLlevarParrillero;
    }
}