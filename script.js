// toggle button in href links header
$(".href--elem").on("click", function () {
  $("i", this).toggleClass("fa fa-circle-thin fa fa-circle");
});

//map creation

function initMap() {
  const location = { lat: 40.671207, lng: -73.897215 }; //brooklyn
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: location,
    mapTypeId: "roadmap",
    backgroundColor: "lightgrey",
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: "/img/pin.svg",
  });
}

//slick part 2 - cards

$(document).on("ready", function () {
  $(".lazy").slick({

    infinite: true,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    fade: true,
    dots: true,
    dotsClass: "vertical-dots",
    prevArrow: false,
    nextArrow: false,
    slide: "div",
  });
});

$(document).on("ready", function () {
  $(".multiple-items").slick({
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
  });
});

// smooth scroll on arrow-like button elem

function onArrowClick() {
  let projects = document.querySelector("#projects");
  projects.scrollIntoView({ behavior: "smooth", block: "start" });
}

//to stop auto scrolling
$(window).on("unload", function () {
  $(window).scrollTop(0);
});

//form validation
function validateEmail(inputText) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Valid email address!");
    document.form.lmail.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.form.lmail.focus();
    return false;
  }
}
