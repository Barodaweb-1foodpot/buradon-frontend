"use client";

import Hader from '@/Component/Hader'
import React, { useEffect, useState } from 'react'
import PlaceHolder from "@/Component/Placeholder"
import Bradcrum from '@/Component/Bradcrum'
import Footer from '@/Component/Footer'
import BradcrumAboutImg from "@/assets/images/new-home/breadcrumb-profile.jpg"
import ScrollTopBtn from '@/Component/ScrollTopBtn'
import AboutUsComponent from '@/Component/AboutUs'
import WhyUS from '@/Component/WhyUS'
import OverGol from '@/Component/OverGol'
import AboutTwo from "@/assets/images/new-home/about-2.png"
import Image from 'next/image'
import axios from 'axios';

const Page = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
      axios.get(`${process.env.NEXT_PUBLIC_API_URL_COFFEE}/api/auth/get/blogsList/AboutUs`)
      .then((res)=>setData(res.data))
  },[])
  return (
    <React.Fragment>
        <Hader />
        <PlaceHolder />
        <Bradcrum BradCrumProduct={BradcrumAboutImg} Title="Profile" />
        <AboutUsComponent />
        
        {data.length > 0 && data.map((it,index)=>
          <div key={index} dangerouslySetInnerHTML={{ __html: it.blogDesc }}></div>
        )}
        <ScrollTopBtn />
        <Footer />
    </React.Fragment>
  )
}

export default Page