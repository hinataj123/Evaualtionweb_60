import React, { Component } from 'react';

import { Helmet } from 'react-helmet'
import Modal from 'react-responsive-modal';
import axios from 'axios'
import Breadcrumb from "../components/common/breadcrumb";
import { Select } from 'antd';
import treatments from './Treatment.json';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormTextarea,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";
import ReactDOM from 'react-dom';
// const { TextArea } = Input;
const { Option } = Select;

class Disease_Detection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productPicture: null,
      open: false,
      isloading: false,
      DiseaseResult: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  uploadPic = (event) => {
    console.log(event.target.files[0]);
    let file = event.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleload.bind(this)
      reader.readAsBinaryString(file)
    }


  }
  handleload = (readerEvt) => {
    let binary = readerEvt.target.result
    this.setState({
      productPicture: btoa(binary)
    })
    console.log(this.state.productPicture)
  }

  //  Predict (event) {

  SendImage = async (event) => {
    event.preventDefault();
    let payload = { image: this.state.productPicture };
    await fetch('http://192.168.100.13:8000/disease/classify/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(response => response.json())
      .then((json) =>
        this.setState({
          DiseaseResult: json,
          open: true
        })
      )
    console.log(this.state.DiseaseResult)
  }


  componentDidMount() {

  }

  async handleSubmit() {
  }


  render() {

    return (
      <div>
        <Helmet>
          <title>AsanKasan | Crop Disease Detection</title>

        </Helmet>
        {/*SEO Support End */}

        <Breadcrumb title={'Crop Disease Detection'} />
        <section className="about-page  section-b-space">
          <Row>
            <Col md='4'></Col>
            <Col md='6'>
              <div id="name" ></div>
            </Col>
          </Row>
          <Row>
            <Col md='12'></Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Row form>
                  <Col md="4" className="form-group"></Col>
                  <Col md="4" className="form-group">



                    <input type="file" className="custom-file-input" id="customFile2" onChange={this.uploadPic} />

                    <label className="custom-file-label" htmlFor="customFile2" >
                      Choose Defected Photo to Detect Disease  ...
    </label>
                  </Col>
                </Row>
              </Form>
              <Row>
                <Col md='5'></Col>
                <Col md='4'>
                  <div class="p-t-20">
                    <a href={'#'} onClick={this.SendImage} className="btn btn-solid">Predict Disease</a>


                  </div>
                </Col>
              </Row>
              <br />




            </Col>
          </Row>

        </section>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>

          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content quick-view-modal">


              {
                this.state.open ?
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-lg-4  col-xs-12">
                        <div className="quick-view-img">
                          <img src={`data:image/jpg;base64,${this.state.DiseaseResult.images.heatMap}`} alt="" className="img-fluid" />

                          <h3>Heat Map</h3>
                        </div>
                      </div>
                      <div className="col-lg-4  col-xs-12">
                        <div className="quick-view-img">
                          <img src={`data:image/jpg;base64,${this.state.DiseaseResult.images.original}`} alt="" className="img-fluid" />
                          <h3>Original</h3>
                        </div>
                      </div>
                      <div className="col-lg-4  col-xs-12">
                        <div className="quick-view-img">
                          <img src={`data:image/jpg;base64,${this.state.DiseaseResult.images.superimposed}`} alt="" className="img-fluid" />
                          <h3>SuperImposed</h3>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-lg-6  col-xs-12">
                        <h2> Predicted Disease:</h2>
                      </div>
                      <div className="col-lg-6  col-xs-12">
                        <h3>{this.state.DiseaseResult.predictedCategory.name}</h3>
                      </div>
                      <br />
                      <br />
                      <div className="col-lg-12  col-xs-12">
                        <div className="border-product">
                          <h2 className="product-title">Treatment</h2>
                          {
                            treatments.map((item) => {
                              if (item.title === this.state.DiseaseResult.predictedCategory.name) {
                                return (
                                  <p style={{ fontSize: 24 }}>{item.content}</p>
                                )
                              }
                              else {
                                return (
                                  ""
                                )
                              }
                            })
                          }
                        </div>
                      </div>


                    </div>
                  </div>
                  :

                  ""
              }


            </div>
          </div>

        </Modal>

      </div>
    );
  }
}




export default Disease_Detection;