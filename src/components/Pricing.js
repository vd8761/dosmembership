"use client";
import { useState } from 'react';
import RegistrationModal from './RegistrationModal';

const STANDARD_PRICE = 32000;
const PREMIUM_PRICE = 65000;
const GST_RATE = 0.18;

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
                            <div className="price">₹{STANDARD_PRICE.toLocaleString('en-IN')}<span>/Fellowship</span></div>
                            <div className="gst-note">+ {(GST_RATE * 100)}% GST (Total: ₹{(STANDARD_PRICE + (STANDARD_PRICE * GST_RATE)).toLocaleString('en-IN')})</div>
                        </div>

                        <ul className="pricing-features">
                            <li><i className="fa-solid fa-check"></i> <span>Complete 27 Weeks Curriculum</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Live Classes & Recordings</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Access to Private Members Network</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Project Reviews</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Standard Certificate</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>Exclusive DOS Goodies Box</span></li>
                        </ul>

                        <button className="btn btn-primary" onClick={() => handleEnrollClick(STANDARD_PRICE, 'Standard Tier')}>Enroll Now</button>
                    </div>

                    {/* Premium Tier */}
                    <div className="pricing-card premium">
                        <div className="popular-badge">Most Popular</div>
                        <div className="pricing-header">
                            <h3 className="pricing-title">Premium</h3>
                            <div className="price">₹{PREMIUM_PRICE.toLocaleString('en-IN')}<span>/Fellowship</span></div>
                            <div className="gst-note">+ {(GST_RATE * 100)}% GST (Total: ₹{(PREMIUM_PRICE + (PREMIUM_PRICE * GST_RATE)).toLocaleString('en-IN')})</div>
                        </div>

                        <ul className="pricing-features">
                            <li><i className="fa-solid fa-check"></i> <span>Everything in Standard</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>GPU Credits</span></li>
                            <li><i className="fa-solid fa-check"></i> <span>International Internship</span></li>
                        </ul>

                        <button className="btn btn-primary" onClick={() => handleEnrollClick(PREMIUM_PRICE, 'Premium Tier')}>Enroll Premium</button>
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
