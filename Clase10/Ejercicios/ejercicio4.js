const tarea1 = new Promise((resolve) =>
    setTimeout(() => resolve("Tarea 1 completada"), Math.random() * 5000)
);

const tarea2 = new Promise((resolve) =>
    setTimeout(() => resolve("Tarea 2 completada"), Math.random() * 5000)
);

const tarea3 = new Promise((resolve, reject) =>
    setTimeout(() => reject("Tarea 3 falló"), Math.random() * 5000)
);

Promise.race([tarea1, tarea2, tarea3])
    .then((resultado) => {
        console.log("🚀 La tarea ganadora es:", resultado);
    })
    .catch((error) => {
        console.error("❌ La primera tarea falló:", error);
    });
