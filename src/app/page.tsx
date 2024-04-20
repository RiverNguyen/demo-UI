import Image from "next/image";
import { GlobeDemo } from "./GlobeDemo";
import { GoogleGeminiEffectDemo } from "./GoogleDemo";

export default function Home() {
    return (
        <div>
            <GoogleGeminiEffectDemo />
            <GlobeDemo />
        </div>
    );
}
