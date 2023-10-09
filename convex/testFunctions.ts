import { mutation } from "./_generated/server"

export const printHello = mutation(
    ({db},{prompt})=>{
        console.log(prompt);
        return prompt+"FROM MUTATION";
    }
)