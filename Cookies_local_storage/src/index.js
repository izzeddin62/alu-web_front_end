function setCookies() {
    const firstName = document.getElementById('firstname')?.value;
    const email = document.getElementById('email')?.value;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);
    Cookies.set('firstname', firstName, { expires: 10 });
    Cookies.set('email', email, { expires: 10 });
    showWelcomeMessageOrForm()
}

function setCookiesAndShowWelcomeMessage() {
    const firstName = document.getElementById('firstname')?.value;
    const email = document.getElementById('email')?.value;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);
    Cookies.set('firstname', firstName, { expires: 10 });
    Cookies.set('email', email, { expires: 10 });
    showWelcomeMessageOrForm()
}

function showCookies() {
    const para = document.createElement('p');
    para.textContent = `Email: ${getCookie('email')}, Firstname: ${getCookie('firstname')}`;
    document.body.appendChild(para);
    
}

function getCookie(name) {
    return Cookies.get(name);
}

function showForm() {
    const form = document.getElementById('login-form');
    form.style.display = 'block';
    const loggedInPara = document.getElementById('loggedin');
    loggedInPara.style.display = 'none';
}

function hideForm() {
    const form = document.getElementById('login-form');
    form.style.display = 'none';
}

function deleteCookiesAndShowForm() {
    Cookies.remove('firstname');
    Cookies.remove('email');
    showForm();
}
function showWelcomeMessageOrForm() {
    const firstName = getCookie('firstname');
    const email = getCookie('email');
    if (firstName && email) {
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