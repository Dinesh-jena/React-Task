import * as Yup from "yup";

export const validationSchema = Yup.object({
  startDate: Yup.date()
    .required("Start Date is required"),

  endDate: Yup.date()
    .required("End Date is required")
    .test(
      "date-check",
      "This is not possible",
      function (value) {
        const { startDate } = this.parent;

        if (!startDate || !value) {
          return true;
        }

        const start = new Date(startDate);
        const end = new Date(value);

        // startDate > endDate
        if (start > end) {
          return false;
        }

        return true;
      }
    ),
});
