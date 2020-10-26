
  import React, {Component} from 'react';
  import {Helmet} from 'react-helmet'
  import { connect } from 'react-redux'
  import {Link} from 'react-router-dom'
  
  import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
 
  import Breadcrumb from "../common/breadcrumb";
  import {getCartTotal} from "../../services";
  import {removeFromCart, incrementQty, decrementQty} from '../../actions'
  
  class OrderProcess extends Component {
  
      constructor (props) {
          super (props)
         
            this.data = [
                {
                  time: '20/18\n09:00 AM',
                  title: 'Order Signed',
                  description: 'SHL, Islamabad',
                  circleColor: '#00c569',
                  lineColor: '#00c569',
                },
                {
                  time: '20/18\n09:30 AM',
                  circleColor: '#00c569',
                  lineColor: '#00c569',
                  title: 'Order Processed',
                  description: 'Dwh warehouse Islamabad',
                },
                {
                  time: '20/18\n10:00 AM',
                  title: 'Shipped ',
                  circleColor: '#00c569',
                  lineColor: '#F0F0F0',
                  description: 'Ptv colony islamabad',
                },
                {
                  time: '20/18\n10:10 AM',
                  title: 'Out for delivery',
                  description: 'Defence,Karachi',
                  lineColor: '#F0F0F0',
                  circleColor: '#F0F0F0',
                },
                {
                  time: '20/18\n10:20 AM',
                  title: 'Delivered',
                  description: 'Gulsan iqbal block 4,Karachi',
                  lineColor: '#F0F0F0',
                  circleColor: '#F0F0F0',
                },
            ];     
            
      }
  
      render (){
  
      
          return (
              <div>
                  {/*SEO Support*/} 
                  <Helmet>
                      <title>AsanKasan | Order Process</title>
                      
                  </Helmet>
                  {/*SEO Support End */}

                  <Breadcrumb title={'Order Process'}/>
                  
                 
                  <Timeline lineColor={'#0000FF'} horizental>
 
                  {this.data.map((item, index) => {
                                        return (
  <TimelineItem
    key="003"
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(21, 203, 64)',
          color: '#fff',
        }}
      >
        {item.time}
      </div>
    )}
  >
    <h3>{item.title}</h3>
    <h4>{item.description}</h4>
   
  </TimelineItem>
                                        )
    })
}
</Timeline>


</div>

          )
    }
}
export default OrderProcess;