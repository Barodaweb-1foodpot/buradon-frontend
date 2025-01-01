"use client";

import Hader from '@/Component/Hader'
import React, { useEffect, useState } from 'react'
import PlaceHolder from "@/Component/Placeholder"
import Bradcrum from '@/Component/Bradcrum'
import { BiSolidFilePdf } from "react-icons/bi";
import Footer from '@/Component/Footer';
import ScrollTopBtn from '@/Component/ScrollTopBtn';
import BradCrumImg from "@/assets/images/new-home/breadcrumb-product.jpg"
import axios from 'axios';

const alpha=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    getAllData();
  },[])

  const getAllData=()=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/list/product-details`)
    .then((res)=>setData(res.data))
  }

  const getFilteredData=(id)=>{
    axios.get(`${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/list/filter-product-details/${id}`)
    .then((res)=>setData(res.data))
  }

  return (
    <React.Fragment>
      <Hader />
      <PlaceHolder />
      <Bradcrum BradCrumProduct={BradCrumImg} Title="Product" />
    <section className="research-page-section sec-pad buradon">
  <div className="auto-container">
    <div className="row">
      <div className="col-lg-12">
        <div className="sec-title small">
          {/* <span class="sub-title">About Company</span> */}
          <h2>Filter Products  <span className="hightlight">Alphabetically</span></h2>
        </div>
      </div>
    </div>
    <div className="sortable-masonry">
      <div className="filters centred">
        <ul className="filter-tabs filter-btns clearfix">
          <li className="active filter" data-role="button" data-filter=".all" onClick={getAllData}><i className="fa-solid fa-flask pe-1" /> All</li>
          {alpha.map((it,index)=>
          <li key={index} className="filter" data-role="button" data-filter=".a" onClick={()=>getFilteredData(it)}>{it}</li>
          )}
        </ul>
      </div>
      <div className="items-container row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12 masonry-item small-column all">
          <div className="container table-responsive"> 
            <table className="table table-bordered table-hover buradon-prod-table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Name</th>
                  <th scope="col">CAS No.</th>
                  <th scope="col">AR / ACS</th>
                  <th scope="col">LR</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 && data.map((it,tabledata)=>
                <tr key={tabledata}>
                  <td scope="row">{it.code}</td>
                  <td>{it.productName}</td>
                  <td>{it.CasNo}</td>
                  <td className="pdf"><div className="pdf-icon"> <a href={`${process.env.NEXT_PUBLIC_API_URL_COFFEE}/${it.AR}`} target='_blank'><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                  <td className="pdf"><div className="pdf-icon"> <a href={`${process.env.NEXT_PUBLIC_API_URL_COFFEE}/${it.LR}`} target='_blank'><BiSolidFilePdf className="fas fa-file-pdf" /> View</a></div></td>
                </tr>
                )}
                {data.length == 0 && 
                <tr>
                  <td colSpan={5} style={{textAlign:"center"}}>Data Not Available</td>
                </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>
<ScrollTopBtn />
<Footer />
    </React.Fragment>
  )
}

export default Page