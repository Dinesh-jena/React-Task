import * as Yup from "yup";
//validation schema 
export const signUpSchema = Yup.object({
  date: Yup.date().max(new Date(),"Future ki date nahi chahiye").required("Bhai fill to karr")
});
