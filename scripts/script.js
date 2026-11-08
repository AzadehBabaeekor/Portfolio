const form = document.getElementById('contact-form')
form.addEventListener('submit', function (event){
    if(!form.checkValidity()){
        event.preventDefault();
        event.stopPropagation();
    } else {
        event.preventDefault();
        alert('Message envoyé avec succès!');
        form.reset();
        form.classList.remove('was-validated');
        return;
    }
    form.classList.add('was-validated');
});