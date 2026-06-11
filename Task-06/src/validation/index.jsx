import * as Yup from "yup";

export const signUpSchema = Yup.object({
  date: Yup.date().max(new Date()).required(),
});
