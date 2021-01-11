import React from "react";
import Header from "../header";
import Footer from "../footer";

// Data
import blogData from "../data/blogData";

class OurBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blog: [], searchText: "" };
  }

  componentDidMount() {
    this.setState({ blog: blogData });
  }

  render() {
    console.log(this.state.blog);
    const handleSubmit1 = (e) => {
      e.preventDefault();
    };
    const handleSubmit2 = (e) => {
      e.preventDefault();
    };
    const RenderBlogContent = () => {
      return (
        this.state.blog &&
        this.state.blog.map((item) => {
          const { thumbnail, title, user, calendar, content } = item;
          return (
            <article className="blog-item">
              <img src={thumbnail} alt={title} className="img-fit" />
              <p className="blog-item-content1">{title}</p>
              <div className="blog-item-content2">
                <a href="#">
                  <span>By {user.name}</span>
                </a>
                <a href="#">
                  <span>{user.recipe}</span>
                </a>
                <a href="#">
                  <span>{user.comment}</span>
                </a>
              </div>
              <p className="blog-item-content3">{content}</p>
              <div className="blog-item-content4">
                <div className="date">
                  <span>{calendar.date}</span>
                  <br />
                  <span>{calendar.month}</span>
                  <br />
                  <span>{calendar.year}</span>
                </div>
              </div>
              <div className="blog-item-content5">
                <a href="javascript:;">Read More</a>
              </div>
            </article>
          );
        })
      );
    };

    const LastedPostContent = () => {
      return (
        this.state.blog &&
        this.state.blog.map((item) => {
          const { thumbnail, title, user, calendar, content } = item;
          return (
            <article>
              <img src={thumbnail} alt={title} className="img-fit" />
              <div>
                <p>Recipes</p>
                <p>{title}</p>
                <p>
                  {calendar.date} {calendar.month}, {calendar.year}
                </p>
              </div>
            </article>
          );
        })
      );
    };

    return (
      <>
        <Header />
        {/* Our Blog Section 1 */}
        <section className="our-blog-section1">
          <div className="our-blog-section1-item1">
            <p className="our-blog-section1-item1-1 subtitle">
              THE BEST IN TOWN
            </p>
            <p className="our-blog-section1-item1-2 title">Our Blog</p>
          </div>
        </section>

        {/* Our Blog Section 2 */}
        <section className="our-blog-section2">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8 our-blog-section2-item1">
                <RenderBlogContent />
              </div>
              <div className="col-md-5 col-lg-4 our-blog-section2-item2">
                <div className="our-blog-section2-item2-1">
                  <form onSubmit={handleSubmit1}>
                    <input
                      type="text"
                      placeholder="Search"
                      value={this.state.searchText}
                      onChange={(e) =>
                        this.setState({ searchText: e.target.value })
                      }
                    />
                    <button>
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="our-blog-section2-item2-2">
                  <img
                    src="resources/images/sidebar-1-400x600.jpg"
                    alt=""
                    className="img-fit"
                  />
                  <div className="promotion">
                    <p>30%</p>
                    <p>Off</p>
                    <p>Combo Pack Pizza + Salad</p>
                  </div>
                  <div className="oblique-background"></div>
                </div>
                <div className="our-blog-section2-item2-3">
                  <h4>Subscribe to our newsletter</h4>
                  <form onSubmit={handleSubmit2}>
                    <input type="text" placeholder="Your email here" />
                    <button type="submit" className="pizza-button2">
                      <span>Subscribe</span>
                    </button>
                  </form>
                </div>
                <div className="our-blog-section2-item2-4">
                  <h4>Latest Posts</h4>
                  <LastedPostContent />
                </div>
                <div className="our-blog-section2-item2-5">
                  <img
                    src="resources/images/sidebar-2-400x600.jpg"
                    alt=""
                    className="img-fit"
                  />
                  <div>
                    <p>1 + 1</p>
                    <p>Buy one get one</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default OurBlog;
