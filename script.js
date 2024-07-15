function calcularFaltas() {
    const materias = [
        'matematica', 'portugues', 'biologia', 'fisica', 'quimica', 'filosofia', 'geografia',
        'historia', 'sociologia', 'artes', 'educacao', 'inglesa', 'eletiva1', 'eletiva2', 'eletiva3', 'eletiva4'
    ];

    const totalAulas = 200 * 6;
    let totalFaltas = 0;

    materias.forEach(materia => {
        const faltas = parseInt(document.getElementById(materia).value) || 0;
        totalFaltas += faltas;
    });

    const totalPresencas = totalAulas - totalFaltas;
    const totalMinutos = totalFaltas * 50;

    function formatarHoras(minutos) {
        const horas = Math.floor(minutos / 60);
        const min = minutos % 60;
        return `${horas}h ${min}min`;
    }

    function obterCorEMessage(minutos) {
        if (minutos <= 5000) {
            return { corClass: 'verde', mensagem: 'Está bom!' };
        } else if (minutos <= 10000) {
            return { corClass: 'amarelo', mensagem: 'Cuidado com as faltas!' };
        } else {
            return { corClass: 'vermelho', mensagem: 'Pare de faltar imediatamente!' };
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>Total de Faltas: ${totalFaltas}</p>
        <p>Total de Aulas: ${totalAulas}</p>
        <p>Total de Presenças: ${totalPresencas}</p>
    `;

    materias.forEach(materia => {
        const faltas = parseInt(document.getElementById(materia).value) || 0;
        const minutos = faltas * 50;
        const { corClass, mensagem } = obterCorEMessage(minutos);

        const materiaCapitalized = materia.charAt(0).toUpperCase() + materia.slice(1);
        const pElement = document.createElement('p');
        pElement.className = corClass;
        pElement.textContent = `${materiaCapitalized}: ${faltas} faltas (${formatarHoras(minutos)}) - ${mensagem}`;

        resultado.appendChild(pElement);
    });

    resultado.innerHTML += `
        <p>Total de minutos de faltas: ${totalMinutos} (${formatarHoras(totalMinutos)})</p>
    `;

    const { corClass: corTotal, mensagem: mensagemTotal } = obterCorEMessage(totalMinutos);
    resultado.className = corTotal;
}
