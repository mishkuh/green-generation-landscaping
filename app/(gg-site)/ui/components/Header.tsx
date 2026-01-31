"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Flex } from '@radix-ui/themes';
import Image from 'next/image';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigation = [
        { href: '/', name: 'Home' },
        { href: '/portfolio', name: 'Portfolio' },
        { href: '/services', name: 'Services' },
        { href: '/about', name: 'About' },
        { href: '/contact', name: 'Contact' }
    ];

    return (
        <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">
                    {/* Logo */}
                    <div>
                        <Flex align="center" asChild direction="column" gap="2">
                            <Link href="/">
                                <Image src="/logo.png" alt="Green Generation Landscaping Logo" width={54} height={45} />
                                <Image src="/logo_title.png" alt="Green Generation Landscaping Logo Title" width={225} height={41} />
                            </Link>
                        </Flex>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-1 lg:gap-3">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-gray-600 hover:text-[var(--lime-8)] hover:bg-[var(--lime-2)] rounded-lg transition-all duration-200 font-medium text-sm"
                            >
                                {item.name}
                            </a>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-2 px-6 py-2.5 bg-gradient-to-b from-[var(--lime-8)] to-[var(--lime-10)] text-white rounded-lg hover:shadow-lg hover:shadow-[var(--lime-2)] transform hover:-translate-y-0.5 transition-all duration-200 font-medium text-sm"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 hover:text-[var(--lime-8)] transition-colors"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-2 text-gray-700 hover:bg-[var(--lime-9)] hover:text-[var(--lime-8)] transition-colors font-medium"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href="#get-started"
                                className="block mx-4 mt-4 px-6 py-2 bg-gradient-to-b from-[var(--lime-8)] to-[var(--lime-10)] text-white rounded-full text-center font-medium"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}