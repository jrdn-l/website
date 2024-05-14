import Image from 'next/image';

export default function About() {
    return (
        <div className="dark:bg-gray-600 w-screen">
            <div id="aboutMe" className="h-screen flex flex-col items-center justify-center">
                    <Image width={240} height={240} src={"/hello-wave.gif"} alt="Github" unoptimized={true}/>
                    <br/>
                    <p> Hi I'm Jordan. I am a software developer that graduated from the University of Toronto.</p>
            </div>

        </div>
    )
}