
document.getElementById("jaar").textContent = new Date().getFullYear();


const scrollElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

const elementInView = (el, offset = 150) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
};

const displayScrollElement = (element) => {
  element.classList.add('show');
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 150)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);



const form = document.getElementById("contactForm");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  alert("Bedankt voor je bericht! (Dit is een demo, geen echte verzending.)");
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
