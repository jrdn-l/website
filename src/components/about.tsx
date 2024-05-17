import Image from 'next/image';

export default function About() {
    return (
        <div className="dark:bg-gray-600 w-full">
            <div id="aboutMe" className="h-screen flex flex-col items-center justify-center">
                    <Image width={240} height={240} src={"/hello-wave.gif"} alt="Github" unoptimized={true}/>
                    <br/>
                    <p> Hi I'm Jordan. I am a software developer that graduated from the University of Toronto.</p>
                    <p> I have experience with Java, Python, C, C++, Javascript, HTML, CSS, and React.</p>
                    <br/>
                    <div className="flex flex-row">
                        <div className='p-10'>
                            <p> Favourite Game Series: Legend of Zelda</p>
                            <p> Games I am currently playing</p>
                            <ul>
                                <li>Valorant</li>
                                <li>TeamFight Tactics</li>
                                <li>Persona 3 Reload</li>
                                <li>Final Fantasy 7 Rebirth</li>
                            </ul>
                        </div>
                        <div className='p-10'>
                            <p>Some cool things I've done for myself!</p>
                            <ul>
                                <li> My Computer </li>
                                <li> NAS </li>
                                <li> Keyboard </li>
                            </ul>
                        </div>
                    </div>
            </div>

        </div>
    )
 }