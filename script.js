var coll = document.getElementsByClassName("collapsible");
var i;

function toggleCollapsible() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}

function closeOtherCollapsibles(currentCollapsible) {
    for (i = 0; i < coll.length; i++) {
        var content = coll[i].nextElementSibling;
        if (coll[i] !== currentCollapsible && content.style.maxHeight) {
            coll[i].classList.remove("active");
            content.style.maxHeight = null;
        }
    }
}

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        closeOtherCollapsibles(this);
        toggleCollapsible.call(this);
    });
    coll[i].addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            closeOtherCollapsibles(this);
            toggleCollapsible.call(this);
        }
    });
}
