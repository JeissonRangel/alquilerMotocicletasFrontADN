export class Motocicleta {
    id: number;
    nombre: string;
    valorMotocicleta: number;
    anioModelo: number;
    disponible: boolean;

    constructor(
        id: number, 
        nombre: string, 
        valorMotocicleta: number, 
        anioModelo: number, 
        disponible: boolean
        
    ){
    this.id = id;
    this.nombre = nombre;
    this.valorMotocicleta = valorMotocicleta;
    this.anioModelo = anioModelo;
    this.disponible = disponible;    
    }
}