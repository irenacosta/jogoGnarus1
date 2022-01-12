function vingador() {
    while (question != 1 || question != 2) {
        var question = prompt(
            '1. O Tony morre \n 2. Você morre'
        );

        if (question == 1) {
            window.location.href = '../vingadores/tony.html';
            break;
        } else if (question == 2) {
            window.location.href = '../vingadores/strange2023.html';
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}