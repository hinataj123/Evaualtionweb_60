import React, { Component } from 'react';
import {Modal,} from 'react-bootstrap';

import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
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
import axiosInstance from '../api/axiosApi';

import { Select } from 'antd';

const { Option } = Select;
export default class MyupdatedModal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            articles:{},
            productName:"",
            category:"",
            productPicture: null,
            productQuantity:"",
            qtType:"",
            productType:"",
            productPrice:"",
            description:"" 
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

     handleSubmit(id){
        console.log("data: ",this.props.data)
        
        var quantity= this.state.productQuantity+" "+this.state.qtType;
          
        const uploadData = new FormData();
            uploadData.append('user',axiosInstance.getUserInfo().user.pk)
            if(this.state.productName!=""){
            uploadData.append('productName',this.state.productName)}
            else{
                uploadData.append('productName',this.props.data.productName)
            }
            if(this.state.category!="")
{            uploadData.append('category',this.state.category)}
else{
    uploadData.append('category',this.props.data.category) 
}if(this.state.productPicture!=""){
          uploadData.append('productPicture',this.state.productPicture, this.state.productPicture.name)
        }
            else{
                uploadData.append('productPicture',this.props.data.productPicture)
            }
           if(this.state.productQuantity!=""){
            uploadData.append('productQuantity', this.state.productQuantity)
           } 
           else{
            uploadData.append('productQuantity', this.props.data.productQuantity)
           }
           if(this.state.qtType!=""){
            uploadData.append('productUnit', this.state.qtType)
           } 
           else{
            uploadData.append('productUnit', this.props.data.productUnit)
           }
           if(this.state.productType!=""){
            uploadData.append('prodyctType', this.state.productType)
           }
           else{
            uploadData.append('prodyctType',this.props.data.prodyctType)
           }
           if(this.state.productPrice!=""){
            uploadData.append('productPrice', this.state.productPrice)
           }
           else{
            uploadData.append('productPrice', this.props.data.productPrice)
           }
            if(this.state.description!=""){
                uploadData.append('description', this.state.description)
            }
            else{
                uploadData.append('description', this.props.data.description)
            }
           
        
        axiosInstance.updateproduct(id,uploadData)
        .then(res =>{
            if(res.status === 200){
                message.success({content:'Product Updated Successfully'});
                console.log(res)
                window.location.reload();
            }
    })
        .catch(error=> console.error(error));
             
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
            Update Product
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
            <Button onClick={() => this.handleSubmit(this.props.data.id)}>Update</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
  

