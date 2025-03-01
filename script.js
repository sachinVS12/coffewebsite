function likeProduct() {
    alert("You liked this product!");
}

function openPaymentModal() {
    document.getElementById('paymentModal').style.display = 'block';
}

function closePaymentModal() {
    document.getElementById('paymentModal').style.display = 'none';
}

function openShareModal() {
    document.getElementById('shareModal').style.display = 'block';
}

function closeShareModal() {
    document.getElementById('shareModal').style.display = 'none';
}

function openSearchModal() {
    document.getElementById('searchModal').style.display = 'block';
}

function closeSearchModal() {
    document.getElementById('searchModal').style.display = 'none';
}
function searchProduct() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product h2');
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    products.forEach(product => {
        if (product.textContent.toLowerCase().includes(searchInput)) {
            const li = document.createElement('li');
            li.textContent = product.textContent;
            searchResults.appendChild(li);
        }
    });
}


function myNav(){
    let bar = document.querySelector(".bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.left == "0%"){
            nav.style.left = "-100%";
            bar.src = "pic/menu.png"
        }else{
            nav.style.left = "0%";
            bar.src = "pic/x.png"
        }
    }
}
myNav();

window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}

function submitForm(event) {
            event.preventDefault(); // Prevent the default form submission
            const email = document.getElementById('email').value;
            const termsChecked = document.getElementById('terms').checked;

            if (!email || !termsChecked) {
                alert('Please enter your email and agree to the terms.');
                return;
            }

            const phoneNumber = '1234567890'; // Replace with the phone number you want to send the message to
            const message = `Email: ${email}\nAgreed to terms: ${termsChecked}`;

            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, '_blank');
        }









