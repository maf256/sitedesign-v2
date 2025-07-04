import Image from "next/image";
import CroppedAboutImg from '../../../public/cropped_webutvikler-about.webp';
export default function AboutIllustration() {
    return (
        <Image alt="Webutvikler & Webdesign - Majid Askarifarsangi" src={CroppedAboutImg} />
    )
}
