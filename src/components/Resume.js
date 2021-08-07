import pic from '../Images/Ghost.gif'
const Resume = () => {
    // Template Taken From W3 Schools
    return (

        <div>
            <div class="w3-row-padding">
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
                <div class="w3-third">

                    <div class="w3-white w3-text-grey w3-card-4">
                        <div class="w3-display-container">
                            <img src={pic} style={{ width: '100%' }} alt="Avatar" />
                            <div class="w3-display-bottomleft w3-container w3-text-black">
                                <h2>Jordan Lin</h2>
                            </div>
                        </div>
                        <div class="w3-container">
                            <p><i class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Programmer</p>
                            <p><i class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Mississauga, Ontario</p>
                            <p><i class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>jordanlin01@outlook.com</p>
                            <p><i class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>(647) 608-5546</p>
                            <hr />

                            <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Programming Languages</b></p>
                            <p>Python</p>
                            <p>HTML/JavaScript/CSS</p>
                            <p>Java</p>
                            <p>C</p>
                            <p>Objective-c</p>
                            <p>Bash</p>
                            <br/>

                            <p class="w3-large"><b><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Tools, Libraries and Frameworks</b></p>
                            <p>Git</p>
                            <p>WSL</p>
                            <p>Windows 10</p>
                            <p>Linux</p>
                            <p>React.js</p>
                            <p>React Native</p>
                            <p>iOS</p>
                            <p>Android</p>
                            
                            <br />

                        </div>
                    </div><br />


                </div>


                <div class="w3-twothird">

                    <div class="w3-container w3-card w3-white w3-margin-bottom">
                        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Software Projects</h2>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>Discord Bot</b></h5>
                            <p>Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                            <hr />
                        </div>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>Rushmate</b></h5>
                            <p>Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.</p>
                            <hr />
                        </div>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>Jailbreak Tweaks</b></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><br />
                        </div>
                    </div>

                    <div class="w3-container w3-card w3-white">
                        <h2 class="w3-text-grey w3-padding-16"><i class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>University Of Toronto</b></h5>
                            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Sept 2019 - <span class="w3-tag w3-teal w3-round">Current</span></h6>
                            <p>Honors Bachelor of Science - Specializing in Computer Science</p>
                            <p><i class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"/>CGPA: 3.45</p>
                            <hr />
                        </div>
                        <div class="w3-container">
                            <h5 class="w3-opacity"><b>Rick Hansen Secondary School</b></h5>
                            <h6 class="w3-text-teal"><i class="fa fa-calendar fa-fw w3-margin-right"></i>Sept 2015 - Jun 2019</h6>
                            <p>High School</p>
                            <hr />
                        </div>
                    </div>


                </div>
            </div>
            <footer class="w3-container w3-teal w3-center w3-margin-top">
                <p>Find me on social media.</p>
                <i class="fa fa-facebook-official w3-hover-opacity"></i>
                <i class="fa fa-instagram w3-hover-opacity"></i>
                <i class="fa fa-snapchat w3-hover-opacity"></i>
                <i class="fa fa-pinterest-p w3-hover-opacity"></i>
                <i class="fa fa-twitter w3-hover-opacity"></i>
                <i class="fa fa-linkedin w3-hover-opacity"></i>
            </footer>
        </div>

    )
}

export default Resume
