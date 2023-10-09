"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { useAction } from "convex/react"
import { api } from "../../convex/_generated/api"
import { useState } from "react"
import { formSchema, formType } from "../../types/Types"
import Link from "next/link"


//form schema


export default function ProfileForm() {


    //states

    const [tabState,setTabState]=useState("Database")

    //importing actions
    const gptAction = useAction(api.openaiAction.gptAction)
    const youtubeAction = useAction(api.youtubeAction.getFinalSummary)
    const addPageToDatabase = useAction(api.notionAction.addPageToDatabase)
    const addDatabaseToPage = useAction(api.notionAction.addDatabaseToPage)

   
  // defining the form
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      notionKey:"",
      notionUrl:""
    },
  })

  //  submit handler 
  async function onSubmit(values: formType) {
    console.log("Form submitted")
    console.log({tabState})


    try {
        // if user already has database then add the page to it
        if(tabState==="Database"){
            const databaseID = values.notionUrl.split(".so/")[1].split("?")[0];
            console.log(databaseID)
            const youtubeData = await youtubeAction({userPrompt:values.topic})
            const gptData = await gptAction({userPrompt:values.topic})
            if(youtubeData&&gptData){

                addPageToDatabase({
                  notionUrl: databaseID,
                  content: gptData,
                  topic: values.topic,
                  trancriptSummary: youtubeData.summary,
                  videoId: youtubeData.videoId,
                  notionKey: values.notionKey
                })
                
           }

           
        }

        if(tabState==="Page"){
          const pageId =values.notionUrl.split("-")[values.notionUrl.split("-").length-1];  // extract pageId from url
          console.log(pageId);
            addDatabaseToPage({
              notionUrl: pageId, 
              topic: values.topic,
              notionKey: values.notionKey
            })
        }
    
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Input placeholder="Quantum Computing" {...field} />
              </FormControl>
              <FormDescription>
                What would you like to learn ?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="notionKey"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key</FormLabel>
              <FormControl>
                <Input placeholder="XXXXXXXX" {...field} />
              </FormControl>
              <FormDescription>
              Your Notion Integration Key
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


<>
        <Tabs defaultValue="Database">
  <TabsList className="flex items-center justify-center bg-black">
  <TabsTrigger onClick={()=>{setTabState("Database")}} value="Database">Database</TabsTrigger>
  <TabsTrigger onClick={()=>{setTabState("Page")}} value="Page">Page</TabsTrigger>
  
  </TabsList>
        <FormField
          control={form.control}
          name="notionUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <Input placeholder="https://www.notion.so/example-XXXX" {...field} />
              </FormControl>
              <TabsContent value="Database">
              <FormDescription>
              Your Notion Database URL
              </FormDescription>
              </TabsContent>

              <TabsContent value="Page">
                <FormDescription>
              Your Notion Page URL , Select Database if you have already .
              </FormDescription>
              </TabsContent>
              <FormMessage />
            </FormItem>
          )}
        />
        <br/>
        </Tabs>
        </>
        <HoverCard>
  <HoverCardTrigger className="hover:underline cursor-pointer text-sm">Need help to integrate ?</HoverCardTrigger>
  <HoverCardContent className="flex text-xs">{"-->"}&nbsp;<p className="hover:underline cursor-pointer"><Link href="/help">Help Section</Link></p></HoverCardContent>
</HoverCard>
            <br/>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )

}
