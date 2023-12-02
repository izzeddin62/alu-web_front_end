function setCookies() {
    const firstName = document.getElementById('firstname')?.value;
    const email = document.getElementById('email')?.value;
    document.cookie = `firstname=${firstName}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const cookies = document.cookie;

    const para = document.createElement('p');
    para.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(para);
    
}