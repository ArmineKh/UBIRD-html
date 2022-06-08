// ---- delivery catalog open close ----
const deliveryCatalogBtn =  document.getElementById('delivery-catalog');
const deliveryCatalogContent = document.getElementsByClassName("delivery-catalog-contenet")[0]
const deliveryCatalogClose = document.querySelector('.catalog-close-btn-container')
deliveryCatalogBtn.addEventListener('click', function (e) {
  deliveryCatalogContent.classList.toggle("show")
})
deliveryCatalogClose.addEventListener('click', function (e) {
  deliveryCatalogContent.classList.toggle("show")
})



// ---- delivery catalog filter ----
const showAllTab = document.querySelector('.show-all')
const shopsTab = document.querySelector('.shops')
const establishmentsTab =  document.querySelector('.establishments')
const pharmaciesTab = document.querySelector('.pharmacies')

const allFilteredDivs = document.querySelectorAll('.filtered-div')

const allFilteredDivsArray = Array.from(allFilteredDivs)

showAllTab.addEventListener('click', function() {
  let current = document.querySelectorAll(".catalog-btn-container .active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')
    div.classList.add('show')
  })
})

shopsTab.addEventListener('click', function() {
  let current = document.querySelectorAll(".catalog-btn-container .active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.shops) {
      div.classList.add('remove')
    }
  })
})

establishmentsTab.addEventListener('click', function () {
  let current = document.querySelectorAll(".catalog-btn-container .active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.establishments) {
      div.classList.add('remove')
    }
  })
})

pharmaciesTab.addEventListener('click', function () {
  let current = document.querySelectorAll(".catalog-btn-container .active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')
    
    if (!div.dataset.pharmacies) {
      div.classList.add('remove')
    }
  })
})



// ---- city selection ----
const wrapper = document.querySelector(".city-wrapper"),
selectBtn = wrapper && wrapper.querySelector(".city-select-btn"),
options = wrapper && wrapper.querySelector(".options"),
isCityTitle = wrapper && wrapper.querySelector(".is-city-title p"),
isCityContent = wrapper && wrapper.querySelector(".is-city-content");

let countries = [
  'Ереван',
  'Гюмри',
  'Ванадзор',
  'Абовян',
  'Вагаршапат',
];

function addCountry(selectedCountry) {
  options ? options.innerHTML = "" : '';
  countries.forEach(country => {
    let isSelected = country == selectedCountry ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options && options.insertAdjacentHTML("beforeend", li);
  });
  options && options.insertAdjacentHTML("afterbegin", `<p>Выберите город</p>`);
}

function selectFirstCountry() {
  options ? options.innerHTML = "" : '';
  countries.forEach((country, index) => {
    let li;
    if(index === 0){
      li = `<li onclick="updateName(this)" class="selected">${country}</li>`;
    }else {
      li = `<li onclick="updateName(this)">${country}</li>`;
    }
    options && options.insertAdjacentHTML("beforeend", li);
});
  options && options.insertAdjacentHTML("afterbegin", `<p>Выберите город</p>`);
  wrapper ? wrapper.querySelector(".city-select-btn span").innerHTML = `Город: ${countries[0]}` : ''
  isCityTitle ? isCityTitle.innerHTML = `Ваш город - ${countries[0]}?` : ''
}

addCountry();
selectFirstCountry();

function updateName(selectedLi) {
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = "Город: " + selectedLi.innerText;
  isCityTitle.innerHTML = `Ваш город - ${selectedLi.innerText}?`;
}

selectBtn && selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active")
});

const closeCityBtn = document.querySelector(".is-city-buttons .green")
closeCityBtn && closeCityBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active")
});
const openCitiesSelection = document.querySelector(".is-city-buttons .gray")
openCitiesSelection && openCitiesSelection.addEventListener("click", () => {
  options.classList.toggle("show")
  isCityContent.classList.toggle("show")
});

document.addEventListener('click', function(e){
  if(!(e.target.closest('.city-wrapper'))){
    wrapper.classList.remove('active');
  }
});
// ---- city selection end ----



