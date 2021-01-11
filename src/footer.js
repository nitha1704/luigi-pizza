import React from 'react';

class Footer extends React.Component {

    render() {
        return (
          <div className="footer">
            <div className="container">
              <div className="footer-item1">
                <img src="/resources/images/logo-white.png" />
              </div>
              <div className="footer-item2">
                <p>Address:</p>
                <p>931 Shelbyville, TN</p>
              </div>
              <div className="footer-item3">
                <p>Phone:</p>
                <p>(229) 869-8520</p>
              </div>
              <div className="footer-item4">
                <p>Email:</p>
                <p>yourmail@gmail.com</p>
              </div>
              <div className="footer-item5">
                <ul className="ul-cleargap">
                  <li>
                    <a href="javascript:;">
                      <i class="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <i class="fab fa-vimeo"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-item6">
                <p>
                  Copyright ©2020 All rights reserved | This template is made
                  with
                  <i class="fas fa-heart"></i>
                  by Anonymous
                </p>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;