export class Mail {
    private _tipo: string;
    private _direccion: string;
    constructor (tipo: string, direccion: string) {
        this._tipo= tipo;
        this._direccion= direccion;
    }
     /*metodos accesores get y set*/

     public set tipo (tipo: string){
        this._tipo= tipo;
     }
     public set direccion (direccion: string){
        this._direccion= direccion;
      }

    public get tipo (){
        return this._tipo;
    }
    public get direccion (){
        return this._direccion;
    }
}