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

// shopping cart example

const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];
if (!window.localStorage) {
    alert('Sorry, your browser does not support Web storage. Try again with a better one');
} else {
    createStore();
    displayCart();
}


function addItemToCart(item) {
    sessionStorage.setItem(item, JSON.stringify(true));
}

function createStore() {
    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    for (const item of availableItems) {
        const li = document.createElement('li');
        li.textContent = item;
        li.addEventListener('click', () => addItemToCart(item));
        ul.appendChild(li);
    }

}

function displayCart() {
    if (sessionStorage.length > 0) {
        const p = document.createElement('p');
        p.textContent = `You previously had ${sessionStorage.length} items in your cart`;
        document.body.appendChild(p);
        
    }
}
