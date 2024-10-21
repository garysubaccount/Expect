var edit = document.getElementById("editquestion");
var closebtn = document.querySelectorAll("#close");
var editqpage = document.getElementById("editqpage");

edit.addEventListener("click", function(event) {
    event.preventDefault();
    editqpage.style.display = "flex";
});

closebtn.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        editqpage.style.display = "none";
    });
});