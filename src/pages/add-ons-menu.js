import React from "react";
import Header from "../header";
import Footer from "../footer";

// Data
import bestSellerData from "../data/bestSellerData";
import menuData from "../data/menuData";

class AddOnsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bestSellerItem: [], menu: [] };
  }

  componentDidMount() {
    this.setState({
      bestSellerItem: bestSellerData,
      menu: menuData,
    });
  }

  choosePizza() {
    return (
      this.state.bestSellerItem &&
      this.state.bestSellerItem
        .map((item) => {
          return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 choose-pizza">
              <div className="wrap-image">
                {item.name === "Pizza Bacon Sausage" && (
                  <div className="ribbon">
                    <div className="ribbon-background"></div>
                    <p className="offer-add-ons">OFFER</p>
                  </div>
                )}
                {item.name === "Pizza Pork Deluxe" && (
                  <div className="ribbon green">
                    <div className="ribbon-background"></div>
                    <p className="offer-add-ons">SPECIAL</p>
                  </div>
                )}
                <img src={item.thumbnail} alt={item.name} className="img-fit" />
              </div>
              <p className="name">{item.name}</p>
              <p className="price">${item.price}</p>
            </div>
          );
        })
        .slice(0, 4)
    );
  }

  section3Item() {
    return (
      this.state.menu &&
      this.state.menu.map((item) => {
        return (
          <div className="col-md-12 col-lg-6 add-ons-menu-section3-item">
            <div className="wrap-item">
              <img src={item.thumbnail} alt={item.name} className="img-fit" />
              <div>
                <p className="name">{item.name}</p>
                <p className="description">{item.description}</p>
              </div>
              <div>
                <p className="price">${item.price}</p>
              </div>
            </div>
          </div>
        );
      })
    );
  }

  section5Item() {
    const filterPasta = this.state.menu.filter((item) => {
      return item.name.includes("Pasta");
    });

    return (
      filterPasta &&
      filterPasta.map((item) => {
        return (
          <div className="col-lg-6 add-ons-menu-section5-item">
            <div className="wrap-item">
              <img src={item.thumbnail} alt={item.name} className="img-fit" />
              <div>
                <p className="name">{item.name}</p>
                <p className="price">${item.price}</p>
                <p className="description">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })
    );
  }

  section5Item2() {
    return (
      this.state.menu &&
      this.state.menu.map((item) => {
        return (
          <div className="col-md-12 col-lg-6 add-ons-menu-section5-item">
            <div className="wrap-item">
              <img src={item.thumbnail} alt={item.name} className="img-fit" />
              <div>
                <p className="name">{item.name}</p>
                <p className="description">{item.description}</p>
              </div>
              <div>
                <p className="price">${item.price}</p>
              </div>
            </div>
          </div>
        );
      }).reverse().slice(0,4)
    );
  }

  render() {
    return (
      <>
        <Header />

        {/* Add-Ons Menu Section 1 */}
        <section className="add-ons-menu-section1">
          <div className="add-ons-menu-section1-item1">
            <p className="add-ons-menu-section1-item1-1 subtitle">
              THE BEST IN TOWN
            </p>
            <p className="add-ons-menu-section1-item1-2 title">Add-Ons Menu</p>
          </div>
        </section>

        {/* Add-Ons Menu Section 2 */}
        <section className="add-ons-menu-section2">
          <div className="container">
            <h1>Choose from Pizza</h1>
            <div className="row">{this.choosePizza()}</div>
          </div>
        </section>

        {/* Add-Ons Menu Section 3 */}
        <section className="add-ons-menu-section3">
          <div className="container">
            <div className="row">{this.section3Item()}</div>
          </div>
        </section>

        {/* Add-Ons Menu Section 4 */}
        <section className="add-ons-menu-section4">
          <div className="zigzag-background"></div>
          <div>
            <p>Add a fresh Salad to your order</p>
          </div>
          <div className="zigzag-background"></div>
        </section>

        {/* Add-Ons Menu Section 5 */}
        <section className="add-ons-menu-section5">
          <div className="container">
            <div className="add-ons-menu-section5-item1">
              <h1>Choose from Pasta</h1>
              <div className="row">{this.section5Item()}</div>
            </div>
            <div className="line"></div>
            <div className="add-ons-menu-section5-item2">
              <div className="row">{this.section5Item2()}</div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}
export default AddOnsMenu;
