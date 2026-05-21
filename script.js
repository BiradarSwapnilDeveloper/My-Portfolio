// 1. Initialize Particles.js
document.addEventListener("DOMContentLoaded", () => {
    // Basic settings for Particles JS
    particlesJS("particles-js", {
        particles: {
            number: { value: window.innerWidth < 768 ? 30 : 80, density: { enable: true, value_area: 800 } },
            color: { value: ["#00f5d4", "#f15bb5", "#9b5de5", "#fee440", "#00bbf9"] },
            shape: { type: "polygon", polygon: { nb_sides: 6 } },
            opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 4, random: true, anim: { enable: true, speed: 3, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.2, width: 1.5 },
            move: { enable: true, speed: 2.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "repulse" }, resize: true },
            modes: { 
                bubble: { distance: 200, size: 8, duration: 2, opacity: 1, speed: 3 }, 
                repulse: { distance: 200, duration: 0.4 } 
            }
        },
        retina_detect: true
    });

    // 2. Initialize AOS animations
    AOS.init({ once: true, offset: 100, duration: 800, easing: 'ease-out-cubic' });

    // 3. Initialize Vanilla Tilt for Glass Cards & Skill Cards
    if (window.innerWidth > 768) {
        VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
            max: 8,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
            scale: 1.02
        });
    }

    // 4. Progress Bar Scroll Animation
    const progressBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.getAttribute('data-width');
                entry.target.style.width = width;
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});

// 5. Typing Effect for Subtitle
const texts = ["Cybersecurity Enthusiast", "Frontend Developer", "Tech Learner"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let typingElement = document.querySelector(".typing-text");

(function type() {
    if (count === texts.length) count = 0;
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;
    if (letter.length === currentText.length) {
        count++; index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}());

// 6. Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
const htmlTag = document.documentElement;
let isDarkTheme = true;

themeBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    htmlTag.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');

    const icon = themeBtn.querySelector('i');
    if (isDarkTheme) {
        icon.className = 'fas fa-sun';
        themeBtn.style.transform = 'rotate(180deg)';
    } else {
        icon.className = 'fas fa-moon';
        themeBtn.style.transform = 'rotate(0deg)';
    }
});

// 7. Mobile Nav Logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').className = navLinks.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').className = 'fas fa-bars';
    });
});

