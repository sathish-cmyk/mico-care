
function toggleHeaderFixed() {
    const header = document.getElementById("mainHeader");
    if (window.scrollY > 100) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
}

// Run on scroll
document.addEventListener("scroll", toggleHeaderFixed);

// Run on page load (fix refresh issue)
window.addEventListener("load", toggleHeaderFixed);

