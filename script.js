document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
    
    let searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("keydown", function(event) {
        document.body.style.cursor = "none";

        if (event.key === "Enter") {
            let query = searchBox.value.trim().toLowerCase();
            if (query) {
                if (!query.includes(".")) {
                    let commonSites = ["google", "facebook", "twitter", "instagram", "youtube", "wikipedia"];
                    if (commonSites.includes(query)) {
                        window.location.href = `https://www.${query}.com`;
                    } else {
                        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                    }
                } else {
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
