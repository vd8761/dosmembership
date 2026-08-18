"use client";

export default function Community() {
    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h2 className="section-title text-gradient" style={{ marginBottom: '20px' }}>Join the Exclusive DOS Open Source Community</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Community is at the heart of DOS. Gain access to private Discord channels, open-source code reviews, and exclusive developer networking events.
                    </p>
                </div>
                
                <div className="bento-grid">
                    
                    {/* Wide Bento Card */}
                    <div className="glass-card bento-wide" style={{ padding: '40px', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', background: 'linear-gradient(145deg, rgba(88, 101, 242, 0.1) 0%, #ffffff 100%)' }}>
                        <i className="fa-brands fa-discord animate-float" style={{ fontSize: '4rem', color: '#5865F2', marginBottom: '20px', textShadow: '0 0 20px rgba(88, 101, 242, 0.5)' }}></i>
                        <h4 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Private Discord Network</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '450px' }}>24/7 access to the DOS Open Source Club community. Collaborate on real-world projects, share your wins, and build alongside top-tier developers.</p>
                    </div>
                    
                    {/* Standard Bento Card */}
                    <div className="glass-card" style={{ padding: '40px 30px', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <i className="fa-solid fa-code-pull-request" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '20px' }}></i>
                        <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Open Source Contributions</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Build your GitHub portfolio. Get your PRs reviewed by industry mentors and contribute to live open-source products.</p>
                    </div>

                    {/* Standard Bento Card */}
                    <div className="glass-card" style={{ padding: '40px 30px', borderRadius: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(145deg, rgba(245, 158, 11, 0.1) 0%, #ffffff 100%)' }}>
                        <i className="fa-solid fa-people-group" style={{ fontSize: '2.5rem', color: '#F59E0B', marginBottom: '20px' }}></i>
                        <h4 style={{ fontSize: '1.4rem', marginBottom: '10px' }}>Exclusive Tech Meetups</h4>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Attend weekly syncs, hackathons, and ask-me-anything (AMA) sessions with senior engineers and open-source maintainers.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
