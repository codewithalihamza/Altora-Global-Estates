import { ArrowRight, Briefcase, FileCheck, Globe, Users } from 'lucide-react';

const services = [
    {
        icon: FileCheck,
        title: "Visa & Immigration Support",
        description: "Expert guidance through visa applications and immigration processes, ensuring compliance with local regulations."
    },
    {
        icon: Users,
        title: "Family Integration",
        description: "Comprehensive support for family relocation, including education consultation and community integration."
    },
    {
        icon: Globe,
        title: "Global Mobility",
        description: "Strategic advice on international relocation, including tax implications and wealth management."
    },
    {
        icon: Briefcase,
        title: "Business Migration",
        description: "Specialized assistance for business owners and investors seeking to establish or expand operations."
    }
];

const steps = [
    {
        number: "01",
        title: "Initial Consultation",
        description: "We assess your needs and eligibility for various migration pathways."
    },
    {
        number: "02",
        title: "Strategy Development",
        description: "Creating a tailored migration plan aligned with your goals."
    },
    {
        number: "03",
        title: "Documentation",
        description: "Assistance with preparing and submitting all required documentation."
    },
    {
        number: "04",
        title: "Application Processing",
        description: "Managing your application process and liaising with authorities."
    },
    {
        number: "05",
        title: "Settlement Support",
        description: "Comprehensive assistance with your relocation and settlement."
    }
];

const MigrationPage = () => {
    return (
        <div className="container py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif text-altora-navy mb-6">
                    Migration Services
                </h1>
                <p className="text-xl text-altora-gray-dark max-w-3xl mx-auto">
                    Expert guidance and support for your international relocation journey, from visa applications to settlement assistance.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
                {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md flex items-start space-x-6">
                            <div className="bg-altora-gold/10 p-4 rounded-lg">
                                <Icon className="w-8 h-8 text-altora-gold" />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-altora-navy mb-3">{service.title}</h3>
                                <p className="text-altora-gray-dark">{service.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Process Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-serif text-altora-navy text-center mb-12">
                    Our Migration Process
                </h2>
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-start space-x-6">
                                <div className="bg-altora-navy text-white text-2xl font-serif w-16 h-16 flex items-center justify-center rounded-lg flex-shrink-0">
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-xl font-serif text-altora-navy mb-2">{step.title}</h3>
                                    <p className="text-altora-gray-dark">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Sections */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-altora-navy text-white p-8 rounded-lg">
                    <h3 className="text-2xl font-serif mb-4">Schedule a Consultation</h3>
                    <p className="mb-6">
                        Speak with our migration experts to discuss your relocation plans and explore available options.
                    </p>
                    <button className="flex items-center space-x-2 bg-altora-gold hover:bg-altora-gold-light text-white px-6 py-3 rounded transition-colors duration-300">
                        <span>Book Now</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="bg-altora-gold/10 p-8 rounded-lg">
                    <h3 className="text-2xl font-serif text-altora-navy mb-4">Download Migration Guide</h3>
                    <p className="text-altora-gray-dark mb-6">
                        Get our comprehensive guide on migration pathways and requirements for different destinations.
                    </p>
                    <button className="flex items-center space-x-2 bg-altora-navy hover:bg-altora-navy/90 text-white px-6 py-3 rounded transition-colors duration-300">
                        <span>Download Guide</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MigrationPage; 