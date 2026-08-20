"use client";

export default function TrustedBy() {
    const logos = [
        "1.png",
        "2.png",
        "3.png",
        "4.png",
        "5.jpg",
        "6.png",
        "7.png",
        "8.jpg",
        "9.png"
    ];

    return (
        <section className="section" style={{ background: '#ffffff', borderBottom: '1px solid var(--border-color)', padding: '60px 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h3 style={{ 
                    fontSize: '1.2rem', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    color: 'var(--text-muted)', 
                    marginBottom: '50px',
                    fontWeight: '600',
                    fontFamily: 'var(--font-heading)'
                }}>
                    Trusted By Leading Colleges & Institutes
                </h3>
                
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '50px', // slightly larger gap
                }}>
                    {logos.map((logo, index) => (
                        <div key={index} style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            width: '180px',
                            height: '90px',
                        }}>
                            <img 
                                src={`/trustedby/${encodeURIComponent(logo)}`} 
                                alt="Trusted Partner Logo" 
                                style={{ 
                                    maxHeight: '75px', 
                                    maxWidth: '170px', 
                                    objectFit: 'contain',
                                    transform: (logo === '2.png' || logo === '5.jpg') ? 'scale(1.7)' : 'scale(1)'
                                }} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
