test('Generar Factura con Estado', () => {
    // Simular datos del formulario
    document.getElementById('cliente').value = 'Juan Pérez';
    document.getElementById('servicio').value = 'Internet Premium';
    document.getElementById('monto').value = '50';
    document.getElementById('estado').value = 'Pagada';

    // Simular evento submit
    document.getElementById('invoice-form').dispatchEvent(new Event('submit'));

    // Recuperar facturas de localStorage
    const facturas = JSON.parse(localStorage.getItem('facturas'));
    const ultimaFactura = facturas[facturas.length - 1];

    // Verificar datos
    expect(ultimaFactura).toEqual({
        cliente: 'Juan Pérez',
        servicio: 'Internet Premium',
        monto: '50',
        estado: 'Pagada'
    });
});
