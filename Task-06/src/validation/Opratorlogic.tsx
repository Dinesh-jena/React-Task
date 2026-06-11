// import * as Yup from 'yup';
// import { ConditionGroupOperator } from '@frontend/src/common/enums/enumConstants';

// export const bucketRulesValidationSchema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   description: Yup.string(),
//   advanced: Yup.string(),
//   bucketFields: Yup.array().of(
//     Yup.object().shape({
//       fieldSet: Yup.string().required('Fieldset is required'),
//       field: Yup.string().required('Field is required'),
//     })
//   ),
//   displayGroupPanel: Yup.boolean(),
//   groupBy: Yup.object()
//     .shape({
//       field: Yup.string(),
//       fieldSet: Yup.string(),
//     })
//     .when('displayGroupPanel', {
//       is: true,
//       then: (schema) =>
//         schema.shape({
//           fieldSet: Yup.string().required('Fieldset is required'),
//           field: Yup.string().required('Field is required'),
//         }),
//       otherwise: (schema) => schema.nullable().optional(),
//     }),
//   groupCombinationOperator: Yup.string().oneOf(
//     Object.values(ConditionGroupOperator),
//     'Invalid group operator'
//   ),
//   conditionGroups: Yup.array().of(
//     Yup.object().shape({
//       id: Yup.string().required('Group ID is required'),
//       operator: Yup.string()
//         .oneOf(Object.values(ConditionGroupOperator), 'Invalid operator')
//         .required('Operator is required'),
//     })
//   ),
//   conditions: Yup.array()
//     .of(
//       Yup.object().shape({
//         fieldSet: Yup.string().required('Field set is required'),
//         field: Yup.object()
//           .shape({
//             id: Yup.string(),
//             label: Yup.string(),
//           })
//           .required('Field is required'),
//         operator: Yup.string().required('Operator is required'),
//         value: Yup.mixed().required('Value is required'),
//         valueEnd: Yup.mixed(),
//         groupId: Yup.string(), // Optional  - absent for time-based conditions
//       })
//     )
//     .min(1, 'At least one condition is required'),
// });