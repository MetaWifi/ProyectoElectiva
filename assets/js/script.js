document.addEventListener("DOMContentLoaded", function () {
    

    // Generar Factura
    const invoiceForm = document.getElementById('invoice-form');
    if (invoiceForm) {
        invoiceForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const cliente = document.getElementById('cliente').value;
            const servicio = document.getElementById('servicio').value;
            const monto = document.getElementById('monto').value;

            // Crear la factura
            const factura = {
                cliente,
                servicio,
                monto,
                estado: 'Generada', // Estado de la factura
                fecha: new Date().toLocaleString() // Fecha y hora
            };

            // Guardar la factura en el almacenamiento local
            let facturas = JSON.parse(localStorage.getItem('facturas')) || [];
            facturas.push(factura);
            localStorage.setItem('facturas', JSON.stringify(facturas));

            // Mostrar la factura generada
            document.getElementById('invoice-display').innerHTML = `
                <p><strong>Cliente:</strong> ${cliente}</p>
                <p><strong>Servicio:</strong> ${servicio}</p>
                <p><strong>Monto:</strong> $${monto}</p>
                <p><strong>Estado:</strong> ${factura.estado}</p>
                <p><strong>Fecha:</strong> ${factura.fecha}</p>
            `;
        });
    }

    // Mostrar Facturas en la página de Historial
    if (document.getElementById('facturas-list')) {
        const facturas = JSON.parse(localStorage.getItem('facturas')) || [];
        let invoicesList = document.getElementById('facturas-list');
        invoicesList.innerHTML = '';

        facturas.forEach(factura => {
            invoicesList.innerHTML += `
                <div>
                    <p><strong>Cliente:</strong> ${factura.cliente}</p>
                    <p><strong>Servicio:</strong> ${factura.servicio}</p>
                    <p><strong>Monto:</strong> $${factura.monto}</p>
                    <p><strong>Estado:</strong> ${factura.estado}</p>
                    <p><strong>Fecha:</strong> ${factura.fecha}</p>
                    <hr>
                </div>
            `;
        });
    }



// Registro de Usuario
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const study = document.getElementById('study').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            alert('Este usuario ya existe. Por favor, inicia sesión.');
        } else {
            users.push({ name, email, age, study,username, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = 'login.html';
        }
    });
}

// Mostrar Perfil de Usuario
if (window.location.pathname.includes('perfil.html')) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUser = users.find(user => user.email === localStorage.getItem('currentUserEmail'));

    if (loggedInUser) {
        document.getElementById('name').value = loggedInUser.name;
        document.getElementById('email').value = loggedInUser.email;
        document.getElementById('age').value = loggedInUser.age;
        document.getElementById('study').value = loggedInUser.study;
        document.getElementById('username').value = loggedInUser.study;
    }
}

// Inicio de Sesión
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            alert('Inicio de sesión exitoso.');
            window.location.href = 'dashboard.html';
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });
}

// Manejo de Cierre de Sesión
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem('isLoggedIn');
        alert('vas a iniciar sesión.');
        window.location.href = 'login.html';
    });
}




  
    

});


