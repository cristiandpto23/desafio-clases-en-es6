// se importan las clases
import Cliente from './cliente.js';
import Impuesto from './impuestos.js';


//ejemplo de uso
const cliente1 = new Cliente("Juanin");
const impuesto1 = new Impuesto(10000, 1000);

// se añade impuesto al objeto cliente 1
cliente1.impuesto = impuesto1;

// se imprime en consola el nombre del cliente y el impuesto a pagar
console.log(`Cliente: ${cliente1.nombre}`);
console.log(`Impuesto a pagar: ${cliente1.calcularImpuesto()}`);