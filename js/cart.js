document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("buyForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Replace the whole body with Thank You message
      document.body.innerHTML = `
        <div class="thank-you" style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;text-align:center;font-family:sans-serif;">
          <h2 style="font-size:2rem;color:#2c3e50;">🎉 Thank You!</h2>
          <p style="margin:10px 0;font-size:1.2rem;color:#555;">Your order has been received successfully.</p>
          <a href="../index.html" style="margin-top:20px;padding:10px 20px;background:#2c3e50;color:#fff;text-decoration:none;border-radius:6px;">Go to Home Page</a>
        </div>
      `;
    });
  }
});
