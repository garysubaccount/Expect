var add = document.getElementById("addquestion");
var closebtn = document.querySelectorAll("#close");
var addqpage = document.getElementById("addqpage");

add.addEventListener("click", function(event) {
    event.preventDefault();
    addqpage.style.display = "flex";
});

closebtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        addqpage.style.display = "none";
    });
});