// 8. Dynamic Certifications Loading
const certificates = [
    { title: "Gemini Certification for Students (K12)", company: "Google", icon: "fab fa-google", type: "google-cert", date: "Dec 2025", link: "https://edu.exceedlms.com/student/award/uWbxKTfPjPQ9TBrSEW9G5GsZ" },
    { title: "Gemini Certified Educator", company: "Google", icon: "fab fa-google", type: "google-cert", date: "Dec 2025", link: "https://edu.google.accredible.com/3973324c-80d0-4cc8-9f4e-57582545b74d" },
    { title: "Certified in Gemini Cert for University Students", company: "Google", icon: "fab fa-google", type: "google-cert", date: "Dec 2025", link: "0x43329079bcd9b42dc246588aaab8f99de1b35ccf51c804668ae1bbaa9e44bb33" },
    { title: "Cyber Job Simulation", company: "Deloitte Australia", icon: "fas fa-shield-alt", type: "deloitte-cert", date: "Sep 2025", link: "HgStiLzBnuKrL8j9e" },
    { title: "Data Visualization: Empowering Business", company: "Tata Group", icon: "fas fa-chart-pie", type: "tata-cert", date: "Oct 2025", link: "ngAtpBeMSqiFtJAxB" },
    { title: "GenAI Powered Data Analytics", company: "Tata Group", icon: "fas fa-brain", type: "tata-cert", date: "Aug 2025", link: "AnHBiyoKBrtiMZYpA" },
    { title: "Certified in Foundation of Log Analysis for Cyber Defense", company: "Red Team Leaders", icon: "fas fa-user-secret", type: "", date: "May 2026", link: "https://courses.redteamleaders.com/completion/3eb8d09fd6295202" },
    { title: "Certified in Fundamentals of Game Hacking Development", company: "Red Team Leaders", icon: "fas fa-user-secret", type: "", date: "May 2026", link: "https://courses.redteamleaders.com/completion/b1b16810d7bfdc8e" },
    { title: "Certified Red Team Operations", company: "Red Team Leaders", icon: "fas fa-user-secret", type: "", date: "Dec 2025", link: "https://courses.redteamleaders.com/exam-completion/4077f30494323558" },
    { title: "Global Cyber with Data Privacy", company: "DLA Piper", icon: "fas fa-lock", type: "", date: "Nov 2025", link: "FWAjS2FBr559pf3QT" },
    { title: "Software Engineering (forage)", company: "Electronic Arts (EA)", icon: "fas fa-gamepad", type: "", date: "Nov 2025", link: "3bdSM5MbFHDugdHyz" },
    { title: "JAVA Object Oriented Programing", company: "LinkedIn", icon: "fab fa-java", type: "", date: "Nov 2025", link: "a45be7ccb814fe6a16e20666385136ec5713ef72e1cbb448b908e673dedf159f" },
    { title: "Cloud Platform Job Simulation", company: "Verizon Robotics", icon: "fas fa-cloud", type: "", date: "Oct 2025", link: "p56Kv9nCcXPdgjJtP" },
    { title: "Certified in AI ChatBot Competition", company: "GH Raisoni University", icon: "fas fa-robot", type: "", date: "Sep 2025", link: "" },
    { title: "Conducting a SWOT Analysis", company: "LinkedIn", icon: "fas fa-chart-line", type: "", date: "Oct 2025", link: "4f069668ec8b3f9823ab1e37ee4bd64929cc101f8ef931e64667653f35e0fb07" },
    { title: "HackerRank Certified in ( CSS )", company: "HackerRank", icon: "fab fa-css3-alt", type: "", date: "Sep 2025", link: "https://www.hackerrank.com/certificates/e987bc71c402" },
    { title: "Software Engineering Certified", company: "Blackbird", icon: "fas fa-code", type: "", date: "Oct 2025", link: "u4tYDKR48w4cTa4da" },
    { title: "Cybersecurity Job Simulation", company: "Datacom", icon: "fas fa-shield-alt", type: "", date: "Oct 2025", link: "cGoEezds499kExLR9" },
    { title: "Developer and Technology", company: "Accenture UK & Ireland", icon: "fas fa-laptop-code", type: "", date: "Oct 2025", link: "zkR5ZEtgnpCh8v5xW" },
    { title: "Cybersecurity Job Simulation", company: "Mastercard", icon: "fas fa-credit-card", type: "", date: "Oct 2025", link: "joy8aD7WE4bfFvfom" },
    { title: "Software Engineering", company: "New York Jobs CEO Council", icon: "fas fa-briefcase", type: "", date: "Oct 2025", link: "E9gm7N5fwQGfGDbwC" },
    { title: "Google Cloud Security Command Center", company: "LinkedIn", icon: "fas fa-cloud", type: "", date: "Oct 2025", link: "271cfc9536b3bcf52f6ea85cb375677216be684beeed1d692d2055a39a52a89c" },
    { title: "Kali Linux for Advanced Pen Testing", company: "LinkedIn", icon: "fab fa-linux", type: "", date: "Oct 2025", link: "f2073e8e0044b899193094df0888e5515dbabdc1cad5703d6ed16228307ecb6e" },
    { title: "Software Engineering Job Simulation", company: "Hewlett Packard Enterprise", icon: "fas fa-server", type: "", date: "Sep 2025", link: "2BwwD7c5tSJezZxjm" },
    { title: "Front-End Software Engineering", company: "Skyscanner", icon: "fas fa-plane", type: "", date: "Sep 2025", link: "TdRJKzWXFfd5zLQTe" },
    { title: "Solutions Architecture Job Simulation", company: "Amazon Web Services", icon: "fab fa-aws", type: "", date: "Aug 2025", link: "wxqt3phGhNXnPnCyv" },
    { title: "Cybersecurity Analyst", company: "Tata Group", icon: "fas fa-user-shield", type: "tata-cert", date: "Sep 2025", link: "gvWW8ocq4xXtqP72M" },
    { title: "Python Programming Bootcamp", company: "Indeed Inspiring Infotech", icon: "fab fa-python", type: "", date: "2025", link: "" },
    { title: "HP Life Data Science & Analytics", company: "HP", icon: "fas fa-chart-bar", type: "", date: "Jun 2025", link: "2b5a5f79-2e1e-452c-8f0f-6e9d1dd0d668" },
    { title: "Certified In Ethical Hacking Internship", company: "AICTE", icon: "fas fa-user-ninja", type: "", date: "Mar 2025", link: "STU68021dbd7faa51744969149" },
    { title: "HP Life Certified in Cybersecurity", company: "HP", icon: "fas fa-shield-virus", type: "", date: "Jun 2025", link: "02fbf934-5c9c-4126-818d-3b165ab1d833" },
    { title: "EduSkills Course Completion Certificate", company: "EduSkills Academy", icon: "fas fa-graduation-cap", type: "", date: "Mar 2025", link: "" }
];

