
document.addEventListener("scroll", function() {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 100) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});
