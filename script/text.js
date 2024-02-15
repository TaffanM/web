const text = document.querySelector(".sec-text");
const btn = document.getElementById("btn-id");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Elime";
    }, 0);
    setTimeout(() => {
        text.textContent = "lime";
    }, 4000);
    setTimeout(() => {
        text.textContent = "beb";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Em1ly";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Sayang";
    }, 16000);
}

textLoad();
setInterval(textLoad, 16000);

btn.addEventListener('click', function(event) {
    goToFlower();
});