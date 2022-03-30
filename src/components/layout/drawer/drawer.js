import { Drawer, List, ListItem } from "@mui/material"
import { styled } from "@mui/system"
import React from 'react'

const DrawerStyled = styled(Drawer)(({theme}) => ({
    width: "20vw"
}))

const DrawerComponent = ({isOpen, closeDrawer}) => {
    return (
        <DrawerStyled
            anchor="left"
            open={isOpen}
            onClose={closeDrawer}
            variant="temporary"
        >
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Shipment</ListItem>
                <ListItem>Storage</ListItem>
                <ListItem>Quotation</ListItem>
                <ListItem>Users</ListItem>
            </List>

        </DrawerStyled>
    )
}

export default DrawerComponent