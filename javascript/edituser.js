var edituser = document.querySelectorAll("#edituser");
var cancel = document.querySelectorAll('input[type="reset"]');
var editpage = document.getElementById("editpage");

edituser.forEach(function(edit) {
    edit.addEventListener("click", function(event) {
        event.preventDefault();
        editpage.style.display = "flex";
    });
});

cancel.forEach(function(close) {
    close.addEventListener("click", function(event) {
        event.preventDefault();
        editpage.style.display = "none";
    })
});