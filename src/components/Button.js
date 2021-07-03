import { Link } from "react-router-dom"

const Button = ({ title, color, to, onClick}) => {
    return (
        <Link to={to} onClick={onClick} className="btn">{title}</Link>
    )
}

export default Button
