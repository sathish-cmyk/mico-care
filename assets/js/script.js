
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


  const videoBox = document.getElementById("videoBox");
  const video = document.getElementById("myVideo");
  const playBtn = videoBox.querySelector(".play-btn");
  const poster = videoBox.querySelector("img");

  playBtn.addEventListener("click", () => {
    poster.style.display = "none";   // hide poster
    playBtn.style.display = "none";  // hide play button
    video.style.display = "block";   // show video
    video.play();                    // auto-play
  });