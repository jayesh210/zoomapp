import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
function About() {
  const history=useHistory();
  const [data,setdata]=useState({});

  const callAboutPage = async () =>{
    try{
      const res= await fetch('/getdata',{
        method:"GET",
 
        headers:{
          Accept:"application/json",
          "Content-type":"application/json"
      },
        credentials:"include"
      })
      setdata(await res.json());
     

      if(!res.status===200){
        const error =new Error(res.error);
        throw error;
      }
    

    }
    catch(err){
      console.log(err);
      history.push('/login');
    }
  }

useEffect(()=>{
 callAboutPage();
}, []);








  return (
   <>
   <div style={{ background: "linear-gradient( to right,#bdc3c7 , #2c3e50"}} >
   <div className="bg-light container p-0 shadow mb-0 " style={{ background: "linear-gradient( to right,#bdc3c7 , #2c3e50", "height":"500px"}}>
     <div className="row">
     <h5 className="card-title col-lg-10 offset-lg-1 mt-5 mb-1">Hi {data.name}</h5>
     <h5 className="card-title col-lg-10 offset-lg-1 mt-4 mb-5">Welcome to your profile</h5>

     <div className=" col-lg-10 offset-lg-1">
     <div class="container">
 
  <div className="row mb-3">
    <div className="col-sm">Name</div>
    <div className="col-sm">{data.name}</div>
    <div className="col-sm"></div>
  </div>
  <div className="row mb-3">
    <div className="col-sm">Email</div>
    <div className="col-sm">{data.email}</div>
    <div className="col-sm"></div>
  </div>
  <div className="row mb-3">
    <div className="col-sm">Phone number</div>
    <div className="col-sm">{data.mobilenumber}</div>
    <div className="col-sm"></div>
  </div>
  <div className="row mb-3">
    <div className="col-sm">Date of Birth</div>
    <div className="col-sm">{data.dob}</div>
    <div className="col-sm"></div>
  </div>
  <div className="row mb-3">
    <div className="col-sm">Gender</div>
    <div className="col-sm">{data.gender}</div>
    <div className="col-sm"></div>
  </div>

</div>
       </div>
     </div>

   </div>
   </div>
   </>
  );
}

export default About;
