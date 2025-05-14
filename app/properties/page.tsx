'use client';

import { PropertyCard } from '@/app/components/home/FeaturedProperties';
import { useState } from 'react';

interface FilterOptions {
    type: string;
    priceRange: string;
    location: string;
    availability: string;
}

const PropertiesPage = () => {
    const [filters, setFilters] = useState<FilterOptions>({
        type: 'all',
        priceRange: 'all',
        location: 'all',
        availability: 'all',
    });

    // Mock data - replace with actual data source later
    const properties = [
        {
            title: "Oceanfront Villa",
            location: "Miami Beach, FL",
            price: "$5,200,000",
            image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&auto=format&fit=crop",
            beds: 5,
            baths: 6,
            sqft: "6,500 sq ft",
            type: "Residential",
            availability: "Available"
        },
        {
            title: "Modern Penthouse",
            location: "New York, NY",
            price: "$8,900,000",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop",
            beds: 4,
            baths: 4.5,
            sqft: "4,200 sq ft",
            type: "Residential",
            availability: "Sold"
        },
        // Add more properties here
    ];

    const FilterSelect = ({ label, name, options }: { label: string; name: keyof FilterOptions; options: string[] }) => (
        <div className="w-full md:w-auto">
            <label className="block text-sm font-medium text-altora-navy mb-2">{label}</label>
            <select
                className="w-full p-2 border border-gray-300 rounded focus:border-altora-gold focus:outline-none"
                value={filters[name]}
                onChange={(e) => setFilters({ ...filters, [name]: e.target.value })}
            >
                <option value="all">All</option>
                {options.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );

    return (
        <div className="container py-12">
            <h1 className="text-4xl font-serif text-altora-navy mb-8">Our Properties</h1>

            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <FilterSelect
                        label="Property Type"
                        name="type"
                        options={["Residential", "Commercial"]}
                    />
                    <FilterSelect
                        label="Price Range"
                        name="priceRange"
                        options={["$0-1M", "$1M-5M", "$5M-10M", "$10M+"]}
                    />
                    <FilterSelect
                        label="Location"
                        name="location"
                        options={["Miami", "New York", "Los Angeles", "Chicago"]}
                    />
                    <FilterSelect
                        label="Availability"
                        name="availability"
                        options={["Available", "Sold"]}
                    />
                </div>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map((property, index) => (
                    <PropertyCard key={index} property={property} />
                ))}
            </div>
        </div>
    );
};

export default PropertiesPage; 