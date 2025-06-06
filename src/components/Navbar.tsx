// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100/80 print:hidden backdrop-blur-sm border-b-2 border-primary shadow-lg shadow-primary/40">
      <div className="container mx-auto">
        <div className="navbar-start">
          {/* mobile  menu */}
          <Link
            href="/"
            className="btn btn-ghost text-xl normal-case lg:hidden"
            style={{ textShadow: '0 0 8px currentColor' }}
          >
            Brady Osburn
          </Link>

           {/* Mobile Menu (Hamburger) */}
           <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-200 rounded-box w-52">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={pathname === link.href ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

          {/* desktop menu */}
        <div className="navbar-center hidden lg:flex">
         
          <Link
            href="/"
            className="btn btn-ghost text-2xl normal-case font-bold text-primary"
            style={{ textShadow: '0 0 8px currentColor' }}
          >
            Brady Osburn
          </Link>

          {/* A divider for visual separation */}
          <div className="divider divider-horizontal divider-primary mx-2"></div>

          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="navbar-end">
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;