function hideMenu(){
    const optionsMenu = document.querySelector(".sidePanel");
    optionsMenu.style.transform = "translate(100vw)";
}
function showMenu(){
    const optionsMenu = document.querySelector(".sidePanel");
    optionsMenu.style.transform = "translate(0px)";
}

let show = true;

function menuClicked(){
    if (show===true){
        showMenu();
        show = false;
    }
    else{
        hideMenu();
        show = true;
    }
}  