import HoverLink from './HoverLink'
import { Link } from 'react-router-dom';
function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-lg mb-3 rounded-b-lg shadow-md"
            style={{ backgroundColor: "#f2f1f1ff", position: 'sticky', top: '0px', zIndex: '1' }}>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-3xl font-bold text-gray-800">
                    <h4>
                        <img
                            src="/DoMore2.png"
                            alt="Loading..."
                            style={{ width: "30px", height: "30px", borderRadius: '50%' }}
                        />
                        DoMore
                    </h4>
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <HoverLink to="/" className="nav-link">Home</HoverLink>
                        </li>
                        <li className="nav-item">
                            <HoverLink to="/Task" className="nav-link">Task</HoverLink>
                        </li>
                        <li className="nav-item">
                            <HoverLink to="/User" className="nav-link">User</HoverLink>
                        </li>
                        <li className="nav-item">
                            <HoverLink to="/About" className="nav-link">About</HoverLink>
                        </li>
                        <li className="nav-item">
                            <HoverLink to="/Contact" className="nav-link">Contact</HoverLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;