import { Button, Grid, TextField } from "@mui/material"
import { styled } from "@mui/system";
import React from 'react';
import { addStorageFormContent } from "./addStorageformcontent"

const StyledTextField = styled(TextField)(({theme}) => ({
	// width: "100%",
	marginTop: "10px",
	[`& fieldset`]:{
		borderRadius: theme.shape.default
	  }
}))

const StyledAddButton = styled(Button)(({theme}) => ({
	borderRadius: theme.shape.default,
	margin: "20px",
	textAlign: "left",
	minWidth: "10vw",
	minHeight: "50px"
}))

const AddStorageForm = () => {
	return (
		<Grid container spacing={2}>
			{addStorageFormContent.map((input, i) => (
				<Grid item lg={4} md={6} sm={12}>
					<StyledTextField
						label={input.label}
						variant="outlined"
						fullWidth
						required
					/>
				</Grid>
			))}
			<StyledAddButton variant="contained">
				Submit
			</StyledAddButton>
		</Grid>
	)
}

export default AddStorageForm