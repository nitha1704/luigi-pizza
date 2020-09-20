import React from 'react';

class Calculator extends React.Component {

    calculatorOrder(orders) {
        if (orders.length == 0) {
            return <li>No order yet</li>
        } else {
            return orders.map(ordersMap => {
                    return (
                        <li className="section3-item3-1-1">
                            {ordersMap.product.name} x {ordersMap.quantity} = ${ordersMap.product.price * ordersMap.quantity}
                            <button className="delete-all-button-calculator" onClick={() => this.props.deleteAllOrder(ordersMap)}>X</button>
                        </li>
                    )
                } 
            )
        }

    }

    render() {

        const { totalPrice, orders } = this.props;

        return (
            <div className="row">
                <div className="col-md-12 section3-item3-1">
                    <ul className="ul-cleargap">
                        {this.calculatorOrder(orders)}
                    </ul>
                </div>
                <div className="col-md-12 section3-item3-2">
                    Total: ${totalPrice}
                </div>
            </div>
        )
    }
}

export default Calculator;