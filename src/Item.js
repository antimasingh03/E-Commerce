import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function Item()
{
    const location=useLocation();
    const data= location.state
    const [apidata,setdata]=useState({})
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products/"+data.name).then((result)=>{
            result.json().then((data1)=>{
                setdata(data1)
            })
        })
    },[])
  return(
    <div>
        <br></br>
       <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={apidata.image} style={{width:"400px", height:"400px" }} fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
           <MDBCardTitle>Category : {apidata.category}</MDBCardTitle>
        <MDBCardTitle>Title : {apidata.title}</MDBCardTitle>
          <MDBCardTitle>Description : {apidata.description}</MDBCardTitle>
          <MDBCardTitle style={{color:"red"}}>Price : {apidata.price*80} RS</MDBCardTitle>
        <MDBCardText>
        </MDBCardText>
              <MDBBtn href="#">Buy</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}
export default Item