'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

interface ContactForm {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ContactPage = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const offices = [
        {
            city: "New York",
            address: "123 Luxury Avenue, New York, NY 10001",
            phone: "+1 (234) 567-890",
            email: "nyc@altoraglobal.com"
        },
        {
            city: "London",
            address: "45 Mayfair Street, London, W1J 7TH",
            phone: "+44 20 7123 4567",
            email: "london@altoraglobal.com"
        },
        {
            city: "Dubai",
            address: "Business Bay Tower, Sheikh Zayed Road, Dubai",
            phone: "+971 4 123 4567",
            email: "dubai@altoraglobal.com"
        }
    ];

    return (
        <div className="container py-12">
            <h1 className="text-4xl font-serif text-altora-navy text-center mb-12">
                Contact Us
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-serif text-altora-navy mb-6">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-altora-gray-dark mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:border-altora-gold focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-altora-gray-dark mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:border-altora-gold focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-altora-gray-dark mb-2">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:border-altora-gold focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-altora-gray-dark mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded focus:border-altora-gold focus:outline-none"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-altora-navy hover:bg-altora-navy/90 text-white py-3 rounded transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Office Locations */}
                <div>
                    <h2 className="text-2xl font-serif text-altora-navy mb-6">Our Offices</h2>
                    <div className="space-y-8">
                        {offices.map((office, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-serif text-altora-navy mb-4">{office.city}</h3>
                                <div className="space-y-3 text-altora-gray-dark">
                                    <div className="flex items-start space-x-3">
                                        <MapPin className="w-5 h-5 text-altora-gold mt-1" />
                                        <span>{office.address}</span>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-5 h-5 text-altora-gold" />
                                        <a href={`tel:${office.phone}`} className="hover:text-altora-gold">
                                            {office.phone}
                                        </a>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-altora-gold" />
                                        <a href={`mailto:${office.email}`} className="hover:text-altora-gold">
                                            {office.email}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage; 