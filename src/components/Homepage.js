import gif from '../Images/Ghost.gif'
const Homepage = () => {
    return (
        <div className='container'>
            <h1>Welcome</h1>
            <div className='container'>
                <p>
                    Hi there! I initially created this website originally to learn some HTML, CSS and Javascript.
                    I also wanted to try learning React.js so this website became my side project to become familiar with it.
                    At the top are links to other pages like the software projects I have worked on, a link to my Github page,
                    and a link to my Jailbreak Repo.
                </p>
            </div>
            <h2>About Me</h2>
            <div className='container'>
                <img src={gif} alt='This is a placeholder'/>
                <p>
                    My name's Jordan Lin. I am currently a Univeristy of Toronto student specializing in Computer Science. My CGPA is currently 3.44/4.0.
                    I decided to go into computer science because I liked being able to see the code I wrote turn into a full product that works, it makes me feel really good.
                    I really enjoy working with computers and cellphones but mostly computers. I just recently built a computer for myself since my laptop that I used to use
                    broke. I'll add a picture below.
                </p>
                <br/>
                <img src='https://assets3.razerzone.com/3UBrT0-Kcjsn_BUvodXOiRP7dMQ=/767x511/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh26%2Fha9%2F9090918449182%2Frazer-tomahawk-a1-1500x1000_0.jpg'/>
                <br/>
                <br/>
                <p>
                    Besides computers, I also really enjoy playing video games and watching anime! I would say right now my favourite video game is Final Fantasy 7 Remake.
                    For the most part though, I enjoy story based games like Persona 5 and open world games like The Legend of Zelda Breath of The Wild.
                    I'd say my favourite video game series is the Legend of Zelda series by Nintendo.
                </p>
            </div>
        </div>
    )
}

export default Homepage
