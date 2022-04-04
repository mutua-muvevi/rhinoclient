import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';

const TimePicker = ({
	name,
	...otherProps
}) => {
	const [field, meta] = useField(name);

	const configDateTimePicker = {
		...field,
		...otherProps,
		type: 'time',
		variant: 'outlined',
		fullWidth: true,
		InputLabelProps: {
			shrink: true
		}
	};

	if(meta && meta.touched && meta.error) {
		configDateTimePicker.error = true;
		configDateTimePicker.helperText = meta.error;
	}

	return (
		<TextField
			{...configDateTimePicker}
		/>
	);
};

export default TimePicker;