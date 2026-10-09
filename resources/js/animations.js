import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations(threeManager, config = {}) {
    // 1. Lenis Smooth Scroll Setup
    const lenis = new Lenis({
        duration: parseFloat(config.scroll_duration) || 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
        smoothTouch: false
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', (e) => {
        ScrollTrigger.update();
        if (threeManager) {
            const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1);
            threeManager.updateScrollProgress(scrollProgress);
        }
    });

    // 2. Custom Interactive Neon Cursor Dot
    const cursorDot = document.getElementById('cursor-dot');
    if (cursorDot && config.cursor_effect_enabled !== 'false') {
        window.addEventListener('mousemove', (e) => {
            gsap.to(cursorDot, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: 'power2.out'
            });
        });

        // Hover expand on interactive elements
        document.querySelectorAll('a, button, input, textarea').forEach((el) => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursorDot, { scale: 2.5, backgroundColor: 'rgba(6, 182, 212, 0.4)', duration: 0.2 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursorDot, { scale: 1.0, backgroundColor: 'rgba(59, 130, 246, 0.4)', duration: 0.2 });
            });
        });
    }

    // 3. GSAP Section Reveal Sequences
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
        gsap.fromTo(sec.children, 
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: parseFloat(config.transition_speed) || 0.8,
                stagger: 0.15,
                ease: config.easing_function || 'power2.out',
                scrollTrigger: {
                    trigger: sec,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}
