import { getJuegos } from "./comunitiManager.js";

const { createApp } = Vue


createApp({
    data() {
        return {
            divActivo: 'portada',
            juegos: [],
            juegoActual: [],
            
        };
    },

    methods: {
        async getJson() {
            this.juegos= await getJuegos();
            console.log(this.juegos);
        },

        insertar(id){

            const productoIncrementar = this.juegoActual.find(juego => juego.id === id);

            if(productoIncrementar){
                productoIncrementar.cantidad+=1;
            }else{
                this.juegoActual.push({id, cantidad: 1});
              
            }
            console.log(this.juegoActual);
        },
        quitar(id){
            const index = this.juegoActual.findIndex(juego => juego.id === id);

            if(index !== -1){
                if (this.juegoActual[index].cantidad > 1) {
                    this.juegoActual[index].cantidad -= 1;  
                }else{
                    this.juegoActual.splice(index, 1);
                }
            }
           
        },
        mostrar(idDiv){
            return this.divActivo === idDiv;
        },
        cambiar(nuevoDiv){
            this.divActivo=nuevoDiv;
        },
        calcularTotal(){
            let total = 0;
            for (const actual of this.juegoActual) {
                total += this.juegos[actual.id].precio * actual.cantidad;
                
            }
            return total;
        }
    }

}).mount('#app');