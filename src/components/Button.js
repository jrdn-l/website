import { Link } from "react-router-dom"

const Button = ({ title, color, to}) => {
    return (
        <Link to={to} className="btn">{title}</Link>
    )
}

export default Button
