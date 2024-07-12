document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll("#thumbnails img");
    const featured = document.getElementById("featured");
    const figcaption = document.querySelector("figcaption");

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", function() {
            console.log(`Thumbnail clicked: ${thumbnail.src}`);
            const newSrc = thumbnail.src.replace("-small", "-large");
            featured.src = newSrc;
            figcaption.textContent = thumbnail.alt;
            console.log(`Featured image updated to: ${newSrc}`);
        });
    });

    if (thumbnails.length === 0) {
        console.error("No thumbnails found!");
    }
});
