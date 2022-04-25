import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik';

const CheckBoxField = ({
	name,
    label,
    legend,
	...otherProps
}) => {
    const { setFieldValue } = useFormikContext();
	const [field, meta] = useField(name);

    const handleChange = e => {
        const { checked } = e.target
        setFieldValue(name, checked)
    }

	const configCheckbox = {
		...field,
        onChange: handleChange,
	};

    const configFormControl = {}

	if(meta && meta.touched && meta.error) {
		configFormControl.error = true;
		configFormControl.helperText = meta.error;
	}

	return (
		<FormControl>
            <FormLabel component="legend">{legend}</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox  {...configCheckbox} />}
                    label={label}
                />
            </FormGroup>
        </FormControl>
	);
};

export default CheckBoxField;