// ---- Category slider ----
$('.category-block-container .slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:"<button type='button' class='slick-prev pull-left'><svg width='180' height='180' viewBox='0 0 180 180' fill='none' xmlns='http://www.w3.org/2000/svg'><g filter='url(#filter0_d_1856_3081)'><circle cx='90' cy='50' r='30' fill='white'/></g><path d='M92 46L87 51.5L92 57' stroke='#222C54' stroke-width='2.2' stroke-linecap='round'/><defs><filter id='filter0_d_1856_3081' x='0' y='0' width='180' height='180' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset dy='40'/><feGaussianBlur stdDeviation='30'/><feColorMatrix type='matrix' values='0 0 0 0 0.278431 0 0 0 0 0 0 0 0 0 0.372549 0 0 0 0.03 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1856_3081'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1856_3081' result='shape'/></filter></defs></svg></button>",
  nextArrow:"<button type='button' class='slick-next pull-right'><svg width='180' height='180' viewBox='0 0 180 180' fill='none' xmlns='http://www.w3.org/2000/svg'><g filter='url(#filter0_d_1856_3084)'><circle r='30' transform='matrix(-1 0 0 1 90 50)' fill='url(#paint0_linear_1856_3084)'/></g><path d='M88 45L93 50.5L88 56' stroke='white' stroke-width='2.2' stroke-linecap='round'/><defs><filter id='filter0_d_1856_3084' x='0' y='0' width='180' height='180' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'><feFlood flood-opacity='0' result='BackgroundImageFix'/><feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/><feOffset dy='40'/><feGaussianBlur stdDeviation='30'/><feColorMatrix type='matrix' values='0 0 0 0 0.278431 0 0 0 0 0 0 0 0 0 0.372549 0 0 0 0.03 0'/><feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_1856_3084'/><feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_1856_3084' result='shape'/></filter><linearGradient id='paint0_linear_1856_3084' x1='0' y1='30' x2='60' y2='30' gradientUnits='userSpaceOnUse'><stop stop-color='#13B574'/><stop offset='1' stop-color='#12B07E'/></linearGradient></defs></svg></button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



// ---- categories btn open close ----
// document.querySelector(".all-categories-btn") && document.querySelector(".all-categories-btn").addEventListener('click', function (e) {
//   document.querySelector(".slider-container").classList.toggle("show")
//   document.querySelector(" .all-categories-container").classList.toggle("show")
// })
// ---- categories btn open close end ----



// ----FAQ accordion open close ----
let acc = document.getElementsByClassName("faq-block-accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
document.querySelector(".faq-block-show-all-btn-container") && document.querySelector(".faq-block-show-all-btn-container").addEventListener("click", function(e){
  document.querySelector(".faq-block-show-all-btn-container").classList.toggle("show")
  document.querySelectorAll(".faq-block-row")[1].classList.toggle("show")
})
// ---- FAQ accordion open close end ----



// ---- feedback modal open close ----
let modal = document.getElementById("feedback-modal");
let feedbackBtn = document.getElementById("feedback-btn");
let closeSpan = document.querySelector("#feedback-modal .close");

feedbackBtn.onclick = function() {
  modal.style.display = "block";
}

closeSpan.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
// ---- feedback modal open close end ----

// ---- catalog category open close ----
const categorySelectArrow = document.querySelector(".category-select-arrow");
const categoryFilterContainer = document.querySelector(".category-filter-container");
const subCategoryMenuCloseBtn = document.querySelector(".sub-category-menu-close-btn");
const subCategoryMenuLinks = document.querySelectorAll(".sub-category-menu-link");
const subCategoryMenuLinksArray = Array.from(subCategoryMenuLinks)

categorySelectArrow && categorySelectArrow.addEventListener("click", function(e) {
  categoryFilterContainer.classList.toggle('show')
  this.classList.toggle('rotate');
})

subCategoryMenuCloseBtn && subCategoryMenuCloseBtn.addEventListener("click", function(e) {
  categoryFilterContainer.classList.toggle('show')
  this.classList.toggle('rotate');
})

subCategoryMenuLinksArray.forEach(div => {
  div.addEventListener("click", function(e) {
    e.preventDefault()
    subCategoryMenuLinksArray.forEach(div => {
      div.classList.remove('open')
    })
    this.classList.toggle('open');
  })
})

// ---- catalog category open close end ----

// ---- category filter open close ----
const categoryFilterBtn = document.querySelector(".category-filter-btn");
const filterSelectsWrapp = document.querySelector(".filter-selects-wrapp");
const selectedFiltersWrapp = document.querySelector(".selected-filters-wrapp");

categoryFilterBtn && categoryFilterBtn.addEventListener('click', function(e){
  this.classList.toggle('active')
  filterSelectsWrapp.classList.toggle('show');
  selectedFiltersWrapp.classList.toggle('show');

})
// ---- category filter open close end ----

// ---- delivery address modal open close end ----
let deliveryAddressModal = document.getElementById("delivery-address-modal");
let editDeliveryAddressModal = document.getElementById("edit-delivery-address-modal");
let deliveryAddressBtn = document.querySelector(".delivery-address-icon");
let deliveryAddressCloseSpan = document.querySelector("#delivery-address-modal .close");
let editDeliveryAddressCloseSpan = document.querySelector("#delivery-address-modal .close");


!deliveryAddressBtn ? null : deliveryAddressBtn.onclick = function() {
  deliveryAddressModal.style.display = "block";
}

!deliveryAddressCloseSpan ? null : deliveryAddressCloseSpan.onclick = function() {
  deliveryAddressModal.style.display = "none";
}

!editDeliveryAddressCloseSpan ? null : editDeliveryAddressCloseSpan.onclick = function() {
  editDeliveryAddressModal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === deliveryAddressModal || e.target === editDeliveryAddressModal) {
    deliveryAddressModal.style.display = "none";
    editDeliveryAddressModal.style.display = "none";
  }
}

// ---- delivery address modal open close end ----

// ---- working hours modal open close ----
let workingHoursModal = document.getElementById("working-hours-modal");
let workingHourBtn = document.querySelector(".working-hours-container > span");
let workingHourModalCloseSpan = document.querySelector("#working-hours-modal .close");
let workingHoursModalBtn = document.querySelector(".working-hours-modal-btn");

!workingHourBtn ? null : workingHourBtn.onclick = function() {
  workingHoursModal.style.display = "block";
}

!workingHourModalCloseSpan ? null : workingHourModalCloseSpan.onclick = function() {
  workingHoursModal.style.display = "none";
}

!workingHoursModalBtn ? null : workingHoursModalBtn.onclick = function() {
  workingHoursModal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === workingHoursModal) {
    workingHoursModal.style.display = "none";
  }
}

