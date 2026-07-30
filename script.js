document.addEventListener("mousemove", (e) => {
    const card = document.querySelector(".container");

    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;

    card.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;
});
