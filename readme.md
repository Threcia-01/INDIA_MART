# 🇮🇳 INDIAmart Clone (Modern UI)

A modern and responsive clone of the INDIAmart website, featuring a clean homepage, product search, cart flow, and a simulated checkout. This project uses **HTML, CSS, and JavaScript** to mimic key functionalities of the platform.

---

## 🚀 How to Run the Project

### Step 1: Download the Project
- Clone or download this repository to your local machine.  
- Open the folder using VS Code or any preferred code editor.

### Step 2: Launch the Homepage
- Open the `index.html` file using any modern browser (Chrome, Firefox, Edge, etc.).

### Step 3: Explore the Homepage Features
- Scroll through the homepage to interact with:
  - **My Orders**
  - **My Messages**
  - **Call Log**
  - **Requirement Form**: Submit your product requirement and phone number (demo only).

### Step 4: Search Products
- In the search bar, type **"rice"** and press Enter.  
- This navigates to the `html/search_product.html` page showing rice product listings.  
- Each product card includes:
  - Image  
  - Name  
  - Price  
  - Short description  
  - **Add to Cart / Contact Supplier** button  

### Step 5: Cart Page
- Clicking **Add to Cart** takes you to the `html/cart.html` page.  
- From here, you can proceed to checkout.

### Step 6: Buy Form & Thank You Page
- On checkout, a simple **Buy Form** appears (`html/user_input_page.html`).  
- After submitting, you are shown a **Thank You message** 🎉  
- The page also provides a **link to return to Home Page**.

### Step 7: User Authentication (Prototype)
- A basic **Sign Up / Sign In page** is available (`html/signup_signin.html`).  
- Clicking the **Login button** currently simulates login with an alert:  
  *"Successfully logged in"* and redirects you back to the homepage.

---

## 📌 Features Implemented

- Modern **responsive UI design**
- **Search simulation** with "rice"
- **Product listing grid** with add-to-cart button
- **Cart flow** (`cart.html`) with checkout
- **Buy form** with Thank You confirmation page
- **Requirement form** on homepage
- **Basic Sign Up / Sign In page**
- Page navigation with smooth redirects

---

## 🛠️ Planned Features (Coming Soon)

- Persistent cart system with localStorage
- User authentication with proper validation
- Product detail pages with more info
- Payment gateway simulation
- Full **mobile-first redesign** for better UX

---

## 📂 Folder Structure

project-folder/
│
├── index.html # Homepage
├── readme.md # Project instructions
│
├── /css # Stylesheets
│ ├── cart.css
│ ├── home.css
│ ├── search_product.css
│ └── signup_signin.css
│
├── /data # Data files
│ └── data.js
│
├── /html # Additional pages
│ ├── cart.html
│ ├── search_product.html
│ ├── signup_signin.html
│ └── user_input_page.html
│
├── /images # Images and assets
│
├── /js # JavaScript files
│ ├── cart.js
│ ├── home.js
│ ├── search_product.js
│ └── signup_signin.js