// ---- working hours modal open close end ----

// ---- product card modal ----
let productModal = document.getElementById("product-modal");
let productCards = document.querySelectorAll(".product-card");
let productModalCloseSpan = document.querySelector("#product-modal .close");
productCards.forEach((productCard) => {
  productCard.addEventListener("click", function(e){
    if(e.target === this.querySelector(".basket-on-hover")){
      e.stopPropagation()
      this.querySelector(".basket-on-hover").nextElementSibling.classList.toggle('show')
    }
    if(e.target !== this.querySelector(".basket-on-hover") && e.target !== this.querySelector(".product-minus-btn") && e.target !== this.querySelector(".product-plus-btn")){

      productModal.style.display = "block";
      
      $('.product-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-slider-nav'
      });
      $('.product-slider-nav').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        infinite: true,
        asNavFor: '.product-slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });
  
      $('.recent-viewed-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='21' cy='21' r='21' fill='white'/><path d='M22 17L18 21.5L22 26' stroke='#222C54' stroke-width='2.2' stroke-linecap='round'/></svg></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><svg width='42' height='42' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg'><circle cx='21' cy='21' r='21' fill='url(#paint0_linear_813_4886)'/><path d='M20 17L24 21.5L20 26' stroke='white' stroke-width='2.2' stroke-linecap='round'/><defs><linearGradient id='paint0_linear_813_4886' x1='0' y1='21' x2='42' y2='21' gradientUnits='userSpaceOnUse'><stop stop-color='#13B574'/><stop offset='1' stop-color='#12B07E'/></linearGradient></defs></svg></button>",
        
      });
    }
  })
})

