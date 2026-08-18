"use client";

export default function Instructors() {
    const team = [
        { name: "Mr. Sathya Prakash Sekaran", role: "DIRECTOR - HR", image: "/experts/Sathya_Prakash_Sekaran.png", desc: "Ziffity Solutions" },
        { name: "Mr. Subburaj Thangappalam", role: "AGILE PROJECT MANAGER & PRACTITIONER", image: "/experts/Subbu_Raj.png", desc: "L&T Technology Services" },
        { name: "Mr. Nirmal Jeyavelraja", role: "FOUNDER & DIRECTOR", image: "/experts/Nirmal_Jeyavelraj.png", desc: "Wizardlenx XR Studio (OPC) Pvt Ltd" },
        { name: "Mr. Karthikeyan Loganathan", role: "PROGRAMMING ANALYST", image: "/experts/Karthikeyan_Loganathan.png", desc: "Cognizant" },
        { name: "Mr. Ashwin G", role: "BUSINESS OPERATIONS LEAD", image: "/experts/Ashwin_G.png", desc: "Wizardlenz XR Studio" }
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
                        <div key={i} className="carousel-item glass-card" style={{ padding: '35px 25px', borderRadius: '16px', textAlign: 'center', backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', transition: 'all 0.3s ease', display: 'flex', flexDirection: 'column' }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(7, 169, 123, 0.4)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.05)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://i.pravatar.cc/150?img=11"; }}
                                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 20px', display: 'block', border: '3px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                            />
                            <div style={{ minHeight: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: 'var(--text-main)', margin: 0 }}>{member.name}</h3>
                            </div>
                            <div style={{ minHeight: '40px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', marginBottom: '15px' }}>
                                <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '1px', margin: 0 }}>{member.role}</p>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: 'auto' }}>{member.desc}</p>
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
