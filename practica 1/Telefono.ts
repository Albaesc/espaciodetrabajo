export class Telefono {
    private _tipo: string;
    private _numero: number;
    constructor (tipo: string, numero: number) {
        this._tipo= tipo;
        this._numero= numero;
    }

    /*metodos accesores get y set*/

    public set tipo (tipo: string){
        this._tipo= tipo;
     }
     public set numero (numero: number){
        this._numero= numero;
      }

    public get tipo (){
        return this._tipo;
    }
    public get numero (){
        return this._numero;
    }
}