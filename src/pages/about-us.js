import React from 'react';
import Header from '../header';
import Footer from '../footer';



class AboutUs extends React.Component {
    render() {
        return (
          <div>
            <Header />
            {/* About Us Section 1 */}
            <section className="about-us-section1">
              <div className="about-us-section1-item1">
                <p className="about-us-section1-item1-1 subtitle">THE BEST IN TOWN</p>
                <p className="about-us-section1-item1-2 title">
                  About our Pizzaria
                </p>
              </div>
            </section>

            {/* About Us Section 2 */}
            <section className="about-us-section2">
              <div className="container">
                <div className="row about-us-section2-item1">
                  <div className="col-sm-6 about-us-section2-item1-1">
                    <img
                      src="/resources/images/about-1-600x400.jpg"
                      alt=""
                      className="img-fit"
                    />
                  </div>
                  <div className="col-sm-6 about-us-section2-item1-2">
                    <img
                      src="/resources/images/about-2-600x400.jpg"
                      alt=""
                      className="img-fit"
                    />
                  </div>
                  <div className="col-md-12 about-us-section2-item1-3">
                    <p>We are Luigis</p>
                    <p>
                      Maecenas fermentum tortor id fringilla molestie. In hac
                      habitasse platea dictumst. Morbi maximus lobortis ipsum,
                      ut blandit augue ullamcorper vitae. Nulla dignissim leo
                      felis, eget cursus elit aliquet ut.
                    </p>
                  </div>
                  <div className="col-md-6 about-us-section2-item1-4">
                    <p>
                      Maecenas fermentum tortor id fringilla molestie. In hac
                      habitasse platea dictumst. Morbi maximus lobortis ipsum,
                      ut blandit augue ullamcorper vitae. Nulla dignissim leo
                      felis, eget cursus elit aliquet ut. Curabitur vel
                      convallis massa. Morbi tellus ortor, luctus et lacinia
                      non, tincidunt in lacus. Vivamus sed ligula imperdiet,
                      feugiat magna vitae, blandit ex. Vestibulum id dapibus
                      dolor, ac cursus nulla.
                    </p>
                  </div>
                  <div className="col-md-6 about-us-section2-item1-5">
                    <p>
                      Maecenas fermentum tortor id fringilla molestie. In hac
                      habitasse platea dictumst.Morbi maximus lobortis ipsum, ut
                      blandit augue ullamcorper vitae. Nulla dignissim leo
                      felis, eget cursus elit aliquet ut. Curabitur vel
                      convallismassa. Morbi tellus tortor, luctus et lacinia
                      non, tincidunt in lacus. Vivamus sed ligula imperdiet,
                      feugiat magna vitae, blandit ex. Vestibulumidda pibus
                      dolor, accursus nulla.
                    </p>
                  </div>
                </div>
                <div className="row about-us-section2-item2">
                  <div className="about-us-section2-item2-1">
                    <a href="javascript:;">
                      <span>SEE TODAYS MENU</span>
                    </a>
                  </div>
                  <div className="about-us-section2-item2-2">
                    <a href="javascript:;">
                      <span>ORDER NOW</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* About Us Section 3 */}
            <section className="about-us-section3">
              <div className="container">
                <div className="about-us-section3-item1">
                  <img src="resources/images/heading_logo.png" />
                  <p>What Clients Say</p>
                </div>

                <div className="about-us-section3-item2">
                  <div className="about-us-section3-content">
                    <p className="about-us-section3-content1">
                      Pizza Hut is my preferred pizza place
                    </p>
                    <p className="about-us-section3-content2">
                      Pizza Hut is my preferred pizza place. They have a great
                      selection of toppings, allow you to choose from favorite
                      combos or create a pizza of your own. Their website is
                      easy to use and assists you to construct just the right
                      ingredients and the right amount of each ingredient to
                      suit your individual taste. I love their crust choices,
                      sauce choices, meat selections as well as veggies and
                      cheeses. Their customer service is great and they offer
                      reasonable prices.
                    </p>
                    <div className="about-us-section3-content3">
                      <img src="/resources/images/quoto-1-200x200.jpg" />
                    </div>
                    <p className="about-us-section3-content4">Mary, Customer</p>
                  </div>

                  <div className="about-us-section3-content">
                    <p className="about-us-section3-content1">
                      High Quality Pizza Hut
                    </p>
                    <p className="about-us-section3-content2">
                      Pizza Hut is generally very consistent with quality,
                      quantity, and selection. I use them consistently as well.
                      I order custom pizzas and they have the choices I like on
                      my pizza. At first I got warnings I was putting too many
                      toppings on, but it still allowed it and when I received
                      my pizza it has been correct 99% of the time. On the very
                      few occasions, something was incorrect, they were quick to
                      replace it. While other pizza chains are advertising
                      delivery insurance, Pizza hut has always had it. I trust
                      them to make my pizza right and if they don't, to make it
                      right either that same time or at a later date. They have
                      given me a free pizza voucher for the times I did not have
                      the time to wait for another delivery.
                    </p>
                    <div className="about-us-section3-content3">
                      <img src="/resources/images/quoto-2-200x200.jpg" />
                    </div>
                    <p className="about-us-section3-content4">Tim, Customer</p>
                  </div>

                  <div className="about-us-section3-content">
                    <p className="about-us-section3-content1">Good Staff</p>
                    <p className="about-us-section3-content2">
                      I wanted to compliment your outlet in Perungudi to hire a
                      good staff. Her name is Nitya. I am quite conscious in
                      reducing food outside for my child due to health concern
                      however Nitya gave me a personalised service by helping me
                      to choose without compromising on my child health. So it’s
                      a combination of satisfying your crave and keeping health
                      into mind. All credit goes to Nitya. I will visit the
                      Pizza Hut Perungudi as long as Nitya is there and of
                      course for the quality that you guys maintain. Kindly give
                      her my best wishes and for her manager. If you recognise
                      her skills she will take you and this Center to the next
                      level. Please help her to exhibit her skill and also to
                      keep her customers happy. Good job. Keep going????
                    </p>
                    <div className="about-us-section3-content3">
                      <img src="/resources/images/quoto-3-200x200.jpg" />
                    </div>
                    <p className="about-us-section3-content4">
                      Michael, Customer
                    </p>
                  </div>

                  <div className="about-us-section3-content">
                    <p className="about-us-section3-content1">
                      Definitely recommend
                    </p>
                    <p className="about-us-section3-content2">
                      {" "}
                      Great local pizza restaurant. The restaurant itself is
                      decorated with nostalgic Americana themes. We came here
                      for the Sunday buffet. Due to the smaller size of the
                      restaurant, the selection of pizza was limited. What it
                      lacked in variety, it made up for in quality and taste.
                      Included in the adult buffet is even one beer or wine.
                      They had dessert pizza (Apple) and soft serve ice cream.
                      Definitely recommend.
                    </p>
                    <div className="about-us-section3-content3">
                      <img src="/resources/images/customer1.png" />
                    </div>
                    <p className="about-us-section3-content4">
                      Wyatt, Customer
                    </p>
                  </div>

                  <div className="about-us-section3-content">
                    <p className="about-us-section3-content1">
                      Sandy's pizza is absolutely phenomenal
                    </p>
                    <p className="about-us-section3-content2">
                      My boyfriend and I are from the Chicago burbs where pizza
                      is judged pretty strong. Now that we live in Princeton we
                      both agree the ONLY pizza place in town that definitely
                      can go head to head with the top pizza places in
                      Chicagoland is Sandy's. It's such a welcomed taste of home
                      and means a lot to us. We tried "the competition" that's
                      very close to Sandy's (Princeton location) and had to walk
                      out after 2 bites. We don't appreciate cardboard tasting
                      "pizza" Sorry, Bobes. Sandy's wins 10 stars. Sandy's pizza
                      is absolutely phenomenal. Chicago's best - right here in
                      Princeton. When I compare I literally mean Sandy's is head
                      to head with Chicago Pizzarias like Uno, Duo, Gino's East,
                      Giordano's, Edwardo's, Pal Joey's, Luigi's (not a chain:
                      one building) Campagna's and the like. Congrats, Sandy's.
                      We love you. - Sarra and Gary
                    </p>
                    <div className="about-us-section3-content3">
                      <img src="/resources/images/customer2.png" />
                    </div>
                    <p className="about-us-section3-content4">
                      Sarienn, Customer
                    </p>
                  </div>

                  <div className="about-us-section3-content">
                    <p className="about-us-section3-content1">
                      I Highly recommend this pizza place
                    </p>
                    <p className="about-us-section3-content2">
                      {" "}
                      I ordered chicken bacon ranch pizza and wings and it was
                      all amazing. I had delivery and they was earlier than what
                      they told me which was great too. I Highly recommend this
                      pizza place
                    </p>
                    <div className="about-us-section3-content3">
                      <img src="/resources/images/customer3.png" />
                    </div>
                    <p className="about-us-section3-content4">Lacy, Customer</p>
                  </div>
                </div>
              </div>
            </section>

            {/* About Us Section 4 */}
            <section className="about-us-section4">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 about-us-section4-item">
                    <div className="about-us-section4-icon1"></div>
                    <p
                      className="about-us-counterNum"
                      data-duration="2000"
                      data-number="574"
                    >
                      0
                    </p>
                    <p>Pizza per day</p>
                  </div>
                  <div className="col-md-3 about-us-section4-item">
                    <div className="about-us-section4-icon2"></div>
                    <p
                      className="about-us-counterNum"
                      data-duration="2000"
                      data-number="60"
                    >
                      0
                    </p>
                    <p>Sea Food Dishes</p>
                  </div>
                  <div className="col-md-3 about-us-section4-item">
                    <div className="about-us-section4-icon3"></div>
                    <p
                      className="about-us-counterNum"
                      data-duration="2000"
                      data-number="3"
                    >
                      0
                    </p>
                    <p>Pasta Chefs</p>
                  </div>
                  <div className="col-md-3 about-us-section4-item">
                    <div className="about-us-section4-icon4"></div>
                    <p
                      className="about-us-counterNum"
                      data-duration="2000"
                      data-number="52"
                    >
                      0
                    </p>
                    <p>Salads per day</p>
                  </div>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        );
    }
}

export default AboutUs;