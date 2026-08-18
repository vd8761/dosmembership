import Image from 'next/image';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import Stats from '../components/Stats';
import TargetAudience from '../components/TargetAudience';
import Hackathon from '../components/Hackathon';
import Instructors from '../components/Instructors';
import Community from '../components/Community';
import Testimonials from '../components/Testimonials';
import BottomCTA from '../components/BottomCTA';

export default function Home() {
    return (
        <>
            {/* Header rendered globally in layout */}

            {/* Hero Section */}
            <section className="hero" style={{ background: '#f8fafc', padding: '20px 0 60px 0', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="hero-grid">
                        {/* Left Column: Text Content */}
                        <div className="hero-content">
                            <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', marginBottom: '10px' }}>
                                DESCIENCE OPEN SOURCE CLUB
                            </div>
                            <h1>Build Real AI Products.<br /><span>Become Industry Ready.</span></h1>
                            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '25px', lineHeight: '1.6' }}>
                                Master Applied GenAI in our 27 weeks, hands-on Fellowship. Choose your path: Build and launch your AI startup or secure a high-impact role. Includes 100+ hours of expert training.
                            </p>
                            <a href="#pricing" className="btn btn-primary" style={{ fontSize: '0.95rem', padding: '12px 24px', borderRadius: '8px' }}>Claim Your Spot</a>
                        </div>

                        {/* Right Column: Video Embed */}
                        <div className="hero-video">
                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid var(--border-color)' }}>
                                <video
                                    src="/edition-2.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Subtle Light Pattern Background */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.4, backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px', zIndex: 0 }}></div>
            </section>

            {/* Stats Section */}
            <Stats />

            {/* Target Audience */}
            <TargetAudience />

            {/* What's Inside Section (Bento Grid) */}
            <section className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', paddingTop: '40px', paddingBottom: '40px' }}>
                <div className="container">
                    <h2 className="section-title" style={{ fontWeight: '800' }}>What&apos;s Inside?</h2>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-calendar-week"></i></div>
                            <div>
                                <h3 style={{ fontWeight: '700' }}>27 weeks Fellowship</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Intensive 27 weeks program designed to take you from basics to advanced AI implementations.</p>
                            </div>
                        </div>

                        <div className="feature-card bento-col-2" style={{ backgroundColor: 'rgba(7, 169, 123, 0.03)' }}>
                            <div className="feature-icon" style={{ backgroundColor: 'var(--primary)', color: 'white' }}><i className="fa-solid fa-rocket"></i></div>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Build Your Own GenAI Products</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Stop watching tutorials. Start building real, deployable AI applications. You'll architect, train, and launch your own models from scratch.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-certificate"></i></div>
                            <div>
                                <h3 style={{ fontWeight: '700' }}>Professional Certificate</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Get certified by DOS upon successful completion of your capstone project.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-clock"></i></div>
                            <div>
                                <h3 style={{ fontWeight: '700' }}>150+ Hours of Learning</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Deep dive into Prompt Engineering, RAG, AI Agents, and Workflow Automation.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-brands fa-discord"></i></div>
                            <div>
                                <h3 style={{ fontWeight: '700' }}>Private Discord Network</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Join an elite developer community of builders, founders, and AI enthusiasts.</p>
                            </div>
                        </div>

                        <div className="feature-card bento-col-2" style={{ backgroundColor: '#fff' }}>
                            <div className="feature-icon"><i className="fa-solid fa-chalkboard-user"></i></div>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Expert Instructors & Sessions</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Learn directly from industry leaders who are actively building in the AI space. Access exclusive Q&A and architecture teardowns.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-laptop-code"></i></div>
                            <div>
                                <h3 style={{ fontWeight: '700' }}>Project-based Learning</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Hands-on workshops where you write code and solve real-world problems.</p>
                            </div>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon"><i className="fa-solid fa-video"></i></div>
                            <div>
                                <h3 style={{ fontWeight: '700' }}>Live Classes + Pre-recorded</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Flexible learning with interactive live sessions and recorded materials.</p>
                            </div>
                        </div>

                        <div className="feature-card bento-col-2" style={{ backgroundColor: 'rgba(7, 169, 123, 0.03)' }}>
                            <div className="feature-icon" style={{ backgroundColor: 'var(--primary)', color: 'white' }}><i className="fa-solid fa-gift"></i></div>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontWeight: '800' }}>Goodies & GPU Credits</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Exclusive DOS merch shipped worldwide and GPU credits to power your intensive AI models.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hackathon (Replaced Curriculum) */}
            <Hackathon />

            {/* Instructors */}
            <Instructors />

            {/* Community */}
            <Community />

            {/* Testimonials */}
            <Testimonials />

            {/* Pricing Component */}
            <Pricing />

            {/* FAQ Component */}
            <FAQ />

            {/* Bottom CTA Component */}
            <BottomCTA />

            {/* Footer rendered globally in layout */}
        </>
    );
}
