function setCookies() {
    const firstName = document.getElementById('firstname')?.value;
    const email = document.getElementById('email')?.value;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);

    document.cookie = `firstname=${firstName}; expires=${expirationDate.toUTCString()}`;
    document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}`;
}

function showCookies() {
    const cookies = document.cookie;

    const para = document.createElement('p');
    para.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(para);
    
}