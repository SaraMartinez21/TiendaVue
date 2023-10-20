export async function getJuegos(){
    const response = await fetch('./almacen.json');
    const juegos = await response.json();
    return juegos.videojuegos;
}