"use client"

import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"
import { useState } from "react";
import {Parallax,ParallaxLayer} from '@react-spring/parallax'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import ProfileForm from "@/components/mainForm";
import ScrollElement from "@/components/ui/ScrollElement";


export default function Home() {

return <div >
  <Parallax pages={2}>
    <ParallaxLayer className="flex flex-col h-screen items-center justify-center text-white bg-black"speed={1} >
  <div className="flex flex-col items-center gap-[5rem] ">
  <div className="headingText text-[#c0fb50] ">AI Your Notion .</div>
  <div className="flex flex-col items-center gap-[1rem]">
  <div >Choose any Topic you like .</div>
  <div >Fill in your notion details .</div>
  <div >Make AI generate new notion Page for you with information on the topic .</div>
  <div >{" As a bonus the page also consists a Youtube Link (and it's summary if you can't watch the whole thing .) "}.</div>
  </div>
  <br/>
  <ScrollElement></ScrollElement>
  </div>

 
  </ParallaxLayer>
  <ParallaxLayer className="flex h-screen items-center justify-center text-white" offset={1} speed={0.5} >
    <div className="w-[25rem] ">
<ProfileForm></ProfileForm>
</div>
  </ParallaxLayer>
  </Parallax>
  </div>
}
