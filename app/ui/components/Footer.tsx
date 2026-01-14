import React from 'react';
import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import AnimatedWaveFooter from './AnimatedWaveFooter';

const Footer = () => {
    return (
        <footer className="bg-stone-900 text-stone-300 relative overflow-hidden">
            <AnimatedWaveFooter color="#22c55e" />

            <div className="container mx-auto px-4 pt-24 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-green-600 p-2 rounded-full">
                                <Leaf className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white font-novecento-sans">Green Generation</span>
                        </div>
                        <p className="text-sm text-stone-400 mb-4">
                            Transforming outdoor spaces into beautiful, sustainable landscapes that enhance your property and lifestyle.
                        </p>
                    </div>

                    <div>
                        <span className="text-white font-semibold text-lg mb-4 block font-novecento-sans">Quick Links</span>
                        <div className="flex flex-col gap-2">
                            <Link href="/" className="text-stone-400 hover:text-green-500 transition-colors">
                                Home
                            </Link>
                            <Link href="/portfolio" className="text-stone-400 hover:text-green-500 transition-colors">
                                Portfolio
                            </Link>
                            <Link href="/services" className="text-stone-400 hover:text-green-500 transition-colors">
                                Services
                            </Link>
                            <Link href="/about" className="text-stone-400 hover:text-green-500 transition-colors">
                                About
                            </Link>
                            <Link href="/contact" className="text-stone-400 hover:text-green-500 transition-colors">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div>
                        <span className="text-white font-semibold text-lg mb-4 block font-novecento-sans">Services</span>
                        <div className="flex flex-col gap-2">
                            <Link href="/services/landscape-maintenance" className="text-stone-400 hover:text-green-500 transition-colors">
                                Landscape Maintenance
                            </Link>
                            <Link href="/services/hardscaping" className="text-stone-400 hover:text-green-500 transition-colors">
                                Hardscaping
                            </Link>
                            <Link href="/services/irrigation" className="text-stone-400 hover:text-green-500 transition-colors">
                                Irrigation Systems
                            </Link>
                            <Link href="/services" className="text-stone-400 hover:text-green-500 transition-colors">
                                All Services
                            </Link>
                        </div>
                    </div>

                    <div>
                        <span className="text-white font-semibold text-lg mb-4 block font-novecento-sans">Contact Info</span>
                        <div className="flex flex-col gap-3">
                            <div className="flex items-start gap-2">
                                <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-sm text-stone-400">Greater Seattle Area, WA</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-sm text-stone-400">(253) 304-7250</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="w-5 h-5 text-green-500 shrink-0" />
                                <span className="text-sm text-stone-400">ggenerationlandscaping@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-stone-800 pt-6 mt-6 text-center text-sm text-stone-500">
                    <p>&copy; 2025 Green Generation Landscaping. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
