"use client";

export default function Instructors() {
    const team = [
        { name: "Alex Rivera", role: "LEAD AI ENGINEER", image: "https://i.pravatar.cc/150?img=11", desc: "Ex-Google AI researcher. Built and scaled generative models serving millions of requests daily." },
        { name: "Jordan Lee", role: "AI FOUNDER", image: "https://i.pravatar.cc/150?img=60", desc: "Expert in building autonomous agents and orchestrating complex B2B workflow automations." },
        { name: "Dr. Sarah Chen", role: "ML RESEARCHER", image: "https://i.pravatar.cc/150?img=5", desc: "Ph.D. in Deep Learning. Specializes in efficient model fine-tuning and retrieval-augmented generation (RAG)." },
        { name: "David Kim", role: "FULL-STACK AI", image: "https://i.pravatar.cc/150?img=12", desc: "Master of bridging the gap between raw AI models and beautiful, responsive web applications." },
        { name: "Maya Patel", role: "DATA SCIENTIST", image: "https://i.pravatar.cc/150?img=47", desc: "Focuses on vector databases, semantic search, and processing massive datasets for AI consumption." },
        { name: "Elena Rostova", role: "AI STRATEGY", image: "https://i.pravatar.cc/150?img=44", desc: "Advises Fortune 500s on AI governance, safety guardrails, and responsible model deployment." }
    ];

    return (
        <section className="section" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
            <style jsx>{`
                .team-carousel {
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    gap: 30px;
                    padding: 20px;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .team-carousel::-webkit-scrollbar {
                    display: none;
                }
                .carousel-item {
                    scroll-snap-align: center;
                    flex: 0 0 320px;
                }
            `}</style>
            
            <div className="container" style={{ maxWidth: '1400px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '10px' }}>Our Mentors</div>
                    <h2 className="section-title" style={{ marginBottom: '15px', fontWeight: '800' }}>Your Learning Team</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Learn from Experts actively building in the industry.</p>
                </div>
                
                {/* Horizontal Snap Carousel */}
                <div className="team-carousel">
                    {team.map((member, i) => (
                        <div key={i} className="carousel-item glass-card" style={{ padding: '35px 25px', borderRadius: '16px', textAlign: 'center', backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', transition: 'all 0.3s ease' }} 
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(7, 169, 123, 0.4)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.05)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <img 
                                src={member.image} 
                                alt={member.name} 
                                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 20px', display: 'block', border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                            />
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '5px', color: 'var(--text-main)' }}>{member.name}</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px', marginBottom: '15px' }}>{member.role}</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{member.desc}</p>
                        </div>
                    ))}
                </div>
                
                {/* Visual indicator for swiping */}
                <div style={{ textAlign: 'center', marginTop: '20px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <i className="fa-solid fa-arrows-left-right" style={{ marginRight: '8px' }}></i>
                    Swipe to see more
                </div>
            </div>
        </section>
    );
}
