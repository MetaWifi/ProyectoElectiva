test('Mostrar Facturas en Historial', () => {
    // Simular datos en localStorage
    const facturasMock = [
        { cliente: 'Juan Pérez', servicio: 'Internet Premium', monto: '50', estado: 'Pagada' },
        { cliente: 'María López', servicio: 'Internet Básico', monto: '30', estado: 'Pendiente' }
    ];
    localStorage.setItem('facturas', JSON.stringify(facturasMock));

    // Simular carga de la página
    document.dispatchEvent(new Event('DOMContentLoaded'));

    // Verificar contenido en el historial
    const facturasList = document.getElementById('facturas-list').innerHTML;
    expect(facturasList).toContain('Juan Pérez');
    expect(facturasList).toContain('Pagada');
    expect(facturasList).toContain('María López');
    expect(facturasList).toContain('Pendiente');
});
