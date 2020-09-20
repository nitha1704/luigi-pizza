import React from 'react';

class BestSellerItem extends React.Component {


    render() {

        const { product, addOrder, deleteOrder } = this.props;

        return (
            <div className="col-xs-12 col-sm-6 col-md-3 section3-item2-col">
                <div className="section3-item2-product-img">
                    <img src={product.thumbnail} />
                    {
                        (product.specialPromotion == true)
                            ? <div className="ribbon-wrap">
                                <div className="ribbon"></div>
                                <div className="offer">OFFER</div>
                            </div>
                            : " "
                    }
                </div>
                <p className="section3-item2-product-name">{product.name}</p>
                <p className="section3-item2-product-price">${product.price}</p>

                {(product.quantity2 == 0)
                    ? <button className="section3-item2-button" onClick={() => deleteOrder(product)} disabled>-</button>
                    : <button className="section3-item2-button" onClick={() => deleteOrder(product)}>-</button>
                }
                <button className="section3-item2-button" onClick={() => addOrder(product)}>+</button>
            </div>
        )
    }
}

export default BestSellerItem;