// import React from 'react';
// import { Form, Formik } from 'formik';
// import * as Yup from 'yup';
// import FormikTextField from '@frontend/src/components/form/FormikTextField';
// import FormikDateField from '@frontend/src/components/form/FormikDateField';
// import ButtonIcon from '@frontend/src/components/ButtonWithIcon';
// import { RegexPatterns } from '@frontend/src/common/enums/enumConstants';
// import FormikAutoComplete from '@frontend/src/components/form/FormikAutoComplete';
// import Check from '@frontend/src/components/svgComponents/Check';
// import FormikPatternInput from '@frontend/src/components/form/FormikPatternInput';
// import moment from 'moment';
// import { titleOptions } from '@frontend/src/common/options';
// import FormikCheckbox from '@frontend/src/components/form/FormikCheckbox';

// export interface ClientFormProps {
//   onSubmit: (values: ClientFormValues) => void;
//   initialValues?: Partial<ClientFormValues>;
//   isEdit?: boolean;
//   isLoading?: boolean;
// }

// export interface ClientFormValues {
//   title?: string;
//   firstName?: string;
//   middleName?: string;
//   lastName?: string;
//   email?: string;
//   mobileNumber?: string;
//   dateOfBirth?: string;
//   nationalInsuranceNumber?: string;
//   utrNumber?: string;
//   irvAccepted?: boolean;
//   address?: {
//     houseNumberOrName?: string;
//     addressLine1: string;
//     addressLine2?: string;
//     townOrCountry?: string;
//     city?: string;
//     postcode?: string;
//   };
// }

// const validationSchema = Yup.object({
//   title: Yup.string(),
//   firstName: Yup.string().required('First name is required'),
//   lastName: Yup.string().required('Last name is required'),
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   mobileNumber: Yup.string()
//     .required('Mobile number is required')
//     .transform((value) => {
//       // Remove spaces first
//       const cleanValue = value.replace(/\s/g, '');
//       // If it already starts with 07, return as is
//       if (cleanValue.startsWith('07')) return cleanValue;
//       // Otherwise, add 07 prefix for validation
//       return `07${cleanValue}`;
//     })
//     .matches(
//       /^07\d{9}$/,
//       'Mobile number must start with 07 and be 11 digits long'
//     ),
//         dateOfBirth:  Yup.date()
// 			.max(new Date(),"Future ki date nahi chahiye")
//  			 .required('Date of birth is required'),
//   nationalInsuranceNumber: Yup.string()
//     .required('National Insurance Number is required')
//     .matches(
//       RegexPatterns.NI_NUMBER,
//       'Invalid National Insurance Number Format'
//     ),
//   address: Yup.object({
//     houseNumberOrName: Yup.string(),
//     addressLine1: Yup.string().required('Address line 1 is required'),
//     city: Yup.string().required('City is required'),
//     postcode: Yup.string()
//       .required('Please Enter Your Postcode')
//       .matches(RegexPatterns.POSTAL_CODE, 'Invalid Postcode Format'),
//   }),
//   irvAccepted: Yup.boolean(),
// });

// const ClientForm: React.FC<ClientFormProps> = ({
//   onSubmit,
//   initialValues,
//   isEdit = false,
//   isLoading = false,
// }) => {
//   const defaultValues: ClientFormValues = {
//     title: undefined,
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     dateOfBirth: '',
//     nationalInsuranceNumber: '',
//     utrNumber: '',
//     irvAccepted: false,
//     address: {
//       houseNumberOrName: '',
//       addressLine1: '',
//       addressLine2: '',
//       townOrCountry: '',
//       city: '',
//       postcode: '',
//     },
//   };

//   const formValues = initialValues
//   ? {
//       ...defaultValues,
//       ...initialValues,
//       mobileNumber: initialValues.mobileNumber
//       ? initialValues.mobileNumber
//           .toString()
//           .replace(/\s/g, '')   // remove spaces
//           .replace(/^07/, '')   // remove prefix
//       : '',
//     }
//   : defaultValues;

//   const handleSubmit = (values: ClientFormValues) => {
//     // Ensure mobile number has 07 prefix for submission
//     const cleanMobile = values.mobileNumber?.replace(/\s/g, '') || '';

//     const formattedValues = {
//       ...values,
//       mobileNumber: cleanMobile?.startsWith('07')
//         ? cleanMobile
//         : `07${cleanMobile}`,
//     };
//     onSubmit(formattedValues);
//   };

//   return (
//     <Formik
//       initialValues={formValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ dirty }) => (
//         <Form className="flex flex-col gap-4 px-6">
//           <div className="grid grid-cols-2 gap-8 w-[34rem]">
//             <div className="flex flex-col gap-3">
//               <h3 className="text-xs xl1440:text-sm font-bold text-gray-500">
//                 Details
//               </h3>
//               <FormikAutoComplete
//                 disablePortal
//                 name="title"
//                 label="Preferred Title"
//                 options={titleOptions}
//               />
//               <FormikTextField name="firstName" label="First Name" />
//               <FormikTextField name="middleName" label="Middle Name" />
//               <FormikTextField name="lastName" label="Last Name" />
//               <FormikTextField name="email" label="Email" />
//               <FormikPatternInput
//                 format="07### ######"
//                 name="mobileNumber"
//                 label="Phone"
//                 placeholder="07### ######"
//                 patternChar="#"
//                 storeFormattedValue="value"
//                 allowEmptyFormatting
//               />
//               <FormikDateField
//                 name="dateOfBirth"
//                 label="Date Of Birth"
//                 className="!w-full [&>div]:!w-full"
//                 maxDate={moment()}
//               />
		
//               <FormikTextField
//                 name="nationalInsuranceNumber"
//                 label="National Insurance Number"
//               />
//               <FormikTextField name="utrNumber" label="UTR Number" />
//               <FormikCheckbox
//                 name="irvAccepted"
//                 label="IRV Accepted"
//                 wrapperClass="ml-2"
//               />
//             </div>

//             <div className="flex flex-col gap-3">
//               <h3 className="text-xs xl1440:text-sm font-bold text-gray-500">
//                 Address
//               </h3>
//               <FormikTextField
//                 name="address.houseNumberOrName"
//                 label="House Number or Name"
//               />
//               <FormikTextField
//                 name="address.addressLine1"
//                 label="Address Line 1"
//               />
//               <FormikTextField
//                 name="address.addressLine2"
//                 label="Address Line 2"
//               />
//               <FormikTextField name="address.city" label="City" />
//               <FormikTextField
//                 name="address.townOrCountry"
//                 label="Town/Country"
//               />
//               <FormikTextField name="address.postcode" label="Postcode" />
//             </div>
//           </div>

//           <div className="flex justify-end mt-4">
//             <ButtonIcon
//               type="submit"
//               disabled={!dirty || isLoading}
//               variant={'success'}
//               icon={<Check />}
//             >
//               Apply Changes
//             </ButtonIcon>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default ClientForm;