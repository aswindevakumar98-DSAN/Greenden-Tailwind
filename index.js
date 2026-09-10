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
