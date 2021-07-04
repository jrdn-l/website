import { Link } from "react-router-dom"

const Button = ({ title, background, color, to, onClick}) => {
    return (
        <Link to={to} onClick={onClick} className="btn" style={{background: background, color: color}}>{title}</Link>
    )
}

export default Button
