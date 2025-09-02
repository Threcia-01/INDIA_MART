// ========== SignUp / SignIn Button ==========

const signupLoginBtn = document.getElementById('signup-login-button');
if (signupLoginBtn) {
  signupLoginBtn.addEventListener('click', () => {
    window.location.href = "/html/signup_signin.html";  
  });
}

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

// ========== location box==========




// ========== searched_product_details==========
document.addEventListener("DOMContentLoaded", function () {
    const productGrid = document.getElementById("product-grid");

    const riceProducts = data.filter(p => p.catagory.toLowerCase() === "rice");

    riceProducts.forEach((product, index) => {
        const card = document.createElement("div");
        card.className = "vr";
        card.innerHTML = `
            <div>
                <img src="${product.image}" width="100%" height="150px" alt="${product.name}" />
                <div><strong>${product.name}</strong></div>
                <div>${product.price}</div>
                <div style="font-size: 0.85em; color: #555;">${product.product_dis}</div>
                <button class="contact-btn" data-index="${index}">
                    Add to Cart / Contact Supplier
                </button>
            </div>
        `;

        // Select the button inside the newly created card
        const contactBtn = card.querySelector(".contact-btn");

        contactBtn.addEventListener("click", () => {
            localStorage.setItem("item", JSON.stringify(product));
            window.location.href = "../html/cart.html";
        });

        productGrid.appendChild(card);
    });
});
