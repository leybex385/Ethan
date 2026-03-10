// Premium Portfolio Logic - Ethan Huang

document.addEventListener('DOMContentLoaded', () => {
    // Transparent Navigation on Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scrolling for Nav Links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSec = document.querySelector(targetId);
            if (targetSec) {
                window.scrollTo({
                    top: targetSec.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Timeline Injection
    const timelineContainer = document.getElementById('timeline-container');
    const timelineData = [
        { year: "1989-1993", title: "Formative Years", desc: "NTU Engineering & Applied Mathematics. Developed the quantitative foundation for risk analysis.", image: "https://image.qwenlm.ai/public_source/32f357c9-d67e-416f-9ad3-ed287c1facc4/1975901ad-89b4-41af-8997-5549ed51c0d9.png" },
        { year: "1993-2000", title: "Institutional Growth", desc: "J.P. Morgan Asia-Pacific. Navigated the 1997 Asian Financial Crisis, shaping a risk-first paradigm.", image: "https://image.qwenlm.ai/public_source/32f357c9-d67e-416f-9ad3-ed287c1facc4/1f6d42b92-fea5-4148-b498-7cffc9dff69d.png" },
        { year: "2000-2014", title: "Global Mandates", desc: "UBS, BlackRock, State Street. Managing multi-asset portfolios for sovereign wealth funds in London & NY.", image: "https://image.qwenlm.ai/public_source/32f357c9-d67e-416f-9ad3-ed287c1facc4/13b2ba9d8-67c4-4172-9f5a-ef82d605cf25.png" },
        { year: "2014-Present", title: "The New Frontier", desc: "Founded GlobalVision. Building the bridge between traditional capital and decentralized infrastructure.", image: "https://image.qwenlm.ai/public_source/32f357c9-d67e-416f-9ad3-ed287c1facc4/1bf4952fa-852e-4250-92b5-acea0b85d907.png" }
    ];

    timelineData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.style.display = 'grid';
        div.style.gridTemplateColumns = '1fr 1fr';
        div.style.gap = '4rem';
        div.style.marginBottom = '6rem';
        div.style.alignItems = 'center';
        div.style.opacity = '0';
        div.style.transform = 'translateY(30px)';
        div.style.transition = 'all 0.8s ease';

        const isEven = index % 2 === 0;
        div.innerHTML = `
            <div class="timeline-img" style="order: ${isEven ? 1 : 2};">
                <img src="${item.image}" style="width:100%; border-radius:8px; filter: grayscale(0.5) contrast(1.1);">
            </div>
            <div class="timeline-text" style="order: ${isEven ? 2 : 1}; text-align: ${isEven ? 'left' : 'right'};">
                <span style="color:var(--accent-gold); font-weight:700; font-size:1.2rem; letter-spacing:2px;">${item.year}</span>
                <h3 style="font-size:2rem; margin:1rem 0;">${item.title}</h3>
                <p style="color:var(--text-muted); line-height:1.8;">${item.desc}</p>
            </div>
        `;
        timelineContainer.appendChild(div);
    });

    // Intersection Observer for Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.timeline-item, .card').forEach(el => observer.observe(el));

    // Form Simulation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        btn.textContent = 'SENDING...';
        setTimeout(() => {
            form.innerHTML = `<div style="text-align:center; padding:3rem;">
                <h3 style="color:var(--accent-gold); margin-bottom:1rem;">Inquiry Sent Successfully</h3>
                <p style="color:var(--text-muted);">Thank you for reaching out. We will contact you within 24 hours.</p>
            </div>`;
        }, 1500);
    });
});
