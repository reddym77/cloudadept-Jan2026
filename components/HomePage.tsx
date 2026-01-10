import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Route, ShieldCheck, GaugeCircle, ClipboardList, ShieldAlert, Sparkles, MapPin, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from "../src/constants";
import SEO from './SEO';


const AnimatedTitle = () => (
    <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
    >
        Mastering the <span className="text-brand-blue">ServiceNow Platform</span>
    </motion.h1>
);

const AnimatedParagraph = () => (
    <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-3xl mx-auto text-lg text-slate-600"
    >
        {COMPANY_INFO.name} delivers expert ServiceNow implementation, development, and managed services to streamline your enterprise workflows and drive digital transformation.
    </motion.p>
);

const AnimatedButtons = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
    >
        <Link
            to="/services"
            className="w-full sm:w-auto bg-brand-blue text-white px-8 py-3 rounded-lg font-medium text-base hover:bg-navy-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
            Explore Our Services
        </Link>
        <Link
            to="/contact"
            className="w-full sm:w-auto bg-white text-brand-blue px-8 py-3 rounded-lg font-medium text-base hover:bg-slate-100 transition-colors border border-slate-300 shadow-md"
        >
            Request a Consultation
        </Link>
    </motion.div>
);

const ServiceHighlightCard: React.FC<{ icon: React.ReactElement; title: string; description: string; to: string; delay: number; }> = ({ icon, title, description, to, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col group"
    >
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-brand-blue mx-auto mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-slate-900 text-center">{title}</h3>
            <p className="mt-2 text-slate-600 text-center">{description}</p>
        </div>
        <div className="flex-grow flex items-end justify-center mt-6">
            <Link
                to={to}
                className="font-semibold text-brand-blue hover:text-navy-800 transition-colors flex items-center gap-2 group-hover:gap-3"
            >
                Learn More <ArrowRight className="h-4 w-4 transition-all" />
            </Link>
        </div>
    </motion.div>
);

const HomePage: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(`https://formsubmit.co/ajax/${COMPANY_INFO.email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setStatus("submitted");
            } else {
                console.error("Form submission failed");
                setStatus("idle");
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("idle");
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="animate-fadeIn bg-slate-50 transition-colors duration-300">
            <SEO
                title="CloudAdept Systems | ServiceNow Premier Partner"
                description="Drive digital transformation with CloudAdept Systems, a premier ServiceNow partner. We offer expert consulting, implementation, and managed services for ITSM, ITOM, CSM, and custom app development to optimize your enterprise workflows."
                url="https://www.cloudadeptsystems.com/"
            />
            {/* Hero Section */}
            <section className="bg-slate-50 py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <AnimatedTitle />
                        <AnimatedParagraph />
                        <AnimatedButtons />
                    </div>
                </div>
            </section>

            {/* Services Overview Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Core ServiceNow Services</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Tailored solutions for your digital transformation on the Now Platform.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceHighlightCard
                            icon={<ClipboardList size={32} />}
                            title="ServiceNow ITSM"
                            description="Streamline IT services with expert implementation of Incident, Problem, and Change Management."
                            to="/services/itsm"
                            delay={0.1}
                        />
                        <ServiceHighlightCard
                            icon={<ShieldAlert size={32} />}
                            title="GRC & Risk"
                            description="Embed risk management and compliance into your daily workflows for real-time resilience."
                            to="/services/grc"
                            delay={0.2}
                        />
                        <ServiceHighlightCard
                            icon={<Sparkles size={32} />}
                            title="Now Assist (GenAI)"
                            description="Boost productivity and accelerate value with Generative AI experiences on the Now Platform."
                            to="/services/now-assist"
                            delay={0.3}
                        />
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Partner with {COMPANY_INFO.name}?</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">We provide the ServiceNow expertise to elevate your business operations from every angle.</p>
                    </div>
                    <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-6">
                            <div className="flex-shrink-0 mx-auto h-12 w-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center">
                                <Route size={24} />
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold text-slate-800">Strategic ServiceNow Roadmaps</h4>
                                <p className="mt-2 text-slate-600">Tailored strategies that align with your business goals for maximum ROI.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-6">
                            <div className="flex-shrink-0 mx-auto h-12 w-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center">
                                <ShieldCheck size={24} />
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold text-slate-800">Secure & Compliant Platform</h4>
                                <p className="mt-2 text-slate-600">Implementing best practices to ensure your instance is secure and compliant.</p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="p-6">
                            <div className="flex-shrink-0 mx-auto h-12 w-12 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center">
                                <GaugeCircle size={24} />
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold text-slate-800">Optimized Platform Performance</h4>
                                <p className="mt-2 text-slate-600">Fine-tuning your environment for speed, scalability, and reliability.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Get in Touch Section */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let's Build Your Future on ServiceNow</h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">We’re here to help and answer any question you might have. We look forward to hearing from you.</p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-16 items-start">
                        <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-lg">
                            <AnimatePresence>
                                {status === "submitted" ? (
                                    <motion.div
                                        key="submitted"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="text-center py-12"
                                    >
                                        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" strokeWidth={1.5} />
                                        <h3 className="mt-4 text-2xl font-semibold text-slate-900">Thank You!</h3>
                                        <p className="mt-2 text-slate-600">Your message has been sent. We'll get back to you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onSubmit={handleFormSubmit}
                                        className="space-y-6"
                                    >
                                        {/* FormSubmit Configuration */}
                                        <input type="hidden" name="_subject" value="New Home Page Inquiry - CloudAdept" />
                                        <input type="hidden" name="_template" value="table" />
                                        <input type="hidden" name="_captcha" value="false" />

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="home-name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                                <input type="text" name="name" id="home-name" required className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue" />
                                            </div>
                                            <div>
                                                <label htmlFor="home-email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                                <input type="email" name="email" id="home-email" required className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue" />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="home-message" className="block text-sm font-medium text-slate-700">Message</label>
                                            <textarea id="home-message" name="message" rows={4} required placeholder="How can we help you?" className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" disabled={status === "submitting"} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-blue hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:bg-slate-400 transition-all transform hover:scale-105">
                                                {status === "submitting" ? "Sending..." : "Send Message"}
                                            </button>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="md:col-span-2 space-y-8 pt-4">
                            <div className="flex items-start">
                                <MapPin className="h-8 w-8 text-brand-blue mt-1" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900">Our Office</h3>
                                    {COMPANY_INFO.addressLines.map((line, i) => <p key={i} className="mt-1 text-slate-600">{line}</p>)}
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="h-8 w-8 text-brand-blue mt-1" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900">Email Us</h3>
                                    <p className="mt-1 text-slate-600">{COMPANY_INFO.email}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-8 w-8 text-brand-blue mt-1" />
                                <div className="ml-4">
                                    <h3 className="text-lg font-semibold text-slate-900">Call Us</h3>
                                    <p className="mt-1 text-slate-600">{COMPANY_INFO.phone}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
