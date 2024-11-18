document.addEventListener('DOMContentLoaded', function () {

   
    // Gestión de inicio de sesión
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === username && password === password) {
                window.location.href = 'dashboard.html';
            } else {
                document.getElementById('error-message').style.display = 'block';
            }
        });
    }
     // Lista de usuarios registrados
     const usuarios = [
        { nombre: "Juan Pérez", username: "juan.perez", password: "12345" },
        { nombre: "María López", username: "maria.lopez", password: "54321" },
        { nombre: "Administrador", username: "admin", password: "123456" } // Usuario adicional
    ];

    // Función para manejar el inicio de sesión
    function iniciarSesion(username, password) {
        const usuarioEncontrado = usuarios.find(
            u => u.username === username && u.password === password
        );

        if (usuarioEncontrado) {
            alert(`¡Bienvenido, ${usuarioEncontrado.nombre}!`);
            // Redirigir al dashboard u otra página
            window.location.href = "dashboard.html";
        } else {
            document.getElementById('error-message').style.display = 'block';
        }
    }

// Generar Factura
const invoiceForm = document.getElementById('invoice-form');
if (invoiceForm) {
    invoiceForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const cliente = document.getElementById('cliente').value;
        const servicio = document.getElementById('servicio').value;
        const monto = document.getElementById('monto').value;
        const estado = document.getElementById('estado').value;

        const factura = {
            cliente,
            servicio,
            monto,
            estado
        };

        let facturas = JSON.parse(localStorage.getItem('facturas')) || [];
        facturas.push(factura);
        localStorage.setItem('facturas', JSON.stringify(facturas));

        document.getElementById('invoice-display').innerHTML = `
            <p><strong>Cliente:</strong> ${cliente}</p>
            <p><strong>Servicio:</strong> ${servicio}</p>
            <p><strong>Monto:</strong> $${monto}</p>
            <p><strong>Estado:</strong> ${estado}</p>
        `;
    });
}

// Mostrar Facturas con Estado
if (document.getElementById('facturas-list')) {
    const facturas = JSON.parse(localStorage.getItem('facturas')) || [];
    let invoicesList = document.getElementById('facturas-list');
    invoicesList.innerHTML = '';

    facturas.forEach(invoice => {
        invoicesList.innerHTML += `
            <div>
                <p><strong>Cliente:</strong> ${invoice.cliente}</p>
                <p><strong>Servicio:</strong> ${invoice.servicio}</p>
                <p><strong>Monto:</strong> $${invoice.monto}</p>
                <p><strong>Estado:</strong> ${invoice.estado}</p>
                <hr>
            </div>
        `;
    });
}

   
       

    // Perfil
    if (document.getElementById('edit-profile')) {
        const editProfileButton = document.getElementById('edit-profile');
        editProfileButton.addEventListener('click', function () {
            alert('Funcionalidad para editar el perfil aún no implementada.');
        });
    }

});


