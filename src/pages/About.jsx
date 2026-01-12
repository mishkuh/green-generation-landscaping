
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, User, Leaf, Heart } from 'lucide-react';
import WaveDivider from '@/components/WaveDivider';
import AnimatedWaveBackground from '@/components/AnimatedWaveBackground';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Customer Care',
      description: 'Your satisfaction is our priority. We build lasting relationships with our clients.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We deliver exceptional craftsmanship in every project, big or small.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'We\'re proud to serve our local community.'
    },
    {
      icon: Leaf,
      title: 'Attention to Detail',
      description: 'We pay close attention to detail to deliver clean, beautiful work every time.'
    }
  ];

  const team = [
    {
      name: 'Pedro Morales',
      role: 'Founder & Lead',
      bio: 'With over 20 years of experience in landscape design, Pedro founded Green Generation Landscaping to bring sustainable, beautiful landscapes to the Greater Seattle Area.'
    },
    {
      name: 'Team Member 1',
      role: 'Operations Manager',
      bio: '______ ensures every project runs smoothly from consultation to completion, maintaining our high standards of quality.'
    },
    {
      name: 'Team Member 2',
      role: 'Master Horticulturist',
      bio: '_____ expertise in plant health and sustainable practices ensures our landscapes thrive for years to come.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Green Generation Landscaping Landscaping | Our Story & Team</title>
        <meta
          name="description"
          content="Learn about Green Generation Landscaping Landscaping - our story, values, and the experienced team dedicated to creating beautiful, sustainable outdoor spaces in the Bay Area."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-novecento-sans">About Green Generation Landscaping</h1>
              <p className="text-xl text-green-50">
                Creating beautiful, sustainable landscapes for over 20 years
              </p>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <WaveDivider color="#fafaf9" animate={true} />
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-stone-50 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-stone-900 mb-6 font-novecento-sans">Our Story</h2>
                <div className="space-y-4 text-stone-700 leading-relaxed">
                  <p>We have 20 years of experience in the industry. We're known for being punctual, reliable, and taking our work seriously to ensure high-quality results and full client satisfaction. Rain or shine, we show up and pay close attention to detail to deliver clean, beautiful work every time.</p>
                  <p>
                    What started as a small operation with just a handful of clients has grown into a trusted name in Greater Seattle landscaping. Our success is built on a foundation of quality work and genuine care for our clients.
                  </p>
                  <p>
                    Today, we're proud to serve both residential and commercial clients throughout the region, bringing the same dedication to excellence that has defined us from day one.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  alt="Green Generation Landscaping team working on landscape project"
                  className="w-full h-96 object-cover"
                  src="https://images.unsplash.com/photo-1683920415153-79b4015e5456"
                />
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <WaveDivider flip color="#15803d" animate={true} intensity="low" />
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-20 bg-green-700 overflow-hidden">
          <AnimatedWaveBackground height="100%" opacity={0.1} color="#ffffff" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-white mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 font-novecento-sans">Our Values</h2>
              <p className="text-xl text-green-50 max-w-2xl mx-auto">
                These core principles guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
                  >
                    <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 font-novecento-sans">{value.title}</h3>
                    <p className="text-green-50">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <WaveDivider color="#fafaf9" animate={true} />
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-stone-50 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-novecento-sans">Meet Our Team</h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                The experienced professionals behind every beautiful landscape
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                >
                  <div className="h-64 overflow-hidden flex items-center justify-center bg-stone-200">
                    <User className="w-24 h-24 text-stone-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-stone-900 mb-1 font-novecento-sans">{member.name}</h3>
                    <p className="text-green-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-stone-600 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <WaveDivider flip color="#15803d" animate={true} intensity="low" />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '20+', label: 'Years Experience' },
                { number: '500+', label: 'Projects Completed' },
                { number: '200+', label: 'Happy Clients' },
                { number: '10+', label: 'Team Members' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 font-novecento-sans">
                    {stat.number}
                  </div>
                  <div className="text-stone-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
