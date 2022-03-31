import { Grid } from "@mui/material"
import React from 'react'
import Sizeheaderlandscape4 from "../../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4"
import { transportCardsContent } from "./contentdashcards3"

const Dashcards3 = () => {
	return (
		<Grid container spacing={0.5} >
			{
				transportCardsContent.map((item, i) => (
					<Grid key={i} item lg={4} sm={12} xs={12}>
						<Sizeheaderlandscape4 item={item} />
					</Grid>
				))
			}
		</Grid>
	)
}

export default Dashcards3