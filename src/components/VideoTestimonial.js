"use client";

export default function VideoTestimonial() {
    return (
        <section className="section" style={{ background: '#f8fafc', borderBottom: '1px solid var(--border-color)', padding: '20px 0 80px 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '50px' }}>
                    <div className="badge" style={{ marginBottom: '15px' }}>Hear from Our Fellows</div>
                    <h2 className="section-title">Real Impact. Real Stories.</h2>
                    <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
                        See how the Descience OS Club Fellowship is transforming careers and building the next generation of AI leaders.
                    </p>
                </div>
                
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    maxWidth: '100%' 
                }}>
                    <div style={{ 
                        position: 'relative', 
                        width: '100%', 
                        maxWidth: '350px', // Constrain width for vertical video
                        aspectRatio: '9/16',
                        
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        border: '8px solid white'
                    }}>
                        <iframe 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                            src="https://www.youtube.com/embed/IflywDuyEgY?autoplay=1&mute=1&loop=1&playlist=IflywDuyEgY&controls=1&fs=1&rel=0"
                            title="Fellowship Testimonial" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
