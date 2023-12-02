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
    para.textContent = `Email: ${getCookie('email')}, Firstname: ${getCookie('firstname')}`;
    document.body.appendChild(para);
    
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    const cookie = cookies.find(cookie => cookie.trim().startsWith(name));
    if (!cookie) return '';
    return cookie.split('=')[1];
}