export class Motocicleta {
    id: string;
    nombre: string;
    valorMotocicleta: number;
    anioModelo: number;
    disponible: boolean;

    constructor(
        id: string, 
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