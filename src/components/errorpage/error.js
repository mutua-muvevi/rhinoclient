import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Typography, Card, Grow, Stack, CardContent } from "@mui/material";
import { styled } from "@mui/system";

import { FaHome } from "react-icons/fa";

const StyledErrorBoundary = styled(Box)(({ theme }) => ({
	minHeight: "100vh",
	backgroundColor: "#202020",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
}));

const StyledErrorBoundaryContent = styled(Card)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	position: "absolute",
	top: "10vh",
	bottom: "10vh",
	left: "10vw",
	right: "10vw",
}));

const styledHeader = {
	lineHeight: "80%",
};

const styledSubheader = {
	fontSize: "1.2vw",
};

const styledLink = {
	color: "white",
	textDecoration: "none",
	display: "flex",
	justifyContent: "space-around",
	alignItems: "center",
	textAlign: "left",
	fontSize: "1.2vw",
};

const StyledButton = styled(Button)(({ theme }) => ({
	marginTop: "5vh",
	color: "black",
}));

const styledFont = {
	fontSize: "inherit"
};

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		// logErrorToMyService(error, info.componentStack);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<StyledErrorBoundary>
					<Grow
						style={{ transformOrigin: "10 20 50" }}
						in
						timeout={2000}
					>
						<StyledErrorBoundaryContent>
							<CardContent p={5}>
								<Stack direction="column" spacing={3} justifyContent="center" alignItems="center" textAlign="center">
									<Typography
										variant="h2"
										color="primary"
									>
										Something went wrong
									</Typography>
									<Typography variant="h5">
										Something went wrong, please reload to check if
										the problem persists
									</Typography>
									<Link to="/" style={styledLink}>
										<StyledButton
											variant="contained"
											color="secondary"
											endIcon={<FaHome style={styledFont} />}
										>
											<Typography variant="subtitle1">
												Return home
											</Typography>
										</StyledButton>
									</Link>
								</Stack>
							</CardContent>
						</StyledErrorBoundaryContent>
					</Grow>
				</StyledErrorBoundary>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
