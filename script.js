// Smooth Scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Watch Video button functionality (placeholder)
const watchVideoBtn = document.querySelector('.watch-video');
if(watchVideoBtn) {
  watchVideoBtn.addEventListener('click', () => {
    alert('Video modal functionality to be implemented here.');
    // Later: Open a video modal or embed player dynamically
  });
}

// Join Now, Get Started, Enroll, Join Now CTA buttons
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    console.log(`${btn.innerText} button clicked.`);
    // Future: redirect, open forms, or integrate payment gateway
  });
});
