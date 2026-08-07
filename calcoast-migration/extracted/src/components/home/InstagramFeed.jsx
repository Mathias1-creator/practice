import React from 'react';
import ScrollReveal from '../shared/ScrollReveal';
import SectionTag from '../shared/SectionTag';
import { Instagram } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionTag>Follow Along</SectionTag>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-obsidian mb-4">
              Our Latest Work on Instagram
            </h2>
            <p className="text-muted-foreground text-lg">
              Follow us @cal_coast_hardscape.irrigation for project updates and inspiration.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {[...Array(6)].map((_, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="aspect-square bg-muted rounded-xl overflow-hidden group cursor-pointer relative">
                <div className="w-full h-full bg-gradient-to-br from-forest/10 to-stone/20 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Instagram className="w-8 h-8 text-muted-foreground/50 mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground/60">Live Instagram feed</p>
                    <p className="text-xs text-muted-foreground/40">Connect @cal_coast_hardscape.irrigation</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/cal_coast_hardscape.irrigation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-forest text-white font-bold px-8 py-4 rounded-full hover:scale-103 active:scale-97 transition-transform duration-200 shadow-lg shadow-forest/20"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}