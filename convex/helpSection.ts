import { helpPageData } from "../types/Types"
import { mutation, query } from "./_generated/server"

export const addHelpData = mutation(
   async ({db},helpPageData:helpPageData)=>{
        db.insert("helpPageData",helpPageData)
        return "Entry added"
    }
)

export const getHelpData = query(
    async ({db})=>{
        return (await db.query("helpPageData").collect()) 
    }
)
