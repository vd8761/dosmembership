"use client";
import { useState, useEffect } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';
import PhoneInput, { getCountryCallingCode } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import CountrySelect from './CountrySelect';
import { getExampleNumber, parsePhoneNumberFromString } from 'libphonenumber-js/max';
import examples from 'libphonenumber-js/examples.mobile.json';

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => resolve(true)
        script.onerror = () => resolve(false)
        document.body.appendChild(script)
    })
}

export default function RegistrationModal({ isOpen, onClose, selectedTier }) {
    const [turnstileToken, setTurnstileToken] = useState(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', linkedin: '' });
    const [errors, setErrors] = useState({});
    const [country, setCountry] = useState('IN');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const baseAmount = selectedTier.amount;
    const gstRate = 0.18;
    const totalAmount = baseAmount + (baseAmount * gstRate);
    const amountInPaise = totalAmount * 100;

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const initiatePayment = async (e) => {
        e.preventDefault();

        // Custom Validation
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Please fill out this field.";
        if (!formData.email.trim()) newErrors.email = "Please fill out this field.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Please enter a valid email address.";
        
        if (!formData.phone) newErrors.phone = "Please fill out this field.";
        else {
            const parsed = parsePhoneNumberFromString(formData.phone);
            if (!parsed || !parsed.isValid()) {
                newErrors.phone = "Please enter a complete and valid phone number.";
            }
        }
        
        if (!formData.linkedin.trim()) newErrors.linkedin = "Please fill out this field.";
        else if (!/^https?:\/\//.test(formData.linkedin)) newErrors.linkedin = "Please enter a valid URL.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        if (!turnstileToken) {
            alert("Please complete the human verification.");
            return;
        }

        // Dynamically load Razorpay script
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        
        if (!res) {
          alert("Razorpay SDK failed to load. Are you online?");
          return;
        }

        var options = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
            "amount": amountInPaise, 
            "currency": "INR",
            "name": "Descience Open Source Club",
            "description": "Payment for " + selectedTier.name + " - AI Masterclass",
            "image": "https://osf.descienceosclub.com/favicon.png",
            "handler": function (response){
                alert("Payment Successful!\\nPayment ID: " + response.razorpay_payment_id + "\\n\\nWelcome to the cohort!");
                onClose();
            },
            "prefill": {
                "name": formData.name,
                "email": formData.email,
                "contact": formData.phone
            },
            "theme": {
                "color": "#07a97b"
            }
        };
        
        var rzp1 = new window.Razorpay(options);
        
        rzp1.on('payment.failed', function (response){
            console.error(response.error);
            alert("Payment Failed.\\nReason: " + response.error.description);
        });
        
        rzp1.open();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}><i className="fa-solid fa-xmark"></i></button>
                <h3 className="text-gradient" style={{ 
                    fontSize: '1.8rem', 
                    marginBottom: '10px', 
                    fontFamily: 'var(--font-heading)'
                }}>Join the Cohort</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '0.95rem', lineHeight: '1.5' }}>
                    You are enrolling in the <strong style={{ color: 'var(--primary)' }}>{selectedTier.name}</strong>. Please fill out your details to proceed to secure checkout.
                </p>

                <form onSubmit={initiatePayment} noValidate>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="e.g. John Doe" className={errors.name ? 'input-error' : ''} />
                        {errors.name && <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {errors.name}</div>}
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. john@example.com" className={errors.email ? 'input-error' : ''} />
                        {errors.email && <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {errors.email}</div>}
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        {(() => {
                            let maxLocalDigits = 10;
                            let placeholderText = "Phone number";
                            let cCode = '';

                            if (country) {
                                try {
                                    cCode = getCountryCallingCode(country);
                                    const example = getExampleNumber(country, examples);
                                    if (example) {
                                        maxLocalDigits = example.nationalNumber.length;
                                        placeholderText = example.formatNational();
                                    }
                                } catch (e) {}
                            }
                            
                            return (
                                <div style={{ position: 'relative' }}>
                                    <PhoneInput
                                        international={false}
                                        countrySelectComponent={CountrySelect}
                                        defaultCountry="IN"
                                        country={country}
                                        onCountryChange={(newCountry) => {
                                            if (newCountry && newCountry !== country) {
                                                setCountry(newCountry);
                                                setFormData({ ...formData, phone: '' }); 
                                                if (errors.phone) setErrors({ ...errors, phone: null });
                                            }
                                        }}
                                        value={formData.phone}
                                        onChange={(phone) => {
                                            if (phone && cCode) {
                                                let rawDigits = phone.replace(/\D/g, '');
                                                if (rawDigits.startsWith(cCode)) {
                                                    rawDigits = rawDigits.substring(cCode.length);
                                                }
                                                if (rawDigits.length > maxLocalDigits) {
                                                    const truncated = rawDigits.substring(0, maxLocalDigits);
                                                    phone = `+${cCode}${truncated}`;
                                                }
                                            }
                                            setFormData({ ...formData, phone });
                                            if (errors.phone) setErrors({ ...errors, phone: null });
                                        }}
                                        className={`custom-phone-input-wrapper ${errors.phone ? 'input-error' : ''}`}
                                        limitMaxLength={true}
                                        placeholder={placeholderText}
                                        numberInputProps={{
                                            onKeyDown: (e) => {
                                                // Calculate current digits on the fly to accurately block
                                                let currentDigits = 0;
                                                if (formData.phone) {
                                                    let raw = formData.phone.replace(/\D/g, '');
                                                    if (cCode && raw.startsWith(cCode)) {
                                                        raw = raw.substring(cCode.length);
                                                    }
                                                    currentDigits = raw.length;
                                                }
                                                // Block if max reached, allow control keys
                                                const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'];
                                                if (!allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
                                                    // If it's a number key and we are at/over limit, block it
                                                    if (/[0-9]/.test(e.key) && currentDigits >= maxLocalDigits) {
                                                        e.preventDefault();
                                                    }
                                                }
                                            }
                                        }}
                                    />
                                    
                                    {(() => {
                                        let currentLocalDigits = 0;
                                        if (formData.phone) {
                                            let rawDigits = formData.phone.replace(/\D/g, '');
                                            if (cCode && rawDigits.startsWith(cCode)) {
                                                rawDigits = rawDigits.substring(cCode.length);
                                            }
                                            currentLocalDigits = rawDigits.length;
                                        }
                                        
                                        const isComplete = currentLocalDigits >= maxLocalDigits;
                                        
                                        return (
                                            <div style={{ 
                                                position: 'absolute',
                                                right: '16px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                fontSize: '0.8rem', 
                                                color: isComplete ? 'var(--primary)' : 'var(--text-muted)', 
                                                fontWeight: isComplete ? '700' : '500',
                                                transition: 'var(--transition)',
                                                pointerEvents: 'none'
                                            }}>
                                                {currentLocalDigits} / {maxLocalDigits}
                                            </div>
                                        );
                                    })()}
                                </div>
                            );
                        })()}
                        {errors.phone && <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {errors.phone}</div>}
                    </div>
                    <div className="form-group">
                        <label>LinkedIn Profile URL</label>
                        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/johndoe" className={errors.linkedin ? 'input-error' : ''} />
                        {errors.linkedin && <div className="error-message"><i className="fa-solid fa-circle-exclamation"></i> {errors.linkedin}</div>}
                    </div>
                    
                    <div style={{ 
                        backgroundColor: '#f8fafc', 
                        padding: '16px', 
                        borderRadius: '10px', 
                        marginBottom: '24px', 
                        border: '1px solid var(--border-color)' 
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span>Base Plan (<strong style={{ color: 'var(--primary)', fontWeight: '600' }}>{selectedTier.name}</strong>)</span>
                            <span>₹{baseAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                            <span>GST (18%)</span>
                            <span>₹{(baseAmount * 0.18).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                        <div style={{ height: '1px', backgroundColor: 'var(--border-color)', margin: '0 0 14px 0' }}></div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: '700', color: 'var(--text-main)', fontSize: '1.1rem' }}>
                            <span>Total Payable</span>
                            <span style={{ color: 'var(--primary)' }}>₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        </div>
                    </div>
                    
                    <div className="form-group" style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                        <Turnstile 
                            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                            onSuccess={(token) => setTurnstileToken(token)}
                            onError={() => alert('Verification failed. Please try again.')}
                            options={{ theme: 'light' }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ 
                        width: '100%', 
                        marginTop: '10px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center',
                        padding: '18px 24px',
                        fontSize: '1.15rem',
                        borderRadius: '12px'
                    }}>
                        <span>Proceed to Payment</span>
                        <span style={{ fontWeight: 700 }}>₹{totalAmount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
