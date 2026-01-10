import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, Mail, Phone, Building } from "lucide-react";
import { COMPANY_INFO } from "../src/constants";
import SEO from './SEO';

const ContactInfoItem: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-full bg-blue-100 text-brand-blue">
            {icon}
        </div>
        <div className="ml-4">
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <div className="mt-1 text-slate-600">{children}</div>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [status, setStatus] = useState<"idle" | "submitting" | "submitted">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        <div className="bg-slate-50 animate-fadeIn transition-colors duration-300">
            <SEO
                title="Contact Us | CloudAdept Systems"
                description="Get in touch with CloudAdept Systems for ServiceNow consulting, implementation, and support. Contact our team to discuss your digital transformation needs and discover how we can help."
                url="https://www.cloudadeptsystems.com/contact"
            />
            {/* Hero Section */}
            <section className="py-20 md:py-28 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Get in Touch</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                            Have a ServiceNow project in mind or want to learn how we can help transform your business? We'd love to hear from you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-5"
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                            <div className="space-y-8">
                                <ContactInfoItem icon={<Building size={24} />} title="Our Office">
                                    {COMPANY_INFO.addressLines.map((line, i) => <p key={i}>{line}</p>)}
                                </ContactInfoItem>
                                <ContactInfoItem icon={<Mail size={24} />} title="Email Us">
                                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-blue transition">{COMPANY_INFO.email}</a>
                                </ContactInfoItem>
                                <ContactInfoItem icon={<Phone size={24} />} title="Call Us">
                                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-brand-blue transition">{COMPANY_INFO.phone}</a>
                                </ContactInfoItem>
                            </div>
                            {/* <div className="mt-12 rounded-lg overflow-hidden h-64 shadow-md bg-slate-200 flex items-center justify-center">
                                <img src={COMPANY_INFO.mapUrl} alt="Map showing office location" className="w-full h-full object-cover"/>
                            </div> */}
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-xl shadow-lg"
                        >
                            <AnimatePresence mode="wait">
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
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Send us a Message</h3>

                                        {/* FormSubmit Configuration */}
                                        <input type="hidden" name="_subject" value="New Contact Form Submission - CloudAdept" />
                                        <input type="hidden" name="_template" value="table" />
                                        <input type="hidden" name="_captcha" value="false" />

                                        <div>
                                            <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                            <input type="text" name="name" id="contact-name" required className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue" />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                            <input type="email" name="email" id="contact-email" required className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue" />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">Message</label>
                                            <textarea id="contact-message" name="message" rows={4} required placeholder="Tell us about your ServiceNow needs..." className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"></textarea>
                                        </div>
                                        <div>
                                            <button type="submit" disabled={status === "submitting"} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-brand-blue hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:bg-slate-400 transition-all transform hover:scale-105">
                                                {status === "submitting" ? "Sending..." : "Send Message"}
                                            </button>
                                        </div>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
