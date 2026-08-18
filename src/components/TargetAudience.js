"use client";

export default function TargetAudience() {
    return (
        <section className="section" style={{ paddingTop: '40px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title" style={{ marginBottom: '15px' }}>Is This For You?</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Our Fellowship is designed for driven builders.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                    
                    <div className="glass-card" style={{ padding: '40px 30px', borderRadius: '16px', textAlign: 'center' }}>
                        <div className="pulse-ring-wrapper" style={{ marginBottom: '30px' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(7, 169, 123, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: 'var(--primary)' }}>
                                <i className="fa-solid fa-code animate-float"></i>
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Developers & Engineers</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            Upgrade your stack. Move beyond traditional software engineering and learn to build, integrate, and deploy AI models and autonomous agents.
                        </p>
                    </div>

                    <div className="glass-card" style={{ padding: '40px 30px', borderRadius: '16px', textAlign: 'center' }}>
                        <div className="pulse-ring-wrapper" style={{ marginBottom: '30px' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(7, 169, 123, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: 'var(--primary)' }}>
                                <i className="fa-solid fa-lightbulb animate-float" style={{ animationDelay: '1s' }}></i>
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Founders & Builders</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            Stop waiting for a technical co-founder. Learn to rapidly prototype AI products, automate your operations, and get to market faster.
                        </p>
                    </div>

                    <div className="glass-card" style={{ padding: '40px 30px', borderRadius: '16px', textAlign: 'center' }}>
                        <div className="pulse-ring-wrapper" style={{ marginBottom: '30px' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(7, 169, 123, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: 'var(--primary)' }}>
                                <i className="fa-solid fa-graduation-cap animate-float" style={{ animationDelay: '2s' }}></i>
                            </div>
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Tech Students</h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            Bridge the gap between academic theory and industry reality. Build a portfolio of real-world AI projects to stand out to top recruiters.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
