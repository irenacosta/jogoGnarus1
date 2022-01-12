function vingador() {
    while (question != 1 || question != 2) {
        var question = prompt(
            '1. Futuro; \n 2. Passado'
        );

        if (question == 1) {
            window.location.href = "../vingadores/peteralphaalpha.html";
            break;
        } else if (question == 2) {
            window.location.href = "../vingadores/peterpassado1.html";
            break;
        } else {
            alert("Digite 1 ou 2");
        }
    }
}