import { useEffect, useState } from "react"
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Footer from "./Footer";
import { useNavigate } from "react-router-dom"

function Electronics()
{
  const [apidata,setdata]=useState([])
   const navigate= useNavigate();

  useEffect(()=>{
    getData()
  },[])
   function getId(p_id)
  {
    const data = {name:p_id, add:"Indore"}
    navigate ("/item",{state:data})
  }
  async function getData()
  {
    var result=await fetch("https://fakestoreapi.com/products/category/women's%20clothing")
     var data=await result.json()
     setdata(data)
  }
  return(

    <div style={{backgroundColor:"red"}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
        <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
     {
      apidata.map((item)=>
       <MDBCol>
        <MDBCard>
         <center>
           <MDBCardImage
            src={item.image} style={{width:"100px", height:"100px"} }
            alt='...'
            position='top'
          />
         </center>
          <MDBCardBody>
             <MDBCardTitle style={{color:"green"}}>Category : {item.category}</MDBCardTitle>
            <MDBCardTitle>Title : {item.title}</MDBCardTitle>
                <MDBCardTitle>Description : {item.description.slice(0,100)}</MDBCardTitle>
                  <MDBCardTitle style={{color:"blue"}}>Rating-Rate : {item.rating.rate}</MDBCardTitle>
                  <MDBCardTitle style={{color:"blue"}}>Rating-Count : {item.rating.count}</MDBCardTitle>
                           <MDBCardTitle style={{color:"red"}}>Price : {item.price*80} RS</MDBCardTitle>
                              <MDBBtn onClick={()=>getId(item.id)}>View Details{item.id}</MDBBtn>

                           <MDBBtn>View Details</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol> )
     }
    </MDBRow>
    <Footer></Footer>
    </div>
  )
}
export default Electronics