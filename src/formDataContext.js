import { createContext } from "react"

export const formDataContext = createContext({
  formData:'',
  setFormData:()=>{}
})