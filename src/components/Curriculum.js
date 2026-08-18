"use client";

export default function Curriculum() {
    return (
        <section className="section" style={{ position: 'relative', overflow: 'hidden', paddingTop: '40px' }}>
            
            {/* Background Glow */}
            <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(7,169,123,0.05) 0%, transparent 60%)', zIndex: -1 }}></div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title text-gradient" style={{ marginBottom: '15px' }}>What You&apos;ll Learn in 3 Hours</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>A hands-on, zero-fluff curriculum.</p>
                </div>
                
                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                    
                    {/* The glowing neon line */}
                    <div style={{ position: 'absolute', top: '0', bottom: '0', left: '40px', width: '2px', background: 'linear-gradient(to bottom, transparent, var(--primary), transparent)', boxShadow: '0 0 10px var(--primary)', zIndex: 0 }}></div>

                    {/* Module 1 */}
                    <div className="glass-card" style={{ display: 'flex', gap: '30px', marginBottom: '40px', padding: '30px', borderRadius: '16px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-dark)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--primary)', flexShrink: 0, boxShadow: '0 0 20px rgba(7, 169, 123, 0.4)' }}>
                            <i className="fa-solid fa-brain"></i>
                        </div>
                        <div>
                            <div style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '5px' }}>MODULE 1</div>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '15px' }}>Generative AI Fundamentals</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Understand the core mechanics of LLMs, prompt engineering frameworks, and how to fine-tune responses for your specific use cases. Stop writing bad prompts and start engineering solutions.</p>
                        </div>
                    </div>

                    {/* Module 2 */}
                    <div className="glass-card" style={{ display: 'flex', gap: '30px', marginBottom: '40px', padding: '30px', borderRadius: '16px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-dark)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--primary)', flexShrink: 0, boxShadow: '0 0 20px rgba(7, 169, 123, 0.4)' }}>
                            <i className="fa-solid fa-robot"></i>
                        </div>
                        <div>
                            <div style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '5px' }}>MODULE 2</div>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '15px' }}>Building AI Agents</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Move beyond chat interfaces. Learn to build autonomous agents that can browse the web, execute code, and solve complex multi-step problems without human intervention.</p>
                        </div>
                    </div>

                    {/* Module 3 */}
                    <div className="glass-card" style={{ display: 'flex', gap: '30px', padding: '30px', borderRadius: '16px', position: 'relative', zIndex: 1 }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--bg-dark)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'var(--primary)', flexShrink: 0, boxShadow: '0 0 20px rgba(7, 169, 123, 0.4)' }}>
                            <i className="fa-solid fa-network-wired"></i>
                        </div>
                        <div>
                            <div style={{ color: 'var(--primary)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '5px' }}>MODULE 3</div>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '15px' }}>Workflow Automation</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Integrate AI directly into your business processes. Learn to orchestrate data flows, automate repetitive tasks, and deploy scalable AI solutions using n8n and LangChain.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
