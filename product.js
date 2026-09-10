// Selecting Sidenav & Menuicon
const sidenav = document.getElementById('sidenav');
const menuicon = document.getElementById('menuicon');
const closeicon = document.getElementById('closeicon');

menuicon.addEventListener('click',function(){
    sidenav.style.right = "0";
});

closeicon.addEventListener('click',function(){
    sidenav.style.right = "-50%";
});

var productcontainer = document.getElementById("productcontainer");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function() {
    var enteredValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h1").innerText.toUpperCase();

        if (productname.includes(enteredValue)) {
            productlist[count].style.display = "block";
        } else {
            productlist[count].style.display = "none";
        }
    }
});