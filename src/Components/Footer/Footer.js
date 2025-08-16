const Footer = () => {
    const styleLink = {
        position: "sticky",
        bottom: "0px",
        width: '100%'
    }
    return (
        <div style={styleLink} className="footer bg-dark text-white text-center py-3">
            <p>&copy; 2023 DoMore. All rights reserved.</p>
        </div>
    );
}

export default Footer;