const certContainer = document.getElementById('cert-container');
const showAllBtn = document.getElementById('show-all-certs');
let showingAll = false;

function renderCertificates(all = false) {
    certContainer.innerHTML = '';
    const displayCount = all ? certificates.length : 6;

    for (let i = 0; i < displayCount; i++) {
        const cert = certificates[i];
        const certHTML = `
            <div class="cert-card glass-card hover-pop ${cert.type}" data-aos="zoom-in" data-aos-delay="${i * 50}">
                <div class="cert-header">
                    <div class="cert-icon"><i class="${cert.icon}"></i></div>
                    <div>
                        <div class="cert-title">${cert.title}</div>
                        <div class="cert-company">${cert.company}</div>
                    </div>
                </div>
                <div class="cert-footer">
                    <span style="display:flex; flex-direction:column; gap:0.2rem;">
                        <span>Issued: <strong class="gradient-text">${cert.date}</strong></span>
                        ${cert.link ? (cert.link.startsWith('http') ? `<a href="${cert.link}" target="_blank" class="cert-link accent-link"><i class="fas fa-external-link-alt"></i> Credential</a>` : `<span class="cert-link" title="Credential ID: ${cert.link}" style="font-size:0.8rem; color:var(--text-muted);"><i class="fas fa-fingerprint"></i> ID: ${cert.link.substring(0, 8)}...</span>`) : ''}
                    </span>
                </div>
            </div>
        `;
        certContainer.insertAdjacentHTML('beforeend', certHTML);
    }
}

renderCertificates(false);

showAllBtn.addEventListener('click', () => {
    showingAll = !showingAll;
    renderCertificates(showingAll);
    showAllBtn.innerHTML = showingAll ? 'Show Less <i class="fas fa-chevron-up"></i>' : 'Show All <i class="fas fa-chevron-down"></i>';
    if (!showingAll) document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
});



// 9. Phone Copy Details Logic
const phoneCopy = document.getElementById('phone-copy');
const tooltip = phoneCopy.querySelector('.copy-tooltip');
phoneCopy.addEventListener('click', () => {
    navigator.clipboard.writeText("+91 9067693696").then(() => {
        tooltip.classList.add('show');
        setTimeout(() => tooltip.classList.remove('show'), 2000);
    });
});

// 10. Node.js Backend & EmailJS Logistics
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const successAnim = document.getElementById('success-anim');
const btnText = submitBtn.querySelector('.btn-text');
const btnIcon = submitBtn.querySelector('i');

