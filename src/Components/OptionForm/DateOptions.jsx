// import React, { useState } from "react";
// import {
//   TextField,
//   Box,
//   IconButton,
//   Button,
// } from "@mui/material";
// import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import AddButton from "../Common/AddButton";
// import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// export default function DateOptions() {
//   const [options, setOptions] = useState([
//     { id: 1, date: null },
//     { id: 2, date: null },
//   ]);

//   const handleAddOption = () => {
//     const newOptionId = options.length + 1;
//     const newOption = {
//       id: newOptionId,
//       date: null,
//     };
//     setOptions([...options, newOption]);
//   };

//   const handleDateChange = (id, date) => {
//     const newOptions = options.map((option) => {
//       if (option.id === id) {
//         return { ...option, date };
//       }
//       return option;
//     });
//     setOptions(newOptions);
//   };

//   const handleRemoveOption = (id) => {
//     setOptions(options.filter((option) => option.id !== id));
//   };

//   return (
//     <div>
//       <Box>
//         {options.map((option) => (
//           <Box key={option.id} display="flex" alignItems="center" mb={2}>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//               <DatePicker
//                 value={option.date}
//                 onChange={(date) => handleDateChange(option.id, date)}
//                 renderInput={(params) => (
//                   <TextField
//                     {...params}
//                     variant="outlined"
//                     size="small"
//                     fullWidth
//                   />
//                 )}
//               />
//             </LocalizationProvider>
//             <IconButton
//               onClick={() => handleRemoveOption(option.id)}
//               aria-label="delete"
//               size="small"
//             >
//               <DeleteOutlineOutlinedIcon />
//             </IconButton>
//           </Box>
//         ))}
//       </Box>
//       <AddButton onAddOption={handleAddOption} />
//     </div>
//   );
// }
