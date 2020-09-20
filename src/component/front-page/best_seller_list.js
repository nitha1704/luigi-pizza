import React from 'react';
import BestSellerItem from './best_seller_item';


class BestSellerList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bestSeller: "" }
    }


    componentDidMount() {
        this.setState({
            bestSellerItem: [
                { id: 1, name: 'Pizza Bacon Sausage', price: 18.50, thumbnail: '/resources/images/pizza-bacon-sausage.png' , quantity: 1},
                { id: 2, name: 'Pizza Chicken Deluxe', price: 13.00, thumbnail: '/resources/images/pizza-chicken-deluxe.png' , quantity: 1},
                { id: 3, name: 'Pizza Hawaian', price: 15.50, thumbnail: '/resources/images/pizza-hawaian.png' , quantity: 1},
                { id: 4, name: 'Pizza Pork Deluxe', price: 21.00, thumbnail: '/resources/images/pizza-pork-deluxe.png' , quantity: 1},
                { id: 5, name: 'Pizza Seafood Cocktail', price: 23.00, thumbnail: '/resources/images/pizza-seafood-cocktail.png' , quantity: 1},
                { id: 6, name: 'Pizza Super Deluxe', price: 12.50, thumbnail: '/resources/images/pizza-super-deluxe.png' , quantity: 1}
            ]
        })
    }

    itemList() {
        if (this.state.bestSeller) {
            return this.state.bestSeller.map(bestSellerMap => (
                <BestSellerItem key={bestSellerMap.id} bestSellerProduct={bestSellerMap} 
                onAddOrder={this.props.onAddOrder} onDeleteOrder={this.props.onDeleteOrder}/>
            ))
        }
    }



    render() {
        return (
            <div className="row">
                {this.itemList()}            
            </div>
        )
    }
}

export default BestSellerList;