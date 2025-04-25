class Playlist {
    private _nombre: string;        // Propiedad privada para el nombre de la playlist
    private _canciones: string[];   // Arreglo privado para las canciones

    constructor(nombre: string) {
        this._nombre = nombre;       // Inicializa el nombre de la playlist
        this._canciones = [];        // Inicializa el arreglo de canciones
    }

    // Getter para el nombre de la playlist
    public get nombre(): string {
        return this._nombre;          // Devuelve el nombre de la playlist
    }

    public agregarCancion(cancion: string): void {
        if (!cancion) {
            console.log("El título de la canción no puede estar vacío."); // Mensaje de error si el título está vacío
        } else {
            this._canciones.push(cancion); // Agrega la canción a la lista
            console.log(`Canción '${cancion}' agregada a la playlist.`);
        }
    }

    public eliminarCancion(cancion: string): void {
        const index = this._canciones.indexOf(cancion);
        if (index === -1) {
            console.log(`La canción '${cancion}' no está en la playlist.`); // Mensaje si la canción no se encuentra
        } else {
            this._canciones.splice(index, 1); // Elimina la canción de la lista
            console.log(`Canción '${cancion}' eliminada de la playlist.`);
        }
    }

    public listarCanciones(): string[] {
        return this._canciones; // Devuelve el arreglo de canciones
    }
}

// Uso de la clase Playlist
const miPlaylist = new Playlist('Mis Favoritas');
miPlaylist.agregarCancion('Despacito');
miPlaylist.agregarCancion('');
miPlaylist.eliminarCancion('Sin Piedad');
miPlaylist.eliminarCancion('Despacito');
console.log(`Canciones en '${miPlaylist.nombre}': ${miPlaylist.listarCanciones()}`); // Accediendo al nombre con el getter

