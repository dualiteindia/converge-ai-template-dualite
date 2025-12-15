import React from 'react';
import { Link } from 'react-router-dom';
import { GradientBorder } from './ui/GradientBorder';

const NavLink = ({ children, href = "#", to }: { children: React.ReactNode; href?: string; to?: string }) => {
  if (to) {
    return (
      <Link 
        to={to} 
        className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
      >
        {children}
      </Link>
    );
  }
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-between bg-black/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative w-6 h-6 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.6)]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-600 to-black rounded-full"></div>
            <div className="absolute top-1 left-1 w-2 h-2 bg-blue-300 rounded-full blur-[1px] opacity-70"></div>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Fusion AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink href="#">Integration</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">Waitlist</NavLink>
        </div>

        {/* CTA */}
        <GradientBorder 
          gradient="from-orange-500/80 via-red-500/80 to-orange-500/80"
          containerClassName="rounded-full"
        >
          <button className="px-5 py-2 text-white text-sm font-medium bg-black/90 hover:bg-black transition-colors rounded-full">
            Get Started
          </button>
        </GradientBorder>
      </div>
    </nav>
  );
};
