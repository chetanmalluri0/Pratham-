import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'carousel'>('grid');
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const categories = ['All', 'Web Application', 'Luxury Real Estate', 'Hospitality & Dining'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Background subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display text-balance">
            Selected Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Explore recent live design and frontend projects crafted for high-performance and memorable experiences.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setViewMode('grid')}
            aria-label="Grid view"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'grid'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Grid</span>
          </button>
          <button
            onClick={() => setViewMode('carousel')}
            aria-label="Slider view"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              viewMode === 'carousel'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Slider</span>
          </button>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setCurrentSlide(0);
            }}
            className={`whitespace-nowrap px-4 py-2 rounded-xl border text-xs font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-indigo-600/20 text-indigo-300 border-indigo-500/50 shadow-sm'
                : 'bg-slate-900/50 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectMockup key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="relative">
          <div className="max-w-2xl mx-auto">
            {filteredProjects.length > 0 && (
              <ProjectMockup
                key={filteredProjects[currentSlide % filteredProjects.length].id}
                project={filteredProjects[currentSlide % filteredProjects.length]}
              />
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 max-w-2xl mx-auto px-2">
            <div className="flex items-center gap-2">
              {filteredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Jump to slide ${idx + 1}`}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    currentSlide === idx ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous project"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next project"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
