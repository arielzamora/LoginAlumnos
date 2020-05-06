import { notStrictEqual } from 'assert';

export class actor {
    id?: string;
    idActor?: string;
    apellido?: string;
    nombre?: string;
    nacionalidad?: string;
    fechaNacimiento?: string;
    foto?: string;
    sexo?: string;

    constructor(id:string,idActor:string,apellido:string,nombre:string,foto:string,fechaNacimiento:string,sexo:string)
    {
        this.id = id;
        this.idActor = idActor;
        this.apellido = apellido;
        this.nombre = nombre;
        this.foto=foto;
        this.fechaNacimiento=fechaNacimiento;
        this.sexo=sexo;

    }
}