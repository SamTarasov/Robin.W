const btnCountryItaly = document.getElementById('btnCountryItaly');
const btnCountryAustralia = document.getElementById('btnCountryAustralia');
const btnCountryIndia = document.getElementById('btnCountryIndia');
const btnCountryBrazil = document.getElementById('btnCountryBrazil');

const galeriaPhotosItaly = document.getElementById('photography_county_photos_italy');
const galeriaPhotosAustralia = document.getElementById('photography_county_photos_australia');
const galeriaPhotosIndia = document.getElementById('photography_county_photos_india');
const galeriaPhotosBrazil = document.getElementById('photography_county_photos_brazil');

btnCountryItaly.addEventListener('click', (e) => {
    e.preventDefault();
    btnCountryItaly.classList.add('photography_link_category_active');
    btnCountryAustralia.classList.remove('photography_link_category_active');
    btnCountryIndia.classList.remove('photography_link_category_active');
    btnCountryBrazil.classList.remove('photography_link_category_active');


    galeriaPhotosItaly.style.display = 'grid';
    galeriaPhotosAustralia.style.display = 'none';
    galeriaPhotosIndia.style.display = 'none';
    galeriaPhotosBrazil.style.display = 'none';
})

btnCountryAustralia.addEventListener('click', (e) => {
    e.preventDefault();
    btnCountryAustralia.classList.add('photography_link_category_active');
    btnCountryItaly.classList.remove('photography_link_category_active');
    btnCountryIndia.classList.remove('photography_link_category_active');
    btnCountryBrazil.classList.remove('photography_link_category_active');
   
    galeriaPhotosItaly.style.display = 'none';
    galeriaPhotosAustralia.style.display = 'grid';
    galeriaPhotosIndia.style.display = 'none';
    galeriaPhotosBrazil.style.display = 'none';
})

btnCountryIndia.addEventListener('click', (e) => {
    e.preventDefault();
    btnCountryIndia.classList.add('photography_link_category_active');
    btnCountryAustralia.classList.remove('photography_link_category_active');
    btnCountryItaly.classList.remove('photography_link_category_active');
    btnCountryBrazil.classList.remove('photography_link_category_active');
    
    galeriaPhotosItaly.style.display = 'none';
    galeriaPhotosAustralia.style.display = 'none';
    galeriaPhotosIndia.style.display = 'grid';
    galeriaPhotosBrazil.style.display = 'none';
})

btnCountryBrazil.addEventListener('click', (e) => {
    e.preventDefault();
    btnCountryBrazil.classList.add('photography_link_category_active');
    btnCountryAustralia.classList.remove('photography_link_category_active');
    btnCountryIndia.classList.remove('photography_link_category_active');
    btnCountryItaly.classList.remove('photography_link_category_active');

    galeriaPhotosItaly.style.display = 'none';
    galeriaPhotosAustralia.style.display = 'none';
    galeriaPhotosIndia.style.display = 'none';
    galeriaPhotosBrazil.style.display = 'grid';
})






// NAV

const btnForOpenMenuMobile = document.getElementById('btnOpenMenuMobile');
const btnForCloseMenuMobile = document.getElementById('btnCloseMenuMobile');

const menuOpenAboutMobile = document.getElementById('nav_about_menu');


btnForOpenMenuMobile.addEventListener('click', (e) => {
    e.preventDefault();
    menuOpenAboutMobile.style.display = 'flex';
    btnForOpenMenuMobile.style.display = 'none';  
    btnForCloseMenuMobile.style.display = 'block';
})


btnForCloseMenuMobile.addEventListener('click', (e) => {
    e.preventDefault();
    menuOpenAboutMobile.style.display = 'none';
    btnForOpenMenuMobile.style.display = 'block';  
    btnForCloseMenuMobile.style.display = 'none';
})



 function submitForm() {
    document.getElementById('myForm').submit();
  }

