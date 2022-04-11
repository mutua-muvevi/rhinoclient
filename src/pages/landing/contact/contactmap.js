import React from 'react';
import { Box } from "@mui/material";
import { styled } from "@mui/system";


const StyledContactMap = styled(Box)(({ theme }) => ({
	width: "100% !important"
}))

const iframeStyle = {
	borderRadius: "5px",
    minHeight: "500px",
    height: "100%",
    width: "100%",
}


const ContactMap = () => {
	return (
		<StyledContactMap>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11281.771442292633!2d36.748590730685045!3d-1.3510633698684948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjAnNTguMCJTIDM2wrA0NCc1MS40IkU!5e0!3m2!1sen!2ske!4v1631643617692!5m2!1sen!2ske"
				className="iframe"
				allowFullScreen=""
				loading="lazy"
				style={iframeStyle}
				xs={12}
				title="Rhino jon map">

			</iframe>
		</StyledContactMap>
	)
}

export default ContactMap