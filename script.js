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

    function obterCor(minutos) {
        if (minutos <= 5000) return 'verde';
        else if (minutos <= 10000) return 'amarelo';
        else return 'vermelho';
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
        const corClass = obterCor(minutos);

        resultado.innerHTML += `
            <p class="${corClass}" id="faltas${materia.charAt(0).toUpperCase() + materia.slice(1)}">
                ${materia.charAt(0).toUpperCase() + materia.slice(1)}: ${faltas} faltas (${formatarHoras(minutos)})
            </p>
        `;
    });

    resultado.innerHTML += `
        <p>Total de minutos de faltas: ${totalMinutos} (${formatarHoras(totalMinutos)})</p>
    `;

    const corTotal = obterCor(totalMinutos);
    resultado.className = corTotal;
}