!productModalCloseSpan ? null : productModalCloseSpan.onclick = function() {
  productModal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === productModal) {
    productModal.style.display = "none";
  }
}

let productCardMinusBtn = document.querySelectorAll(".product-card .product-price-wrapp .product-minus-btn")
let productCardPlusBtn = document.querySelectorAll(".product-card .product-price-wrapp .product-plus-btn")

productCardMinusBtn.forEach(item => {
  item.addEventListener("click", function(e){
    if(this.nextElementSibling.value !== '1'){
      this.nextElementSibling.value = +this.nextElementSibling.value - 1;
    }else {
      this.nextElementSibling.value = '1'; 
    }
  })
})

productCardPlusBtn.forEach(item => {
  item.addEventListener("click", function(e){
    this.previousElementSibling.value = +this.previousElementSibling.value + 1;
  })
})

let productAddBtn = document.querySelector(".product-add-btn");
let productCountPluseMinusContainer = document.querySelector(".product-count-pluse-minus-container");
let productMinusBtn = document.querySelector(".product-minus-btn");
let productPlusBtn = document.querySelector(".product-plus-btn");
let productCountInput = document.querySelector(".product-count-pluse-minus-container input");


!productAddBtn ? null : productAddBtn.addEventListener('click', function(e){
  this.classList.toggle('show');
  productCountPluseMinusContainer.classList.toggle('show')
})

!productMinusBtn ? null : productMinusBtn.addEventListener("click", function(e){
  if(productCountInput.value !== '1'){
    productCountInput.value = +productCountInput.value - 1;
  }else {
    productCountInput.value = '1'; 
  }
})

!productPlusBtn ? null : productPlusBtn.addEventListener("click", function(e){
  productCountInput.value = +productCountInput.value + 1
})


function openProductDescription(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    document.getElementById(tabName).className.replace(" active", "");
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.className += " active";
}

// ---- product card modal open close end ----



// ---- cart modal open close ----
let cartModal = document.getElementById("cart-modal");
let orderIsBigModal = document.querySelector(".corder-is-big");
let cartBtn = document.querySelector(".cart-btn");
let cartModalCloseSpan = document.querySelector("#cart-modal .close");

cartBtn ? cartBtn.onclick = function(e) {
  e.preventDefault()
  cartModal.style.display = "block";
} : null

cartModalCloseSpan.onclick = function() {
  cartModal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === cartModal || e.target === orderIsBigModal) {
    cartModal.style.display = "none";
  }
}

let cartItemMinusBtn = document.querySelector(".cart-item-minus-btn");
let cartItemPlusBtn = document.querySelector(".cart-item-plus-btn");
let cartItemCountInput = document.querySelector(".cart-item-count-pluse-minus-container input");


cartItemMinusBtn.addEventListener("click", function(e){
  if(cartItemCountInput.value !== '1'){
    cartItemCountInput.value = +cartItemCountInput.value - 1;
  }else {
    cartItemCountInput.value = '1'; 
  }
})

cartItemPlusBtn.addEventListener("click", function(e){
  cartItemCountInput.value = +cartItemCountInput.value + 1
})

// ---- cart modal open close end ----

// ---- error modal open close ----
let errorModal = document.getElementById("error-modal");
// let errorModalOpenBtn = document.querySelector(".error-modal-btn");
let errorModalBtn = document.querySelector(".error-modal-btn");
let errorModalCloseSpan = document.querySelector("#error-modal .close");

// errorModalOpenBtn.onclick = function() {
//   errorModal.style.display = "block";
// }

errorModalBtn.onclick = function() {
  errorModal.style.display = "none";
}

errorModalCloseSpan.onclick = function() {
  errorModal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target === errorModal) {
    errorModal.style.display = "none";
  }
}
// ---- error modal open close end ----

// ---- dded To Cart modal open close ----
let addedToCartModal = document.getElementById("added-to-cart-modal");

setTimeout(() => {
  addedToCartModal.style.display = "none";
}, 3000);

// ---- dded To Cart modal open closee end ----

