var sim_acc = document.getElementsByClassName("sim-acc");
var i;

for (i=0;i<sim_acc.length;i++){
    sim_acc[i].addEventListener("click",function () {
       this.classList.toggle("acc-active");
       var sim_panel = this.nextElementSibling;
       if(sim_panel.style.maxHeight){
           sim_panel.style.maxHeight =null;
       }else{
           sim_panel.style.maxHeight = sim_panel.scrollHeight + "px";
       }

    });
}

function openTab(eve, tabName) {
    var i ,simTabCont,simTabBtn;

    simTabCont = document.getElementsByClassName("sim-tab-cont");
    for (i=0;i<simTabCont.length;i++){
        simTabCont[i].style.display="none";

    }
    simTabBtn  = document.getElementsByClassName("sim-tab-btn");
    for(i=0;i<simTabBtn .length;i++){
        simTabBtn[i].className = simTabBtn [i].className.replace(" h-active","");
    }
    document.getElementById(tabName).style.display ="block";
    eve.currentTarget.className +=" h-active";

}
//document.getElementById("defaultTab").click();


function openVTab(evnt,VtabName) {
    var i, simVTabCont,simVTabBtn;
    simVTabCont = document.getElementsByClassName("sim-v-tab-cont");
    for(i=0;i<simVTabCont.length;i++){
        simVTabCont[i].style.display ="none";
    }
    simVTabBtn = document.getElementsByClassName("sim-v-tab-btn");
    for(i=0;i<simVTabBtn.length;i++){
        simVTabBtn[i].className = simVTabBtn[i].className.replace(" v-active","");
    }
    document.getElementById(VtabName).style.display ="block";
    evnt.currentTarget.className +=" v-active";
}
//document.getElementById("defaultVTab").click();



function respMenu() {
    var nav = document.getElementById("sim-h-menu");
    if(nav.className === "horizontal-menu"){
        nav.className += " responsive";
    } else {
        nav.className = "horizontal-menu";
    }

}

function respSideMenu() {
    var nav = document.getElementById("sim-side-menu");
    if(nav.className === "sim-side-menu"){
        nav.className += " responsive";
    }else{
        nav.className = "sim-side-menu";
    }

}

function openNav() {
    document.getElementById("sim-nav-side").style.width = "250px";
}

function closeNav() {
    document.getElementById("sim-nav-side").style.width = "0";

}

// function openNav() {
//     document.getElementById("sim-nav-side").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// }
//
// function closeNav() {
//     document.getElementById("sim-nav-side").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
// }
//


// function openNav() {
//     document.getElementById("sim-nav-side").style.width = "100%";
// }
//
// function closeNav() {
//     document.getElementById("sim-nav-side").style.width = "0";
//
// }



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("simSlides");
    var dots = document.getElementsByClassName("simNav");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000);
}


//Modal

// Get the modal
var modal = document.getElementById('simModal');

// Get the button that opens the modal
var btn = document.getElementById("simBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var simCont = document.getElementsByClassName("sim-modal-content")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";


}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




//Magnify


function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var pos, x, y;
        /*prevent any other actions that may occur when moving over the image*/
        e.preventDefault();
        /*get the cursor's x and y positions:*/
        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;
        /*prevent the magnifier glass from being positioned outside the image:*/
        if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
        if (x < w / zoom) {x = w / zoom;}
        if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
        if (y < h / zoom) {y = h / zoom;}
        /*set the position of the magnifier glass:*/
        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";
        /*display what the magnifier glass "sees":*/
        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /*get the x and y positions of the image:*/
        a = img.getBoundingClientRect();
        /*calculate the cursor's x and y coordinates, relative to the image:*/
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /*consider any page scrolling:*/
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x : x, y : y};
    }
}



function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /*Loop through all table rows (except the
        first, which contains table headers):*/
        for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            //check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                //if so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}



//draggable

dragElement(document.getElementById("simDragDiv"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

