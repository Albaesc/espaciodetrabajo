/* Importacion de las clases */
import {Mail} from './Mail';
import {Direccion} from './Direccion';
import {Telefono} from './Telefono';

export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _edad: number;
    private _dni: string;
    private _cumpleaños: string;
    private _colorFavorito: string;
    private _sexo: string;
    private _direccion: [Direccion];
    private _mail: [Mail];
    private _telefono: [Telefono];
    private _nota: string;

    constructor (a: string, b: string, c:number, d:string, e:string, f: string, g: string, h:[Direccion], i: [Mail], j: [Telefono], k: string){
        this._nombre= a;
        this._apellidos= b;
        this._edad= c;
        this._dni= d;
        this._cumpleaños= e;
        this._colorFavorito= f;
        this._sexo= g;
        this._direccion= h;
        this._mail= i;
        this._telefono= j;
        this._nota= k;
    }

/*metodos accesores get y set*/

public get nombre (){
    return this._nombre;
}
public get apellidos (){
    return this._apellidos;
}
public get edad (){
    return this._edad;
}
public get dni (){
    return this._dni;
}
public get cumpleaños (){
    return this._cumpleaños;
}
public get colorFavorito (){
    return this._colorFavorito;
}
public get sexo (){
    return this._sexo;
}
public get direccion (){
    return this._direccion;
}
public get mail (){
    return this._mail;
}
public get telefono (){
    return this._telefono;
}
public get nota (){
    return this._nota;
}

/*En los metodos set no añado ni dni ni cumpleaños, ya que estos datos no varían*/

public set nombre (a:string){
    this._nombre=a;
}
public set apellidos (b:string){
    this._apellidos=b;
}
public set edad (c:number){
    this._edad=c;
}
public set colorFavorito (f:string){
    this._colorFavorito=f;
}
public set sexo (g:string){
    this._sexo=g;
}
public set direccion (h:[Direccion]){
    this._direccion=h;
}
public set mail (i:[Mail]){
    this._mail=i;
}
public set telefono (j:[Telefono]){
    this._telefono=j;
}
public set nota (k:string){
    this._nota=k;
}
/* Metodo para mostrar todos los datos personales de un registro de la agenda */

    public mostrarDatos (): void{
        console.log('Nombre: ',this.nombre +' ', this.apellidos,',',
        'Edad: ',this.edad,',',
        'DNI: ',this.dni,',',
        'Cumpleaños: ',this.cumpleaños,',',
        'Color favorito: ',this.colorFavorito,',',
        'Sexo: ',this.sexo,',',
        this.direccion,
        this.mail,
        this.telefono,
        'Notas: ',this.nota,'.');
    }

/* Metodo para busqueda de persona por su DNI */

    public busquedaPorDNI (dni:string) {
       return this._dni == dni;
    }
}

