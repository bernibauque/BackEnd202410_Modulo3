function registrarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("✅ Usuario registrado.");
            resolve();
        }, 2000);
    });
}

function enviarEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("📧 Email de bienvenida enviado.");
            resolve();
        }, 1000);
    });
}

registrarUsuario()
    .then(() => enviarEmail())
    .then(() => console.log("🎉 ¡Todo listo! Bienvenido."))
    .catch(() => console.error("❌ Hubo un error en el proceso."));
