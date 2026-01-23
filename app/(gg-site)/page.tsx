import Link from 'next/link';
import * as motion from 'motion/react-client'
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';

const Home = async () => {
    const featuredServices = [
        {
            title: 'Landscape Maintenance',
            description: 'Keep your landscaping healthy and pristine year-round',
            image: '/overhead.jpg',
            link: '/services/landscape-maintenance'
        },
        {
            title: 'Hardscaping',
            description: 'Patios, walkways, and outdoor living spaces',
            image: '/hardscaping.jpg',
            link: '/services/hardscaping'
        },
        {
            title: 'Irrigation Systems',
            description: 'Efficient watering solutions for a thriving landscape',
            image: '/irrigation.jpg',
            link: '/services/irrigation'
        },
        {
            title: 'View All Services',
            description: 'View all our services',
            image: '/trimming_bush.jpg',
            link: '/services'
        }
    ];

    const benefitsList = [
        'Licensed & Insured Professionals',
        'Eco-Friendly Practices',
        'Free Consultations',
        'Satisfaction Guaranteed',
        '20+ Years Experience',
        'Competitive Pricing'
    ];

    return (
        <div className="pt-20">
            {/* Hero Section with Animated Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 to-green-700">

                <div className="absolute inset-0 opacity-20 z-10">
                    <Image
                        alt="Lush green landscape with beautiful garden"
                        className="w-full h-full object-cover"
                        src="/hero-bg.jpg"
                        fill
                    />
                </div>

                <div className="container mx-auto px-4 py-20 relative z-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-novecento-sans"
                        >
                            Transform Your Outdoor Space Into Paradise
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl md:text-3xl text-green-50 mb-10 font-light"
                        >
                            Professional landscaping services that bring your vision to life
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Link href="/contact">
                                <Button>
                                    Get Free Consultation
                                    <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </Link>
                            <Link href="/portfolio">
                                <Button>
                                    View Our Work
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative py-20 bg-stone-50 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-novecento-sans">Featured Services</h2>
                        <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                            Comprehensive landscaping solutions for residential and commercial properties
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredServices.map((service, index) => (
                            <Link href={service.link} key={index} className="block h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group`}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            src={service.image}
                                            fill
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-stone-900 mb-2 font-novecento-sans">{service.title}</h3>
                                        <p className="text-stone-600 mb-4">{service.description}</p>
                                        <span
                                            className="text-green-600 font-semibold inline-flex items-center hover:gap-2 transition-all"
                                        >
                                            Learn More
                                            <ArrowRight className="ml-1 w-4 h-4" />
                                        </span>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative py-20 bg-green-700 overflow-hidden">

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-novecento-sans">Why Choose Green Generation Landscaping?</h2>
                        <p className="text-xl text-green-50 max-w-2xl mx-auto">
                            We're committed to excellence in every project we undertake
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {benefitsList.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                            >
                                <CheckCircle className="w-6 h-6 text-green-300 shrink-0" />
                                <span className="text-white font-medium">{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-stone-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-novecento-sans">What Our Clients Say</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                name: 'Kirk Golub',
                                text: 'Green Generation Landscaping continues to be my go-to landscaping company. The attention to detail is incredible!',
                                rating: 5
                            },
                            {
                                name: 'Michael Wiens',
                                text: 'Professional and reliable. They exceeded our expectations on our residential landscaping.',
                                rating: 5
                            },
                            {
                                name: 'John Doe',
                                text: 'Best landscaping company we\'ve worked with. They maintain our property beautifully and are always responsive.',
                                rating: 5
                            }
                        ].map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-stone-600 mb-4 italic">"{testimonial.text}"</p>
                                <p className="text-stone-900 font-semibold">{testimonial.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20 bg-gradient-to-br from-green-800 to-green-600 overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-novecento-sans">
                            Ready to Transform Your Landscape?
                        </h2>
                        <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                            Get started with a free consultation and let us bring your outdoor vision to life
                        </p>
                        <Link href="/contact" className="cursor-pointer">
                            <Button>
                                Schedule Free Consultation
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div >
    );
};

export default Home;
