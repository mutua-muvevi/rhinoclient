import { Grid } from "@mui/material"
import React from 'react'
import Sizeheadercontent6 from "../../../../components/widgets/cards/6sizeheadercontent/sizeheadercontent6"
import { storageTransportChart } from "./contentdashcard2"

const Dashcards2 = () => {
	return (
		<Grid container spacing={0.5}>
			{
				storageTransportChart.map((item, i) => (
					<Grid key={i} item lg={6} sm={12} xs={12}>
						<Sizeheadercontent6 item={item}/>
					</Grid>
				))
			}
		</Grid>
	)
}

export default Dashcards2