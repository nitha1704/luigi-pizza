import React from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

// Slick Slider
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.min.js";

// Counter Up
import "../node_modules/jquery-appear-original/index";
import counterUp from "counterup2";

class Header extends React.Component {
  componentDidMount() {
    //////// Window ScrollTop Active ///////
    $(window).scroll(function () {
      if ($(window).scrollTop() > 120) {
        $(".header").addClass("active");
      } else {
        $(".header").removeClass("active");
        $(".header:after").addClass("active");
      }
    });

    //////// Dropdown/Hamburger Menu Active  ///////
    let hamburgerMenu = document.querySelector(".hamburger-menu");
    let myDropdownMenu = document.querySelector(".my-dropdown-menu");
    hamburgerMenu.addEventListener("click", function () {
      myDropdownMenu.classList.toggle("active");
    });

    //////// Slick Slider  ///////
    $(".about-us-section3-item2").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    });

    //////// Mobile Navbar Responsive  ///////

    window.addEventListener("resize", function () {
      if (window.innerWidth > 992) {
        myDropdownMenu.classList.remove("active");
      }
    });

    //////// CounterNum Animated  ///////

    // const doIncrement = () => {
    //     const counterNumAboutUs = document.querySelectorAll('.about-us-counterNum');

    //     counterNumAboutUs.forEach((counterNum) => {
    //         const doIncrement2 = () => {
    //             const dataNumber = +counterNum.getAttribute('data-number');
    //             const dataSpeed = +counterNum.getAttribute('data-speed');
    //             const incrementNumber = Math.ceil(dataNumber / dataSpeed);
    //             const number = +counterNum.innerHTML;

    //             if (number < dataNumber) {
    //                 counterNum.innerHTML = number + incrementNumber
    //                 setTimeout(doIncrement2, 1);
    //             } else {
    //                 counterNum.innerHTML = dataNumber;
    //             }
    //         }
    //         doIncrement2()
    //     })
    // }

    // const myIncre = () => {
    //     const myIncre2 = () => {
    //         const counterNum = document.querySelectorAll('.about-us-counterNum')
    //         counterNum.forEach((counterNums) => {
    //             // Start counting, do this on DOM ready or with Waypoints.
    //             counterUp(counterNums, {
    //                 duration: 1000,
    //                 delay: 10,
    //             })
    //         })
    //     }
    //     myIncre2();
    // }

    const doIncrement2 = function () {
      $(".about-us-counterNum").each(function () {
        const durationTime = +$(this).attr("data-duration");
        const number = +$(this).attr("data-number");

        $(this)
          .prop("counter", 0)
          .animate(
            {
              counter: number,
            },
            {
              duration: durationTime,
              easing: "swing",
              step: function (x) {
                $(this).text(Math.ceil(x));
              },
              complete: function () {
                $(this).removeClass("about-us-counterNum");
              },
            }
          );
      });
    };

    $(".about-us-section4").on("appear", function () {
      //doIncrement();
      //myIncre();
      doIncrement2();
    });

    $(".about-us-section4").appear();
  }

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="header-item1">
            <img
              src="/resources/images/logo-white.png"
              alt=""
              className="img-fit"
            />
          </div>
          <div className="header-item2">
            <ul className="ul-cleargap">
              <Link to="/">
                <li>
                  <a>HOME</a>
                </li>
              </Link>
              <Link to="/about-us">
                <li>
                  <a>ABOUT US</a>
                </li>
              </Link>
              <Link to="/add-ons-menu">
                <li>
                  <a>ADD-ONS MENU</a>
                </li>
              </Link>
              <Link to="/our-blog">
                <li>
                  <a>OUR BLOG</a>
                </li>
              </Link>
              <Link to="/contact">
                <li>
                  <a>CONTACT</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="header-item3">
            <a href="javascript:;">ORDER: (229) 869-8520</a>
          </div>

          {/* Mobile Menu */}
          <div className="hamburger-menu">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <hr className="hr-mobile" />
        </div>

        {/* Dropdown Menu */}
        <div className="my-dropdown-menu">
          <ul className="ul-cleargap">
            <Link to="/">
              <li>
                <a>HOME</a>
              </li>
            </Link>
            <Link to="/about-us">
              <li>
                <a>ABOUT US</a>
              </li>
            </Link>
            <Link to="/add-ons-menu">
              <li>
                <a>ADD-ONS MENU</a>
              </li>
            </Link>
            <Link to="/our-blog">
              <li>
                <a>OUR BLOG</a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a>CONTACT</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
