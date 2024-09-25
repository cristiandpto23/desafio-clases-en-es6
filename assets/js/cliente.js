class Cliente {
    constructor(nombre) {
        this._nombre = nombre;
        this.impuesto = null;  // Relación con la clase Impuesto
    }

    // Getter y setter para el nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    // Método para calcular el impuesto a pagar
    calcularImpuesto() {
        if (this.impuesto !== null) {
            const { montoBrutoAnual, deducciones } = this.impuesto;
            return (montoBrutoAnual - deducciones) * 0.21;
        } else {
            return 0;
        }
    }
}

export default Cliente;
