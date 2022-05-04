import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useField } from 'formik';

const CheckBoxField = ({
	name,
	label,
	legend,
	...otherProps
}) => {
	const [field, meta] = useField(name);

	const configFormControl = {}

	const configCheckbox = {
		...field
	};


	if(meta && meta.touched && meta.error) {
		configFormControl.error = true;
		configFormControl.helperText = meta.error;
	}

	return (
		<FormControl>
			<FormLabel component="legend">{legend}</FormLabel>
			<RadioGroup name={name} {...configCheckbox} row defaultValue="client">
				    <FormControlLabel 
						value="admin" 
						control={<Radio/>} 
						label="Admin" />
						
    				<FormControlLabel 
						value="client" 
						control={<Radio/>} 
						label="Client" />
			</RadioGroup>
		</FormControl>
	);
};

export default CheckBoxField;