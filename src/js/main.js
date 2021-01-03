var mySwiper = new Swiper('.swiper-container', {

  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return '<span>0</span><span class="' + currentClass + '"></span>' +
        ' / ' +
        '<span>0</span><span class="' + totalClass + '"></span>';
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

// const collapseButton = document.querySelector('.navbar-toggler')
// const burgerButton = document.querySelector('.burger')
// const closeButton = document.querySelector('.close')
// const location = document.querySelector('.location')
// collapseButton.addEventListener('click', e =>{
//   e.preventDefault();
//   burgerButton.classList.toggle('hidden');
//   closeButton.classList.toggle('hidden');
//   location.classList.toggle('hidden');

// })

// const brand = document.querySelector('.brand')
// const headerRight = document.querySelector('.header-right')

// window.addEventListener(`resize`, e => {
//   let width = e.target.innerWidth
//     if(width < 992) {
//           brand.classList.remove('hidden')
//           headerRight.classList.add('hidden')
//         } else {
//           brand.classList.add('hidden')
//           headerRight.classList.remove('hidden')
//           }
// }, false);



// валидация формы
const groupArr = document.querySelectorAll('.mail-form-group');
const sbmtBtn = document.querySelector('.btn');

groupArr.forEach(i => {
  i.addEventListener('click', e => {
    e.preventDefault();
    i.firstElementChild.firstElementChild.classList.add('fog');
    let input = i.firstElementChild.lastElementChild;
    input.classList.remove('bury');
    input.focus();
    input.addEventListener('blur', e => {
      e.preventDefault();
      if (input.value.length < 1) {
        i.lastElementChild.classList.remove('bury');
        i.firstElementChild.classList.add('error');
      }
    })
    input.addEventListener('input', e => {
      e.preventDefault();
      if (input.value.length > 0) {
        i.lastElementChild.classList.add('bury');
        i.firstElementChild.classList.remove('error');
      }
    })
    let emailBlock = document.querySelector('.email-block');
    let errorMsg = document.querySelector('.invalid-email');
    emailBlock.lastElementChild.addEventListener('input', e => {
      e.preventDefault();
      if (!emailBlock.lastElementChild.value.match(/.+@.+\..+/i)) {
        errorMsg.classList.remove('bury');
        emailBlock.classList.add('error');
      } else {
        errorMsg.classList.add('bury');
        emailBlock.classList.remove('error');

      }
    })
  })
})

sbmtBtn.addEventListener('click', e => {
  e.preventDefault();
  groupArr.forEach(i => {
    let input = i.firstElementChild.lastElementChild;
    if (input.value.length < 1) {
      i.lastElementChild.classList.remove('bury');
      i.firstElementChild.classList.add('error');
    }
  })
})

// map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 53.69062, lng: 23.81800 },
    zoom: 17,
    disableDefaultUI: true,
    styles: [
      {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#444444"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "color": "#f2f2f2"
          }
        ]
      },
      {
        "featureType": "landscape.man_made",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          },
          {
            "color": "#cee9de"
          },
          {
            "saturation": "2"
          },
          {
            "weight": "0.80"
          }
        ]
      },
      {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 45
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "color": "#f5d6d6"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
          {
            "hue": "#ff0000"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#0064ff"
          },
          {
            "gamma": "1.44"
          },
          {
            "lightness": "-3"
          },
          {
            "weight": "1.69"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "weight": "0.31"
          },
          {
            "gamma": "1.43"
          },
          {
            "lightness": "-5"
          },
          {
            "saturation": "-22"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#ff0000"
          }
        ]
      },
      {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#ff0045"
          }
        ]
      },
      {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "on"
          },
          {
            "hue": "#00d1ff"
          }
        ]
      },
      {
        "featureType": "transit.station.bus",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "transit.station.rail",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": "#00cbff"
          }
        ]
      },
      {
        "featureType": "transit.station.rail",
        "elementType": "labels.text",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
          {
            "color": "#46bcec"
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
          {
            "weight": "1.61"
          },
          {
            "color": "#cde2e5"
          },
          {
            "visibility": "on"
          }
        ]
      }
    ]
  });
  var marker = new google.maps.Marker({
    position: { lat: 53.69065564517917, lng: 23.82252373831691 },
    map: map,
    title: 'Кабинет врачебной косметологии в г. Гродно',
    icon: './../images/marker.svg'
  });
  google.maps.event.addListener(marker, 'click', function () {
    map.setZoom(19);
    map.setCenter(marker.getPosition());
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let map = document.querySelector('#map')
  if (map) {
    initMap()
  }
})
