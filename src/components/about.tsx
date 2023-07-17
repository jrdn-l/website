import Image from 'next/image';

export default function About() {
    return (
        <div id="aboutMe" className="h-screen">

            <Image width={240} height={240} src={"/hello-wave.gif"} alt="Github" />
        </div>
    )
}