const teamMembers = [
    {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500",
        bio: "With over 20 years of experience in luxury real estate, Sarah leads Altora Global Estates with vision and excellence."
    },
    {
        name: "Michael Chen",
        role: "Head of International Sales",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500",
        bio: "Michael specializes in connecting international buyers with exclusive properties across our global portfolio."
    },
    {
        name: "Emma Rodriguez",
        role: "Migration Services Director",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=500",
        bio: "Emma brings extensive experience in immigration law and relocation services to support our international clients."
    },
];

const AboutPage = () => {
    return (
        <div className="container py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif text-altora-navy mb-6">
                    About Altora Global Estates
                </h1>
                <p className="text-xl text-altora-gray-dark max-w-3xl mx-auto">
                    Redefining luxury real estate with unparalleled service and expertise in global property markets.
                </p>
            </div>

            {/* Company Story */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h2 className="text-3xl font-serif text-altora-navy mb-6">Our Story</h2>
                    <div className="space-y-4 text-altora-gray-dark">
                        <p>
                            Founded in 2010, Altora Global Estates has established itself as a premier luxury real estate firm,
                            serving discerning clients worldwide with an unwavering commitment to excellence.
                        </p>
                        <p>
                            Our unique approach combines deep local market knowledge with global reach, enabling us to offer
                            our clients exclusive access to the world's most prestigious properties and comprehensive
                            migration services.
                        </p>
                        <p>
                            We pride ourselves on our ability to understand and exceed our clients' expectations,
                            delivering personalized solutions that transform their property aspirations into reality.
                        </p>
                    </div>
                </div>
                <div className="relative h-[400px]">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop"
                        alt="Luxury Building"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-serif text-altora-navy text-center mb-12">
                    Meet Our Leadership Team
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-64">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif text-altora-navy mb-1">{member.name}</h3>
                                <p className="text-altora-gold mb-3">{member.role}</p>
                                <p className="text-altora-gray-dark">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6">
                    <h3 className="text-xl font-serif text-altora-navy mb-4">Excellence</h3>
                    <p className="text-altora-gray-dark">
                        We maintain the highest standards in every aspect of our service, from property selection to client care.
                    </p>
                </div>
                <div className="text-center p-6">
                    <h3 className="text-xl font-serif text-altora-navy mb-4">Integrity</h3>
                    <p className="text-altora-gray-dark">
                        Trust and transparency form the foundation of our relationships with clients and partners.
                    </p>
                </div>
                <div className="text-center p-6">
                    <h3 className="text-xl font-serif text-altora-navy mb-4">Innovation</h3>
                    <p className="text-altora-gray-dark">
                        We continuously evolve our services to meet the changing needs of our global clientele.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage; 