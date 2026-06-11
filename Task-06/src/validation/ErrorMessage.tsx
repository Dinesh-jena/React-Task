// import { FastField, Field, FieldProps } from 'formik';
// import React, { forwardRef } from 'react';
// import TextInput, { TextInputProps } from '@frontend/src/components/TextInput';

// export interface FormikTextFieldProps extends TextInputProps {
//   name: string;
//   optimized?: boolean;
// }

// // Use forwardRef to pass the ref to the FormikTextField
// const FormikTextField = forwardRef<HTMLInputElement, FormikTextFieldProps>(
//   (props, ref) => {
//     const { name, optimized = true, ...restProps } = props;
//     const Comp = optimized ? FastField : Field;

//     return (
//       <Comp name={name}>
//         {({ field, meta }: FieldProps) => {
//           return (
//             <TextInput
//               errorMessage={meta.touched && meta.error ? meta.error : undefined}
//               {...field}
//               {...restProps}
//               ref={ref}
//             />
//           );
//         }}
//       </Comp>
//     );
//   }
// );

// export default FormikTextField;