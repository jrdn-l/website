import gif from '../Images/Ghost.gif'
//import pc from '../Images/PC.JPG'
const Homepage = () => {
    return (
        <div className='container'>
            <h1>Welcome</h1>

            <p className='txtcontainer'>
                Hi there! I initially created this website originally to learn some HTML, CSS and Javascript.
                I also wanted to try learning React.js so this website became my side project to become familiar with it.
                At the top are links to other pages like the software projects I have worked on, a link to my Github page,
                and a link to my Jailbreak Repo.
            </p>

            <h2>About Me</h2>

            <div className='center'>
                <img src={gif} alt='Me!' />
            </div>
            <div className='txtcontainer'>
                <p>
                    My name's Jordan Lin. I am currently a Univeristy of Toronto student specializing in Computer Science. My CGPA is currently 3.44/4.0.
                    I decided to go into computer science because I liked being able to see the code I wrote turn into a full product that works.
                    I really enjoy working with computers and cellphones but mostly computers. I just recently built a computer for myself since my laptop that I used to use
                    stopped working.
                </p>
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
