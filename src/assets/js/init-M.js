document.addEventListener('DOMContentLoaded', function () {
    var elemsSide = document.querySelectorAll('.sidenav');
    var elemsDrop1 = document.querySelectorAll('.dropdown-trigger');
    var elemsDrop2 = document.querySelectorAll('.dropdown-trigger-2');

    var sidenav = M.Sidenav.init(elemsSide, {});

    var drop1 = M.Dropdown.init(elemsDrop1, {
        // closeOnClick: false,
        coverTrigger: false
    });

    var instance = M.Dropdown.getInstance(elemsDrop1);
    console.log(drop1);

    var drop2 = M.Dropdown.init(elemsDrop2, {
        // closeOnClick: false
        hover: true,
        alignment: 'right',
        onCloseEnd: () => {
            console.log(instance)
        }
    });

});

// let instance = {}

// document.addEventListener('DOMContentLoaded', function () {

    
// });

// document.addEventListener('DOMContentLoaded', function () {

    
// });