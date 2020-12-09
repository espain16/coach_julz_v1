const chevrons = document.getElementById('chevron');
const services = document.getElementById('services');



chevrons.addEventListener('click', chevronDown);

function chevronDown() {
  services.scrollIntoView({
    behavior: 'smooth'
  })
}

