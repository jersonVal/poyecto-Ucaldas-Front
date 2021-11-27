function OpenGeneralModal(message){
    document.querySelector('#modal-message').innerHTML = message;
    let elem = document.querySelector('#general-modal');
    var instance = M.Modal.getInstance(elem);
    instance.open();
}

