export const metadata = { title: "Refund Policy | DOS CLUB" };

export default function RefundPage() {
    return (
        <div className="section" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark)', padding: '60px 0' }}>
            <div className="container" style={{ maxWidth: '900px', backgroundColor: 'white', padding: '60px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <a href="/" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '30px', display: 'inline-block' }}>&larr; Back to Home</a>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Refund Policy</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Last updated: August 2026</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Strict No Refund Policy</h2>
                        <div style={{ padding: '25px', backgroundColor: '#f8fafc', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0' }}>
                            <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '15px', fontSize: '1.2rem' }}>All Sales Are Final</strong>
                            <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.7', fontSize: '1.05rem' }}>
                                Due to the immediate access granted to our proprietary curriculum, digital resources, community platforms, and live hackathon events upon enrollment, <strong>we do not offer refunds under any circumstances</strong>. Please review the curriculum carefully before making a commitment.
                            </p>
                        </div>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginTop: '20px' }}>
                            By enrolling in DOS Club, you acknowledge that you have read and agree to this no-refund policy. We provide extensive details about our syllabus, instructors, and community prior to enrollment to ensure you can make an informed decision.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Exceptions</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)' }}>
                            There are absolutely no exceptions to this refund policy. This includes, but is not limited to:
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.7', marginTop: '10px' }}>
                            <li>Change of mind or schedule conflicts.</li>
                            <li>Failure to participate in hackathons or complete the coursework.</li>
                            <li>Dissatisfaction with the curriculum structure or pacing.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
