document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
    
    let searchBox = document.getElementById("searchBox");

    searchBox.addEventListener("keydown", function(event) {
        document.body.style.cursor = "none";

        if (event.key === "Enter") {
            let query = searchBox.value.trim();
            if (query) {
                window.location.href = "https://" + query;
            }
        }
    });

    searchBox.addEventListener("keyup", function() {
        setTimeout(() => {
            document.body.style.cursor = "default";
        }, 1000);
    });
});
