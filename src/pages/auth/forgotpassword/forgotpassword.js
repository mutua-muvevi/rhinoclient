import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledAuthCardWrapper = styled(Box)(({ theme }) => ({

}))

const StyledContainer = styled(Container)(({ theme }) => ({

}))

const ForgotPassword = () => {
	return (
		<StyledAuthCardWrapper>
			<StyledContainer>
				<Typography variant="h2">Forgot password</Typography>
			</StyledContainer>
		</StyledAuthCardWrapper>
	)
}

export default ForgotPassword