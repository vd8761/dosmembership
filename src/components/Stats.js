"use client";

import { useEffect, useState, useRef } from 'react';

function CountUp({ end, suffix = '', duration = 2500 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        let observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    let startTime = null;
                    const animate = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);
                        
                        // easeOutQuart function for smooth deceleration
                        const easeOut = 1 - Math.pow(1 - percentage, 4);
                        
                        setCount(Math.floor(end * easeOut));
                        
                        if (percentage < 1) {
                            window.requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };
                    window.requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
    const statsData = [
        { num: 1500, suffix: '+', desc: 'Community Members', delay: '0s' },
        { num: 50, suffix: '+', desc: 'Workshops & Webinars', delay: '0.15s' },
        { num: 10, suffix: '+', desc: 'Partner Institutions', delay: '0.3s' },
        { num: 100, suffix: '', desc: 'DOS Club Graduates', delay: '0.45s' },
        { num: 5, suffix: '', desc: 'International Internships', delay: '0.6s' },
        { num: 5, suffix: '', desc: 'Domestic Internships', delay: '0.75s' },
    ];

    return (
        <section style={{ position: 'relative', zIndex: 10, padding: '20px 20px 0 20px' }}>
            <div className="container">
                
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '10px' }}>
                        Our Impact
                    </div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800' }}>The Power of Our Network</h2>
                </div>

                <div className="glass-panel" style={{ padding: '50px 40px', borderRadius: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'center' }}>
                    
                    {statsData.map((stat, index) => (
                        <div key={index} className="animate-blur-reveal" style={{ animationDelay: stat.delay }}>
                            <div className="text-glow" style={{ fontSize: '3.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', letterSpacing: '-2px', lineHeight: '1' }}>
                                <CountUp end={stat.num} suffix={stat.suffix} />
                            </div>
                            <div style={{ color: 'var(--text-main)', fontSize: '1rem', marginTop: '10px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                {stat.desc}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
