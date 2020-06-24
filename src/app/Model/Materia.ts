import { notStrictEqual } from 'assert';

export class Materia {
    id?: string;
    nombre?: string;
    cuatrimestre?: number;
    cupo?: number;
    profesor?: string;
    nota?:number;
    imagen?:string

    constructor(nombre:string, cuatrimestre:number,cupo:number, profesor:string,nota:number)
    {
        this.nombre = nombre;
        this.cuatrimestre = cuatrimestre;
        this.cupo = cupo;
        this.profesor=profesor;
        this.nota=nota;
    }
}