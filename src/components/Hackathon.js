"use client";

export default function Hackathon() {
    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#0f172a', color: 'white' }}>
            
            {/* Background Glow */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(7,169,123,0.15) 0%, transparent 70%)', zIndex: 0 }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(7, 169, 123, 0.2)', color: 'var(--primary)', padding: '8px 16px', borderRadius: '30px', fontWeight: '700', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '20px', textTransform: 'uppercase' }}>
                    <i className="fa-solid fa-moon" style={{ marginRight: '8px' }}></i> Capstone Event
                </div>

                <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '20px', color: 'white' }}>
                    24-Hour Non-Stop <span style={{ color: 'var(--primary)' }}>Hackathon</span>
                </h2>
                
                <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.7' }}>
                    Put your skills to the ultimate test. At the end of the cohort, join our intensive 24-hour overnight hackathon. Form a team, build a complete AI product from scratch, and pitch it to industry judges.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                    <div style={{ flex: '1 1 250px', maxWidth: '350px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '30px 25px', borderRadius: '16px' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(7, 169, 123, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 20px rgba(7, 169, 123, 0.15)', border: '1px solid rgba(7, 169, 123, 0.3)' }}>
                            <i className="fa-solid fa-chalkboard-user" style={{ fontSize: '1.6rem', color: 'var(--primary)' }}></i>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>Expert Mentorship</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>Build your project with Industry Expert Guidance.</p>
                    </div>

                    <div style={{ flex: '1 1 250px', maxWidth: '350px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '30px 25px', borderRadius: '16px' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(7, 169, 123, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 20px rgba(7, 169, 123, 0.15)', border: '1px solid rgba(7, 169, 123, 0.3)' }}>
                            <i className="fa-solid fa-earth-americas" style={{ fontSize: '1.6rem', color: 'var(--primary)' }}></i>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>International Trip</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>Win the ultimate prize and a fully sponsored International Trip.</p>
                    </div>

                    <div style={{ flex: '1 1 250px', maxWidth: '350px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '30px 25px', borderRadius: '16px' }}>
                        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(7, 169, 123, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 20px rgba(7, 169, 123, 0.15)', border: '1px solid rgba(7, 169, 123, 0.3)' }}>
                            <i className="fa-solid fa-handshake" style={{ fontSize: '1.6rem', color: 'var(--primary)' }}></i>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: 'white' }}>Global Placement</h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>Secure an Overseas Internship with a direct Placement Opportunity.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
