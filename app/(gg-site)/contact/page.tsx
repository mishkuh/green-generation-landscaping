"use client"

import React, { useState } from 'react';
import * as motion from 'motion/react-client'
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@radix-ui/themes';
import { sendEmail } from '@/app/(gg-site)/actions/sendEmail';

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        location: '',
        details: '',
        source: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { email, phone, location, details, source } = formData;

        if (!email || !phone || !location || !details) {
            return;
        }

        try {
            const result = await sendEmail(formData);

            if (!result.success) {
                return;
            }

            setFormData({
                email: '',
                phone: '',
                location: '',
                details: '',
                source: '',
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-green-800 to-green-600 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-white max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 font-novecento-sans">Get In Touch</h1>
                        <p className="text-xl text-green-50">
                            Ready to transform your outdoor space? Let's discuss your project and provide a free consultation
                        </p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 right-0">

                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-stone-50 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-stone-900 mb-6 font-novecento-sans">Contact Information</h2>
                                <p className="text-stone-600 mb-8">
                                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900 mb-1 font-novecento-sans">Phone</h3>
                                        <p className="text-stone-600">(253) 304-7250</p>
                                        <p className="text-sm text-stone-500 mt-1">Mon-Fri 8am-6pm, Sat 9am-4pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900 mb-1 font-novecento-sans">Email</h3>
                                        <p className="text-stone-600">ggenerationlandscaping@gmail.com</p>
                                        <p className="text-sm text-stone-500 mt-1">We'll respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="bg-green-100 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900 mb-1 font-novecento-sans">Service Area</h3>
                                        <p className="text-stone-600">Greater Seattle Area</p>
                                        <p className="text-stone-600">Washington State</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-700 text-white p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-3 font-novecento-sans">Free Consultation</h3>
                                <p className="text-green-50 mb-4">
                                    Schedule a free on-site consultation to discuss your project and receive a detailed estimate.
                                </p>
                                <p className="text-green-100 font-semibold">No obligation • Expert advice • Custom solutions</p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl p-8 shadow-xl"
                        >
                            <h2 className="text-3xl font-bold text-stone-900 mb-6 font-novecento-sans">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-stone-900"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-stone-900"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="location" className="block text-sm font-semibold text-stone-700 mb-2">
                                        Property Location <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-stone-900"
                                        placeholder="City, State or Full Address"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="details" className="block text-sm font-semibold text-stone-700 mb-2">
                                        Project Details <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        value={formData.details}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none text-stone-900"
                                        placeholder="Tell us about your project - what services are you interested in, timeline, budget range, etc."
                                    />
                                </div>

                                <div>
                                    <label htmlFor="source" className="block text-sm font-semibold text-stone-700 mb-2">
                                        How did you hear about us? <span className="text-stone-400">(Optional)</span>
                                    </label>
                                    <select
                                        id="source"
                                        name="source"
                                        value={formData.source}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all text-stone-900"
                                    >
                                        <option value="">Select an option</option>
                                        <option value="google">Google Search</option>
                                        <option value="social">Social Media</option>
                                        <option value="referral">Friend/Family Referral</option>
                                        <option value="nextdoor">Nextdoor</option>
                                        <option value="advertisement">Advertisement</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="w-full">
                                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-lg h-auto">
                                        Send Message
                                        <Send className="ml-2 w-5 h-5" />
                                    </Button>
                                </div>

                                <p className="text-sm text-stone-500 text-center">
                                    <span className="text-red-500">*</span> Required fields
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">

                </div>
            </section>

            {/* Map Section */}
            <section className="relative h-96 bg-stone-200">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                        <p className="text-xl font-semibold text-stone-700 font-novecento-sans">Service Area</p>
                        <p className="text-stone-600">Greater Seattle Area</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
