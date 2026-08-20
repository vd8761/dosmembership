import React from 'react';
import Image from 'next/image';

const IndustryNetwork = () => {
    // Row 1 uses logos 1-10
    const row1 = Array.from({ length: 10 }, (_, i) => `/industry/${i + 1}.png`);
    // Row 2 uses logos 11-20
    const row2 = Array.from({ length: 10 }, (_, i) => `/industry/${i + 11}.png`);

    return (
        <section className="section" style={{ padding: '60px 0', backgroundColor: '#0b0f19', color: '#fff', borderTop: '1px solid #1f2937', borderBottom: '1px solid #1f2937' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: 0, fontFamily: 'var(--font-heading)' }}>
                        Industry & Corporate Network
                    </h2>
                </div>
            </div>

            <div className="marquee-container" style={{ paddingTop: 0 }}>
                {/* Row 1: moving left */}
                <div className="marquee-row left">
                    {[...row1, ...row1].map((src, index) => (
                        <div className="marquee-item" key={`row1-${index}`}>
                            <Image src={src} alt="Industry Partner" width={220} height={100} style={{ objectFit: "contain" }} unoptimized />
                        </div>
                    ))}
                </div>

                {/* Row 2: moving right */}
                <div className="marquee-row right">
                    {[...row2, ...row2].map((src, index) => (
                        <div className="marquee-item" key={`row2-${index}`}>
                            <Image src={src} alt="Industry Partner" width={220} height={100} style={{ objectFit: "contain" }} unoptimized />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryNetwork;

