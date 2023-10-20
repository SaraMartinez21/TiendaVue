export async function getJuegos(){
    console.log('hola');
    const response = await fetch('./almacen.json');
    const juegos = await response.json();
    return juegos.videojuegos;
}