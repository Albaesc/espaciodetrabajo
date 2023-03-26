export class Direccion {
    private _calle: string;
    private _numero: number;
    private _piso: number;
    private _letra: string;
    private _cp: number;
    private _poblacion: string;
    private _provincia: string;

    constructor (a: string, b: number, c:number, d: string, e:number, f: string, g: string) {
        this._calle= a;
        this._numero= b;
        this._piso= c;
        this._letra= d;
        this._cp= e;
        this._poblacion= f;
        this._provincia= g;
    }

    /*metodos accesores get y set*/

        public set calle (a: string){
           this._calle= a;
        }
        public set numero (b: number){
            this._numero= b;
         }
         public set piso (c: number){
            this._piso= c;
         }
         public set letra (d: string){
            this._letra= d;
         }
         public set cp (e: number){
            this._cp= e;
         }
         public set poblacion (f: string){
            this._poblacion= f;
         }
         public set provincia (g: string){
            this._provincia= g;
         }
         public get calle (){
            return this._calle
         }
         public get numero (){
            return this._numero
         }
         public get piso (){
            return this._piso
         }
         public get letra (){
            return this._letra
         }
         public get cp (){
            return this._cp
         }
         public get poblacion (){
            return this._poblacion
         }
         public get provincia (){
            return this._provincia
         }

}