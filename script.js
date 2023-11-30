'use strict'
const courseBox = document.querySelector(".course-box");
const slideBox = document.querySelectorAll(".course-box-box");
// console.log(slideBox);
let count = 0;
slideBox.forEach((slide, i) => {
  let val = `(slide.style.left = ${i * 101}%)`;
  console.log(val);
});
const goPrev = () => {
  count--;
  console.log("yes");
  slideShow();
};
const goNext = () => {
  count++;
  console.log("yes");
  slideShow();
};
const slideShow = () => {
  console.log("yay");
  slideBox.forEach((slide) => {
    count = count === slideBox.length ? 0 : count < 0 ? slideBox.length - 1 : count;
    slide.style.transform = `translateX(-${count * 101}%)`;
  });
};


//slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//zindex

// const about = document.querySelector(".about");
var topIndex=100;
function movetotop(top){
  top.style.zIndex=++topIndex;
}


// 



// COUNTERRRRRRRRRRRRRRRR

const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver(
(entries, observer) => {
  const [entry] = entries;
  // console.log(entry);

  // if (entry.isIntersecting == false)
  if (!entry.isIntersecting) return;

  // animate number counter

  const counterNum = document.querySelectorAll(".counter-numbers");

  const speed = 200;

  counterNum.forEach(curElem => {
    const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.number);
      // console.log(targetNumber);
      const initialNum = parseInt(curElem.innerText);
      // console.log(initialNum);

      const incrementNumber = Math.trunc(targetNumber / speed);
      // console.log(incrementNumber);

      if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      }
    };

    updateNumber();
  });

  observer.unobserve(workSection);
},
{
  root: null,
  threshold: 0 });



workObserver.observe(workSection);

// COUNTER ANIMATTTTIONNNNNNNNNNNNNNNN ENDDDDDDDD


// MODAL WINDOW

const admissionBtn = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
console.log(admissionBtn);

const openModal = function(){
    modal.classList.remove('hidden');
}
const closeModal = function() {
    modal.classList.add('hidden');
}

admissionBtn.addEventListener('click', openModal);
close.addEventListener('click', closeModal);
//esc key
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape')
    closeModal();
});



//////////////  Submenu Hover ////////////////

document.addEventListener('DOMContentLoaded', function () {
  function highlightActiveMenuItem() {
    var currentPage = window.location.href;

    var submenuItems = document.querySelectorAll('.nav-home ul li .submenu a');

    submenuItems.forEach(function (item) {
      if (item.getAttribute('href') === currentPage) {
        item.classList.add('active-submenu-item');
      }
    });
  }

  highlightActiveMenuItem();

  var submenuLinks = document.querySelectorAll('.nav-home ul li .submenu a');
  submenuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      submenuLinks.forEach(function (item) {
        item.classList.remove('active-submenu-item');
      });

      link.classList.add('active-submenu-item');

      sessionStorage.setItem('selectedSubmenuItem', link.getAttribute('href'));
    });
  });

  var selectedSubmenuItem = sessionStorage.getItem('selectedSubmenuItem');
  if (selectedSubmenuItem) {
    document.querySelector(`.nav-home ul li .submenu a[href="${selectedSubmenuItem}"]`).classList.add('active-submenu-item');
  }
});

// dropdown

$('.nav-tabs-dropdown').each(function (i, elm) {
  $(elm).text($(elm).next('ul').find('li.active a').text());
});
$('.nav-tabs-dropdown').on('click', function (e) {
  e.preventDefault();
  $(e.target).toggleClass('open').next('ul').slideToggle();
});
$('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function (e) {
  e.preventDefault();
  $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());
});


//submenu
 // Set initial active state based on the current page URL
 $(document).ready(function () {
  var currentPath = window.location.pathname;

  // Find the link with a matching href and add the 'active' class
  $('.sub-menu a[href="' + currentPath + '"]').addClass('active');
});

// Add click event to handle toggling the 'active' class
$('.sub-menu a').on('click', function () {
  // Remove 'active' class from all submenu items
  $('.sub-menu a').removeClass('active');

  // Add 'active' class to the clicked submenu item
  $(this).addClass('active');
});


document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('click');
  const navUl = document.querySelector('.nav-home ul');
  const hamburgerIcon = document.querySelector('.hamburger i');
  const navUlItems = document.querySelectorAll('.nav-home ul li');
  const dropdown = document.querySelector('.dropdown a');

  checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
          navUl.classList.add('active');
      } else {
          navUl.classList.remove('active');
      }
  });

  // Close the menu when clicking on any .nav-home ul li item
  navUlItems.forEach(item => {
      item.addEventListener('click', function () {
          navUl.classList.remove('active');
          checkbox.checked = false;
      });
  });

  // Exclude .nav-home .nav-right .dropdown from closing the menu
  dropdown.addEventListener('click', function (event) {
      event.stopPropagation();
  });
});

$(document).ready(function(){
  $(".tabs-btn").click(function(){
    $("#nav-tabs-wrapper").slideToggle();
  });
});



