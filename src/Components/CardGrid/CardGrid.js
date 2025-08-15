import { Link } from 'react-router-dom';
import "./CardGrid.css";
export default function CardGrid({ imageUrl, children, title, content, button, to }) {
    return (
        <div className="card shadow-sm mt-3" style={{ width: "18rem" }}>
            <img
                src={imageUrl}
                className="card-img-top"
                alt="Card Example"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {content}
                </p>
                <Link className="btn" to={to}>{button}</Link>
            </div>
        </div>
    );
}