'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fcb03b]">
            Contact Us
          </h1>
          <p className="text-xl text-white mb-4">
            Ready to find the most cost-effective and secure packaging solution for your business?
          </p>
          <div className="w-24 h-1 bg-[#fcb03b] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#fcb03b]">Get a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[#fcb03b] focus:border-[#fcb03b]"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[#fcb03b] focus:border-[#fcb03b]"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[#fcb03b] focus:border-[#fcb03b]"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-black border border-gray-600 text-white rounded-lg focus:ring-2 focus:ring-[#fcb03b] focus:border-[#fcb03b]"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#fcb03b] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#e09d2a] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#fcb03b]">Contact Information</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-black p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-[#fcb03b]">Email Address</h3>
                <a href="mailto:info@strapack.com.pk" className="text-white hover:text-[#fcb03b]">
                  info@strapack.com.pk
                </a>
              </div>
              
              <div className="bg-black p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 text-[#fcb03b]">Phone Numbers</h3>
                <ul className="space-y-2 text-white">
                  <li>
                    <strong>Primary Sales:</strong>{' '}
                    <a href="tel:+923224722707" className="hover:text-[#fcb03b]">
                      +92 3224 722 707
                    </a>
                  </li>
                  <li>
                    <strong>Sales Lines:</strong>{' '}
                    <a href="tel:03224722707" className="hover:text-[#fcb03b]">
                      0322 4722707
                    </a>
                    {' - '}
                    <a href="tel:03224054078" className="hover:text-[#fcb03b]">
                      0322 4054078
                    </a>
                  </li>
                  <li>
                    <strong>Additional Queries:</strong>{' '}
                    <a href="tel:03233093336" className="hover:text-[#fcb03b]">
                      0323 3093336
                    </a>
                    {' - '}
                    <a href="tel:03014914797" className="hover:text-[#fcb03b]">
                      0301 4914797
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#fcb03b] text-black p-6 rounded-lg mb-8">
              <h3 className="font-semibold text-lg mb-4 text-black">Operating Hours</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-black/20">
                    <th className="text-left py-2">Day</th>
                    <th className="text-right py-2">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/10">
                    <td className="py-2">Monday - Saturday</td>
                    <td className="text-right py-2">9:00 am - 6:00 pm</td>
                  </tr>
                  <tr>
                    <td className="py-2">Sunday</td>
                    <td className="text-right py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Locations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#fcb03b]">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-[#fcb03b]">Head Office</h3>
              <p className="text-white leading-relaxed">
                9/E, G-Block, Mushtaq Ahmed Gurmani Road,<br />
                Main Boulevard Gulberg-II,<br />
                Lahore, Pakistan
              </p>
            </div>
            
            <div className="bg-black border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-[#fcb03b]">Factory Address</h3>
              <p className="text-white leading-relaxed">
                18-KM Multan Road,<br />
                Near High Noon Laboratories,<br />
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-black p-8 md:p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#fcb03b]">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2 text-[#fcb03b]">MASTER</h4>
              <p className="text-white opacity-90 italic">
                &quot;The straps were much stronger and durable than expected.&quot;
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2 text-[#fcb03b]">POPULAR PIPES</h4>
              <p className="text-white opacity-90 italic">
                &quot;The strapping provided is very strong, durable, robust, and long-lasting.&quot;
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2 text-[#fcb03b]">WAVES</h4>
              <p className="text-white opacity-90 italic">
                &quot;The straps are of excellent quality and very strong and durable.&quot;
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-lg mb-2 text-[#fcb03b]">Servo Motor-Oil</h4>
              <p className="text-white opacity-90 italic">
                &quot;Strips are very strong and well made; tie packages nicely.&quot;
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-lg shadow-md md:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-lg mb-2 text-[#fcb03b]">Ozone INTERNATIONAL</h4>
              <p className="text-white opacity-90 italic">
                &quot;Straps are of excellent quality and very durable. Price was very reasonable and delivery was timely.&quot;
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

