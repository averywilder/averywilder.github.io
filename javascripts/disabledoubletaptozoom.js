$(document).click(function(event) {
    element = document.elementFromPoint(event.clientX, event.clientY);
    if(document.getElementById("div_excluded_from_doubletap").contains(element)) {
        event.preventDefault();
        clickFunction(element);
    }
});
