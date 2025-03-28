document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
    
    let input = document.getElementById("campoTexto");

    input.addEventListener("keydown", function() {
        document.body.style.cursor = "none";
    });

    input.addEventListener("keyup", function() {
        setTimeout(() => {
            document.body.style.cursor = "default";
        }, 1000);
    });
});
