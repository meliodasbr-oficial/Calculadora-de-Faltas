function calcularFaltas() {
    const matematica = parseInt(document.getElementById('matematica').value) || 0;
    const portugues = parseInt(document.getElementById('portugues').value) || 0;
    const biologia = parseInt(document.getElementById('biologia').value) || 0;
    const fisica = parseInt(document.getElementById('fisica').value) || 0;
    const quimica = parseInt(document.getElementById('quimica').value) || 0;
    const filosofia = parseInt(document.getElementById('filosofia').value) || 0;
    const geografia = parseInt(document.getElementById('geografia').value) || 0;
    const historia = parseInt(document.getElementById('historia').value) || 0;
    const sociologia = parseInt(document.getElementById('sociologia').value) || 0;
    const artes = parseInt(document.getElementById('artes').value) || 0;
    const educacao = parseInt(document.getElementById('educacao').value) || 0;
    const inglesa = parseInt(document.getElementById('inglesa').value) || 0;
    const eletiva1 = parseInt(document.getElementById('eletiva1').value) || 0;
    const eletiva2 = parseInt(document.getElementById('eletiva2').value) || 0;
    const eletiva3 = parseInt(document.getElementById('eletiva3').value) || 0;
    const eletiva4 = parseInt(document.getElementById('eletiva4').value) || 0;

    const totalAulas = 200 * 6; 

    const totalPresencas = totalAulas - (matematica + portugues + biologia + fisica +
                                         quimica + filosofia + geografia + historia +
                                         sociologia + artes + educacao + inglesa +
                                         eletiva1 + eletiva2 + eletiva3 + eletiva4);

    const totalFaltas = matematica + portugues + biologia + fisica + quimica +
                        filosofia + geografia + historia + sociologia + artes +
                        educacao + inglesa + eletiva1 + eletiva2 + eletiva3 + eletiva4;

    const totalMinutos = totalFaltas * 50;

    function formatarHoras(minutos) {
        const horas = Math.floor(minutos / 60);
        const min = minutos % 60;
        return `${horas}h ${min}min`;
    }

    let corClass = '';
    let mensagem = '';
    if (totalMinutos <= 5000) {
        corClass = 'verde';
        mensagem = 'Está bom. Continue assim!';
    } else if (totalMinutos <= 10000) {
        corClass = 'amarelo';
        mensagem = 'Cuidado com as faltas.';
    } else {
        corClass = 'vermelho';
        mensagem = 'Pare de faltar imediatamente!';
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <p>Total de Faltas: ${totalFaltas}</p>
        <p>Total de Aulas: ${totalAulas}</p>
        <p>Total de Presenças: ${totalPresencas}</p>
        <p id="faltasMatematica">Matemática: ${matematica} faltas (${formatarHoras(matematica * 50)})</p>
        <p id="faltasPortugues">Português: ${portugues} faltas (${formatarHoras(portugues * 50)})</p>
        <p id="faltasBiologia">Biologia: ${biologia} faltas (${formatarHoras(biologia * 50)})</p>
        <p id="faltasFisica">Física: ${fisica} faltas (${formatarHoras(fisica * 50)})</p>
        <p id="faltasQuimica">Química: ${quimica} faltas (${formatarHoras(quimica * 50)})</p>
        <p id="faltasFilosofia">Filosofia: ${filosofia} faltas (${formatarHoras(filosofia * 50)})</p>
        <p id="faltasGeografia">Geografia: ${geografia} faltas (${formatarHoras(geografia * 50)})</p>
        <p id="faltasHistoria">História: ${historia} faltas (${formatarHoras(historia * 50)})</p>
        <p id="faltasSociologia">Sociologia: ${sociologia} faltas (${formatarHoras(sociologia * 50)})</p>
        <p id="faltasArtes">Artes: ${artes} faltas (${formatarHoras(artes * 50)})</p>
        <p id="faltasEducacao">Educação Física: ${educacao} faltas (${formatarHoras(educacao * 50)})</p>
        <p id="faltasInglesa">Inglês: ${inglesa} faltas (${formatarHoras(inglesa * 50)})</p>
        <p id="faltasEletiva1">Eletiva 1: ${eletiva1} faltas (${formatarHoras(eletiva1 * 50)})</p>
        <p id="faltasEletiva2">Eletiva 2: ${eletiva2} faltas (${formatarHoras(eletiva2 * 50)})</p>
        <p id="faltasEletiva3">Eletiva 3: ${eletiva3} faltas (${formatarHoras(eletiva3 * 50)})</p>
        <p id="faltasEletiva4">Eletiva 4: ${eletiva4} faltas (${formatarHoras(eletiva4 * 50)})</p>
        <p>Total de minutos de faltas: ${totalMinutos} (${formatarHoras(totalMinutos)})</p>
        <p>${mensagem}</p>
    `;

    resultado.className = corClass;
}