// Make sure EmailJS is fully initialized before sending
emailjs.init("R3Pp0_LGWTXhUZMgb");

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    btnText.textContent = 'Sending Details...';
    btnIcon.className = 'fas fa-spinner fa-spin';

    try {
        const templateParams = {
            name: name,
            email: email,
            message: message,
            to_name: "Swapnil Biradar",
            to_email: "forbusinessuse205@gmail.com",
            reply_to: email
        };

        // Send email via EmailJS with standard arguments
        const response = await emailjs.send(
            "service_06tdhgb",
            "template_lmtabh8",
            templateParams,
            "R3Pp0_LGWTXhUZMgb"
        );

        if (response.status === 200) {
            contactForm.reset();
            successAnim.classList.add('active');

            setTimeout(() => {
                successAnim.classList.remove('active');
                btnText.textContent = 'Send Message';
                btnIcon.className = 'fas fa-paper-plane';
            }, 4500);
        }

    } catch (err) {
        console.error('Error sending email:', err);
        alert(`Failed to send the message.`);
        btnText.textContent = 'Send Message';
        btnIcon.className = 'fas fa-paper-plane';
    }
});

// 11. AI Chatbot Logic
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input-field');
const chatbotSend = document.getElementById('chatbot-send');

const portfolioContext = `
You are an AI assistant for Biradar Swapnil's portfolio website. 
Answer concisely and politely based on this information:
- Name: Biradar Swapnil
- Education: B.Tech (CSE) at JSPM University Pune.
- Interests: Cybersecurity, Frontend Dev & Operating Systems, Cultural Exchange Programs.
- Experience: Cybersecurity Intern at AICTE (Jan 2025 - Mar 2025, network security, ethical hacking, Nmap, Wireshark, Burp Suite). Volunteer Assistant at JFE Shoji Corporation and SuryaLogix (recruitment coordination).
- Skills: Cybersecurity (Linux, Ethical Hacking, Network Security), Frontend (HTML5, CSS3, JS, React, REST API), Backend/Dev (Node.js, Express, Java, Python, Git).
- Certifications: Gemini K12/Educator, Cyber Job Simulation (Deloitte, Mastercard, Datacom), State Level AI ChatBot winner at GH Raisoni Univ (Sep 2025).
- Contact: swapnil.biradar.cse@gmail.com, Phone: +91 9067693696. Hosted projects on GitHub (BiradarSwapnilDeveloper).
`;

function toggleChatbot() {
    chatbotContainer.classList.toggle('active');
    if (chatbotContainer.classList.contains('active')) {
        setTimeout(() => chatbotInput.focus(), 300);
    }
}

chatbotToggle.addEventListener('click', toggleChatbot);
chatbotClose.addEventListener('click', toggleChatbot);

