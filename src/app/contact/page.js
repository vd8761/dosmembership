export const metadata = { title: "Contact Us | DOS CLUB" };

export default function ContactPage() {
    return (
        <div className="section" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark)', padding: '60px 0' }}>
            <div className="container" style={{ maxWidth: '900px', backgroundColor: 'white', padding: '60px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <a href="/" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '30px', display: 'inline-block' }}>&larr; Back to Home</a>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Contact Us</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>Have questions about the upcoming cohort? Reach out to our team.</p>
                
                <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                    <div className="glass-card" style={{ padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#f8fafc', textAlign: 'center' }}>
                        <i className="fa-solid fa-envelope" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}></i>
                        <h3 style={{ marginBottom: '10px' }}>Email Us</h3>
                        <p style={{ color: 'var(--text-muted)' }}><a href="mailto:info@descienceosclub.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@descienceosclub.com</a></p>
                    </div>

                    <div className="glass-card" style={{ padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#f8fafc', textAlign: 'center' }}>
                        <i className="fa-solid fa-phone" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}></i>
                        <h3 style={{ marginBottom: '10px' }}>Call Us</h3>
                        <p style={{ color: 'var(--text-muted)' }}><a href="tel:+919094496385" style={{ color: 'inherit', textDecoration: 'none' }}>+91 90944 96385</a></p>
                    </div>

                    <div className="glass-card" style={{ padding: '30px', borderRadius: '12px', border: '1px solid var(--border-color)', backgroundColor: '#f8fafc', textAlign: 'center' }}>
                        <i className="fa-brands fa-discord" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '15px' }}></i>
                        <h3 style={{ marginBottom: '10px' }}>Discord</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Join our community</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
