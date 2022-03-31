
import { styled } from "@mui/system"
import React from 'react'
import Layout from "../../../components/layout/layout"
import Titlesubtitle from "../../../components/units/titlesubtitle/titlesubtitle"
import AlertComponent from "../../../components/widgets/alert/alert"
import Sizeheadercontent12 from "../../../components/widgets/cards/12sizeheadercontent/sizeheadercontent12"
import Sizelandscape12 from "../../../components/widgets/cards/12sizelandscape/sizelandscape12"
import Sizeheadercontent4 from "../../../components/widgets/cards/4sizeheadercontent/sizeheadercontent4"
import Sizeheaderlandscape4 from "../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4"
import SizeimgcontentfooterCard4 from "../../../components/widgets/cards/4sizeimgcontentfooter/sizeimgcontentfooterCard4"
import Sizesquarecard4 from "../../../components/widgets/cards/4sizesquarecard/sizesquarecard4"
import Sizeheadercontent6 from "../../../components/widgets/cards/6sizeheadercontent/sizeheadercontent6"
import Sizesquare6 from "../../../components/widgets/cards/6sizesquare/sizesquare6"
import Sizeheadercontent8 from "../../../components/widgets/cards/8sizeheadercontent/sizeheadercontent8"

const WidgetStyles = styled("div")({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around"
})

const Widgets = () => {
  return (
	<WidgetStyles>
		<Sizelandscape12/>
		<SizeimgcontentfooterCard4/>
		<Sizeheadercontent4/>
		<Sizesquarecard4/>
		<Sizeheaderlandscape4/>
		<Sizeheadercontent6/>
		<Sizeheadercontent8/>
		<Sizeheadercontent12/>
		<Sizesquare6/>
		<Titlesubtitle/>
		<AlertComponent/>
	</WidgetStyles>
	// <Layout/>
  )
}

export default Widgets