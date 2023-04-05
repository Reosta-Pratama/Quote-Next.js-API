import Blur from "@/components/blur/Blur";
import Quote from "@/components/quote/Quote";
import '../node_modules/boxicons/css/boxicons.min.css';
import SlideQuote from "@/components/slidequote/SlideQuote";
import Slideleft from "@/components/slideleft/Slideleft";

export default function Home() {
    return (
        <main className="relative">
            <SlideQuote></SlideQuote>
            <Quote></Quote>
            <Blur></Blur>
            <Slideleft></Slideleft>
        </main>
    )
}
