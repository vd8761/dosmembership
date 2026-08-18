import Image from 'next/image';

export default function Header() {
    return (
        <div className="sticky-nav-wrapper">
            {/* Announcement Bar */}
            <div className="announcement-bar">
                ⚡ Limited Seats Available for the Next Cohort. <a href="/#pricing" style={{ textDecoration: 'underline', fontWeight: '700' }}>Enroll Now!</a>
            </div>

            {/* Header */}
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <Image src="/dos_logo.png" alt="DOS Membership Logo" width={180} height={40} style={{ objectFit: 'contain' }} />
                        </a>
                    </div>
                    <a href="/#pricing" className="btn btn-primary">Join the Cohort</a>
                </div>
            </header>
        </div>
    );
}
