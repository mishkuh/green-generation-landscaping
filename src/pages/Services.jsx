
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sprout, Scissors, Mountain, Droplets, TreePine, Flower } from 'lucide-react';
import WaveDivider from '@/components/WaveDivider';
import AnimatedWaveBackground from '@/components/AnimatedWaveBackground';

const Services = () => {
  const services = [
    {
      id: 'landscape-maintenance',
      icon: Sprout,
      title: 'Landscape Maintenance',
      description: 'Comprehensive landscape maintenance services to keep your landscape healthy, green, and pristine throughout the year.',
      image: 'https://media.istockphoto.com/id/1312760160/photo/big-garden-grass-field-mowing-by-caucasian-gardener.jpg?s=1024x1024&w=is&k=20&c=ln0D2ZTNy8nc-t5zeXecdXi_VlojH5HC3PrNmG9fqX8=',
      features: [
        'Mowing',
        'Edging and trimming',
        'Fertilization programs',
        'Weed control',
        'Pruning and shaping',
        'Thatching and aerating'
      ]
    },
    {
      id: 'hardscaping',
      icon: Mountain,
      title: 'Hardscaping',
      description: 'Expert installation of patios, walkways, and retaining walls that enhance your landscape.',
      image: 'https://media.istockphoto.com/id/1428026698/photo/hardscape-details-of-a-tumbled-paver-patio-flagstone-stepping-stones-and-horizontal-cedar.jpg?s=1024x1024&w=is&k=20&c=dXy0TKCsX48tPm1s9K9ZijZNfCl1EMbXre_0NS3RGrg=',
      features: [
        'Patio pavers',
        'Retaining walls'
      ]
    },
    {
      id: 'irrigation',
      icon: Droplets,
      title: 'Irrigation Systems',
      description: 'Irrigation solutions that ensure efficient watering while conserving water and reducing costs.',
      image: 'https://media.istockphoto.com/id/1236078720/photo/landscape-automatic-garden-watering-system-with-different-sprinklers-installed-under-turf.jpg?s=1024x1024&w=is&k=20&c=pTNiWp12UJqP3piJAyaoLwpBEMYYL8BRRBWyQ41lTZQ=',
      features: [
        'Irrigation installation',
        'System repairs and upgrades',
        'Water conservation solutions',
        'Seasonal maintenance'
      ]
    },
    {
      id: 'tree-care',
      icon: TreePine,
      title: 'Tree & Shrub Care',
      description: 'Professional tree and shrub care including planting, pruning, trimming, fertilization, and health assessments.',
      image: 'https://media.istockphoto.com/id/2165549854/photo/landscaping-professional-pruning-evergreen-tree.jpg?s=1024x1024&w=is&k=20&c=RfJ8VpucKbTF0GxjP2X3FEhOHhtwWOybSIIucsOoPig=',
      features: [
        'Professional pruning',
        'Tree health assessments',
        'Fertilization programs',
        'Pest and disease management'
      ]
    },
    {
      id: 'seasonal-color',
      icon: Flower,
      title: 'Seasonal Color',
      description: 'Keep your landscape vibrant year-round with our seasonal flower installation services.',
      image: 'https://media.istockphoto.com/id/1129456758/photo/flowerbed-with-colorful-hyacinths-traditional-spring-flower-easter-flower-easter-background.jpg?s=1024x1024&w=is&k=20&c=Q6oR0pJ9B-10oKUb2NqpWEMgqQHLyX6fTOGYyPdX0Yg=',
      features: [
        'Seasonal flower installation',
        'Container garden design',
        'Annual and perennial selection'
      ]
    },
    {
      id: 'property-cleaning',
      icon: Scissors,
      title: 'Property Cleaning',
      description: 'Keep your property clean and tidy with our property cleaning services.',
      image: 'https://media.istockphoto.com/id/1372306674/photo/man-cleaning-the-terrace-tiles-of-the-apartment.jpg?s=1024x1024&w=is&k=20&c=bREpxu5cACHb9pVLRoFFWkWh7XXtpz1FKt3v2X04uoU=',
      features: [
        'Gutter cleaning',
        'Deck cleaning',
        'Pressure washing'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Landscaping Services - Green Generation Landscaping | Professional Landscape Care</title>
        <meta
          name="description"
          content="Professional landscaping services including maintenance, hardscaping, irrigation, tree care, and seasonal color. Expert landscape solutions in the Greater Seattle Area."
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-800 to-green-600 overflow-hidden">
          <AnimatedWaveBackground height="100%" opacity={0.15} color="#ffffff" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-novecento-sans">Our Services</h1>
              <p className="text-xl text-green-50">
                Comprehensive landscaping solutions to create and maintain beautiful outdoor spaces
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <WaveDivider color="#fafaf9" animate={true} />
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-stone-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                  >
                    <Link to={`/services/${service.id}`} className="block h-full">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          src={service.image} />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-green-600 p-3 rounded-full">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-stone-900 mb-3 font-novecento-sans">{service.title}</h3>
                        <p className="text-stone-600 mb-4">{service.description}</p>
                        <div className="space-y-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                              <span className="text-sm text-stone-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <span className="text-green-600 font-semibold group-hover:underline">
                          Learn More →
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <WaveDivider flip color="#15803d" animate={true} intensity="low" />
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-br from-green-700 to-green-500 overflow-hidden">
          <AnimatedWaveBackground height="100%" opacity={0.1} color="#ffffff" />

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-novecento-sans">
                Need Multiple Services?
              </h2>
              <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                We offer customized packages that combine services to meet your specific needs and budget
              </p>
              <Link to="/contact">
                <button className="bg-white text-green-800 hover:bg-green-50 font-semibold px-8 py-3 rounded-lg transition-colors">
                  Request a Quote
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
