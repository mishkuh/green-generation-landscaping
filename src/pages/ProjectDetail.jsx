
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaveDivider from '@/components/WaveDivider';

const ProjectDetail = () => {
  const { id } = useParams();

  const projectData = {
    'modern-zen-garden': {
      title: 'Modern Zen Garden',
      category: 'Residential',
      location: 'Seattle, WA',
      date: 'August 2024',
      client: 'Private Residence',
      description: 'A serene retreat that combines modern minimalism with traditional Japanese garden elements. This project transformed a typical suburban backyard into a peaceful sanctuary.',
      challenge: 'The client wanted a low-maintenance garden that provided a sense of tranquility while complementing their modern home architecture.',
      solution: 'We created a minimalist design featuring natural stone pathways, a custom water feature, carefully placed boulders, and drought-tolerant ornamental grasses. The result is a harmonious space that requires minimal upkeep.',
      features: [
        'Custom water feature with recycled stone',
        'Drought-tolerant plant selection',
        'Natural stone pathways and seating areas',
        'Strategic lighting for evening ambiance',
        'Low-maintenance ground cover'
      ],
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ]
    },
    'luxury-backyard-oasis': {
      title: 'Luxury Backyard Oasis',
      category: 'Residential',
      location: 'Seattle, WA',
      date: 'June 2024',
      client: 'Private Residence',
      description: 'A complete outdoor living transformation featuring a resort-style pool, outdoor kitchen, fire pit lounge, and lush tropical landscaping.',
      challenge: 'Transform a sloped backyard into a multi-functional outdoor entertainment space while maintaining privacy from neighbors.',
      solution: 'We designed terraced levels connected by natural stone steps, installed a custom pool with spa, built a covered outdoor kitchen area, and created privacy screening with strategic plant placement.',
      features: [
        'Custom infinity-edge pool and spa',
        'Covered outdoor kitchen with bar seating',
        'Fire pit conversation area',
        'Multi-level terracing with retaining walls',
        'Privacy landscaping with mature trees',
        'Automated irrigation and lighting systems'
      ],
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ]
    },
    'corporate-campus': {
      title: 'Corporate Campus Landscaping',
      category: 'Commercial',
      location: 'Seattle, WA',
      date: 'March 2024',
      client: 'Tech Company',
      description: 'Professional landscaping design for a 5-acre corporate campus, creating an attractive and sustainable environment for employees and visitors.',
      challenge: 'Design a welcoming landscape that reflects the company\'s innovative culture while meeting strict sustainability requirements.',
      solution: 'We implemented a comprehensive landscape plan featuring native Western Washington plants, rain gardens for stormwater management, outdoor meeting spaces, and walking paths.',
      features: [
        'Native plant palette for water conservation',
        'Rain gardens and bioswales',
        'Outdoor collaboration spaces',
        'Walking paths and bike racks',
        'Seasonal color displays',
        'Smart irrigation system'
      ],
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ]
    },
    'cottage-garden': {
      title: 'English Cottage Garden',
      category: 'Residential',
      location: 'Seattle, WA',
      date: 'May 2024',
      client: 'Private Residence',
      description: 'A romantic cottage garden overflowing with perennial flowers, climbing roses, and meandering pathways that create an enchanting outdoor space.',
      challenge: 'Create an abundant, colorful garden that provides year-round interest while working with existing mature trees.',
      solution: 'We designed layered planting beds with a mix of sun and shade-loving perennials, installed charming stone pathways, added arbors for climbing plants, and incorporated a small vegetable garden.',
      features: [
        'Layered perennial borders',
        'Climbing roses on custom arbors',
        'Natural stone pathways',
        'Small vegetable garden section',
        'Vintage-style garden accessories',
        'Drip irrigation for water efficiency'
      ],
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ]
    },
    'drought-tolerant': {
      title: 'Drought-Tolerant Landscape',
      category: 'Residential',
      location: 'Seattle, WA',
      date: 'April 2024',
      client: 'Private Residence',
      description: 'A beautiful, sustainable landscape featuring Western Washington native plants and water-wise design principles that reduces water usage by 75%.',
      challenge: 'Replace a traditional lawn with an attractive, sustainable landscape that thrives in Western Washington\'s dry climate.',
      solution: 'We removed the lawn and installed decomposed granite pathways, planted drought-tolerant natives and succulents, added decorative rock mulch, and designed a rainwater capture system.',
      features: [
        'Western Washington native plant palette',
        'Succulent and cacti gardens',
        'Decomposed granite pathways',
        'Decorative rock mulch',
        'Rainwater harvesting system',
        '75% reduction in water usage'
      ],
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ]
    },
    'restaurant-patio': {
      title: 'Restaurant Outdoor Dining',
      category: 'Commercial',
      location: 'Seattle, WA',
      date: 'February 2024',
      client: 'Restaurant',
      description: 'An inviting outdoor dining space surrounded by lush landscaping, creating an intimate atmosphere for restaurant patrons.',
      challenge: 'Design an attractive outdoor dining area that provides ambiance while being durable enough for high-traffic commercial use.',
      solution: 'We created raised planter beds with evergreen shrubs and seasonal flowers, installed ambient string lighting, added privacy screening, and selected low-maintenance plants that withstand foot traffic.',
      features: [
        'Raised planter beds with seasonal color',
        'Privacy screening with evergreen hedges',
        'Ambient string and landscape lighting',
        'Durable, low-maintenance plant selection',
        'Container gardens for flexibility',
        'Automated irrigation system'
      ],
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ]
    }
  };

  const project = projectData[id] || projectData['modern-zen-garden'];

  return (
    <>
      <Helmet>
        <title>{project.title} - Project Portfolio | Green Generation Landscaping Landscaping</title>
        <meta
          name="description"
          content={`${project.title} - ${project.description.substring(0, 150)}...`}
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <div className="absolute inset-0">
            <img
              alt={project.title}
              className="w-full h-full object-cover"
             src={project.images[0]} />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
          </div>
          <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
            <div>
              <Link to="/portfolio" className="inline-flex items-center text-white mb-4 hover:text-green-300 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Portfolio
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white font-novecento-sans"
              >
                {project.title}
              </motion.h1>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <WaveDivider color="#fafaf9" />
          </div>
        </section>

        {/* Project Info */}
        <section className="py-8 bg-stone-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-6 justify-center">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-green-600" />
                <span className="text-stone-700">{project.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="text-stone-700">{project.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="text-stone-700">{project.date}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-stone-900 mb-4 font-novecento-sans">Project Overview</h2>
                  <p className="text-lg text-stone-700 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3 font-novecento-sans">The Challenge</h3>
                  <p className="text-stone-700 leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-3 font-novecento-sans">Our Solution</h3>
                  <p className="text-stone-700 leading-relaxed">{project.solution}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 font-novecento-sans">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                        <img
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                         src={image} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                  <h3 className="text-xl font-bold text-stone-900 mb-4 font-novecento-sans">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                        <span className="text-stone-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-stone-200">
                    <p className="text-sm text-stone-600 mb-4">
                      Interested in a similar project?
                    </p>
                    <Link to="/contact">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;
