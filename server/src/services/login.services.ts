import type z from "zod"
// import { AccessRequest, type loginRequestResponseSchema } from "../types/api.types.js"
import { AccessRequestSchema } from "../types/auth.js"
import { supabaseBase } from "../supabase/client.js"
import { MagicLinkRequest } from "../types/auth.js"
import { error, success } from "../api/response.js"

export function buildLoginServices(){
  const allowedEmails: string[] = process.env.ALLOWED_EMAIL_LIST
    ? process.env.ALLOWED_EMAIL_LIST.split(",").map(allowedEmail => allowedEmail.trim())
    : []
    
  async function processMagicLinkRequest(linkRequest: unknown): Promise<ApiResponse<MagicLinkRequest>>{
    const body = AccessRequestSchema.safeParse(linkRequest)
    if(body.error){
      return error({
        code:"LINK REQUEST VIOLATED CONTRACT",
        message:"The request was not formatted correctly."
      })
    }
    const { email } = body.data
    if(!allowedEmails.includes(email)){
      return error({
        code:"EMAIL IS NOT WHITE LISTED",
        message:"Email provided is not allowed a magic link."        
      })
    }
    try {
      console.log("Attempting to send to supabase")
      await supabaseBase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'http://localhost:5173',
        }
      })
      console.log("Supabase email request sent.")      
    } catch (error) {
      console.log("Error sending to supabase")
      console.log(error)
    }

    return success({requestApproved: true})
  }

  return{
    processMagicLinkRequest
  }
}

export type LoginServices = ReturnType<typeof buildLoginServices>

