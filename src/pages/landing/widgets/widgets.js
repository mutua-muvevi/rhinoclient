
import { styled } from "@mui/system"
import React from 'react'
import Titlesubtitle from "../../../components/units/titlesubtitle/titlesubtitle"
import AlertComponent from "../../../components/widgets/alert/alert"
import Sizeheadercontent12 from "../../../components/widgets/cards/12sizeheadercontent/sizeheadercontent12"
import Sizelandscape12 from "../../../components/widgets/cards/12sizelandscape/sizelandscape12"
import Sizeheadercontent4 from "../../../components/widgets/cards/4sizeheadercontent/sizeheadercontent4"
import Sizeheaderlandscape4 from "../../../components/widgets/cards/4sizeheaderlandscape/sizeheaderlandscape4"
import SizeimgcontentfooterCard4 from "../../../components/widgets/cards/4sizeimgcontentfooter/sizeimgcontentfooterCard4"
// import Sizesquarecard4 from "../../../components/widgets/cards/4sizesquarecard/sizesquarecard4"
import Sizeheadercontent6 from "../../../components/widgets/cards/6sizeheadercontent/sizeheadercontent6"
import Sizesquare6 from "../../../components/widgets/cards/6sizesquare/sizesquare6"
import Sizeheadercontent8 from "../../../components/widgets/cards/8sizeheadercontent/sizeheadercontent8"
import Image from "../../../assets/images/miningtools.jpg"

const WidgetStyles = styled("div")({
	display: "flex",
	flexWrap: "wrap",
	justifyContent: "space-around"
})

const item = {
	image: Image,
	title: "Card Title",
	text: `
		Anim reprehenderit laborum duis aliqua qui ad velit id nulla duis ullamco. 
		Labore proident id consequat labore veniam cillum deserunt fugiat nisi occaecat esse elit. 
		Velit sunt est et fugiat cillum adipisicing enim tempor et tempor.
	`,
	alt: "The card media information here"
}

const Widgets = () => {
  return (
	<WidgetStyles>
		<Sizelandscape12 item={item}/>
		<SizeimgcontentfooterCard4 item={item}/>
		<Sizeheadercontent4 item={item}/>
		{/* <Sizesquarecard4/> */}
		<Sizeheaderlandscape4 item={item}/>
		<Sizeheadercontent6 item={item}/>
		<Sizeheadercontent8  item={item}/>
		<Sizeheadercontent12 item={item}/>
		<Sizesquare6 item={item}/>
		<Titlesubtitle item={item}/>
		<AlertComponent item={item}/>
	</WidgetStyles>
	// <Layout/>
  )
}

export default Widgets