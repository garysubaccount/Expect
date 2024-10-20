var add = document.getElementById("adduser");
var closebtn = document.querySelectorAll("#close");
var addpage = document.getElementById("addpage");

add.addEventListener("click", function(event) {
    event.preventDefault();
    addpage.style.display = "flex";
});

closebtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        addpage.style.display = "none";
    });
});