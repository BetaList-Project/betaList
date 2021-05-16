import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NavigationBar = () => {
	return (
		<Navbar style={navbar} bg="light" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link  as={Link} to="/">FRONTPAGE</Nav.Link>
					<Nav.Link  as={Link} to="/regions">REGIONS</Nav.Link>
					
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

// styles
const navbar = {
	fontSize: '12px',
};

export default NavigationBar;
