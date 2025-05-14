import { Check } from 'lucide-react';

const services = [
    {
        title: "Property Search & Acquisition",
        description: "Personalized property search based on your specific requirements and preferences, with access to off-market listings.",
        features: [
            "Customized property shortlisting",
            "Virtual property tours",
            "Local market insights",
            "Price negotiation support"
        ]
    },
    {
        title: "Legal & Financial Services",
        description: "Comprehensive legal and financial support to ensure a smooth property acquisition process.",
        features: [
            "Property law consultation",
            "Tax efficiency planning",
            "Mortgage arrangement",
            "Contract review and negotiation"
        ]
    },
    {
        title: "Lifestyle Services",
        description: "Full-service support to help you settle into your new property and community.",
        features: [
            "Interior design consultation",
            "Property management",
            "Local area orientation",
            "Lifestyle concierge services"
        ]
    }
];

const ConciergePage = () => {
    return (
        <div className="container py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif text-altora-navy mb-6">
                    Concierge & Foreign Buyers Services
                </h1>
                <p className="text-xl text-altora-gray-dark max-w-3xl mx-auto">
                    Experience seamless property acquisition and relocation with our comprehensive concierge services tailored for international clients.
                </p>
            </div>

            {/* Benefits Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-3xl font-serif text-altora-navy mb-6">
                        Why Choose Our Concierge Service?
                    </h2>
                    <div className="space-y-4 text-altora-gray-dark">
                        <p>
                            Our dedicated team of experts provides end-to-end support for international buyers,
                            ensuring a smooth and efficient property acquisition process. We understand the unique
                            challenges faced by foreign investors and provide tailored solutions to meet your needs.
                        </p>
                        <p>
                            From property search to legal support and lifestyle services, we handle every aspect
                            of your real estate journey with the utmost attention to detail and professionalism.
                        </p>
                    </div>
                </div>
                <div className="relative h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop"
                        alt="Luxury Service"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                        <h3 className="text-xl font-serif text-altora-navy mb-4">{service.title}</h3>
                        <p className="text-altora-gray-dark mb-6">{service.description}</p>
                        <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-3">
                                    <Check className="w-5 h-5 text-altora-gold flex-shrink-0 mt-1" />
                                    <span className="text-altora-gray-dark">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="bg-altora-navy text-white rounded-lg p-12 text-center">
                <h2 className="text-3xl font-serif mb-6">Ready to Begin Your Journey?</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                    Contact our concierge team today to discuss your requirements and discover how we can assist
                    you in finding your perfect property.
                </p>
                <button className="bg-altora-gold hover:bg-altora-gold-light text-white px-8 py-3 rounded transition-colors duration-300">
                    Schedule a Consultation
                </button>
            </div>
        </div>
    );
};

export default ConciergePage; 