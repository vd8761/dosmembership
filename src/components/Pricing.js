"use client";
import { useState } from 'react';
import RegistrationModal from './RegistrationModal';

export default function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTier, setSelectedTier] = useState(null);

    const handleEnrollClick = (amount, name) => {
        setSelectedTier({ amount, name });
        setIsModalOpen(true);
    };

    return (
        <section id="pricing" className="section" style={{ paddingTop: '0px' }}>
            <div className="container">
                <h2 className="section-title">Choose Your Path</h2>

                <div className="pricing-grid">

                    {/* Standard Tier */}
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h3 className="pricing-title">Standard</h3>
                            <div className="price">₹32,000<span>/Fellowship</span></div>
                            <div className="gst-note">+ 18% GST (Total: ₹37,760)</div>
                        </div>

                        <ul className="pricing-features">
                            <li><i className="fa-solid fa-check"></i> <span>Complete 27 Weeks Curriculum</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Live Classes & Recordings</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Access to Private Members Network</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Project Reviews</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Standard Certificate</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Exclusive DOS Goodies Box</span></li>
                        </ul>

                        <button className="btn btn-primary" onClick={() => handleEnrollClick(32000, 'Standard Tier')}>Enroll Now</button>
                    </div>

                    {/* Premium Tier */}
                    <div className="pricing-card premium">
                        <div className="popular-badge">Most Popular</div>
                        <div className="pricing-header">
                            <h3 className="pricing-title">Premium</h3>
                            <div className="price">₹65,000<span>/Fellowship</span></div>
                            <div className="gst-note">+ 18% GST (Total: ₹76,700)</div>
                        </div>

                        <ul className="pricing-features">
                            <li><i className="fa-solid fa-check"></i> <span>Everything in Standard</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>GPU Credits</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>International Internship</span></li>
                        </ul>

                        <button className="btn btn-primary" onClick={() => handleEnrollClick(65000, 'Premium Tier')}>Enroll Premium</button>
                    </div>

                </div>
            </div>

            {/* Render Modal */}
            <RegistrationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                selectedTier={selectedTier}
            />
        </section>
    );
}
