import React from 'react';

class OurMenu extends React.Component {

    
    render(){

        const {menuList} = this.props;

        return(
            <div className="col-12 col-md-6 our-menu-item activeAll" data-filter={menuList.category}>              
                    <div className="section4-item3-1">
                        <img src={menuList.thumbnail} alt="" className="img-fit"/>
                    </div>
                    <div className="section4-item3-2">
                        <p className="section4-item3-2-1">{menuList.name}</p>
                        <p className="section4-item3-2-2">{menuList.description}</p>
                    </div>
                    <div className="section4-item3-3">
                        ${menuList.price}
                    </div>
            </div>
        )
    }
}

export default OurMenu;