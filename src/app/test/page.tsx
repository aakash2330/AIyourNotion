
"use client"

import ProfileForm from "@/components/mainForm";
import { Children } from "react";
import { metadata } from "../layout";
import ScrollElement from "@/components/ui/ScrollElement";

export default function TestPage(){

    const handleClick = (metadata:any)=>{
        console.log(metadata)
    }
    return <ScrollElement></ScrollElement>
}