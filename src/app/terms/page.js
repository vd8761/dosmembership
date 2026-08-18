export const metadata = { title: "Terms of Service | DOS CLUB" };

export default function TermsPage() {
    return (
        <div className="section" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-dark)', padding: '60px 0' }}>
            <div className="container" style={{ maxWidth: '900px', backgroundColor: 'white', padding: '60px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                <a href="/" style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '30px', display: 'inline-block' }}>&larr; Back to Home</a>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Terms of Service</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Last updated: August 2026</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>1. Introduction & Acceptance of Terms</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '15px' }}>
                            Welcome to DOS Club ("we," "our," "us"). By accessing or using our website, enrolling in our cohorts, or participating in our community, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access our services. These terms govern your use of the DOS Club membership, curriculum, hackathons, and associated resources.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>2. Enrollment, Payments, & No Refund Policy</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '15px' }}>
                            Enrollment into the DOS Club cohort requires full payment of the stated tuition fee via our authorized payment gateways (e.g., Razorpay). You agree to provide current, complete, and accurate purchase and account information for all purchases made via the site.
                        </p>
                        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0', marginTop: '10px' }}>
                            <strong style={{ color: 'var(--text-main)', display: 'block', marginBottom: '10px' }}>Strict No Refund Policy</strong>
                            <p style={{ color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                                Due to the immediate access granted to our proprietary curriculum, digital resources, community platforms, and live hackathon events upon enrollment, <strong>we do not offer refunds under any circumstances</strong>. All sales are final. Please review the curriculum carefully before making a commitment.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>3. Intellectual Property Rights</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '15px' }}>
                            All materials provided to you as part of the DOS Club membership—including but not limited to video lectures, code repositories, assignments, slides, and hackathon briefs—are the exclusive intellectual property of DOS Club. 
                        </p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.7' }}>
                            <li>You may not reproduce, distribute, modify, create derivative works of, publicly display, or publicly perform any of our materials.</li>
                            <li>You may not share your login credentials with third parties.</li>
                            <li>You may not use our materials to build a competing educational platform or curriculum.</li>
                        </ul>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginTop: '15px' }}>
                            Violation of these intellectual property terms will result in immediate termination of your membership without warning, and we reserve the right to pursue legal action.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>4. Code of Conduct</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '15px' }}>
                            DOS Club is a professional community of AI builders and engineers. You are expected to treat all instructors, mentors, and peers with respect. 
                            Harassment, hate speech, spamming, or disruptive behavior during live sessions or within our Discord server will not be tolerated. We reserve the right to suspend or terminate the access of any member found violating our community guidelines.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>5. Hackathon & Project Participation</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '15px' }}>
                            Any code, products, or projects you build during our 24-hour hackathons remain entirely your intellectual property. However, by participating, you grant DOS Club a non-exclusive, royalty-free license to showcase your project (e.g., screenshots, demos, descriptions) on our website and marketing materials to highlight student success.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>6. Disclaimer of Warranties & Limitation of Liability</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '15px' }}>
                            Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. While our curriculum is designed to make you industry-ready, we do not guarantee specific job placements, salaries, or outcomes as a result of taking this program. 
                            In no event will DOS Club be liable for any indirect, incidental, special, consequential or punitive damages arising out of your use of our services.
                        </p>
                    </section>

                    <section>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>7. Modifications to the Service and Prices</h2>
                        <p style={{ lineHeight: '1.7', color: 'var(--text-muted)', marginBottom: '15px' }}>
                            Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
