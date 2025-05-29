// js/home.js

// ========== Search Form ==========
const searchForm = document.getElementById('search-form');
const voiceBtn   = document.getElementById('voice-search');
const searchBtn  = document.getElementById('submit-search');
const searchBar  = document.getElementById('searchbar');

voiceBtn.addEventListener('click', () => {
  alert("Voice search coming soon!");
});

searchForm.addEventListener("submit", e => {
  e.preventDefault();
  const query = searchBar.value.trim().toLowerCase();
  if (query === "rice") {
    window.location.href = 'html/search_product.html';
  } else {
    alert("The service you asked for isn't available yet.Please search for something else.");
  }
});

// ========== Sale Banner Carousel ==========
const leftArrow  = document.getElementById('left-banner-arrow');
const rightArrow = document.getElementById('right-banner-arrow');
const bannerImg  = document.querySelector('#sale-banner .sale_banner_image');


// Add as many banner images as you have
const banners = [
  'images/sale_banner.png',
  // 'images/sale_banner2.png',
  // 'images/sale_banner3.png'
];
let bannerIndex = 0;

leftArrow.addEventListener('click', () => {
  bannerIndex = (bannerIndex - 1 + banners.length) % banners.length;
  bannerImg.src = banners[bannerIndex];
});

rightArrow.addEventListener('click', () => {
  bannerIndex = (bannerIndex + 1) % banners.length;
  bannerImg.src = banners[bannerIndex];
});

// ========== Requirement Tabs ==========

const modal = document.getElementById('popup-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');

const tabs = {
  'tab-orders': 'These are your latest orders. (You can fetch real data here.)',
  'tab-messages': 'Here are your recent messages.',
  'tab-calls': 'This is your call log.'
};

document.querySelectorAll('.requirenment_tabs_item').forEach(button => {
  button.addEventListener('click', () => {
    const content = tabs[button.id] || 'No content available.';
    modalBody.textContent = content;
    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// ========== Requirement Input & Submit ==========

document.getElementById('submit-btn-requirement').addEventListener('click', () => {

  const requirement = document.getElementById('requirement-input').value.trim();
const contact = document.getElementById('contact-input').value.trim();

  if (!requirement || !contact) {
    alert('Please fill out both the requirement and contact number.');
    return;
  }
  
  const userData = {
    requirement,
    contact,
    timestamp: new Date().toISOString()
  };

  // Save to localStorage
  localStorage.setItem('userRequirementData', JSON.stringify(userData));

  alert('Requirement saved successfully!');
  
  // Clear the form
  document.getElementById('requirement-input').value = '';
  document.getElementById('contact-input').value = '';
});

// Fetch & show saved data when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('userRequirementData');
  if (savedData) {
    const { requirement, contact } = JSON.parse(savedData);
    document.getElementById('requirement-input').value = requirement;
    document.getElementById('contact-input').value = contact;
  }
});

// ========== App Download Form ==========
const downloadForm    = document.getElementById('app-download-form');
const downloadNumber  = document.getElementById('app-download-number');

downloadForm.addEventListener('submit', e => {
  e.preventDefault();
  const phone = downloadNumber.value.trim();
  const valid = /^[0-9]{10}$/.test(phone);
  if (!valid) {
    alert('Enter a valid 10-digit phone number.');
    return;
  }
  // TODO: send phone to your backend to SMS the link
  alert(`Download link sent to ${phone}`);
  downloadNumber.value = '';
});
