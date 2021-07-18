const form = document.getElementById('form')

 form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let data = {
        name,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
    console.log(name, email);

    let content = document.getElementById('content')

    let carregando = `<p>Enviando...</p>`

    let pronto = `<p>Muito obrigado!</p>`

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 2000)
 })