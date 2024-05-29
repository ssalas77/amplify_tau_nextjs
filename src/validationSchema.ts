// import { z } from 'zod';
// import statesData from './assets/data/statesData';

// // Define a max file size (10MB)
// const MAX_FILE_SIZE = 10485760;
// const ACCEPTED_FILE_TYPES = [
//   'text/plain',
//   'application/pdf',
//   'application/msword',
//   'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
// ];

// // Extract state names or isoCodes for validation
// const stateNames = statesData.map((state) => state.name);
// const stateIsoCodes = statesData.map((state) => state.isoCode);

// export const formSchema = z.object({
//   fullName: z.string().min(1, 'A name is required').max(64, ''),
//   street: z
//     .string()
//     .min(5, 'Please provide a valid street address')
//     .max(64, 'This street address exceeds the allotted characters'),
//   city: z
//     .string()
//     .min(1, 'Please provide a valid city')
//     .max(32, 'This city exceeds the allotted characters'),
//   state: z
//     .string()
//     .refine(
//       (value) => stateNames.includes(value) || stateIsoCodes.includes(value),
//       'Invalid selection'
//     ),
//   zip: z
//     .string()
//     .min(5, 'A valid zip/postal code is required')
//     .max(10, 'A valid zip/postal code is required'),
//   country: z
//     .string()
//     .refine((value) => value === 'United States', 'Invalid selection'),
//   phone: z
//     .string()
//     .min(10, 'Phone number must be exactly 10 digits')
//     .max(10, 'Phone number must be exactly 10 digits')
//     .refine((value) => /^\d+$/.test(value), 'Phone number must be numeric'),
//   email: z.string().email('Email format is not valid'),
//   title: z
//     .string()
//     .min(1, 'A professional title is required')
//     .max(64, 'This title exceeds the allotted characters'),
//   role: z
//     .string()
//     .refine(
//       (value) => ['contract administrator'].includes(value),
//       'Invalid selection'
//     ),
//   experience: z
//     .string()
//     .refine(
//       (value) =>
//         ['one to two', 'two to four', 'four to seven', 'more'].includes(value),
//       'Invalid selection'
//     ),
//   about: z
//     .string()
//     .min(5, 'Please provide some information about yourself')
//     .max(500, 'This entry exceeds the allotted characters'),
//   filePath: z
//     .any()
//     .refine(
//       (value) => value && value[0] && value[0].size <= MAX_FILE_SIZE,
//       'File size is too large'
//     )
//     .refine(
//       (value) =>
//         value && value[0] && ACCEPTED_FILE_TYPES.includes(value[0].type),
//       'Invalid file type'
//     ),
//   selectedOptions: z.array(z.string()).optional(),
// });

import { z } from 'zod';
import statesData from './assets/data/statesData';

// Define a max file size (10MB)
const MAX_FILE_SIZE = 10485760;
const ACCEPTED_FILE_TYPES = [
  'text/plain',
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

// Extract state names or isoCodes for validation
const stateNames = statesData.map((state) => state.name);
const stateIsoCodes = statesData.map((state) => state.isoCode);

export const formSchema = z.object({
  fullName: z.string().min(1, 'A name is required').max(64, ''),
  street: z
    .string()
    .min(5, 'Please provide a valid street address')
    .max(64, 'This street address exceeds the allotted characters'),
  city: z
    .string()
    .min(1, 'Please provide a valid city')
    .max(32, 'This city exceeds the allotted characters'),
  // state: z
  //   .string()
  //   .refine(
  //     (value) => stateNames.includes(value) || stateIsoCodes.includes(value),
  //     'Invalid selection'
  //   ),
  state: z
    .string()
    .refine(
      (value) => stateNames.includes(value) || stateIsoCodes.includes(value),
      'Invalid selection'
    ),
  // zip: z
  //   .string()
  //   .min(5, 'A valid zip/postal code is required')
  //   .max(10, 'A valid zip/postal code is required'),
  zip: z
    .string()
    .length(5, 'A valid zip/postal code is required')
    .refine((value) => /^\d+$/.test(value), 'Zip code must be numeric'),
  country: z
    .string()
    .refine((value) => value === 'United States', 'Invalid selection'),
  // phone: z
  //   .string()
  //   .min(10, 'Phone number must be exactly 10 digits')
  //   .max(10, 'Phone number must be exactly 10 digits')
  //   .refine((value) => /^\d+$/.test(value), 'Phone number must be numeric'),
  phone: z
    .string()
    .length(10, 'Phone number must be exactly 10 digits')
    .refine((value) => /^\d+$/.test(value), 'Phone number must be numeric'),
  email: z.string().email('Email format is not valid'),
  title: z
    .string()
    .min(1, 'A professional title is required')
    .max(64, 'This title exceeds the allotted characters'),
  role: z
    .string()
    .refine(
      (value) => ['contract administrator'].includes(value),
      "Select position you're applying for"
    ),
  experience: z
    .string()
    .refine(
      (value) =>
        ['one to two', 'two to four', 'four to seven', 'more'].includes(value),
      'Provide years of experience in relevant field'
    ),
  about: z
    .string()
    .min(5, 'Please provide some information about yourself')
    .max(500, 'This entry exceeds the allotted characters'),
  // filePath: z
  //   .any()
  //   .refine(
  //     // (value) => value && value[0] && value[0].size <= MAX_FILE_SIZE,
  //     (value) => value && value.size <= MAX_FILE_SIZE,
  //     'File size is too large'
  //   )
  //   .refine(
  //     // (value) =>
  //     // value && value[0] && ACCEPTED_FILE_TYPES.includes(value[0].type),
  //     (value) => value && ACCEPTED_FILE_TYPES.includes(value.type),
  //     'Invalid file type'
  //   )
  //   .optional(), // Apply the custome file schema
  // selectedOptions: z.array(z.string()).optional(),
  notifyEmail: z
  .boolean()
  // .refine((val) => val === true, {
  //   message: "Please choice a form of communication"
  // }),
  .default(false),
  notifyPhone: z
  .boolean()
  .default(false),
});
