class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    // Getter y setter para montoBrutoAnual
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    set montoBrutoAnual(nuevoMonto) {
        if (typeof nuevoMonto === "number") {
            this._montoBrutoAnual = nuevoMonto;
        } else {
            console.error("El monto bruto anual debe ser un número");
        }
    }

    // Getter y setter para deducciones
    get deducciones() {
        return this._deducciones;
    }

    set deducciones(nuevaDeduccion) {
        if (typeof nuevaDeduccion === "number") {
            this._deducciones = nuevaDeduccion;
        } else {
            console.error("Las deducciones deben ser un número");
        }
    }
}

export default Impuesto;