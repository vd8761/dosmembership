"use client";

export default function Testimonials() {
    return (
        <section className="section" style={{ paddingTop: '0px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title text-gradient" style={{ marginBottom: '15px' }}>Don&apos;t Just Take Our Word for It</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Hear from those who have transformed their careers.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    
                    <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', position: 'relative' }}>
                        <i className="fa-solid fa-quote-left" style={{ position: 'absolute', top: '30px', left: '30px', fontSize: '2.5rem', color: 'rgba(7, 169, 123, 0.15)' }}></i>
                        
                        <div style={{ position: 'relative', zIndex: 1, marginTop: '20px' }}>
                            <p style={{ color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '30px', position: 'relative', zIndex: 2 }}>
                                &quot;Before this cohort, I was only integrating basic APIs. Now, I&apos;ve built a custom RAG pipeline for my company that reduced support tickets by 40%. The hands-on curriculum is unmatched.&quot;
                            </p>
                            
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                                <img src="https://i.pravatar.cc/150?img=41" alt="Sarah Jenkins" style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }} />
                                <div>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', fontWeight: '800' }}>Sarah Jenkins</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', letterSpacing: '1px' }}>SOFTWARE ENGINEER</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card" style={{ padding: '40px', borderRadius: '20px', position: 'relative' }}>
                        <i className="fa-solid fa-quote-left" style={{ position: 'absolute', top: '30px', left: '30px', fontSize: '2.5rem', color: 'rgba(7, 169, 123, 0.15)' }}></i>
                        
                        <div style={{ position: 'relative', zIndex: 1, marginTop: '20px' }}>
                            <p style={{ color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '30px', position: 'relative', zIndex: 2 }}>
                                &quot;I didn&apos;t have a technical co-founder. Thanks to the Workflow Automation module, I built my entire MVP using AI agents and n8n. We just secured our pre-seed funding!&quot;
                            </p>
                            
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                                <img src="https://i.pravatar.cc/150?img=15" alt="Michael Kim" style={{ width: '55px', height: '55px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }} />
                                <div>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', fontWeight: '800' }}>Michael Kim</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', letterSpacing: '1px' }}>STARTUP FOUNDER</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
