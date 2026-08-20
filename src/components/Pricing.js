"use client";
import { useState, useEffect } from 'react';
import RegistrationModal from './RegistrationModal';

const STANDARD_PRICE = process.env.NEXT_PUBLIC_STANDARD_PRICE !== undefined ? Number(process.env.NEXT_PUBLIC_STANDARD_PRICE) : 32000;
const PREMIUM_PRICE = process.env.NEXT_PUBLIC_PREMIUM_PRICE !== undefined ? Number(process.env.NEXT_PUBLIC_PREMIUM_PRICE) : 65000;
const GST_RATE = process.env.NEXT_PUBLIC_GST_RATE !== undefined ? Number(process.env.NEXT_PUBLIC_GST_RATE) : 0.18;

export default function Pricing() {
    const [showModal, setShowModal] = useState(false);
    const [selectedTier, setSelectedTier] = useState('');
    const [selectedAmount, setSelectedAmount] = useState(0);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        // Check if we just returned from a successful payment
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('payment') === 'success') {
                setTimeout(() => {
                    alert("Payment Successful! Welcome to the DOS Fellowship.");
                    // Clean up URL
                    window.history.replaceState({}, document.title, window.location.pathname);
                }, 500);
            }
        }
    }, []);

    const handleEnrollClick = (amount, name) => {
        setSelectedAmount(amount);
        setSelectedTier(name);
        setShowModal(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('');

        try {
            const res = await fetch('/api/checkout/initiate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, tier: selectedTier })
            });

            const data = await res.json();
            
            if (res.ok && data.token) {
                // Redirect to originbi checkout with the secure token
                window.location.href = `https://originbi.com/dosmembership/checkout?token=${data.token}`;
            } else {
                setErrorMsg(data.error || 'Failed to initiate checkout. Please try again.');
                setLoading(false);
            }
        } catch (err) {
            console.error("Checkout error:", err);
            setErrorMsg('An error occurred. Please try again.');
            setLoading(false);
        }
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

            {/* Registration Modal */}
            <RegistrationModal 
                isOpen={showModal} 
                onClose={() => setShowModal(false)} 
                selectedTier={selectedTier} 
                selectedAmount={selectedAmount} 
            />
        </section>
    );
}
