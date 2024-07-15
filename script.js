function calcularFaltas() {
    const materias = [
        'matematica', 'portugues', 'biologia', 'fisica', 'quimica', 'filosofia', 'geografia',
        'historia', 'sociologia', 'artes', 'educacao', 'inglesa', 'eletiva1', 'eletiva2', 'eletiva3', 'eletiva4'
    ];

    const totalAulas = 200 * 6;
    let totalMinutosFaltas = 0;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o conteúdo anterior

    materias.forEach(materia => {
        const horas = parseInt(document.getElementById(`${materia}Horas`).value) || 0;
        const minutos = parseInt(document.getElementById(`${materia}Minutos`).value) || 0;
        const minutosTotais = horas * 60 + minutos;
        const faltas = Math.ceil(minutosTotais / 50); // Calcula o número de faltas arredondando para cima

        totalMinutosFaltas += minutosTotais;

        const materiaCapitalized = materia.charAt(0).toUpperCase() + materia.slice(1);
        const pElement = document.createElement('p');
        pElement.textContent = `${materiaCapitalized}: ${faltas} faltas (${horas} horas e ${minutos} minutos)`;

        resultado.appendChild(pElement);
    });

    const totalFaltas = Math.ceil(totalMinutosFaltas / 50); // Calcula o total de faltas arredondando para cima

    const resultadoTotal = document.createElement('p');
    resultadoTotal.textContent = `Total de faltas: ${totalFaltas} faltas (${formatarHoras(totalMinutosFaltas)})`;

    resultado.appendChild(resultadoTotal);

    resultado.scrollIntoView({ behavior: 'smooth' });
}

function formatarHoras(minutos) {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    return `${horas}h ${min}min`;
}
