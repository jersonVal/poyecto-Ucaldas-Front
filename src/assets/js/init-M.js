document.addEventListener('DOMContentLoaded', function () {
    //Inicializacion boton hamburguesa mobil
    var elemsSide = document.querySelectorAll('.sidenav');
    var sidenav = M.Sidenav.init(elemsSide, {});
    //Inicializacion dropdown
    var elemsDrop1 = document.querySelectorAll('.dropdown-trigger');
    var drop1 = M.Dropdown.init(elemsDrop1, {
        coverTrigger: false,
        //hover: true,
        constrainWidth: false
    });
    //Inicializacion modal
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {
        opacity: 0.8
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
});

