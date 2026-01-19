import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Building, Mail, Phone, Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { COMPANY_INFO } from "../src/constants";
import SEO from './SEO';

// Form Validation Schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        // Trim variables to prevent errors from accidental whitespace in .env
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

        if (!serviceId || !templateId || !publicKey || serviceId === "YOUR_SERVICE_ID") {
            toast.error("Email service is not configured. Please check environment variables.");
            setIsSubmitting(false);
            return;
        }

        try {
            // Enhanced payload to ensure correct "Reply-To" behavior
            await emailjs.send(
                serviceId,
                templateId,
                {
                    // Standard variables
                    from_name: data.name,
                    from_email: data.email,
                    reply_to: data.email,      // CRITICAL: This allows you to reply to the user
                    to_name: "CloudAdept Admin",

                    // Legacy variables (keeping these to ensure your current template still works)
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    title: "Contact Page Inquiry",
                    time: new Date().toLocaleString('en-IN'),
                },
                publicKey
            );

            setIsSubmitted(true);
            toast.success("Message sent successfully!");
            reset();
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
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
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-xl shadow-lg border border-slate-100"
                        >
                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="mx-auto h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 className="h-10 w-10 text-green-600" strokeWidth={2} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Thank You!</h3>
                                    <p className="mt-4 text-slate-600 text-lg max-w-md mx-auto">
                                        Your message has been sent successfully. Our team will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 text-brand-blue font-medium hover:text-navy-800 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                                    <p className="text-slate-600 mb-6">Fill out the form below and we'll be in touch.</p>

                                    <div>
                                        <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                        <input
                                            {...register("name")}
                                            type="text"
                                            id="contact-name"
                                            className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            id="contact-email"
                                            className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                        <textarea
                                            {...register("message")}
                                            id="contact-message"
                                            rows={5}
                                            className={`block w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-300'}`}
                                            placeholder="Tell us about your project or inquiry..."
                                        ></textarea>
                                        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-brand-blue hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:bg-slate-400 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="ml-2 h-5 w-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
