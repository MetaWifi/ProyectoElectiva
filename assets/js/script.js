document.addEventListener('DOMContentLoaded', function () {

    // Gestión de inicio de sesión
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (username === 'admin' && password === '123456') {
                window.location.href = 'dashboard.html';
            } else {
                document.getElementById('error-message').style.display = 'block';
            }
        });
    }

    // Generar Factura
    const invoiceForm = document.getElementById('invoice-form');
    if (invoiceForm) {
        invoiceForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const cliente = document.getElementById('cliente').value;
            const servicio = document.getElementById('servicio').value;
            const monto = document.getElementById('monto').value;

            const factura = {
                cliente,
                servicio,
                monto
            };

            let facturas = JSON.parse(localStorage.getItem('facturas')) || [];
            facturas.push(factura);
            localStorage.setItem('facturas', JSON.stringify(facturas));

            document.getElementById('invoice-display').innerHTML = `
                <p><strong>Cliente:</strong> ${cliente}</p>
                <p><strong>Servicio:</strong> ${servicio}</p>
                <p><strong>Monto:</strong> $${monto}</p>
            `;
        });
    }

    // Mostrar Facturas
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


