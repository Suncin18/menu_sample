const btnFilter = document.querySelectorAll('.btnJS');
const menuItem = document.querySelectorAll('.menu_items');
const menu = document.querySelector('.div_menu_nav');

// Botón del nav
document.addEventListener('click', (e)=>{
    if(e.target.closest('#nav-menu')){
        menu.classList.toggle('ocultarMenu');
        if(!menu.classList.contains('ocultarMenu')){
        }
    }else{
        menu.classList.add('ocultarMenu');
    }
});