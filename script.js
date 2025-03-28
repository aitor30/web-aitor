document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
    
    let searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("keydown", function(event) {
        document.body.style.cursor = "none";

        if (event.key === "Enter") {
            let query = searchBox.value.trim().toLowerCase();
            if (query) {
                if (!query.includes(".")) {
                    // Si no hay punto, asumimos que es una búsqueda o sitio popular
                    let commonSites = ["google", "facebook", "twitter", "instagram", "youtube", "wikipedia"];
                    if (commonSites.includes(query)) {
                        window.location.href = `https://www.${query}.com`;
                    } else {
                        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                    }
                } else {
                    // Si el usuario ya ingresó un dominio con punto, ir directamente
                    window.location.href = `https://${query}`;
                }
            }
        }
    });

    searchBox.addEventListener("keyup", function() {
        setTimeout(() => {
            document.body.style.cursor = "default";
        }, 1000);
    });
});
