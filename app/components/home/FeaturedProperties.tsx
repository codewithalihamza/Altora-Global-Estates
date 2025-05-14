
interface Property {
    title: string;
    location: string;
    price: string;
    image: string;
    beds: number;
    baths: number;
    sqft: string;
}

const PropertyCard = ({ property }: { property: Property }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-64">
            <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
            />
        </div>
        <div className="p-6">
            <h3 className="font-serif text-xl text-altora-navy mb-2">{property.title}</h3>
            <p className="text-altora-gray-dark mb-4">{property.location}</p>
            <div className="flex justify-between items-center mb-4">
                <span className="text-altora-gold text-xl font-semibold">{property.price}</span>
                <div className="text-altora-gray-dark text-sm">
                    {property.beds} beds • {property.baths} baths • {property.sqft}
                </div>
            </div>
            <button className="w-full bg-altora-navy hover:bg-altora-navy/90 text-white py-2 rounded transition-colors duration-300">
                View Details
            </button>
        </div>
    </div>
);

const FeaturedProperties = () => {
    const properties: Property[] = [
        {
            title: "Oceanfront Villa",
            location: "Miami Beach, FL",
            price: "$5,200,000",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop",
            beds: 5,
            baths: 6,
            sqft: "6,500 sq ft"
        },
        {
            title: "Modern Penthouse",
            location: "New York, NY",
            price: "$8,900,000",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop",
            beds: 4,
            baths: 4.5,
            sqft: "4,200 sq ft"
        },
        {
            title: "Mountain Estate",
            location: "Aspen, CO",
            price: "$12,500,000",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop",
            beds: 7,
            baths: 8,
            sqft: "8,900 sq ft"
        }
    ];

    return (
        <div className="bg-altora-gray py-16">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-serif text-center text-altora-navy mb-4">
                    Featured Properties
                </h2>
                <p className="text-center text-altora-gray-dark mb-12 max-w-2xl mx-auto">
                    Discover our handpicked selection of exceptional properties, each offering unparalleled luxury and sophistication.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <PropertyCard key={index} property={property} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperties; 