import React from 'react';
import { SwipeableDrawer } from "@mui/material"
import SwipeableDrawerList from "./swipeabledrawerlist";
import { styled } from "@mui/system";

const StyledSwipeAbleDrawer = styled(SwipeableDrawer)(({theme}) => ({
	width: "90vw !important"
}))

const swipeableDrawerSX = {
	width: "90vw !important",
	color: "white",
}

const SwipeableSideDrawer = ({mobileNav, setMobileNav}) => {
	return (
		<StyledSwipeAbleDrawer
			anchor="right"
			open={mobileNav}
			onClose={() => setMobileNav(false)}
			onOpen={() => setMobileNav(true)}
			sx={swipeableDrawerSX}
			PaperProps={{
				sx: {
					backgroundColor: "#131212",
					color: "white",
				  }
			}}
		>
			<SwipeableDrawerList mobileNav={mobileNav} setMobileNav={setMobileNav}/>
		</StyledSwipeAbleDrawer>
	)
}

export default SwipeableSideDrawer