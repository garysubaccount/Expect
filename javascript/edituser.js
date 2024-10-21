var edituser = document.querySelectorAll("#edituser");
var cancel = document.querySelectorAll('input[type="reset"]');
var editupage = document.getElementById("editupage");

edituser.forEach(function(edit) {
    edit.addEventListener("click", function(event) {
        event.preventDefault();
        editupage.style.display = "flex";
    });
});

cancel.forEach(function(close) {
    close.addEventListener("click", function(event) {
        event.preventDefault();
        editupage.style.display = "none";
    })
});