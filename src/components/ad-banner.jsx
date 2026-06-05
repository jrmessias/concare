import {Link} from "react-router-dom"

const defaultAds = [
    {
        image: "/anuncie.jpg",
        alt: "Anúncio",
        link: "/encontrar-cuidador"
    },
    {
        image: "/anuncie.jpg",
        alt: "Anúncio",
        link: "/encontrar-cuidador"
    },
    {
        image: "/anuncie.jpg",
        alt: "Anúncio",
        link: "/encontrar-cuidador"
    },
    {
        image: "/anuncie.jpg",
        alt: "Anúncio",
        link: "/encontrar-cuidador"
    },
]

export function AdBanner({ads = defaultAds, columns = 3, className = ""}) {
    return (
        <section className={`py-12 bg-background ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 ${
                        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
                    } gap-6`}
                >
                    {ads.slice(0, columns).map((ad, index) => (
                        <Link
                            key={index}
                            to={ad.link}
                            className="group block relative overflow-hidden rounded-xl border border-border bg-card hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
                        >
                            <div className="h-24 bg-muted overflow-hidden">
                                <img
                                    src={ad.image}
                                    alt={ad.alt}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
