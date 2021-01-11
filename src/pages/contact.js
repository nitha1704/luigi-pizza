import React from "react";
import Header from "../header";
import Footer from "../footer";

class ContactUs extends React.Component {

  render() {
    const handleSubmit = (e) => {
      e.preventDefault();
    }

    return (
      <div>
        <Header />
        {/* Contact Section 1 */}
        <section className="contact-section1">
          <div className="contact-section1-item1">
            <p className="contact-section1-item1-1 subtitle">SAY HELLO</p>
            <p className="contact-section1-item1-2 title">Contact</p>
          </div>
        </section>
        {/* Contact Section 2 */}
        <section className="contact-section2">
          <div className="container">
            <div className="contact-section2-item1">
              <img
                src="resources/images/heading_logo.png"
                alt=""
                className="img-fit"
              />
              <h2>Say hello</h2>
              <p>Say hello, send us a message</p>
              <p>
                Proin dictum viverra varius. Etiam vulputate libero dui, at
                pretium elit elementum quis. Enean porttitor eros non ultrices
                convallis. Vivamus quis dolor ut arcu lobortis finibus a vitae
                leo. Sed eget tempus sem. Nullam sed lacus sed metus tincidunt
                lobortis lobortis at nibh. Morbi euismod, arcu in gravida
                rhoncus
              </p>
            </div>
            <div className="contact-section2-item2">
              <form onSubmit={handleSubmit}>
                <div className="form-group one">
                  <input type="text" placeholder="Name" />
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-group two">
                  <input type="text" placeholder="Subject" />
                </div>
                <div className="form-group three">
                  <textarea placeholder="Message"></textarea>
                </div>
                <div className="wrap-submit">
                  <button type="submit" className="pizza-button2">
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Section 3 */}
        <section className="contact-section3">
          
        </section>
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
