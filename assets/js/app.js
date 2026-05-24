const body = document.body;

const overlay = document.getElementById('overlay');
const checkoutModal = document.getElementById('checkoutModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const agreeCheckbox = document.getElementById('agreeCheckbox');
const payButton = document.getElementById('payButton');

function openCheckout() {
  body.classList.add('modal-open');
}

function closeCheckout() {
  body.classList.remove('modal-open');
}

overlay.addEventListener('click', closeCheckout);
closeModalBtn.addEventListener('click', closeCheckout);

agreeCheckbox.addEventListener('change', () => {
  payButton.disabled = !agreeCheckbox.checked;
});

payButton.addEventListener('click', () => {
  alert('Connect your Stripe or PayPal checkout URL here.');
});
