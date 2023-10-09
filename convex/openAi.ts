
import { mutation } from "./_generated/server"

export const strictOutputMutation = mutation(
   async ({db},{userPrompt})=>{
        let questions: any;
        console.log({userPrompt});
        return questions+"FROM MUTATION";
    }
)
