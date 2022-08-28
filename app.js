let root = document.documentElement,
checkbox = document.getElementById("darkmode-input");

checkbox.addEventListener("input", function () {
    root.classList.toggle("dark");
})