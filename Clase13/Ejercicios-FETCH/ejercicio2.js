fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json()) // Convertir a JSON
    .then(data => {
        // Extraer el nombre
        const name = data.name;

        // Extraer los tipos
        const types = data.types.map(typeInfo => typeInfo.type.name);

        // Mostrar los resultados
        console.log(`Nombre: ${name}`);
        console.log(`Tipos: ${types.join(', ')}`);
    })
    .catch(error => {
        // Manejar errores
        console.error('Error al obtener los datos:', error);
    });
