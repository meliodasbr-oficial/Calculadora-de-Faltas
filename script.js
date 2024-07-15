function calcularFaltas() {
    const materias = [
        { nome: 'matematica', label: 'Matemática' },
        { nome: 'portugues', label: 'Português' },
        { nome: 'biologia', label: 'Biologia' },
        { nome: 'fisica', label: 'Física' },
        { nome: 'quimica', label: 'Química' },
        { nome: 'filosofia', label: 'Filosofia' },
        { nome: 'geografia', label: 'Geografia' },
        { nome: 'historia', label: 'História' },
        { nome: 'sociologia', label: 'Sociologia' },
        { nome: 'artes', label: 'Artes' },
        { nome: 'educacao', label: 'Educação Física' },
        { nome: 'inglesa', label: 'Inglês' },
        { nome: 'eletiva1', label: 'Eletiva 1' },
        { nome: 'eletiva2', label: 'Eletiva 2' },
        { nome: 'eletiva3', label: 'Eletiva 3' },
        { nome: 'eletiva4', label: 'Eletiva 4' }
    ];

    const totalAulas = 200 * 6;
    let totalFaltas = 0;

    function formatarHoras(minutos) {
        const horas = Math.floor(minutos / 60);
        const min = minutos % 60;
        return `${horas}h ${min}min`;
    }

    function definirCorClasse(faltas) {
        const totalMinutos = faltas * 50;
        if (totalMinutos <= 500) {
            return { cor: 'verde', mensagem: 'Está bom. Continue assim!' };
        } else if (totalMinutos <= 1000) {
            return { cor: 'amarelo', mensagem: 'Cuidado com as faltas.' };
        } else {
            return { cor: 'vermelho', mensagem: 'Pare de faltar imediatamente!' };
        }
    }

    let resultadoHtml = `<p>Total de Aulas: ${totalAulas}</p>`;
    
    materias.forEach(materia => {
        const faltas = parseInt(document.getElementById(materia.nome).value) || 0;
        totalFaltas += faltas;
        const { cor, mensagem } = definirCorClasse(faltas);

        resultadoHtml += `
            <p id="faltas${materia.label.replace(' ', '')}" class="${cor}">
                ${materia.label}: ${faltas} faltas (${formatarHoras(faltas * 50)}) - ${mensagem}
            </p>
        `;
    });

    const totalMinutos = totalFaltas * 50;
    const totalPresencas = totalAulas - totalFaltas;

    resultadoHtml += `
        <p>Total de Faltas: ${totalFaltas}</p>
        <p>Total de Presenças: ${totalPresencas}</p>
        <p>Total de minutos de faltas: ${totalMinutos} (${formatarHoras(totalMinutos)})</p>
    `;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = resultadoHtml;
}
