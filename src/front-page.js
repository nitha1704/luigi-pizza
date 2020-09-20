import React from 'react';
import Header from './header';
import Footer from './footer';
import $ from "jquery";

// Component
import BestSellerItem from './component/front-page/best_seller_item';
import Calculator from './component/front-page/calculator';
import OurMenu from './component/front-page/our_menu';

// CSS
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import styleCSS from './css/style.css'

// Font Awesome
import FontAwesome from '../node_modules/@fortawesome/fontawesome-free/css/all.css';

// Javascript
import mainJS from './main'


class FrontPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { totalPrice: 0, orders: [], bestSellerItem: [], ourMenu: [] };
        this.addOrder = this.addOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.deleteAllOrder = this.deleteAllOrder.bind(this);


    }

    componentDidMount() {
        this.setState({
            bestSellerItem: [
                { id: 1, name: 'Pizza Bacon Sausage', price: 18.50, thumbnail: '/resources/images/pizza-bacon-sausage.png', quantity2: 0, specialPromotion: true },
                { id: 2, name: 'Pizza Chicken Deluxe', price: 13.00, thumbnail: '/resources/images/pizza-chicken-deluxe.png', quantity2: 0, specialPromotion: false },
                { id: 3, name: 'Pizza Hawaian', price: 15.50, thumbnail: '/resources/images/pizza-hawaian.png', quantity2: 0, specialPromotion: false },
                { id: 4, name: 'Pizza Pork Deluxe', price: 21.00, thumbnail: '/resources/images/pizza-pork-deluxe.png', quantity2: 0, specialPromotion: false },
                { id: 5, name: 'Pizza Seafood Cocktail', price: 30.00, thumbnail: '/resources/images/pizza-seafood-cocktail.png', quantity2: 0, specialPromotion: true },
                { id: 6, name: 'Pizza Super Deluxe', price: 12.50, thumbnail: '/resources/images/pizza-super-deluxe.png', quantity2: 0, specialPromotion: true },
                { id: 7, name: 'Pizza Cheese', price: 10.50, thumbnail: '/resources/images/pizza-bacon-sausage.png', quantity2: 0, specialPromotion: false },
                { id: 8, name: 'Pizza Vegetables', price: 16.50, thumbnail: '/resources/images/pizza-chicken-deluxe.png', quantity2: 0, specialPromotion: true }
            ],

            ourMenu: [
                {
                    id: 1,
                    name: 'Pizza Margherita',
                    description: 'Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.',
                    price: "12.00",
                    category: 'Pizza',
                    thumbnail: '/resources/images/our-menu/Pizza/Pizza-Margherita.jpg'
                },
                {
                    id: 2,
                    name: 'Chocolate Lava Cakes',
                    description: 'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
                    price: "20.00",
                    category: 'Dessert',
                    thumbnail: '/resources/images/our-menu/Dessert/chocolate-larva.jpeg'
                },
                {
                    id: 3,
                    name: 'Pizza Prosciuto',
                    description: 'Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.',
                    price: "12.00",
                    category: 'Pizza',
                    thumbnail: '/resources/images/our-menu/Pizza/Pizza-Prosciuto.jpeg'
                },
                {
                    id: 4,
                    name: 'Pasta Pomodoro Sauce',
                    description: 'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
                    price: "6.00",
                    category: 'Pasta',
                    thumbnail: '/resources/images/our-menu/Pasta/Pasta-Pomodoro-Sauce.jpg'
                },
                {
                    id: 5,
                    name: 'Vegetables',
                    description: 'Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.',
                    price: "16.00",
                    category: 'Pizza',
                    thumbnail: '/resources/images/our-menu/Salad/Pizza Vegetables.jpg'
                },
                {
                    id: 6,
                    name: 'Italian Pasta',
                    description: 'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
                    price: "20.00",
                    category: 'Pasta',
                    thumbnail: '/resources/images/our-menu/Pasta/Italian-Pasta.jfif'
                },
                {
                    id: 7,
                    name: 'Peanut Butter Chocolate Dessert',
                    description: 'Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.',
                    price: "18.00",
                    category: 'Dessert',
                    thumbnail: '/resources/images/our-menu/Dessert/Peanut-Butter-Chocolate-Dessert.jpg'
                },
                {
                    id: 8,
                    name: 'Salad',
                    description: 'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
                    price: "5.00",
                    category: 'Salad',
                    thumbnail: '/resources/images/our-menu/Salad/pizza-salad1.jpg'
                },
                {
                    id: 9,
                    name: 'Malteser Christmas Cake',
                    description: 'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
                    price: "45.00",
                    category: 'Dessert',
                    thumbnail: '/resources/images/our-menu/Dessert/malteser-christmas-cake-recipe-520040-1.jpg'
                },
                {
                    id: 10,
                    name: 'Greek Salad',
                    description: 'Proin dictum viverra varius. Etiam vulputate libero dui, at pretium elit elementum quis.',
                    price: "15.00",
                    category: 'Salad',
                    thumbnail: '/resources/images/our-menu/Salad/Best-Greek-Salad-Recipe-1200-1200x800.jpg'
                },
            ]
        })

        // JQuery
        // $('.section4-item2 ul li').click(function () {
        //     //Get Data Filter
        //     const data_filter = $(this).attr('tab-filter');

        //     // Tab Filter
        //     $(this).siblings('li').removeClass('active');
        //     $(this).addClass('active');

        //     // All Filter
        //     if (data_filter == 'All') {
        //         $(this).parents('.section4').find('div.our-menu-item').addClass('activeAll');
        //     } else {
        //         //Data Filter
        //         $(this).parents('.section4').find('div.our-menu-item').removeClass('activeAll');
        //         $(this).parents('.section4').find('div.our-menu-item').removeClass('active');         
        //         $(this).parents('.section4').find('div.our-menu-item[data-filter=' + data_filter + ']').addClass('active');
        //     }
        // })


        //////// Javascript 1 ///////

        // const tabFilter = document.querySelector('.section4-item2 ul').children; 
        // const itemFilter = document.querySelector('.section4-item3 .row').children;
        // let i
        // let o
        // let p

        // for(i = 0; i < tabFilter.length; i++) {
        //     tabFilter[i].addEventListener('click',function(){
        //         let tabFilterData = this.getAttribute('tab-filter');

        //         for(o = 0; o < tabFilter.length; o++) {
        //             tabFilter[o].classList.remove('active');
        //         }        
        //         this.classList.add('active');

        //         for(p = 0; p < itemFilter.length; p++) {
        //             itemFilter[p].classList.remove('activeAll');
        //             itemFilter[p].classList.remove('active');

        //             if(itemFilter[p].getAttribute('data-filter') == tabFilterData) {
        //                 itemFilter[p].classList.add('active');
        //             } else if(tabFilterData == 'All') {
        //                 itemFilter[p].classList.add('active'); 
        //             }
        //         }

        //     });
        // }


        //////// Javascript 2 ///////
        let q
        const tabFilter = document.querySelectorAll('.section4-item2 ul li');
        const itemFilter = document.querySelector('.section4-item3 div.row').children;

        tabFilter.forEach((tabFilterItem) => {
            tabFilterItem.addEventListener('click', function () {
                const tabFilterData = tabFilterItem.getAttribute('tab-filter');

                tabFilter.forEach((tabFilterItem2) => {
                    tabFilterItem2.classList.remove('active');
                });

                this.classList.add('active');

                for (q = 0; q < itemFilter.length; q++) {
                    itemFilter[q].classList.remove('activeAll');
                    itemFilter[q].classList.remove('active');

                    if (itemFilter[q].getAttribute('data-filter') == tabFilterData) {
                        itemFilter[q].classList.add('active');
                    } else if (tabFilterData == 'All') {
                        itemFilter[q].classList.add('active');
                    }
                }
            })
        })

    }


    //////////////////////////////
    ///////// Best Seller  ///////
    //////////////////////////////

    bestSellerList() {
        if (this.state.bestSellerItem) {
            return this.state.bestSellerItem.map(bestSellerItemMap => (
                <BestSellerItem key={bestSellerItemMap.id} product={bestSellerItemMap}
                    addOrder={this.addOrder} deleteOrder={this.deleteOrder} />
            ))
        }
    }

    addOrder(product) {
        const findOrder = this.state.orders.find(findOrder => findOrder.product.id == product.id);

        if (findOrder) {
            findOrder.quantity++;

        } else {
            this.state.orders.push({ product: product, quantity: 1 });
        }

        product.quantity2++;
        const totalPriceUpdate = this.state.totalPrice + product.price;
        this.setState({ totalPrice: totalPriceUpdate, orders: this.state.orders });
    }

    deleteOrder(product) {
        const findOrder = this.state.orders.find(findOrder => findOrder.product.id == product.id);

        if (findOrder) {
            findOrder.quantity--;
            findOrder.product.quantity2--;
        }

        if (findOrder.quantity == 0) {
            const filterOrder = this.state.orders.filter(filterOrder => filterOrder.product.id != product.id);
            this.setState({ orders: filterOrder });

        } else {
            this.setState({ orders: this.state.orders })
        }

        const totalPriceUpdate = this.state.totalPrice - product.price;
        this.setState({ totalPrice: totalPriceUpdate });
    }

    deleteAllOrder(product) {
        const findOrder = this.state.orders.find(findOrder => findOrder.product.id == product.product.id);
        const filterOrder = this.state.orders.filter(filterOrder => filterOrder.product.id != product.product.id);

        const totalPriceUpdate = this.state.totalPrice - (findOrder.product.price * findOrder.quantity);
        this.setState({ totalPrice: totalPriceUpdate, orders: filterOrder });

    }


    //////////////////////////////
    ////////// Our Menu //////////
    //////////////////////////////

    ourMenu() {
        if (this.state.ourMenu) {
            return this.state.ourMenu.map(ourMenuMap => (
                <OurMenu key={ourMenuMap.id} menuList={ourMenuMap} />
            ))
        }
    }



    render() {
        return (
            <div>
                {/* Header */}
                <Header />

                {/* Section 1 */}
                <section className="section1">
                    <div className="zigzag-background"></div>
                    <div className="section1-content">
                        <div className="section1-content-item1">BEST IN TOWN</div>
                        <div className="section1-content-item2">Pizza & PastaAA</div>
                        <div className="section1-content-item3">
                            <a href="javascript:;" className="pizza-button">
                                <span>SEE TODAYS MENU</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="section2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 section2-item1">
                                <img src="/resources/images/heading_logo.png" alt="" className="section2-item1-1" />
                                <p className="section2-item1-2">Our Story</p>
                            </div>
                        </div>
                        <div className="row section2-item2">
                            <div className="col-xs-12 col-sm-6 section2-item2-1">
                                Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst. Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallis massa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulum id dapibus dolor, ac cursus nulla.
                            </div>
                            <div className="col-xs-12 col-sm-6 section2-item2-2">
                                Maecenas fermentum tortor id fringilla molestie. In hac habitasse platea dictumst.Morbi maximus lobortis ipsum, ut blandit augue ullamcorper vitae. Nulla dignissim leo felis, eget cursus elit aliquet ut. Curabitur vel convallismassa. Morbi tellus tortor, luctus et lacinia non, tincidunt in lacus. Vivamus sed ligula imperdiet, feugiat magna vitae, blandit ex. Vestibulumidda pibus dolor, accursus nulla.
                            </div>
                        </div>
                    </div>
                    <div className="section2-background1"><img src="resources/images/story_bg_1.png" /></div>
                    <div className="section2-background2"><img src="resources/images/story_bg_2.png" /></div>
                </section>

                {/* Section 3 */}
                <section className="section3">
                    <div className="container">
                        <div className="section3-item1">
                            <img src="/resources/images/heading_logo.png" alt="" className="section3-item1-1" />
                            <p className="section3-item1-2">Best Sellers</p>
                        </div>
                        <div className="section3-item2">
                            <div className="row">
                                {this.bestSellerList()}
                            </div>
                        </div>
                        <div className="section3-item3">
                            <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders}
                                deleteAllOrder={this.deleteAllOrder} />
                        </div>

                    </div>
                </section>

                {/* Section 4 */}
                <section className="section4">
                    <div className="container">
                        <div className="section4-item1">
                            <img src="/resources/images/heading_logo.png" className="section4-item1-1" />
                            <p className="section4-item1-2">Our Menu</p>
                        </div>

                        <div className="section4-item2">
                            <ul className="ul-cleargap">
                                <li className="active" tab-filter="All">
                                    <a href="javascript:;">ALL</a>
                                </li>
                                <li className="" tab-filter="Pizza">
                                    <a href="javascript:;">PIZZA</a>
                                </li>
                                <li className="" tab-filter="Pasta">
                                    <a href="javascript:;">PASTA</a>
                                </li>
                                <li className="" tab-filter="Salad">
                                    <a href="javascript:;">SALAD</a>
                                </li>
                                <li className="" tab-filter="Dessert">
                                    <a href="javascript:;">DESSERT</a>
                                </li>
                            </ul>
                        </div>

                        <div className="section4-item3">
                            <div className="row">
                                {this.ourMenu()}
                            </div>
                        </div>

                        <div className="section4-item4">
                            <a href="./component/about-us/about-us" className="pizza-button">
                                <span>SEE TODAYS MENU</span>
                            </a>
                        </div>

                    </div>
                </section>

                {/* Footer */}
                <Footer />              
            </div>
        )
    }
}

export default FrontPage;