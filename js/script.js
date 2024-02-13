function send() {
    let getName = document.getElementById('name').value;
    let getEmail = document.getElementById('email').value;
    var emailTest = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
    let getTel = document.getElementById('telephone').value;

    console.log(getEmail)

    if (getName == '') {
        document.getElementById('name').placeholder = 'Erro, nome em branco';
    }
    
    if (getTel == ''){
        document.getElementById('telephone').placeholder = 'Erro, telefone em branco';
    }

    if( getEmail == '' || !emailTest.test(getEmail) ) { 
        document.getElementById('email').placeholder = 'E-mail não preenchido adequadamente'
    return false; 
    }
    


    if (getName !== ''  && getTel !== '') {
        alert('Enviado com sucesso')
    }

}

