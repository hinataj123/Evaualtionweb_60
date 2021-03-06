import React, {Component} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import { getNewestProduct} from "../../services";


class NewProduct extends Component {
    render (){
        const {items, symbol} = this.props;
        console.log('items',items)
        var arrays = [];
        while (items.length > 0) {
            arrays.push(items.splice(0, 3));
        }

        return (
            <div className="theme-card">
                <h5 className="title-border">new product</h5>
                <Slider className="offer-slider slide-1">
                    {arrays.map((products, index) =>
                        <div key={index}>
                            {products.map((product, i) =>
                                <div className="media" key={i}>
                                    <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}><img className="img-fluid" src={`${product.productPicture}`} alt="" /></Link>
                                    <div className="media-body align-self-center">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <Link to={`${process.env.PUBLIC_URL}/product/${product.id}`}><h6>{product.productName}</h6></Link>
                                        <h4>{symbol}{(product.productPrice)}
                                            <del><span className="money">{symbol}{product.productPrice}</span></del></h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Slider>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: getNewestProduct(state.data.products),
        symbol: state.data.symbol
    }
}

export default connect(mapStateToProps, null)(NewProduct);
