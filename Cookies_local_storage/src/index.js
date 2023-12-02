function setCookies() {
    const firstName = document.getElementById('firstname')?.value;
    const email = document.getElementById('email')?.value;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);

    document.cookie = `firstname=${firstName}; expires=${expirationDate.toUTCString()}`;
    document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}`;
    showWelcomeMessageOrForm()
}

function showCookies() {
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

function showForm() {
    const form = document.getElementById('login-form');
    form.style.display = 'block';
    const loggedInPara = document.getElementById('loggedin');
    console.log(loggedInPara, '=========')
    loggedInPara.style.display = 'none';
}

function hideForm() {
    const form = document.getElementById('login-form');
    form.style.display = 'none';
}

function deleteCookiesAndShowForm() {
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    showForm();
}
function showWelcomeMessageOrForm() {
    const firstName = getCookie('firstname');
    const email = getCookie('email');
    if (firstName && email) {
        // const loggedInPara = document.getElementById('loggedin');
        const h1 = document.createElement('h1');
        h1.id = 'loggedin';
        h1.textContent = `Welcome ${firstName}`;
        const span = document.createElement('span');
        span.style.fontWeight = 'normal';
        span.fontSize = '10px';
        span.style.cursor = 'pointer';
        span.style.fontStyle = 'italic';
        span.addEventListener('click', deleteCookiesAndShowForm);
        h1.appendChild(span);
        span.textContent = `(logout)`;
        document.body.appendChild(h1);
        hideForm();
    } else {
        showForm();
    }
}