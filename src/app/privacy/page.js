export const metadata = { title: "Privacy Policy | DOS CLUB" };

export default function PrivacyPage() {
    return (
        <div className="section" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark)', padding: '60px 0' }}>
            <div className="container" style={{ maxWidth: '900px', backgroundColor: 'white', padding: '60px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <a href="/" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '30px', display: 'inline-block' }}>&larr; Back to Home</a>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Privacy Policy</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Last updated: August 2026</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>1. Information We Collect</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>We collect information you provide directly to us when you register for the cohort, including your name, email address, phone number, and payment information (processed securely via Razorpay).</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>2. How We Use Your Information</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>We use the information we collect to provide, maintain, and improve our services, to process your transactions, and to send you technical notices, updates, and support messages.</p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>3. Data Security</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
