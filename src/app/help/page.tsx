"use client"

import Glitch from '@/components/ui/glitch'
import './index.css'
import { useEffect, useState } from 'react'
import { glitchfun } from '@/lib/glitchFun'
import { useQuery } from 'convex/react'
import { api } from '../../../convex/_generated/api'
import { helpPageData } from '../../../types/Types'
export default function HelpPage(){

  const [title,setTitle] = useState("");
  const [description,setDescription]=useState("")
  const [index,setIndex]=useState(0)
  const getHelpData : helpPageData[] | undefined= useQuery(api.helpSection.getHelpData)
  const [currentPageData,setCurrentPageData]=useState([{
    title: "",
    description: "",
    image: "",
  }])
  useEffect(()=>{
    if(getHelpData){
      setCurrentPageData(getHelpData)
    } 

    setTitle(currentPageData[index].title)
    setDescription(currentPageData[index].description)
    
  },[getHelpData,currentPageData,index])

    return (
      <>
<main >
  <article data-index="0" data-status="active">
    <div className="article-image-section article-section flex items-center justify-center" style={{
      backgroundImage:`url('${currentPageData[index].image}')`}}>   
  
    </div>
    <div className="article-description-section article-section">
      <div className='flex flex-col gap-[1rem] fade-in-text' >
        {/* DESCRIPTION HERE */}
      {description.split(".").
      map((line,index)=>{return <div key={index}>{line}</div>})}
      </div>
    </div>
    <div className="article-title-section article-section">
      {/* TITLE HERE */}
      <h2>{title}</h2>
      
      <i className="fa-light fa-plus-large"></i>
    </div>
    <div className="article-nav-section article-section">
      <button className="article-nav-button" type="button" onClick={async()=>{
        if(index!=0){setIndex(prev=>{prev-=1; //decrement the page number
          glitchfun(setTitle,currentPageData[prev].title,1/3,20);
          return prev})}
        else setIndex(index);
       
        }} >
        <i className="fa-solid fa-arrow-left text-[#c0fb50]"></i>
      </button>
      <button className="article-nav-button " type="button" onClick={async()=>{
        if(index!=(currentPageData.length-1)){setIndex(prev=>{prev+=1; //increment the page number
          glitchfun(setTitle,currentPageData[prev].title,1/3,20);
          return prev})}
        else setIndex(index)}} >
      <i className="fa-solid fa-arrow-right text-[#c0fb50] "></i>
      </button>
    </div>
  </article>

</main>
</>
    )
}