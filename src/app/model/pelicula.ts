import { notStrictEqual } from 'assert';

export class pelicula {
    id?: string;
    idPelicula?: string;
    cantidadPublico?: string;
    fechaEstreno?: string;
    fotoPelicula?: string;
    nombre?: string;
    tipo?: string;

    constructor(id:string,idPelicula:string,cantidadPublico:string,fechaEstreno:string,fotoPelicula:string,nombre:string,tipo:string)
    {
        this.id = id;
        this.idPelicula=idPelicula;
        this.cantidadPublico = cantidadPublico;
        this.fechaEstreno = fechaEstreno;
        this.fotoPelicula=fotoPelicula;
        this.nombre=nombre;
        this.tipo=tipo;

    }
}