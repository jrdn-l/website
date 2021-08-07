import Button from "./Button"


const Header = () => {
    return (
        <div className='header'>
            <Button title="Home" to='/website' color='black' background='white'/>
            <Button to="/software" title="Software Projects" color='black' background='white'/>
            <Button to="/resume" title="CV" color='black' background='white'/>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/jrdn-l' style={{color: "black", backgroundColor: "white"}}className="btn">Github</a>
            <a target="_blank" rel="noopener noreferrer" href='https://jrdn-l.github.io/myrepo/' style={{color: "black", backgroundColor: "white"}} className="btn">Jailbreak Repo</a>
            
        </div>
    )
}

export default Header
