import { TextField } from "@mui/material";
import React from 'react';
import { useField } from "formik";

const TextfieldWrapper = ({name, ...otherProps}) => {

	const [field, meta] = useField(name)

	const configTextField = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: "outlined"
	}

	if (meta && meta.touched && meta.error){
		configTextField.error = true
		configTextField.helperText = meta.error
	}

	return (
		<TextField  
			{...configTextField}
		/>
	)
}

export default TextfieldWrapper