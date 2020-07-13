$("#btn").on("click", function () {
    let OGforward = $("input").val();
    let OGreverse = OGforward.split("").reverse().join("");
    let forward = $("input").val().toLowerCase().replace(/\s/g, '').replace(/\./g, '').replace(/\,/g, '');
    let reverse = forward.split("").reverse().join("");
    if (forward == reverse) {
        $("#result").text(`The word/phrase "${OGforward}" is a palindrome. In reverse, it is still "${OGforward}"`);
    }
    else {
        $("#result").text(`The word/phrase "${OGforward}" is not a palindrome. "${OGforward}" in reverse is "${OGreverse}"`)
    }
})
$("#clear").on("click", function () {
    $("#result").text("");
    $("#input").val("");
})
$(document).ready(function () {
    $("#input").keydown(function (event) {
        if (event.which === 13) {
            $("#btn").click();
        }
    }
    )
});
$(document).ready(function () {
    $("#input").keydown(function (event) {
        if (event.which === 46) {
            $("#clear").click();
        }
    }
    )
});