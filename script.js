function calcularFaltas() {
    const materias = [
        'matematica', 'portugues', 'biologia', 'fisica', 'quimica', 'filosofia', 'geografia',
        'historia', 'sociologia', 'artes', 'educacao', 'inglesa', 'eletiva1', 'eletiva2', 'eletiva3', 'eletiva4'
    ];

    const totalAulas = 200 * 6; // Total de aulas no ano letivo

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o conteúdo anterior

    materias.forEach(materia => {
        const horas = parseInt(document.getElementById(`${materia}Horas`).value) || 0;
        const minutos = parseInt(document.getElementById(`${materia}Minutos`).value) || 0;
        const totalMinutos = horas * 60 + minutos;
        const faltas = Math.ceil(totalMinutos / 50); // Cada 50 minutos equivale a uma falta

        const pElement = document.createElement('p');
        pElement.textContent = `${materia.charAt(0).toUpperCase() + materia.slice(1)}: ${faltas} faltas`;

        resultado.appendChild(pElement);
    });

    const totalFaltas = materias.reduce((total, materia) => {
        const horas = parseInt(document.getElementById(`${materia}Horas`).value) || 0;
        const minutos = parseInt(document.getElementById(`${materia}Minutos`).value) || 0;
        const totalMinutos = horas * 60 + minutos;
        return total + Math.ceil(totalMinutos / 50);
    }, 0);

    const totalPresencas = totalAulas - totalFaltas;

    const totalFaltasElement = document.createElement('p');
    totalFaltasElement.textContent = `Total de Faltas: ${totalFaltas}`;

    const totalPresencasElement = document.createElement('p');
    totalPresencasElement.textContent = `Total de Presenças: ${totalPresencas}`;

    resultado.appendChild(totalFaltasElement);
    resultado.appendChild(totalPresencasElement);
}
