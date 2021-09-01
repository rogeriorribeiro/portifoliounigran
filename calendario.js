exports.mensal = (compromissos) => {
    switch (compromissos) {
        case 1:
            console.log('');
            console.log('Dia 1 de Setembro - Quarta-Feira');
            console.log('08:00 - Academia');
            console.log('09:00 - Academia');
            console.log('12:00 - Almoço com a Familia');
            console.log('14:00 - Visita em cliente');
        break;
        case 2:
            console.log('');
            console.log('Dia 2 de Setembro - Quinta-Feira');
            console.log('08:00 - Aula Unigran');
            console.log('13:00 - curso de Inglês');
            console.log('15:00 - Visita em cliente');
            console.log('18:00 - Dentista');
        break;
        case 3:
            console.log('');
            console.log('Dia 3 de Setembro - Sexta-Feira');
            console.log('08:00 - Academia');
            console.log('11:00 - Portifólio Unigran');
            console.log('12:00 - Almoço com a Familia');
            console.log('14:00 - Visita em cliente');
        break;
        case 4:
            console.log('');
            console.log('Dia 4 de Setembro - Sábado');
            console.log('Viagem a negócios');
            
        break;
        case 5:
            console.log('');
            console.log('Dia 5 de Setembro - Domingo');
            console.log('Viagem em Familia');
            
        break;

        default:
            console.log('');
            console.log('Data inválida...........................');
    }
}
