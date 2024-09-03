document.getElementById("yesBtn").addEventListener("click", function() {
    document.querySelector(".container").style.display = "none";
    document.getElementById("message").classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    const btn = this;
    const container = document.querySelector(".container");

    const randomX = Math.floor(Math.random() * (container.clientWidth - btn.clientWidth));
    const randomY = Math.floor(Math.random() * (container.clientHeight - btn.clientHeight));

    btn.style.position = 'absolute';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
});
