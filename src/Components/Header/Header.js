import HoverLink from './HoverLink'
function HeaderComponent() {
    return (
        <div className="card bg-light mb-3">
            <div className="card-header">
                <div className="row align-items-center"> {/* Added align-items-center for vertical alignment */}
                    <div className="col-md-6">
                        <h1>DoMore</h1>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        {/* <Link style={style} to="/" className="nav-link mx-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Home</Link> {/* Added nav-link and mx-2 for spacing */}
                        {/* <Link style={style} to="/Task" className="nav-link mx-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Task</Link> */}
                        {/* <Link style={style} to="/User" className="nav-link mx-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>User</Link> */}
                        {/* <Link style={style} to="/About" className="nav-link mx-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>About</Link> */}
                        {/* <Link style={style} to="/Contact" className="nav-link mx-2" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Contact</Link> */}
                        <HoverLink to="/" className="nav-link mx-2"> Home </HoverLink>
                        <HoverLink to="/Task" className="nav-link mx-2"> Task </HoverLink>
                        <HoverLink to="/User" className="nav-link mx-2"> User </HoverLink>
                        <HoverLink to="/About" className="nav-link mx-2"> About </HoverLink>
                        <HoverLink to="/Contact" className="nav-link mx-2"> Contact </HoverLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderComponent;