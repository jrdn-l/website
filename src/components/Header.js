import Button from "./Button"


const Header = () => {
    return (
        <div className='header'>
            <Button title="Home" to='/website'/>
            <Button to="/software" title="Software Projects"/>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/jrdn-l' className="btn">Github</a>
            <a target="_blank" rel="noopener noreferrer" href='https://jrdn-l.github.io/myrepo/' className="btn">Jailbreak Repo</a>
            
        </div>
    )
}

export default Header
