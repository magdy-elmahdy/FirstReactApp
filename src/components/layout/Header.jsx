import { useState } from 'react';
import './header.css';

function Header() {
    // State لإدارة فتح وإغلاق القائمة في الموبايل
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State لتحديد الرابط النشط
    const [activeLink, setActiveLink] = useState('Home');

    // مصفوفة الروابط لتسهيل التعديل عليها لاحقاً
    const navLinks = ['Home', 'About', 'Courses'];

    return (
        <header className="header">
            <div className="header-container">
                {/* الشعار */}
                <a href="/" className="logo">Mego</a>

                {/* قائمة الروابط */}
                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className={`nav-link ${activeLink === link ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveLink(link);
                                        setIsMenuOpen(false); // إغلاق القائمة عند الضغط على رابط في الموبايل
                                    }}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* زر الهامبرجر للموبايل */}
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
}

export default Header;