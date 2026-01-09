import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, HeartHandshake, Gem } from 'lucide-react';
import SEO from './SEO';

// Reusable component for leadership cards
const TeamMemberCard: React.FC<{ imageUrl: string; name: string; title: string; delay: number; }> = ({ imageUrl, name, title, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="text-center"
    >
        <img className="mx-auto h-32 w-32 md:h-40 md:w-40 rounded-full object-cover shadow-lg" src={imageUrl} alt={`Portrait of ${name}, ${title}`} />
        <h3 className="mt-6 text-xl font-semibold text-slate-800">{name}</h3>
        <p className="text-brand-blue">{title}</p>
    </motion.div>
);

// Reusable component for value cards
const ValueCard: React.FC<{ icon: React.ReactElement; title: string; description: string; delay: number; }> = ({ icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
    >
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-brand-blue mx-auto">
            {icon}
        </div>
        <h3 className="mt-6 text-xl font-semibold text-slate-800 text-center">{title}</h3>
        <p className="mt-2 text-slate-600 text-center">{description}</p>
    </motion.div>
);


const AboutPage: React.FC = () => {
    return (
        <div className="bg-slate-50 animate-fadeIn transition-colors duration-300">
            <SEO
                title="About Us | CloudAdept Systems"
                description="Learn about CloudAdept Systems' mission to empower businesses through ServiceNow expertise. Discover our vision, core values, and commitment to delivering excellence in digital transformation."
                url="https://www.cloudadeptsystems.com/about"
            />
            {/* Hero Section */}
            <section className="py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">About CloudAdept Systems</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                            Driving Digital Transformation with ServiceNow Expertise
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
                            <p className="mt-4 text-slate-600 text-lg">
                                To empower businesses by unlocking the full potential of the ServiceNow platform, driving efficiency, innovation, and digital transformation through expert implementation and strategic guidance.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900">Our Vision</h2>
                            <p className="mt-4 text-slate-600 text-lg">
                                To be the most trusted and sought-after ServiceNow partner, recognized for our deep technical expertise, unwavering commitment to client success, and leadership in the ServiceNow ecosystem.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core Values</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                            The principles that guide our work and define our character.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ValueCard
                            icon={<ShieldCheck size={32} />}
                            title="Integrity"
                            description="We operate with transparency and honesty in everything we do."
                            delay={0.1}
                        />
                        <ValueCard
                            icon={<Lightbulb size={32} />}
                            title="Innovation"
                            description="We constantly seek better ways to solve problems and deliver value."
                            delay={0.2}
                        />
                        <ValueCard
                            icon={<HeartHandshake size={32} />}
                            title="Client-Centric"
                            description="Our clients' success is our ultimate measure of success."
                            delay={0.3}
                        />
                        <ValueCard
                            icon={<Gem size={32} />}
                            title="Excellence"
                            description="We hold ourselves to the highest standards of quality and performance."
                            delay={0.4}
                        />
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            {/* <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet Our Leadership</h2>
                        <p className="mt-4 text-lg text-slate-600">The driving force behind our success.</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?random=2" name="Jane Doe" title="Chief Executive Officer" delay={0.1} />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?random=3" name="John Smith" title="Chief Technology Officer" delay={0.2} />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?random=4" name="Emily Jones" title="Head of ServiceNow Practice" delay={0.3} />
                        <TeamMemberCard imageUrl="https://picsum.photos/200/200?random=5" name="Michael Brown" title="VP of Managed Services" delay={0.4} />
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default AboutPage;
