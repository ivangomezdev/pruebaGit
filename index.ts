class Producto {
    name: string;
    price: number;

    constructor(name, price) {
      this.name = name;
      this.price = price;
    }

    getPrice(){
        return this.price;
    }
}


class ProductoAlimenticio extends Producto {
    fechaCaducidad: Date;
    constructor(name, price, fechaCaducidad) {
      super(name, price);
      this.fechaCaducidad = new Date(fechaCaducidad);
    }
  
    checkCaducidad():boolean {
      const hoy = new Date();

     if(hoy >  this.fechaCaducidad){
        return true;
     }else{
        console.log(hoy)
         return false;
     }

      // [Completa la lógica para obtener si el producto está vencido]
    }
  }

  class ProductoTecnologico extends Producto {
    garantia: Date
    constructor(name,price,garantia){
        super(name,price);
        this.garantia = new Date(garantia);

    }
   
  }
}
  // Creación de la instancia
const pan = new ProductoAlimenticio("Pan Integral", 3.50, "2024-05-30");

const estaVencido = pan.checkCaducidad();
console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", pan.name);
console.log("Precio:", pan.getPrice());
console.log("Fecha de Caducidad:", pan.fechaCaducidad);