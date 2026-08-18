"use client";

export default function BottomCTA() {
    return (
        <section className="section" style={{ backgroundColor: 'var(--primary)', color: 'white', textAlign: 'center', padding: '80px 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Ready to Start Building AI?</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', color: 'rgba(255,255,255,0.9)' }}>
                    Join the upcoming Fellowship and secure your spot among the next generation of AI builders.
                </p>
                <a href="#pricing" className="btn" style={{ backgroundColor: '#ffffff', color: 'var(--primary)', fontSize: '1.2rem', padding: '15px 40px', display: 'inline-block', borderRadius: '30px', textDecoration: 'none', fontWeight: '800' }}>
                    View Pricing & Enroll
                </a>
            </div>
        </section>
    );
}
