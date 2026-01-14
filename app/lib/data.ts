
import { Sprout, Scissors, Mountain, Droplets, TreePine, Flower } from 'lucide-react';

export const portfolioData = {
    'modern-zen-garden': {
        id: 'modern-zen-garden',
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
        id: 'luxury-backyard-oasis',
        title: 'Luxury Backyard Oasis',
        category: 'Residential',
        location: 'Kirkland, WA', // Updated from original inconsistent 'Seattle, WA' in one place
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
        id: 'corporate-campus',
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
        id: 'cottage-garden',
        title: 'English Cottage Garden',
        category: 'Residential',
        location: 'Tacoma, WA',
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
        id: 'drought-tolerant',
        title: 'Drought-Tolerant Landscape',
        category: 'Residential',
        location: 'Bellevue, WA',
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
        id: 'restaurant-patio',
        title: 'Restaurant Outdoor Dining',
        category: 'Commercial',
        location: 'Bellevue, WA',
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

export const servicesData = {
    'landscape-maintenance': {
        id: 'landscape-maintenance',
        icon: Sprout,
        title: 'Landscape Maintenance',
        subtitle: 'Custom Landscape Solutions for Your Dream Outdoor Space',
        description: 'Comprehensive landscape maintenance services to keep your landscape healthy, green, and pristine throughout the year.',
        detailDescription: 'Our landscape design service transforms your outdoor space into a beautiful, functional extension of your home. We work closely with you to understand your vision, lifestyle, and property characteristics.',
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
        features: [
            'Mowing',
            'Edging and trimming',
            'Fertilization programs',
            'Weed control',
            'Pruning and shaping',
            'Thatching and aerating'
        ],
        image: 'https://media.istockphoto.com/id/1312760160/photo/big-garden-grass-field-mowing-by-caucasian-gardener.jpg?s=1024x1024&w=is&k=20&c=ln0D2ZTNy8nc-t5zeXecdXi_VlojH5HC3PrNmG9fqX8=',
        images: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300'
        ]
    },
    'hardscaping': {
        id: 'hardscaping',
        icon: Mountain,
        title: 'Hardscaping',
        subtitle: 'Build Beautiful, Functional Outdoor Living Spaces',
        description: 'Expert installation of patios, walkways, and retaining walls that enhance your landscape.',
        detailDescription: 'Our hardscaping service creates stunning outdoor structures that enhance your landscape\'s beauty and functionality. From patios to retaining walls, we build lasting features using quality materials.',
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
        features: [
            'Patio pavers',
            'Retaining walls'
        ],
        image: 'https://media.istockphoto.com/id/1428026698/photo/hardscape-details-of-a-tumbled-paver-patio-flagstone-stepping-stones-and-horizontal-cedar.jpg?s=1024x1024&w=is&k=20&c=dXy0TKCsX48tPm1s9K9ZijZNfCl1EMbXre_0NS3RGrg=',
        images: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300'
        ]
    },
    'irrigation': { // Note: ID unified
        id: 'irrigation',
        icon: Droplets,
        title: 'Irrigation Systems',
        subtitle: 'Smart Watering Solutions for Healthy Landscapes',
        description: 'Irrigation solutions that ensure efficient watering while conserving water and reducing costs.',
        detailDescription: 'Our irrigation services ensure your landscape receives optimal watering while conserving water and reducing costs. We install, maintain, and upgrade irrigation systems using the latest smart technology.',
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
        features: [
            'Irrigation installation',
            'System repairs and upgrades',
            'Water conservation solutions',
            'Seasonal maintenance'
        ],
        image: 'https://media.istockphoto.com/id/1236078720/photo/landscape-automatic-garden-watering-system-with-different-sprinklers-installed-under-turf.jpg?s=1024x1024&w=is&k=20&c=pTNiWp12UJqP3piJAyaoLwpBEMYYL8BRRBWyQ41lTZQ=',
        images: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300'
        ]
    },
    'tree-care': {
        id: 'tree-care',
        icon: TreePine,
        title: 'Tree & Shrub Care',
        subtitle: 'Professional Care for Healthy, Beautiful Trees and Shrubs',
        description: 'Professional tree and shrub care including planting, pruning, trimming, fertilization, and health assessments.',
        detailDescription: 'Our certified arborists provide expert care for your trees and shrubs, ensuring they remain healthy, safe, and beautiful. We offer pruning, health assessments, and treatment programs.',
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
        features: [
            'Professional pruning',
            'Tree health assessments',
            'Fertilization programs',
            'Pest and disease management'
        ],
        image: 'https://media.istockphoto.com/id/2165549854/photo/landscaping-professional-pruning-evergreen-tree.jpg?s=1024x1024&w=is&k=20&c=RfJ8VpucKbTF0GxjP2X3FEhOHhtwWOybSIIucsOoPig=',
        images: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300'
        ]
    },
    'seasonal-color': {
        id: 'seasonal-color',
        icon: Flower,
        title: 'Seasonal Color',
        subtitle: 'Vibrant Flowers That Change With the Seasons',
        description: 'Keep your landscape vibrant year-round with our seasonal flower installation services.',
        detailDescription: 'Keep your landscape vibrant and colorful year-round with our seasonal flower installation service. We design, install, and maintain beautiful flower displays that reflect each season.',
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
        features: [
            'Seasonal flower installation',
            'Container garden design',
            'Annual and perennial selection'
        ],
        image: 'https://media.istockphoto.com/id/1129456758/photo/flowerbed-with-colorful-hyacinths-traditional-spring-flower-easter-flower-easter-background.jpg?s=1024x1024&w=is&k=20&c=Q6oR0pJ9B-10oKUb2NqpWEMgqQHLyX6fTOGYyPdX0Yg=',
        images: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300'
        ]
    },
    'property-cleaning': {
        id: 'property-cleaning',
        icon: Scissors,
        title: 'Property Cleaning',
        subtitle: 'Reliable Exterior Cleaning for a Well-Maintained Property',
        description: 'Keep your property clean and tidy with our property cleaning services.',
        detailDescription: 'Keep your property clean, safe, and professional-looking with our comprehensive property cleaning services.',
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
        features: [
            'Gutter cleaning',
            'Deck cleaning',
            'Pressure washing'
        ],
        image: 'https://media.istockphoto.com/id/1372306674/photo/man-cleaning-the-terrace-tiles-of-the-apartment.jpg?s=1024x1024&w=is&k=20&c=bREpxu5cACHb9pVLRoFFWkWh7XXtpz1FKt3v2X04uoU=',
        images: [
            'https://picsum.photos/200/300',
            'https://picsum.photos/200/300'
        ]
    }
};
