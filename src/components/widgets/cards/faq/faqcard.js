import React from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqCard = ({ question, answer }) => {
	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon color="secondary" />}
				aria-controls="panel1a-content"
				id="panel1a-header"
				>
				<Typography variant="h5" color="secondary">{question}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>
					{answer}
				</Typography>
			</AccordionDetails>
		</Accordion>
	)
}

export default FaqCard