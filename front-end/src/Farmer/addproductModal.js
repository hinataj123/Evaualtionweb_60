import React, { Component } from 'react';
import {Modal} from 'react-bootstrap';
// import {Row, Col} from 'antd';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
// import { Input } from 'antd';
import { Select } from 'antd';
import axiosInstance from '../api/axiosApi';
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
// const { TextArea } = Input;
 const { Option } = Select;

export default class MyVerticallyCenteredModal extends React.Component {
    constructor(props){
        super(props);
            this.state={
            productName:"",
            category:"",
            productPicture: null,
            productQuantity:"",
            qtType:"",
            productType:"",
            productPrice:"",
            description:"" ,
            CompanyName:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        }

     handleCategoryChange=(value)=> {
        console.log(`selected ${value}`);
        this.setState({
            category:value
        })
    }

    handleTypeChange=(value)=> {
        console.log(`selected ${value}`);
        this.setState({
            productType:value
        })
    }
     handleChangeQuantity=(value)=> {
        console.log(`selected ${value}`);
        this.setState({
            qtType:value
        })
    }
     uploadPic=(event)=>{
        console.log(event.target.files[0]);
        this.setState({
            productPicture:event.target.files[0]
        })
    }
    
    async handleSubmit(event) {
        const success = () => {
            const hide = message.loading('Action in progress..', 0);
            // Dismiss manually and asynchronously
            setTimeout(hide, 2500);
          };

        event.preventDefault();
        var quantity= this.state.productQuantity+" "+this.state.qtType;
        
        const uploadData = new FormData();
            uploadData.append('user',axiosInstance.getUserInfo().user.pk)
            uploadData.append('productName',this.state.productName)
            uploadData.append('category',this.state.category)
            uploadData.append('productPicture',this.state.productPicture, this.state.productPicture.name)
            uploadData.append('productQuantity', this.state.productQuantity)
            uploadData.append('productUnit', this.state.qtType)
            uploadData.append('prodyctType', this.state.productType)
            uploadData.append('productPrice', this.state.productPrice)
            uploadData.append('description', this.state.description)
            uploadData.append('CompanyName', "")
 console.log(uploadData)
		try {
            const response = await axiosInstance.addProduct(uploadData).then(response=>{
                if(response.status === 201){
                    message.success({content: 'Product added successfully'});
                    console.log(response);
                    window.location.reload();
            }
            else{
                alert("Something went wrong! Try again.");
            }
            })
            return response;
        } catch (error) {
            console.log(error);
        }
    
    }
    
      
    render(){

    return (
      <Modal

        {...this.props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="12" className="form-group">
              <input type="file" className="custom-file-input" id="customFile2" onChange={this.uploadPic}/>
    <label className="custom-file-label" htmlFor="customFile2" >
      Choose file...
    </label>
              </Col>
              </Row>
              <Row>
              <Col md="12">
                <FormInput
                  
                  type="text"
                  placeholder="Product Name"
                  onChange={(e)=> this.setState({productName:e.target.value})}
                />
              </Col>
            </Row>
            <br/>
<Row>
<Col md="12" className="form-group">
              
<Select size="medium" defaultValue="Select Category" style={{marginBottom:"2%",width:"100%"}} onChange={this.handleCategoryChange}>
         <Option value="Vegetable">Vegetable</Option>
          <Option value="Fruits">Fruits</Option>
              <Option value="WholeGrains">WholeGrains</Option>                     
          </Select>  
              </Col>
</Row>
        
            <Row>
              <Col md="8">
                <FormInput
                  
                  type="text"
                  placeholder="Product Quantity"
                  onChange={(e)=> this.setState({productQuantity:e.target.value})}
                />
              </Col>
              <Col md="4" className="form-group">
              
              <Select size="medium" defaultValue="Select Unit" style={{marginBottom:"2%",width:"100%"}} onChange={this.handleChangeQuantity}>
                                        <Option value="Kg">Kg</Option>
                                        <Option value="Mun">Mun</Option>
                                        <Option value="Acer">Acer</Option>
                                                            
                                    </Select>
              </Col>
            </Row>
          

<Row>
<Col md="12" className="form-group">
              
<Select size="medium" defaultValue="Select Crop Type" style={{marginBottom:"2%",width:"100%"}} onChange={this.handleTypeChange}>
        <Option value="Harvested-Crops">Harvested-Crops</Option>
            <Option value="Standing-Crops">Standing-Crops</Option>                     
             </Select>  
            </Col>
</Row>

      
        
            <Row >
              <Col md="12" >
               
                <FormInput type="text"
                  placeholder="Product Price"
                  onChange={(e)=> this.setState({productPrice:e.target.value})}
               />
              </Col>
      
            </Row>
            <br/>
            <Row >
              <Col md="12" >
               
              <FormTextarea placeholder="Product Description" rows="5"  onChange={(e)=> this.setState({description:e.target.value})} />
              </Col>
        
              
            </Row>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
          </Modal.Body>
        <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
            <Button onClick={this.handleSubmit}>Add</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
  

