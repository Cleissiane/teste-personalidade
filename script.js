// Função que descreve a personalidade com base nos fatores calculados
function descreverPersonalidade(neuroticismo, conscienciosidade, extroversao, agradabilidade, abertura) {
    let descricao = "\nDescrição dos fatores de personalidade:\n";

    // Descrição para o fator Neuroticismo
    descricao += "Neuroticismo: ";
    if (neuroticismo <= 60) {
        descricao += "Você tende a ser emocionalmente estável e resiliente.";
    } else if (neuroticismo > 60 && neuroticismo < 80) {
        descricao += "Você possui um equilíbrio razoável entre estabilidade emocional e sensibilidade.";
    } else {
        descricao += "Você pode ser emocionalmente instável e suscetível a estresse e ansiedade.";
    }
    descricao += "\n";

    // Descrição para o fator Conscienciosidade
    descricao += "Conscienciosidade: ";
    if (conscienciosidade <= 60) {
        descricao += "Você é menos preocupado com a organização e responsabilidade.";
    } else if (conscienciosidade > 60 && conscienciosidade < 80) {
        descricao += "Você é moderadamente organizado e responsável em suas ações.";
    } else {
        descricao += "Você é altamente organizado e leva suas responsabilidades a sério.";
    }
    descricao += "\n";

    // Descrição para o fator Extroversão
    descricao += "Extroversão: ";
    if (extroversao <= 60) {
        descricao += "Você tende a ser introvertido e prefere a solidão ou interações em grupos pequenos.";
    } else if (extroversao > 60 && extroversao < 80) {
        descricao += "Você é uma pessoa equilibrada, capaz de desfrutar de interações sociais, mas também de momentos de solidão.";
    } else {
        descricao += "Você é extrovertido e gosta de estar rodeado de pessoas e atividades sociais.";
    }
    descricao += "\n";

    // Descrição para o fator Agradabilidade
    descricao += "Agradabilidade: ";
    if (agradabilidade <= 60) {
        descricao += "Você pode ser mais cético e menos propenso a confiar nas pessoas.";
    } else if (agradabilidade > 60 && agradabilidade < 80) {
        descricao += "Você é amigável e geralmente confia nos outros, mas também é seletivo em suas relações.";
    } else {
        descricao += "Você é altamente agradável e tende a confiar nas pessoas e ser cooperativo.";
    }
    descricao += "\n";

    // Descrição para o fator Abertura
    descricao += "Abertura: ";
    if (abertura <= 60) {
        descricao += "Você é mais tradicional e prefere o familiar ao novo e inovador.";
    } else if (abertura > 60 && abertura < 80) {
        descricao += "Você está disposto a experimentar coisas novas, mas também valoriza a tradição.";
    } else {
        descricao += "Você é muito aberto a novas experiências e ideias, buscando constantemente o novo e o inovador.";
    }
    descricao += "\n";

    // Exibe a descrição final em um alerta
    alert(descricao);
}

// Função para validar a resposta do usuário (entre 0 e 10)
function validarResposta(pergunta) {
    let resposta = prompt(pergunta + " (Digite um valor entre 0 e 10): ");
    if (resposta === null) {
        return null; // Se o usuário clicar em "Cancelar", retorna null
    }

    // Converte a resposta para um número inteiro e verifica se está dentro do intervalo permitido
    resposta = parseInt(resposta);
    if (isNaN(resposta) || resposta < 0 || resposta > 10) {
        alert("Resposta inválida. Por favor, digite um valor entre 0 e 10.");
        return validarResposta(pergunta); // Solicita a resposta novamente se for inválida
    }

    return resposta; // Retorna a resposta válida
}

// Função para calcular a pontuação de um fator de personalidade
function calcularFator(respostas, inicio, fim, maxPontos) {
    let soma = 0;
    // Soma todas as respostas dentro do intervalo especificado
    for (let i = inicio; i < fim; i++) {
        soma += respostas[i];
    }
    // Calcula a pontuação em forma de porcentagem
    return (soma / maxPontos) * 100;
}

// Função principal que inicia o teste de personalidade
function iniciarTeste() {
    // Pergunta ao usuário se deseja iniciar o teste
    let iniciar = confirm("Bem-vindo ao Teste de Personalidade dos Cinco Fatores! Deseja iniciar?");
    if (!iniciar) {
        alert("Obrigado! Até a próxima.");
        return; // Encerra se o usuário não quiser iniciar
    }

    // Array com todas as perguntas do teste
    const perguntas = [
        "Me preocupo com as coisas",
        "Me irrito facilmente",
        "Costumo me sentir desanimado(a)",
        "Tenho dificuldade de me aproximar dos outros",
        "Estou sempre ocupado",
        "Completo as tarefas que me são passadas",
        "Gosta de organizar as coisas",
        "Tenho claro meus objetivos",
        "Trabalho duro",
        "Gosto de ler textos desafiadores",
        "Faço amigos com facilidade",
        "Amo festas grandes",
        "Expresso minhas emoções intensamente",
        "Prefiro variedade à rotina",
        "Cometo exageros",
        "Gosto de ajudar nas tarefas de casa",
        "Confio nos outros",
        "Mantenho minhas promessas",
        "Estou sempre preparado",
        "Me sinto confortável no meio das pessoas",
        "Tenho imaginação vívida",
        "Acredito na importância da arte",
        "Me considero criativo",
        "Adoro histórias fantásticas",
        "Vejo beleza em coisas que os outros não vêem"
    ];

    let respostas = []; // Array para armazenar as respostas do usuário
    // Loop para percorrer todas as perguntas
    for (let i = 0; i < perguntas.length; i++) {
        let resposta = validarResposta(perguntas[i]);
        if (resposta === null) {
            alert("Teste cancelado. Obrigado por participar!");
            return; // Encerra o teste se o usuário clicar em "Cancelar"
        }
        respostas.push(resposta); // Adiciona a resposta ao array
    }

    // Calcula as pontuações para cada fator de personalidade
    const neuroticismo = calcularFator(respostas, 0, 5, 50);
    const conscienciosidade = calcularFator(respostas, 5, 10, 50);
    const extroversao = calcularFator(respostas, 10, 15, 50);
    const agradabilidade = calcularFator(respostas, 15, 20, 50);
    const abertura = calcularFator(respostas, 20, 25, 50);

    // Exibe as pontuações finais em um alerta
    alert(`Sua pontuação nos cinco fatores de personalidade em porcentagem é a seguinte:\n
        Neuroticismo: ${neuroticismo.toFixed(2)}%\n
        Conscienciosidade: ${conscienciosidade.toFixed(2)}%\n
        Extroversão: ${extroversao.toFixed(2)}%\n
        Agradabilidade: ${agradabilidade.toFixed(2)}%\n
        Abertura: ${abertura.toFixed(2)}%\n`);

    // Chama a função para descrever a personalidade com base nas pontuações
    descreverPersonalidade(neuroticismo, conscienciosidade, extroversao, agradabilidade, abertura);

    // Pergunta ao usuário se ele deseja refazer o teste
    let continuar = confirm("Obrigado por fazer o teste! Deseja fazê-lo novamente?");
    if (continuar) {
        iniciarTeste(); // Reinicia o teste se o usuário quiser refazer
    } else {
        alert("Obrigado por participar do Teste de Personalidade! Até a próxima.");
    }
}

// Chama a função iniciarTeste quando a página for carregada
window.onload = iniciarTeste;