function addMessage(text, sender) {
    const wrapper = document.createElement('div');
    wrapper.className = `message-wrapper ${sender}`;

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.innerHTML = sender === 'user' ? '<i class="fas fa-user"></i>' : '<i class="fas fa-robot"></i>';

    const msgDiv = document.createElement('div');
    msgDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    msgDiv.innerHTML = text; // allow some basic HTML if needed

    if (sender === 'bot') {
        wrapper.appendChild(avatar);
        wrapper.appendChild(msgDiv);
    } else {
        wrapper.appendChild(msgDiv);
        wrapper.appendChild(avatar);
    }

    // Remove typing indicator if exists
    const typingInd = document.getElementById('typing-indicator');
    if (typingInd) typingInd.remove();

    chatbotMessages.appendChild(wrapper);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function showTypingIndicator() {
    const wrapper = document.createElement('div');
    wrapper.className = 'message-wrapper bot';
    wrapper.id = 'typing-indicator';

    const avatar = document.createElement('div');
    avatar.className = 'msg-avatar';
    avatar.innerHTML = '<i class="fas fa-robot"></i>';

    const indDiv = document.createElement('div');
    indDiv.className = 'typing-indicator';
    indDiv.innerHTML = '<span></span><span></span><span></span>';

    wrapper.appendChild(avatar);
    wrapper.appendChild(indDiv);

    chatbotMessages.appendChild(wrapper);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

async function handleSendMessage() {
    const text = chatbotInput.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    chatbotInput.value = '';
    showTypingIndicator();

    // Local Logic Fallback - an elaborate offline AI bot answering based on keywords
    setTimeout(() => {
        let response = "I'm sorry, I couldn't understand that. You can ask me about Swapnil's experience, skills, education, or contact details!";
        const lowerText = text.toLowerCase();

        if (lowerText.includes('hi') || lowerText.includes('hello') || lowerText.includes('hey')) {
            response = "Hello! I am Swapnil's AI assistant. How can I help you today?";
        } else if (lowerText.includes('experience') || lowerText.includes('work') || lowerText.includes('internship') || lowerText.includes('job')) {
            response = "Swapnil worked as a Cybersecurity Intern at AICTE (Jan-Mar 2025) focusing on ethical hacking and tools like Nmap/Burp Suite. He also volunteered at JFE Shoji Corporation and SuryaLogix assisting with recruitment coordination.";
        } else if (lowerText.includes('skill') || lowerText.includes('tech') || lowerText.includes('stack') || lowerText.includes('technologies')) {
            response = "His top skills include Cybersecurity (Linux, Ethical Hacking), Frontend Development (React, JS, HTML/CSS), and Backend/Dev Tools (Node.js, Express, Java, Python, Git).";
        } else if (lowerText.includes('education') || lowerText.includes('degree') || lowerText.includes('college') || lowerText.includes('university') || lowerText.includes('study')) {
            response = "Swapnil is currently pursuing a B.Tech degree in Computer Science & Engineering (CSE) at JSPM University Pune.";
        } else if (lowerText.includes('certificat') || lowerText.includes('course') || lowerText.includes('award') || lowerText.includes('honor')) {
            response = "He holds many certifications! Some notable ones are 'Gemini Certification' by Google, 'Cyber Job Simulation' by Deloitte, and he won an award in a State Level AI ChatBot Competition at GH Raisoni University.";
        } else if (lowerText.includes('contact') || lowerText.includes('email') || lowerText.includes('phone') || lowerText.includes('hire') || lowerText.includes('reach')) {
            response = "You can reach Swapnil via email at swapnil.biradar.cse@gmail.com or via phone at +91 9067693696. His GitHub is @BiradarSwapnilDeveloper.";
        } else if (lowerText.includes('who are you') || lowerText.includes('about you') || lowerText.includes('bot') || lowerText.includes('ai')) {
            response = "I am a custom AI Assistant integrated directly into this portfolio to help you explore Swapnil's profile interactively! Built by node.js and advanced UI.";
        } else if (lowerText.includes('bye') || lowerText.includes('exit') || lowerText.includes('quit')) {
            response = "Goodbye! Have a great day. Feel free to contact Swapnil directly for more information.";
        } else if (lowerText.includes('project') || lowerText.includes('github') || lowerText.includes('portfolio') || lowerText.includes('build')) {
            response = "Swapnil builds Cyber and Web Dev projects. Also, this portfolio itself uses an animated dynamic UI. Check his GitHub (BiradarSwapnilDeveloper) for more!";
        } else if (lowerText.includes('thank')) {
            response = "You're very welcome! If you have any more questions, feel free to ask.";
        }

        addMessage(response, 'bot');
    }, 1200); // 1.2s delay to simulate thinking
}

chatbotSend.addEventListener('click', handleSendMessage);
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

// 12. Event Memory Modal Logic
function openMemoryModal() {
    const modal = document.getElementById('memory-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMemoryModal() {
    const modal = document.getElementById('memory-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the content
const memoryModal = document.getElementById('memory-modal');
if (memoryModal) {
    memoryModal.addEventListener('click', (e) => {
        if (e.target === memoryModal) closeMemoryModal();
    });
}
