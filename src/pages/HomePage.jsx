import {Header} from "@/components/header"
import {HeroSection} from "./Home/hero-section"
import {CareTypes} from "./Home/care-types"
import {HowItWorks} from "./Home/how-it-works"
import {Testimonials} from "./Home/testimonials"
import {AdBanner} from "@/components/ad-banner"
import {Footer} from "@/components/footer"
import {WhatsAppButton} from "@/components/whatsapp-button"

function HomePage() {
    return (
        <>
            <div className="min-h-screen bg-background">
                <Header/>
                <main>
                    <HeroSection/>
                    <CareTypes/>
                    <AdBanner/>
                    <HowItWorks/>
                    <Testimonials/>
                    <AdBanner/>
                </main>
                <Footer/>
                <WhatsAppButton/>
            </div>
        </>
    )
}

export default HomePage
