function send() {
    let getName = document.getElementById('name').value;
    let getEmail = document.getElementById('email').value;
    let emailTest = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    let getTel = document.getElementById('telephone').value;

    if (getName == '') {
        document.getElementById('name').placeholder = 'Erro, nome em branco';
    }
    
    if (getTel == ''){
        document.getElementById('telephone').placeholder = 'Erro, telefone em branco';
    }

    if(getEmail == '') { 
        document.getElementById('email').placeholder = 'Erro, email vazio';
        return false; 
    }

    if(getEmail !== '' && !emailTest.test(getEmail)) { 
        alert('E-mail não preenchido adequadamente');
    }

    if (getName !== '' && emailTest.test(getEmail) && getTel !== '') {
        alert('Enviado com sucesso')
    }

}

