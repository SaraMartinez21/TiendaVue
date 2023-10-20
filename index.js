import { getJuegos } from "./comunitiManager.js";

const { createApp } = Vue


createApp({
    data() {
        return {
            divActivo: 'portada',
            juegos: []
        }
    },

    methods: {
        getJson() {
            console.log('adios');
            getJuegos().then(nova => {
                this.juegos = nova,
                    console.log(this.juegos)
            })
        },

        carrito(id){

            const productoIncrementar = this.juegos.find(getJson().videojuegos == id);

            if(productoIncrementar){
                productoIncrementar.cantidad+=1;
                console.log(`Se ha incrementado la cantidad del producto ${id} en 1  unidades.`);
            }else{
                this.productoIncrementar.push({id, cantidad: 1});
                console.log(`No se encontró un producto con el ID ${id}`);
              
            }
            console.log(this.productoIncrementar);
        },

        mostrar(idDiv){
            if (this.divActivo==idDiv) return true;
            else return false;
        }

    }

}).mount('#app');