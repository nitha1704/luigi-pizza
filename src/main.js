import React from 'react';







class myJS extends React.Component {


    
     
    componentDidMount(){
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

}

export default myJS;