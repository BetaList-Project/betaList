import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "../newsletter/Newsletter.css";

const NavigationBar = () => {
	return (
		<Navbar style={navbar} bg="light" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav classNameName="mr-auto">
					<Nav.Link  as={Link} to="/">FRONTPAGE</Nav.Link>
					<Nav.Link  as={Link} to="/regions">REGIONS</Nav.Link>
					<Nav.Link  as={Link} to="/newsletter">NEWSLETTER</Nav.Link>
					<Nav.Link  as={Link} to="/markets">MARKETS</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			
			<ul className="headerNav__end">
			<li className="headerNav__link headerNav__link--padded desktopOnly">
			</li>
			<li className="headerNav__link mobileOnly"><a href="/search">Search</a></li>
			<li className="headerNav__link headerNav__link--button"><a data-behavior="sign-in-link" href="/submit">Submit Startup</a></li>
			<li className="headerNav__link headerNav__link--button"><a target="_blank" href="https://startup.jobs/new">Post a Job</a></li>
			<li className="headerNav__link headerNav__link--button"><a data-action="modal#open" data-modal-id="signin" href="/users/auth/twitter">Sign in</a></li>
			<li className="headerNav__link headerNav__link--button"><a data-action="modal#open" data-modal-id="join" href="/users/auth/twitter">Join</a></li>
			</ul>
		</Navbar>





	);
};

// styles
const navbar = {
	fontSize: '12px',
};

export default NavigationBar;
