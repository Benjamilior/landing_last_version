document.addEventListener("scroll", function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  document.getElementById('izquierdo').style.transform = 'translateY(' + scrollTop * 0.9 + 'px)';
  document.getElementById('derecho').style.transform = 'translateY(' + scrollTop * 0.1 + 'px)';
  document.getElementById('atras').style.transform = 'translateY(' + scrollTop * 0.1 + 'px)';
  document.getElementById('imgiz').style.transform = 'translateY(' + scrollTop * 0.9 + 'px)';
  document.getElementById('imgder').style.transform = 'translateY(' + scrollTop * 0.9 + 'px)';


  // Puedes ajustar los valores multiplicadores según tus preferencias
});






particlesJS(
    {
      "particles": {
        "number": {
          "value": 90,
          "density": {
            "enable": true,
            "value_area": 946.9921162906311
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 3
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.4419296542689612,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 19.179592913140414,
            "size_min": 4.794898228285103,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 110.4824135672403,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
    )