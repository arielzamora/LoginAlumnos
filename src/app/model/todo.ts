import { notStrictEqual } from 'assert';

export class Todo {
    id?: string;
    idTodo?: string;
    descripcion?: string;
    estado?: string;
    foto?: string;
    tipoFoto?: string;
    nombreFoto?: string;

    constructor(id:string,descripcion:string,estado:string,foto:string,tipoFoto:string,nombreFoto:string)
    {
        this.id = id;
        this.descripcion = descripcion;
        this.estado = estado;
        this.foto=foto;
        this.tipoFoto=tipoFoto;
        this.nombreFoto=nombreFoto;

    }
}