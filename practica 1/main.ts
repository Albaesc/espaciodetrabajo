/* Importacion de las clases */
import {Mail} from './Mail';
import {Direccion} from './Direccion';
import {Telefono} from './Telefono';
import { Persona } from './Persona';

/* Creamos Persona 1 */

let direccion1 = new Direccion ('Av. de los Rosales',25, 2,'A', 50008,'Zaragoza','Zaragoza');
let mail1 = new Mail ('personal','albagracia.9@gmail.com');
let telefono1 = new Telefono('movil', 652124563);
let persona1 = new Persona ('Alba', 'Gracia', 26, '25124561A','29 de Noviembre','Verde', 'Mujer',[direccion1],[mail1],[telefono1],'-');

/*Creamos Persona 2 */

let direccion2 = new Direccion ('C/ Aljaferia',3, 1,'IZQ.', 50003,'Zaragoza','Zaragoza');
let mail2 = new Mail ('Trabajo','ib345_oficina@hotmail.com');
let telefono2 = new Telefono('Trabajo', 951658478);
let persona2 = new Persona ('Nicolas', 'Sanchez', 35, '45876985N','24 de Marzo','Rojo', 'Hombre',[direccion2],[mail2],[telefono2],'-');

/*Creamos Persona 3 */

let direccion3 = new Direccion ('C/ Julian Sanz Ibañez',84, 6,'C', 50017,'Zaragoza','Zaragoza');
let mail3 = new Mail ('Personal','cmartinez45@gmail.com');
let telefono3 = new Telefono('Fijo', 976451285);
let persona3 = new Persona ('Cesar', 'Martinez', 45, '23589465Y','16 de Febrero','Amarillo', 'Hombre',[direccion3],[mail3],[telefono3],'-');

/* Mostrar en pantalla los registros de personas creados */

console.log(persona1.mostrarDatos());
console.log(persona2.mostrarDatos());
console.log(persona3.mostrarDatos());

/* Añadimos nueva dirección para asignarla a la persona que encontremos por DNI */
let direccionNueva = new Direccion ('Av. Puerta Sancho', 25, 2, 'B', 50002, 'Zaragoza', 'Zaragoza');
let mailNuevo= new Mail ('Trabajo', 'cesaricav@hotmail.com');
let telefonoNuevo = new Telefono ('Movil', 652145639);
let agenda= [persona1, persona2, persona3];
let personaModificada = agenda.find(x=>x.busquedaPorDNI('23589465Y'));

/* Añado los nuevos datos a la persona que coincide con el DNI encontrado, no tenía claro como eliminar la anterior
dirección/mail/telefono, asi que al mostrar por pantalla, se ven los datos anteriores y los modificados*/

personaModificada?.direccion.push(direccionNueva);
personaModificada?.mail.push(mailNuevo);
personaModificada?.telefono.push(telefonoNuevo);


console.log(personaModificada?.mostrarDatos());



