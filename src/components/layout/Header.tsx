"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/data/navigation";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const nextScrolled = window.scrollY > 12;
      setScrolled(nextScrolled);
      document.documentElement.style.setProperty("--header-height", nextScrolled ? "80px" : "100px");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("/#", ""));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`/#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled
          ? "border-b border-white/10 bg-navy/92 shadow-[0_8px_24px_-18px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-all duration-500",
          scrolled ? "h-[80px]" : "h-[100px]",
        )}
      >
        <Link href="/#inicio" aria-label="Da Mata Engenharia — início" className="relative z-50">
          <Logo
            className={cn(
              "transition-all duration-500",
              "h-14 sm:h-16",
              open ? "brightness-0" : "brightness-0 invert",
            )}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "link-underline text-[12px] font-medium uppercase tracking-[0.16em] transition-colors",
                scrolled ? "text-paper/80 hover:text-paper" : "text-paper/85 hover:text-white",
                active === item.href && "text-gold",
              )}
              aria-current={active === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#contato" className="px-5 py-2.5 text-[11px]">
            Solicitar orçamento
          </Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="relative block h-3.5 w-5">
            <span
              className={cn(
                "absolute left-0 h-px w-full transition-all duration-300",
                open ? "bg-navy" : "bg-paper",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-full transition-opacity duration-300",
                open ? "bg-navy" : "bg-paper",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-full transition-all duration-300",
                open ? "bg-navy" : "bg-paper",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-paper lg:hidden"
          >
            <motion.nav
              initial={reduced ? false : { y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="flex h-full flex-col justify-between px-6 pb-10 pt-28"
              aria-label="Mobile"
            >
              <ul className="space-y-1">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between border-b border-line py-4"
                    >
                      <span className="text-2xl font-semibold tracking-[-0.02em] text-navy">
                        {item.label}
                      </span>
                      <span className="text-[11px] tracking-[0.2em] text-gold">
                        0{index + 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href="/#contato" className="w-full" onClick={() => setOpen(false)}>
                Solicitar orçamento
              </Button>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
