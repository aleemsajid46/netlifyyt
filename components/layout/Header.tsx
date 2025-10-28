"use client";

import { useCart } from "@/context/CartContext";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";

import Image from "next/image";


export default function Header() {
  const { cart } = useCart();
  const cartCount = cart?.reduce((total, item) => total + item.quantity, 0) || 0;

  
 

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const isActivePath = (path: string) => pathname === path;

  const navItems = [{ href: "/contact", label: "Contact" }];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-lg"
          : "bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-3 sm:py-4">
        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
          {/* LEFT SECTION */}
          <div className="flex items-center space-x-4 sm:space-x-8 lg:space-x-12">
          <Image
  src="/sajid.jpeg"
  alt="Sajid"
  width={60}
  height={60}
  className="
    rounded-full
    w-[60px] h-[60px]        // default (mobile)
    sm:w-[60px] sm:h-[60px]  // ≥640px screens
    md:w-[80px] md:h-[80px] // ≥768px
    lg:w-[80px] lg:h-[80px] // ≥1024px
  "
/>

          
            <Link
              className="text-xl sm:text-2xl tracking-tight text-gray-900 hover:text-gray-700 transition-colors"
              href="/"
              aria-label="MUHAMMD SAJID"
            >
              MUHAMMAD<span className="text-primary">SAJID</span>
            </Link>

            {/* NAVIGATION (Desktop) */}
            <nav
              className="hidden md:flex items-center space-x-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative py-2 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(href)
                      ? "bg-orange-100 shadow-md"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                  aria-current={isActivePath(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* SEARCH BAR (Desktop Only) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form className="relative w-full">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                aria-label="Search products"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* MOBILE SEARCH BUTTON */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>

            {/* CART ICON */}
            <Link
              href="/cart"
              className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingCart className="h-6 w-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
              {cartCount > 0 && (
                <span
                  className="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full min-w-[20px] h-5 flex items-center justify-center px-1"
                  aria-label={`${cartCount} items in cart`}
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* AUTH BUTTONS (Hidden on small screens) */}
            <div className="hidden sm:flex items-center space-x-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm"
                
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/">
                <Button size="sm" variant="default" className="text-sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* LOGIN MODAL */}
       

        {/* MOBILE SEARCH FIELD */}
        {isSearchOpen && (
          <div className="lg:hidden mt-4 animate-in slide-in-from-top duration-200">
            <form className="relative">
              <input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                aria-label="Search products"
                autoFocus
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>
        )}

        {/* MOBILE NAVIGATION */}
        {isMobileOpen && (
          <nav
            className="md:hidden mt-4 animate-in slide-in-from-top duration-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-3 pb-4 border-b border-gray-200">
              {navItems.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMobileMenu}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-all ${
                    isActivePath(href)
                      ? "bg-orange-100"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  aria-current={isActivePath(href) ? "page" : undefined}
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col space-y-3 pt-4 sm:hidden">
              <Button variant="outline" className="w-full text-sm" asChild>
                <Link href="/" onClick={closeMobileMenu}>
                  Sign In
                </Link>
              </Button>
              <Button className="w-full text-sm" variant="default" asChild>
                <Link href="/" onClick={closeMobileMenu}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
