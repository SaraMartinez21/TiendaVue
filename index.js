import { getJuegos } from "./comunitiManager.js";

const { createApp } = Vue


createApp({
    data() {
        return {
            divActivo: 'portada',
            juegos: [],
            juegoActual: [],
            
        }
    },

    methods: {
        getJson() {
            getJuegos().then(nova => {
                this.juegos = nova,
                    console.log(this.juegos)
            })
        },

        insertar(id){

            const productoIncrementar = this.juegos.find(juego => juego.videojuegos === id);

            if(productoIncrementar){
                productoIncrementar.cantidad+=1;
                console.log(`Se ha incrementado la cantidad del producto ${id} en 1  unidades.`);
            }else{
                this.juegoActual.push({id, cantidad: 1});
                console.log(`No se encontró un producto con el ID ${id}`);
              
            }
            console.log(this.juegoActual);
        },

        mostrar(idDiv){
            return this.divActivo === idDiv;
        },
        cambiar(nuevoDiv){
            this.divActivo=nuevoDiv;
        }
    }

}).mount('#app');