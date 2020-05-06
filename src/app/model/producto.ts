

export class Producto {
    id?: string;
    idProducto?: string;
    descripcion?: string;
    fechaVencimiento?: string;
    precio?:string;
    tipo?:string;
    foto?: string;
    tipoFoto?: string;
    rutaFoto?: string;

    constructor(idProducto:string,
                descripcion:string,
                fechaVencimiento:string,
                precio:string,
                tipo:string)
    {
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.fechaVencimiento = fechaVencimiento;
        this.precio=precio;
        this.tipo=tipo;
    }
}