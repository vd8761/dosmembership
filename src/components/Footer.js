import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="logo">
                        <a href="/">
                            <Image src="/dos_logo.png" alt="DOS Membership Logo" width={180} height={40} style={{ objectFit: 'contain' }} />
                        </a>
                    </div>

                    <div className="footer-links">
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/refund">Refund Policy</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2026 Descience Open Source Club. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
