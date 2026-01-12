
import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WaveDivider from '@/components/WaveDivider';

const ServiceDetail = () => {
  const { id } = useParams();

  const serviceData = {
    'landscape-maintainence': {
      title: 'Landscape Maintainance',
      subtitle: 'Custom Landscape Solutions for Your Dream Outdoor Space',
      description: 'Our landscape design service transforms your outdoor space into a beautiful, functional extension of your home. We work closely with you to understand your vision, lifestyle, and property characteristics.',
      process: [
        { step: 'Initial Consultation', description: 'We meet with you to discuss your vision, needs, and budget' },
        { step: 'Site Analysis', description: 'Comprehensive assessment of your property including soil, drainage, and sun exposure' },
        { step: 'Design Development', description: 'Creation of custom design plans with 3D renderings' },
        { step: 'Plant & Material Selection', description: 'Careful selection of plants and materials suited to your climate and style' },
        { step: 'Implementation', description: 'Professional installation by our experienced team' }
      ],
      benefits: [
        'Increased property value',
        'Enhanced curb appeal',
        'Improved outdoor functionality',
        'Sustainable design practices',
        'Professional 3D visualizations',
        'Expert plant selection'
      ],
      pricing: 'Design consultations start at $500. Full design packages vary based on property size and scope.',
      timeline: '2-4 weeks for design development, 1-6 weeks for installation',
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ],
      image: "https://media.istockphoto.com/id/1312760160/photo/big-garden-grass-field-mowing-by-caucasian-gardener.jpg?s=1024x1024&w=is&k=20&c=ln0D2ZTNy8nc-t5zeXecdXi_VlojH5HC3PrNmG9fqX8="
    },
    'hardscaping': {
      title: 'Hardscaping',
      subtitle: 'Build Beautiful, Functional Outdoor Living Spaces',
      description: 'Our hardscaping service creates stunning outdoor structures that enhance your landscape\'s beauty and functionality. From patios to retaining walls, we build lasting features using quality materials.',
      process: [
        { step: 'Design Consultation', description: 'Discussion of your hardscaping goals and preferences' },
        { step: 'Site Preparation', description: 'Proper grading and preparation of installation area' },
        { step: 'Material Selection', description: 'Choose from a variety of high-quality stones, pavers, and materials' },
        { step: 'Professional Installation', description: 'Expert construction with attention to detail' },
        { step: 'Finishing Touches', description: 'Sealing, lighting, and integration with existing landscape' }
      ],
      benefits: [
        'Increased property value',
        'Extended outdoor living space',
        'Low maintenance features',
        'Erosion control',
        'Enhanced functionality',
        'Custom designs'
      ],
      pricing: 'Varies by project scope. Free estimates provided for all hardscaping projects.',
      timeline: '1-4 weeks depending on project size and complexity',
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ],
      image: "https://media.istockphoto.com/id/1428026698/photo/hardscape-details-of-a-tumbled-paver-patio-flagstone-stepping-stones-and-horizontal-cedar.jpg?s=1024x1024&w=is&k=20&c=dXy0TKCsX48tPm1s9K9ZijZNfCl1EMbXre_0NS3RGrg="
    },
    'lawn-maintenance': {
      title: 'Lawn Maintenance',
      subtitle: 'Keep Your Lawn Healthy, Green, and Beautiful Year-Round',
      description: 'Our comprehensive lawn maintenance service ensures your lawn looks its best throughout every season. We provide reliable, professional care that keeps your grass healthy and vibrant.',
      process: [
        { step: 'Assessment', description: 'Evaluation of your lawn\'s current condition and needs' },
        { step: 'Custom Care Plan', description: 'Development of a maintenance schedule tailored to your lawn' },
        { step: 'Regular Service', description: 'Weekly or bi-weekly visits for mowing, edging, and trimming' },
        { step: 'Fertilization', description: 'Seasonal fertilization to promote healthy growth' },
        { step: 'Problem Management', description: 'Weed control and disease prevention' }
      ],
      benefits: [
        'Consistent, professional results',
        'Time savings for you',
        'Healthier, more resilient turf',
        'Weed and pest control',
        'Seasonal fertilization',
        'Expert lawn care knowledge'
      ],
      pricing: 'Starting at $75 per visit. Monthly packages available with discounted rates.',
      timeline: 'Weekly or bi-weekly service visits scheduled at your convenience',
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ],
    },
    'irrigation': {
      title: 'Irrigation Systems',
      subtitle: 'Smart Watering Solutions for Healthy Landscapes',
      description: 'Our irrigation services ensure your landscape receives optimal watering while conserving water and reducing costs. We install, maintain, and upgrade irrigation systems using the latest smart technology.',
      process: [
        { step: 'System Design', description: 'Custom irrigation plan based on your landscape needs' },
        { step: 'Professional Installation', description: 'Expert installation of pipes, valves, and sprinkler heads' },
        { step: 'Smart Controller Setup', description: 'Programming of weather-based smart controllers' },
        { step: 'System Testing', description: 'Thorough testing to ensure proper coverage and efficiency' },
        { step: 'Seasonal Maintenance', description: 'Regular check-ups and winterization services' }
      ],
      benefits: [
        'Water conservation',
        'Lower water bills',
        'Healthier plants',
        'Convenience and automation',
        'Reduced disease risk',
        'Smart weather-based watering'
      ],
      pricing: 'New system installation starting at $2,500. Repairs and upgrades priced by assessment.',
      timeline: '1-3 days for standard residential installation',
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ],
      image: "https://media.istockphoto.com/id/1236078720/photo/landscape-automatic-garden-watering-system-with-different-sprinklers-installed-under-turf.jpg?s=1024x1024&w=is&k=20&c=pTNiWp12UJqP3piJAyaoLwpBEMYYL8BRRBWyQ41lTZQ="
    },
    'tree-care': {
      title: 'Tree & Shrub Care',
      subtitle: 'Professional Care for Healthy, Beautiful Trees and Shrubs',
      description: 'Our certified arborists provide expert care for your trees and shrubs, ensuring they remain healthy, safe, and beautiful. We offer pruning, health assessments, and treatment programs.',
      process: [
        { step: 'Health Assessment', description: 'Comprehensive evaluation by certified arborist' },
        { step: 'Care Plan Development', description: 'Custom treatment plan for your trees and shrubs' },
        { step: 'Professional Pruning', description: 'Expert pruning using proper techniques' },
        { step: 'Fertilization', description: 'Deep root fertilization for optimal health' },
        { step: 'Ongoing Monitoring', description: 'Regular check-ups to ensure continued health' }
      ],
      benefits: [
        'Improved tree health',
        'Enhanced safety',
        'Better aesthetics',
        'Disease prevention',
        'Storm damage prevention',
        'Increased property value'
      ],
      pricing: 'Consultations start at $150. Service pricing varies by tree size and scope of work.',
      timeline: 'Most pruning services completed in 1-2 days',
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ],
      image: "https://media.istockphoto.com/id/2165549854/photo/landscaping-professional-pruning-evergreen-tree.jpg?s=1024x1024&w=is&k=20&c=RfJ8VpucKbTF0GxjP2X3FEhOHhtwWOybSIIucsOoPig="
    },
    'seasonal-color': {
      title: 'Seasonal Color',
      subtitle: 'Vibrant Flowers That Change With the Seasons',
      description: 'Keep your landscape vibrant and colorful year-round with our seasonal flower installation service. We design, install, and maintain beautiful flower displays that reflect each season.',
      process: [
        { step: 'Design Consultation', description: 'Discussion of color preferences and planting locations' },
        { step: 'Seasonal Planning', description: 'Selection of plants appropriate for each season' },
        { step: 'Bed Preparation', description: 'Soil amendment and bed preparation' },
        { step: 'Professional Installation', description: 'Expert planting with proper spacing and depth' },
        { step: 'Maintenance', description: 'Optional ongoing care including deadheading and feeding' }
      ],
      benefits: [
        'Year-round color',
        'Enhanced curb appeal',
        'Fresh, seasonal displays',
        'Professional design',
        'Hassle-free maintenance',
        'Attracts pollinators'
      ],
      pricing: 'Seasonal installations start at $350. Rotation programs available with quarterly updates.',
      timeline: 'Installation typically completed in 1 day',
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ],
      image: "https://media.istockphoto.com/id/1129456758/photo/flowerbed-with-colorful-hyacinths-traditional-spring-flower-easter-flower-easter-background.jpg?s=1024x1024&w=is&k=20&c=Q6oR0pJ9B-10oKUb2NqpWEMgqQHLyX6fTOGYyPdX0Yg="
    },
    'property-cleaning': {
      title: 'Property Cleaning',
      subtitle: 'Reliable Exterior Cleaning for a Well-Maintained Property',
      description: 'Keep your property clean, safe, and professional-looking with our comprehensive property cleaning services.',
      process: [
        { step: 'Site Assessment', description: 'Evaluation of the property to identify cleaning needs and priority areas' },
        { step: 'Customized Cleaning Plan', description: 'Selection of services based on surface types and property use' },
        { step: 'Preparation', description: 'Protecting landscaping and surrounding areas before cleaning begins' },
        { step: 'Professional Cleaning', description: 'Thorough cleaning using commercial-grade equipment and eco-friendly solutions' },
        { step: 'Final Walkthrough', description: 'Inspection to ensure all areas meet quality standards' }
      ],
      benefits: [
        'Improved curb appeal',
        'Safer walkways and common areas',
        'Prevents buildup of dirt, mold, and debris',
        'Extends surface and material lifespan',
        'Professional, dependable service',
        'Low-disruption cleaning process'
      ],
      pricing: 'Pricing starts at $250 and varies based on property size and scope of work.',
      timeline: 'Most property cleanings are completed within 1 day.',
      images: [
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300'
      ],
      image: "https://media.istockphoto.com/id/1372306674/photo/man-cleaning-the-terrace-tiles-of-the-apartment.jpg?s=1024x1024&w=is&k=20&c=bREpxu5cACHb9pVLRoFFWkWh7XXtpz1FKt3v2X04uoU="
    }
  };

  const service = serviceData[id] || serviceData['landscape-maintainence'];

  return (
    <>
      <Helmet>
        <title>{service.title} - Professional Service Details | Green Generation Landscaping</title>
        <meta
          name="description"
          content={`${service.subtitle} - ${service.description.substring(0, 150)}...`}
        />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[400px]">
          <div className="absolute inset-0">
            <img
              alt={service.title}
              className="w-full h-full object-cover"
              src={service.image} />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
          </div>
          <div className="container mx-auto px-4 h-full flex items-end pb-12 relative z-10">
            <div>
              <Link to="/services" className="inline-flex items-center text-white mb-4 hover:text-green-300 transition-colors">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Services
              </Link>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-2 font-novecento-sans"
              >
                {service.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-green-50"
              >
                {service.subtitle}
              </motion.p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <WaveDivider color="#fafaf9" />
          </div>
        </section>

        {/* Service Overview */}
        <section className="py-20 bg-stone-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-stone-900 mb-4 font-novecento-sans">Service Overview</h2>
                  <p className="text-lg text-stone-700 leading-relaxed">{service.description}</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-6 font-novecento-sans">Our Process</h3>
                  <div className="space-y-4">
                    {service.process.map((item, index) => (
                      <div key={index} className="flex gap-4 bg-white p-4 rounded-lg shadow">
                        <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 mb-1 font-novecento-sans">{item.step}</h4>
                          <p className="text-stone-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-6 font-novecento-sans">Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.images.slice(1).map((image, index) => (
                      <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                        <img
                          alt={`${service.title} - Image ${index + 2}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          src={image} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-4 font-novecento-sans">Service Benefits</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-stone-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-stone-200 space-y-4">
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-stone-900 mb-1 font-novecento-sans">Pricing</p>
                        <p className="text-sm text-stone-600">{service.pricing}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-stone-900 mb-1 font-novecento-sans">Timeline</p>
                        <p className="text-sm text-stone-600">{service.timeline}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-stone-200">
                    <Link to="/contact">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Request a Quote
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

export default ServiceDetail;
