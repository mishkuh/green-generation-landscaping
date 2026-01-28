"use client"

import React, { useState } from 'react';
import * as motion from 'motion/react-client'
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button, Box, Section, Container, Grid, Flex, Heading, Text, Card, TextField, TextArea, Select } from '@radix-ui/themes';
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

        const { email, phone, location, details } = formData;

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (value: string) => {
        setFormData({
            ...formData,
            source: value
        });
    };

    return (
        <Box>
            {/* Hero Section */}
            <Section size="3" className="bg-[var(--grass-12)]">
                <Container size="3">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Flex direction="column" align="center" className="text-center text-white max-w-3xl mx-auto">
                            <Heading size="8" mb="6" className="font-novecento-sans">Get In Touch</Heading>
                            <Text size="5" className="text-green-50 block">
                                Ready to transform your outdoor space? Let's discuss your project and provide a free consultation
                            </Text>
                        </Flex>
                    </motion.div>
                </Container>
            </Section>

            {/* Contact Section */}
            <Section size="3" className="bg-[var(--gray-2)]">
                <Container size="4" px="4">
                    <Grid columns={{ initial: '1', lg: '2' }} gap="9">
                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Flex direction="column" gap="8">
                                <Box>
                                    <Heading size="6" className="text-[var(--gray-12)] mb-6 font-novecento-sans">Contact Information</Heading>
                                    <Text className="text-[var(--gray-11)] mb-8 block">
                                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                                    </Text>
                                </Box>

                                <Flex direction="column" gap="6">
                                    <Card size="3">
                                        <Flex gap="4" align="start">
                                            <Flex justify="center" align="center" className="bg-[var(--grass-3)] p-3 rounded-full shrink-0">
                                                <Phone className="w-6 h-6 text-[var(--grass-9)]" />
                                            </Flex>
                                            <Box>
                                                <Text weight="bold" className="text-[var(--gray-12)] mb-1 block font-novecento-sans">Phone</Text>
                                                <Text className="text-[var(--gray-11)] block">(253) 304-7250</Text>
                                                <Text size="1" className="text-[var(--gray-10)] mt-1 block">Mon-Fri 8am-6pm, Sat 9am-4pm</Text>
                                            </Box>
                                        </Flex>
                                    </Card>

                                    <Card size="3">
                                        <Flex gap="4" align="start">
                                            <Flex justify="center" align="center" className="bg-[var(--grass-3)] p-3 rounded-full shrink-0">
                                                <Mail className="w-6 h-6 text-[var(--grass-9)]" />
                                            </Flex>
                                            <Box>
                                                <Text weight="bold" className="text-[var(--gray-12)] mb-1 block font-novecento-sans">Email</Text>
                                                <Text className="text-[var(--gray-11)] block">ggenerationlandscaping@gmail.com</Text>
                                                <Text size="1" className="text-[var(--gray-10)] mt-1 block">We'll respond within 24 hours</Text>
                                            </Box>
                                        </Flex>
                                    </Card>

                                    <Card size="3">
                                        <Flex gap="4" align="start">
                                            <Flex justify="center" align="center" className="bg-[var(--grass-3)] p-3 rounded-full shrink-0">
                                                <MapPin className="w-6 h-6 text-[var(--grass-9)]" />
                                            </Flex>
                                            <Box>
                                                <Text weight="bold" className="text-[var(--gray-12)] mb-1 block font-novecento-sans">Service Area</Text>
                                                <Text className="text-[var(--gray-11)] block">Greater Seattle Area</Text>
                                                <Text className="text-[var(--gray-11)] block">Washington State</Text>
                                            </Box>
                                        </Flex>
                                    </Card>
                                </Flex>

                                <Box className="bg-[var(--grass-11)] text-white p-6 rounded-xl">
                                    <Heading size="4" mb="3" className="font-novecento-sans">Free Consultation</Heading>
                                    <Text className="text-[var(--grass-1)] mb-4 block">
                                        Schedule a free on-site consultation to discuss your project and receive a detailed estimate.
                                    </Text>
                                    <Text weight="bold" className="text-[var(--grass-1)] block">No obligation • Expert advice • Custom solutions</Text>
                                </Box>
                            </Flex>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card size="4" className="shadow-xl">
                                <Heading size="6" className="text-[var(--gray-12)] mb-6 font-novecento-sans">Send Us a Message</Heading>
                                <form onSubmit={handleSubmit}>
                                    <Flex direction="column" gap="4">
                                        <Box>
                                            <Text as="label" size="2" weight="bold" className="text-[var(--gray-12)] mb-2 block">
                                                Email Address <span className="text-red-500">*</span>
                                            </Text>
                                            <TextField.Root
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="your@email.com"
                                                size="3"
                                            />
                                        </Box>

                                        <Box>
                                            <Text as="label" size="2" weight="bold" className="text-[var(--gray-12)] mb-2 block">
                                                Phone Number <span className="text-red-500">*</span>
                                            </Text>
                                            <TextField.Root
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                placeholder="(555) 123-4567"
                                                size="3"
                                            />
                                        </Box>

                                        <Box>
                                            <Text as="label" size="2" weight="bold" className="text-[var(--gray-12)] mb-2 block">
                                                Property Location <span className="text-red-500">*</span>
                                            </Text>
                                            <TextField.Root
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                required
                                                placeholder="City, State or Full Address"
                                                size="3"
                                            />
                                        </Box>

                                        <Box>
                                            <Text as="label" size="2" weight="bold" className="text-[var(--gray-12)] mb-2 block">
                                                Project Details <span className="text-red-500">*</span>
                                            </Text>
                                            <TextArea
                                                name="details"
                                                value={formData.details}
                                                onChange={handleChange}
                                                required
                                                placeholder="Tell us about your project - what services are you interested in, timeline, budget range, etc."
                                                size="3"
                                                rows={4}
                                            />
                                        </Box>

                                        <Box>
                                            <Text as="label" size="2" weight="bold" className="text-[var(--gray-12)] mb-2 block">
                                                How did you hear about us? <span className="text-[var(--gray-10)]">(Optional)</span>
                                            </Text>
                                            <Select.Root value={formData.source} onValueChange={handleSelectChange} size="3">
                                                <Select.Trigger placeholder="Select an option" className="w-full" />
                                                <Select.Content>
                                                    <Select.Group>
                                                        <Select.Item value="google">Google Search</Select.Item>
                                                        <Select.Item value="social">Social Media</Select.Item>
                                                        <Select.Item value="referral">Friend/Family Referral</Select.Item>
                                                        <Select.Item value="nextdoor">Nextdoor</Select.Item>
                                                        <Select.Item value="advertisement">Advertisement</Select.Item>
                                                        <Select.Item value="other">Other</Select.Item>
                                                    </Select.Group>
                                                </Select.Content>
                                            </Select.Root>
                                        </Box>

                                        <Button type="submit" size="4" className="w-full bg-green-600 hover:bg-green-700 cursor-pointer" highContrast color="green">
                                            Send Message
                                            <Send className="ml-2 w-5 h-5" />
                                        </Button>

                                        <Text size="2" align="center" className="text-[var(--gray-10)]">
                                            <span className="text-red-500">*</span> Required fields
                                        </Text>
                                    </Flex>
                                </form>
                            </Card>
                        </motion.div>
                    </Grid>
                </Container>
            </Section>

            {/* Map Section */}
            <Box className="relative h-96 bg-[var(--gray-3)]">
                <Flex align="center" justify="center" className="absolute inset-0">
                    <Box className="text-center">
                        <MapPin className="w-16 h-16 text-[var(--grass-9)] mx-auto mb-4" />
                        <Heading size="5" className="text-[var(--gray-12)] font-novecento-sans">Service Area</Heading>
                        <Text className="text-[var(--gray-11)]">Greater Seattle Area</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
};

export default Contact;
