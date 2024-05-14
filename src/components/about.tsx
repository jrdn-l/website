import Image from 'next/image';

export default function About() {
    return (
        <div id="aboutMe" className="h-screen flex items-center justify-center">
            <div>
                <Image width={240} height={240} src={"/hello-wave.gif"} alt="Github" unoptimized={true}/>
                <br/>
                <p> Hi I'm Jordan</p>
            </div>
        </div>
    )
}