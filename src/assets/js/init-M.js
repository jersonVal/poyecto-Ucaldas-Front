document.addEventListener('DOMContentLoaded', function () {
    var elemsSide = document.querySelectorAll('.sidenav');
    var elemsDrop1 = document.querySelectorAll('.dropdown-trigger');
    var elemsDrop2 = document.querySelectorAll('.dropdown-trigger-2');

    var sidenav = M.Sidenav.init(elemsSide, {});

    var drop1 = M.Dropdown.init(elemsDrop1, {
        // closeOnClick: false,
        coverTrigger: false,
        hover: true,
        constrainWidth: false
    });

});

