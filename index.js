const nav = document.getElementById("topMenu");

function showNavMenu() {
    if (nav.className === "topMenu") {
        nav.className += " responsive";
    } else {
        nav.className = "topMenu";
    }
}

function closeNavMenu() {
    if (nav.className === "topMenu") {
        nav.className += " responsive";
    } else {
        nav.className = "topMenu";
    }
}