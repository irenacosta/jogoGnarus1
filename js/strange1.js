function vingador() {
    while (question != 1 || question != 2) {
        var question = prompt(
            '1. Começo do Tempo \n 2. Fim do Tempo'
        );

        if (question == 1) {
            window.location.href = '../vingadores/strangecomeco1.html';
            break;
        } else if (question == 2) {
            window.location.href = '../vingadores/strangegameover1.html';
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}