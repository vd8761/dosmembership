"use client";
import { useRef, useEffect } from 'react';

export default function Testimonials() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                // The exact pixel width of one full set of 7 cards (480px card + 40px gap = 520px * 7 = 3640px)
                const setWidth = 3640;
                
                if (carouselRef.current.scrollLeft >= setWidth) {
                    // Instantly jump back by one full set width to create the infinite rotational illusion
                    carouselRef.current.style.scrollBehavior = 'auto';
                    carouselRef.current.scrollLeft -= setWidth;
                    
                    // Force DOM reflow so the jump is applied before smooth scrolling again
                    void carouselRef.current.offsetWidth;
                    
                    // Scroll to the next card smoothly
                    carouselRef.current.scrollBy({ left: 520, behavior: 'smooth' });
                } else {
                    carouselRef.current.scrollBy({ left: 520, behavior: 'smooth' });
                }
            }
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval);
    }, []);

    const testimonials = [
        {
            quote: "I got placed in Clustrex Data Private Limited as a software engineer... Because the next week of the DOS CODEZAP'25, I got this internship and all the knowledge I gained from the DOS club was more useful than my four years of college.",
            image: "https://i.pravatar.cc/150?img=11",
            image: '/testimonials/A_V_K_Shaileshwaran.png', name: "A V K Shaileshwaran",
            role: "CODEZAP'25"
        },
        {
            quote: "I've participated in an international hackathon in Malaysia, but DOS Club provided a truly 100% wholesome experience. It was the best hackathon I've ever participated in, even compared to international hackathons! This opportunity inspired me to realize we have a lot to do, and we should fly higher!",
            image: "https://i.pravatar.cc/150?img=47",
            image: '/testimonials/Gunasree_R.png', name: "Gunasree R",
            role: "CODEZAP'25"
        },
        {
            quote: "We came to the hackathon nervous, as our team was entirely new to each other. The feedback from our first pitch helped tremendously. We worked all night, and every sprint taught us something new. In just 36 hours, we became a great team!",
            image: "/testimonials/Sarvesh_P.png",
            name: "Sarvesh P",
            role: "CODEZAP'26"
        },
        {
            quote: "Honestly, I'm still in shock! The best part wasn't even the win—it was seeing my family and friends celebrate like they had won. A huge thanks to Mohan Sir, Bharathi Raja Sir and the DOS Team for making this moment possible. This wouldn't have happened without your support!",
            image: "https://i.pravatar.cc/150?img=13",
            image: '/testimonials/Nishanth_M.png', name: "Nishanth M",
            role: "CODEZAP'26"
        },
        {
            quote: "Initially, I had doubts about working with new people, but the support and bonding made that fear disappear quickly. What touched me most was seeing my family and friends celebrate our achievement with so much pride. A big thanks to the organizers for this wonderful opportunity to learn, collaborate, and grow!",
            image: "https://i.pravatar.cc/150?img=16",
            image: '/testimonials/Ramya_K.png', name: "Ramya K",
            role: "CODEZAP'26"
        },
        {
            quote: "Before the hackathon, I had no idea how my team would come together. But we connected so well, and it turned into an unforgettable experience. I still can't believe we won and qualified for the next stage! But the happiest part was seeing my parents so incredibly proud—their smiles made me even happier than winning itself.",
            image: "https://i.pravatar.cc/150?img=18",
            image: '/testimonials/Maharaja_K.png', name: "Maharaja K",
            role: "CODEZAP'26"
        },
        {
            quote: "I was nervous about working with a completely new team, but it ended up being an amazing experience. When the results were announced, my family was incredibly emotional and happy. Seeing their happiness made this achievement even more meaningful. This is an experience I'll always cherish.",
            image: "https://i.pravatar.cc/150?img=20",
            image: '/testimonials/Anitha_R.png', name: "Anitha R",
            role: "CODEZAP'26"
        }
    ];

    // Create 3 identical sets to ensure we have enough track to rotate infinitely
    const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="section" style={{ paddingTop: '0px' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="section-title text-gradient" style={{ marginBottom: '15px' }}>Don&apos;t Just Take Our Word for It</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Hear from those who have transformed their careers.</p>
                </div>
            </div>

            <style jsx>{`
                .testimonial-carousel {
                    display: flex;
                    align-items: stretch;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    gap: 40px;
                    padding: 20px 40px;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    scroll-behavior: smooth;
                }
                .testimonial-carousel::-webkit-scrollbar {
                    display: none;
                }
                .testimonial-card {
                    min-width: 480px;
                    flex: 0 0 480px;
                    scroll-snap-align: start;
                    display: flex;
                    flex-direction: column;
                }
                @media (max-width: 768px) {
                    .testimonial-carousel {
                        padding: 20px;
                    }
                }
            `}</style>

            <div className="testimonial-carousel" ref={carouselRef}>
                {infiniteTestimonials.map((t, index) => (
                    <div key={index} className="glass-card testimonial-card" style={{ padding: '40px', borderRadius: '20px', position: 'relative' }}>
                        <i className="fa-solid fa-quote-left" style={{ position: 'absolute', top: '30px', left: '30px', fontSize: '2.5rem', color: 'rgba(7, 169, 123, 0.15)' }}></i>

                        <div style={{ position: 'relative', zIndex: 1, marginTop: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <p style={{ color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '30px', position: 'relative', zIndex: 2, textAlign: 'justify' }}>
                                &quot;{t.quote}&quot;
                            </p>

                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginTop: 'auto' }}>
                                <div style={{ width: '55px', height: '55px', borderRadius: '50%', backgroundColor: 'rgba(7, 169, 123, 0.1)', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.08)' }}>
                                    <img src={t.image} alt={t.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <h4 style={{ margin: '0 0 4px 0', fontSize: '1.15rem', fontWeight: '800' }}>{t.name}</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>{t.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
