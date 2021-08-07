import { useState } from 'react'
import Tldr from '../components/Tldr'

const Software = () => {

    const [tldrDiscord, setTldrDiscord] = useState(true)
    const [tldrRushmate, setTldrRushmate] = useState(true)
    const [tldrJailbreak, setTldrJailbreak] = useState(true)

    return (
        <div>
            <p style={{ paddingLeft: '8%' }}>Welcome to the software projects page.
                Here you can learn more about the software projects
                that I have worked on.
            </p>

            <div className='txtcontainer'>
                <h2>Discord Bot</h2>
                <div style={{ marginLeft: '10px' }}>
                    <p>Tools and Libraries: Python, Discord py, YoutubeDL, Git, Windows 10</p>
                    <br />
                    <Tldr tldr='Discord bot made using python that allows users to play some games and listen to music' onClick={() => setTldrDiscord(!tldrDiscord)} visible={tldrDiscord}
                        expanded="This was a bot I made in my first year of univeristy. I initially started this
                project because my friends and I were really into another bot managed by a third-party called
                Pokecord. Pokecord was a bot that would occationally send messages with pokemon that you could catch.
                The occurance depended on the amount of messages
                sent that the bot could see, so I made this bot to send messages so that Pokecord would release more
                pokemon in our Discord server (I later found out that it didn't matter since Pokecord would only track
                user messages and not bots D: ). The bot ran using python since that was the language I was most familiar
                with at the time due to my first year computer science courses using python as well.
                In addition to python I also had to use an external library called Discord py to get the bot up and running
                as it was an implementation of the discord API for python. From there I also thought that having the option to stream music from youtube
                would be a nice feature which lead me into the working with YoutubeDL, a youtube video downloader made with python.
                This project introduced me to quite a few things like async calls, coroutines, working with Ubuntu in the command line as well as SSHing into an AWS E2C."/>

                    <a href='https://github.com/jrdn-l/mydiscordbot'>Source code</a>
                </div>
            </div>
            <div className='txtcontainer'>
                <h2>RushMate App</h2>
                <div style={{ marginLeft: '10px' }}>
                    <p>Tools and Libraries: Python, JavaScript, React Native, Git, MongoDB, Android, iOS, Google API, Windows 10</p>
                    <br />
                    <Tldr tldr='Android and iOS app developed with React Native to help with finding a less croweded location with user given "tags".' onClick={() => setTldrRushmate(!tldrRushmate)} visible={tldrRushmate}
                        expanded='This app was a project for School done with a group. Since it was written with React Native, the app works on both
                    iOS and Android platforms. Inspired by COVID-19, this app was supposed to help users get to locations that were
                    less busy so that they would come into contact with less people.
                    Using the google maps API and our own sorting and recommending algorithm using the business trends and
                    if there were other similar locations that provide the same service. It would also use the above factors to recommend places based on "Tags"
                    which could be user defined or users could use the default tags we have included.
                    During my time working on this project I worked on both front-end tasks and back-end tasks.
                    For the front end I was in charge with setting up the map, location permissions and location markers (this would be like the pins you place down as well as user location) and the
                    coding the designed Sign Up and Login page. For the backend, I had to set-up the login/registration process with MongoDB for the sign up and login pages and then link the buttons
                    to submit a request to the restful API; I also had to modify the backend to support saving a users favourite "Tag" to the database and accessing it.'/>
                    <br />
                </div>
            </div>
            <div className='txtcontainer'>
                <h2>iOS Jailbreak Tweaks</h2>
                <div style={{ marginLeft: '10px' }}>
                    <p>Tools and Libraries: THEOS, Objective-C, Logos, Git, HTML, iOS Frameworks, WSL, Linux</p>
                    <br />
                    <Tldr tldr={<p>Something I do for fun. Most the the tweaks I have made are quality of life changes. The following are what I have currently made:
                        <dl>
                            <dt>First</dt>
                            <dd>- First tweak I made. Whenever the volume is increased or decreased a haptic touch can be felt</dd>
                            <dt>Five Icon Dock</dt>
                            <dd>- Allows a fifth icon to be added to the dock for an iPhone or iPod</dd>
                            <dt>Fast Unlock</dt>
                            <dd>- Automatically unlocks any FaceID device when it detects your face. (i.e don't have to swipe up to open)</dd>
                            <dd>- Has configurable settings like: Disable when notifications are present or Disable if media controls are displayed</dd>
                        </dl>
                    </p>} onClick={() => setTldrJailbreak(!tldrJailbreak)} visible={tldrJailbreak}
                        expanded={<p>Something I started for because there were some tweaks that I was using that didn't quite work how I wanted.
                            Since I don't own any device that runs on MacOS, I used WSL (Windows Subsystem for Linux) which could allow me to run a Unix environment from a terminal on Windows 10.
                            <br />The following the tweaks I have created so far and how they have helped me with this side project:
                            <br />'First' was my introduction to hooking into existing functions and adding to them, it simply creates haptic feedback whenever the volume is increased or decreased.
                            <br />'Five Icon Dock' was my introduction to hooking into existing instance variables and modifying their values. This tweak as the name implies allows a fifth icon to be added to the dock for an iPhone or iPod (where the default value is 4 icons)
                            <br />'Fast Unlock' was my introduction to creating preferences settings and researching into iOS sprivate frameworks (which is difficult since there is no documentation). This tweak automatically unlocks any FaceID device when it detects your face. (i.e don't have to swipe up to open) and has configurable settings like: disable when notifications are present or disable if media controls are displayed.
                            <br />I mainly do this for myself and for fun, so the development is just whenever I have time and feel like working on it.</p>} />
                    <a href='https://github.com/jrdn-l/tweaks'>Source code</a>
                </div>
            </div>
        </div>
    )
}

export default Software
