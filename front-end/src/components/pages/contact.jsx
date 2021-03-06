import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";
import axiosInstance from '../../api/axiosApi';
class Contact extends Component {

    constructor (props) {
        super (props);
        this.state={
            first:'', 
            last:'',
            email:'',
            message:''
        }
    }

    sendMessage = async (event) =>{
        event.preventDefault();
        const data={
            name: this.state.first+" "+this.state.last,
            email: this.state.email,
            message: this.state.message
        }
        axiosInstance.postFeedback(data).then(res=>{
            if(res.status === 201){
                alert('Feedback Successfully Submitted')
            }
            else{
                alert('Sommething went wrong!Try again')
            }
        })
        
    }


    render (){
       
        return (
            <div>
                <Breadcrumb title={'Contact Us'}/>
                
                
                {/*Forget Password section*/}
                <section className=" contact-page section-b-space">
                    <div className="container">
                        <div className="row section-b-space">
                            <div className="col-lg-7 map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50059.12775918716!2d72.78534673554945!3d21.16564923510817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1533793756956"
                                    allowFullScreen></iframe>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-right">
                                    <ul>
                                        <li>
                                            <div className="contact-icon">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/phone.png`} alt="Generic placeholder image" />
                                                    <h6>Contact Us</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>+92 331 - 934 - 3219</p>
                                                <p>+92 322 - 946 - 7564</p>
                                            
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-icon">
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                <h6>Address</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>Islamabad</p>
                                                <p>Pakistan 44000</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="contact-icon">
                                                <img src={`${process.env.PUBLIC_URL}/assets/images/icon/email.png`} alt="Generic placeholder image" />
                                                    <h6>Address</h6>
                                            </div>
                                            <div className="media-body">
                                                <p>asaankisaan@gmail.com</p>
                                                <p>info@asaankisaan.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <label htmlFor="name">First Name</label>
                                            <input type="text" className="form-control" id="name"
                                                   placeholder="Enter FirstName" _requiredText
                                                   onChange={event => this.setState({first: event.target.value})} />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="name">Last Name</label>
                                            <input type="text" className="form-control" id="last-name"
                                                   placeholder="Enter LastName" required
                                                   onChange={event => this.setState({last: event.target.value})} />
                                        </div>
                                        {/* <div className="col-md-6">
                                            <label htmlFor="review">Phone number</label>
                                            <input type="text" className="form-control" id="review"
                                                   placeholder="Enter your number" required='true'
                                                   onChange={event => this.setState({phone: event.target.value})} />
                                        </div> */}
                                        <div className="col-md-6">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" id="email" placeholder="Email"
                                                   required 
                                                   onChange={event => this.setState({email: event.target.value})}/>
                                        </div>
                                        <div className="col-md-12">
                                            <label htmlFor="review">Write Your Message</label>
                                            <textarea className="form-control" placeholder="Write Your Message"
                                                      id="exampleFormControlTextarea1" rows="6" required
                                                      onChange={event => this.setState({message: event.target.value})}
                                                      />

                                        </div>
                                        <div className="col-md-12">
                                            <button className="btn btn-solid" type="submit" onClick={this.sendMessage}>Send Your Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Contact