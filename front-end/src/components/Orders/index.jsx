import React, {Component} from 'react';
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

import moment from 'moment';
import Breadcrumb from "../common/breadcrumb";
import {getCartTotal} from "../../services";
import {removeFromCart, incrementQty, decrementQty} from '../../actions'
const image1 = require('../../assets/images/products/image1.png');
    const image2 = require('../../assets/images/products/image2.jpg');
    const image3 = require('../../assets/images/products/image3.jpg');
    const image4 = require('../../assets/images/products/image4.jpg');
    const image5 = require('../../assets/images/products/image5.jpg');
    const image6 = require('../../assets/images/products/image6.png');
    const orders = [
      {
        created_at: 1590969599,
        products: [
          {
            image: image1,
            product_name: 'BeoPlay Speaker',
            id: 1,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Google LLC',
            cost: 2300,
          },
          {
            image: image2,
            product_name: 'Smart BeoPlay Speaker',
            id: 2,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Smart Inc',
            cost: 1200,
          },
          {
            image: image3,
            product_name: 'Smart Bluetooth Speaker',
            id: 3,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Smart Inc',
            cost: 2000,
          },
          {
            image: image4,
            product_name: 'Bluetooth Speaker',
            id: 4,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Google LLC',
            cost: 2500,
          },
        ],
        order_name: 'OD - 424923192 - N',
        price: 4500,
        status: 'In Transit',
        image: image1,
      },
      {
        created_at: 1590969599,
        products: [
          {
            image: image1,
            product_name: 'BeoPlay Speaker',
            id: 1,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Google LLC',
            cost: 2300,
          },
          {
            image: image2,
            product_name: 'Smart BeoPlay Speaker',
            id: 2,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Smart Inc',
            cost: 1200,
          },
          {
            image: image3,
            product_name: 'Smart Bluetooth Speaker',
            id: 3,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Smart Inc',
            cost: 2000,
          },
          {
            image: image4,
            product_name: 'Bluetooth Speaker',
            id: 4,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Google LLC',
            cost: 2500,
          },
        ],
        order_name: 'OH - 424923191 - K',
        price: 1500,
        status: 'Delivered',
        image: image2,
      },
      {
        created_at: 1588291200,
        products: [
          {
            image: image1,
            product_name: 'BeoPlay Speaker',
            id: 1,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Google LLC',
            cost: 2300,
          },
          {
            image: image2,
            product_name: 'Smart BeoPlay Speaker',
            id: 2,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Smart Inc',
            cost: 1200,
          },
          {
            image: image3,
            product_name: 'Smart Bluetooth Speaker',
            id: 3,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Smart Inc',
            cost: 2000,
          },
        ],
        order_name: 'OH - 424923191 - K',
        price: 1500,
        status: 'Delivered',
        image: image3,
      },
      {
        created_at: 1585699200,
        products: [
          {
            image: image1,
            product_name: 'BeoPlay Speaker',
            id: 1,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Google LLC',
            cost: 2300,
          },
          {
            image: image2,
            product_name: 'Smart BeoPlay Speaker',
            id: 2,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Smart Inc',
            cost: 1200,
          },
        ],
        order_name: 'OH - 424923191 - K',
        price: 1500,
        status: 'Delivered',
        image: image4,
      },
      {
        created_at: 1588291199,
        products: [
          {
            image: image1,
            product_name: 'BeoPlay Speaker',
            id: 1,
            product_size: 'XL',
            product_color: '#33427d',
            product_info:
              'Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer. Nike Dri-FIT is a polyester fabric designed to help you keep dry so you can more comfortably work harder, longer',
            brand: 'Google LLC',
            cost: 2300,
          },
        ],
        order_name: 'OH - 424923191 - K',
        price: 1500,
        status: 'Delivered',
        image: image5,
      },
    ];
    
 
class Orderhistory extends Component {

    constructor (props) {
        super (props)
    }

    render (){
      
console.log(orders)
const symbol=this.props

        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>AsanKasan | Order History</title>
                    
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb title={'Order History'}/>

                
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                    <th scope="col">Date</th>
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                      
                                     
                                        <th scope="col">Status</th>
                                    </tr>
                                    </thead>
                                    {orders.map((item, index) => {
                                        return (
                                        <tbody key={index}>
                                            <tr>
                                                <td>
                                                <div className="col-xs-3">
                                                   
                                                            <h2 className="td-color">{  moment.unix(item.created_at).format('MM/DD/YYYY')}</h2>
                                                        </div>
                                                </td>
                                                <td>
                                                    <Link to={`#`}>
                                                        <img src={item.image} alt="" />
                                                    </Link>
                                                </td>
                                                <td><Link to={`#`}>{item.order_name}</Link>
                                                    <div className="mobile-cart-content row">
                                                    
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{'PKR'}{item.price}</h2>
                                                        </div>
                                                       
                                                    </div>
                                                </td>
                                                <td>
                                                        <div className="col-xs-3">
                                                            <h2 className="td-color">{'PKR'}{item.price}</h2>
                                                        </div></td>
                                                <td>
                                                    <a href={`${process.env.PUBLIC_URL}/pages/orderprocess`}  >
                                                       <button className="btn btn-solid"> {item.status}</button>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody> )
                                    })}
                                </table>
                               
                            </div>
                        </div>
                      
                    </div>
                </section>
                {/* :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Your Order is Empty</strong>
                                        </h3>
                                        <h4>Explore more shortlist some items.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                } */}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
   
    symbol: state.data.symbol,

})

export default connect(
    mapStateToProps,
   
)(Orderhistory)