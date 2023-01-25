let invoice = {
            number:  '1',
            client:'livinglab',
            currency:'USD',
            coords: {
                lat:42.0,
                lon:-108.61
            },
            services: ['laptops', 'coffe', 'gas', 'internet'],
            location: {cp: '31100', address: 'av americas'},
            subtotal: 500,
            IVA: 80
        };
document.writeln(invoice.client);
document.write('<br>');
document.write(invoice['client']);
document.write('<br>');
document.write(invoice.coords.lat);
document.writeln('<br>');
document.writeln(invoice.services[1])
document.writeln('<br>');
document.writeln(invoice.location.address);
