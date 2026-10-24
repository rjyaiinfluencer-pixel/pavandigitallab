import React, { useState, useEffect } from 'react';
import {
  Film,
  Globe,
  HeartHandshake,
  Cake,
  CreditCard,
  Music,
  BarChart3,
  ExternalLink,
  Play,
  Plus,
  Trash2,
  Edit3,
  RotateCcw,
  X,
  MessageCircle,
  Sparkles,
  Check,
} from 'lucide-react';
import { ProjectItem, ProjectFilterCategory } from '../types';
import {
  getStoredProjects,
  saveStoredProjects,
  resetToDefaultProjects,
} from '../data/projects';
import { getWhatsAppServiceUrl } from '../data/config';

interface PortfolioSectionProps {
  onDirectEnquire?: (serviceName: string) => void;
  selectedProject?: ProjectItem | null;
  onClearSelectedProject?: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  selectedProject: externalSelectedProject,
  onClearSelectedProject,
}) => {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<ProjectFilterCategory>('All');
  const [modalProject, setModalProject] = useState<ProjectItem | null>(null);
  const [videoModalUrl, setVideoModalUrl] = useState<string | null>(null);
  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  // Form states for project management
  const [formTitle, setFormTitle] = useState('');
  const [formCategory, setFormCategory] = useState<ProjectItem['category']>('Promotional Videos');
  const [formDescription, setFormDescription] = useState('');
  const [formFullDetails, setFormFullDetails] = useState('');
  const [formClientName, setFormClientName] = useState('');
  const [formLiveUrl, setFormLiveUrl] = useState('');
  const [formInstagramUrl, setFormInstagramUrl] = useState('');
  const [formTags, setFormTags] = useState('');

  useEffect(() => {
    setProjects(getStoredProjects());
  }, []);

  useEffect(() => {
    if (externalSelectedProject) {
      setModalProject(externalSelectedProject);
    }
  }, [externalSelectedProject]);

  const categories: ProjectFilterCategory[] = [
    'All',
    'Promotional Videos',
    'Websites',
    'Wedding Invitations',
    'Birthday Invitations',
    'Business Cards',
    'Personal Songs',
    'Digital Marketing',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleOpenEdit = (proj: ProjectItem) => {
    setEditingProject(proj);
    setFormTitle(proj.title);
    setFormCategory(proj.category);
    setFormDescription(proj.description);
    setFormFullDetails(proj.fullDetails || '');
    setFormClientName(proj.clientName || '');
    setFormLiveUrl(proj.liveUrl || '');
    setFormInstagramUrl(proj.instagramUrl || '');
    setFormTags(proj.tags.join(', '));
    setIsManagerOpen(true);
  };

  const handleOpenNew = () => {
    setEditingProject(null);
    setFormTitle('');
    setFormCategory('Promotional Videos');
    setFormDescription('');
    setFormFullDetails('');
    setFormClientName('');
    setFormLiveUrl('');
    setFormInstagramUrl('');
    setFormTags('Creative Production, High Speed');
    setIsManagerOpen(true);
  };

  const handleSaveProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formDescription.trim()) return;

    const parsedTags = formTags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    if (editingProject) {
      const updated = projects.map((p) =>
        p.id === editingProject.id
          ? {
              ...p,
              title: formTitle,
              category: formCategory,
              description: formDescription,
              fullDetails: formFullDetails,
              clientName: formClientName,
              liveUrl: formLiveUrl,
              instagramUrl: formInstagramUrl,
              tags: parsedTags.length > 0 ? parsedTags : p.tags,
              isCustom: true,
            }
          : p
      );
      setProjects(updated);
      saveStoredProjects(updated);
    } else {
      const newProj: ProjectItem = {
        id: `custom-proj-${Date.now()}`,
        title: formTitle,
        category: formCategory,
        description: formDescription,
        fullDetails: formFullDetails,
        clientName: formClientName || 'Client Project',
        completionDate: 'Recently Added',
        liveUrl: formLiveUrl,
        instagramUrl: formInstagramUrl,
        tags: parsedTags.length > 0 ? parsedTags : ['Featured Work'],
        thumbnailTheme: {
          gradient: 'from-[#35B978] via-[#06452D] to-[#032D1D]',
          icon: 'Sparkles',
          accent: '#48C987',
        },
        isCustom: true,
      };
      const updated = [newProj, ...projects];
      setProjects(updated);
      saveStoredProjects(updated);
    }

    setIsManagerOpen(false);
  };

  const handleDeleteProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    saveStoredProjects(updated);
    if (modalProject && modalProject.id === id) {
      setModalProject(null);
    }
  };

  const handleResetProjects = () => {
    if (window.confirm('Reset portfolio to original showcase projects?')) {
      const reset = resetToDefaultProjects();
      setProjects(reset);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Promotional Videos':
        return <Film className="w-4 h-4 text-[#35B978]" />;
      case 'Websites':
        return <Globe className="w-4 h-4 text-[#35B978]" />;
      case 'Wedding Invitations':
        return <HeartHandshake className="w-4 h-4 text-[#35B978]" />;
      case 'Birthday Invitations':
        return <Cake className="w-4 h-4 text-[#35B978]" />;
      case 'Business Cards':
        return <CreditCard className="w-4 h-4 text-[#35B978]" />;
      case 'Personal Songs':
        return <Music className="w-4 h-4 text-[#35B978]" />;
      case 'Digital Marketing':
        return <BarChart3 className="w-4 h-4 text-[#35B978]" />;
      default:
        return <Sparkles className="w-4 h-4 text-[#35B978]" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#DDF5E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header with Project Management Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-[#B8E8C8] text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#06452D] border border-[#B8E8C8] text-xs font-semibold text-[#DDF5E3]">
              <Sparkles className="w-3.5 h-3.5 text-[#48C987]" />
              <span>PROVEN CLIENT DELIVERABLES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#06452D] tracking-tight">
              Featured Client Projects
            </h2>
            <p className="text-sm sm:text-base text-[#06452D]/85 font-medium">
              Explore our real-world portfolio across promotional reels, responsive web applications, royal invitations, custom audio tributes, and marketing campaigns.
            </p>
          </div>

          {/* Manage Projects CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleOpenNew}
              className="px-4 py-2.5 text-xs font-extrabold rounded-lg bg-[#06452D] hover:bg-[#032D1D] text-[#FFFFFF] flex items-center gap-1.5 shadow-md transition-all hover:scale-105"
            >
              <Plus className="w-3.5 h-3.5 text-[#48C987]" />
              <span>Add New Project</span>
            </button>
            <button
              onClick={handleResetProjects}
              title="Reset portfolio to defaults"
              className="p-2.5 rounded-lg bg-white/90 hover:bg-white text-[#06452D] border border-[#B8E8C8] transition-colors shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center flex-wrap gap-2 overflow-x-auto pb-2">
          <div className="inline-flex items-center p-1.5 rounded-xl bg-white/90 border border-[#B8E8C8] flex-wrap gap-1 shadow-sm">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#06452D] text-[#FFFFFF] font-bold shadow-sm'
                      : 'text-[#06452D]/80 hover:text-[#06452D] hover:bg-[#DDF5E3]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid: Clean White Cards with Soft Green Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setModalProject(project)}
              className="group relative rounded-2xl bg-[#FFFFFF] border-2 border-[#B8E8C8] hover:border-[#35B978] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_36px_rgba(6,69,45,0.15)] hover:-translate-y-1 cursor-pointer text-left"
            >
              {/* Cover Graphic Container (original thumbnail colors preserved with emerald base) */}
              <div
                className={`relative h-48 w-full bg-gradient-to-br ${project.thumbnailTheme.gradient} p-4 flex flex-col justify-between overflow-hidden border-b border-[#B8E8C8]`}
              >
                <div className="flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#06452D]/90 backdrop-blur-md text-[11px] font-semibold text-[#FFFFFF] border border-[#B8E8C8]/30">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>

                  {project.isCustom && (
                    <span className="px-2 py-0.5 rounded bg-[#48C987] text-[#06452D] text-[10px] font-mono font-bold">
                      Local Update
                    </span>
                  )}
                </div>

                {/* Center Visual Mock Graphic */}
                <div className="z-10 py-1">
                  <div className="w-12 h-12 rounded-xl bg-[#032D1D]/75 backdrop-blur-md border border-[#35B978]/40 flex items-center justify-center text-[#DDF5E3] mb-2 shadow-sm group-hover:scale-110 transition-transform">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-[11px] text-[#FFFFFF] font-mono font-bold drop-shadow">
                    {project.clientName || 'Pavan Digital Lab'}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#032D1D] via-transparent to-transparent opacity-60" />
              </div>

              {/* Card Body in Crisp White with Dark Forest Green Text */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#06452D] group-hover:text-[#35B978] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#06452D]/80 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#DDF5E3] text-[#06452D] border border-[#B8E8C8] font-mono font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions Strip */}
                <div className="pt-4 border-t border-[#B8E8C8] flex items-center justify-between text-xs">
                  <span className="font-bold text-[#35B978] group-hover:text-[#06452D] flex items-center gap-1 transition-colors">
                    <span>View Case Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.category === 'Promotional Videos' && (
                      <button
                        onClick={() => setVideoModalUrl(project.title)}
                        title="Watch Preview"
                        className="p-1.5 rounded-lg bg-[#48C987] hover:bg-[#35B978] text-[#06452D] hover:text-[#FFFFFF] transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                      </button>
                    )}
                    <button
                      onClick={() => handleOpenEdit(project)}
                      title="Edit project"
                      className="p-1.5 rounded-lg bg-[#DDF5E3] hover:bg-[#35B978] text-[#06452D] hover:text-[#FFFFFF] border border-[#B8E8C8] transition-colors"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="p-12 rounded-2xl bg-white border border-[#B8E8C8] text-center space-y-3">
            <p className="text-sm text-[#06452D] font-medium">No projects found in this category yet.</p>
            <button
              onClick={handleOpenNew}
              className="px-4 py-2 rounded-lg bg-[#06452D] text-[#FFFFFF] text-xs font-bold"
            >
              Add the First {activeCategory} Project
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border-2 border-[#35B978] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto text-left">
            <button
              onClick={() => {
                setModalProject(null);
                if (onClearSelectedProject) onClearSelectedProject();
              }}
              className="absolute top-5 right-5 p-2 rounded-lg bg-[#DDF5E3] text-[#06452D] hover:bg-[#35B978] hover:text-white border border-[#B8E8C8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#06452D] font-bold px-2.5 py-0.5 rounded bg-[#DDF5E3] border border-[#B8E8C8]">
                  {modalProject.category}
                </span>
                {modalProject.clientName && (
                  <span className="text-xs text-[#06452D]/70">· {modalProject.clientName}</span>
                )}
                {modalProject.completionDate && (
                  <span className="text-xs text-[#06452D]/50">· {modalProject.completionDate}</span>
                )}
              </div>
              <h3 className="text-2xl font-extrabold text-[#06452D]">{modalProject.title}</h3>
            </div>

            {/* Visual Header */}
            <div
              className={`rounded-xl h-44 bg-gradient-to-br ${modalProject.thumbnailTheme.gradient} border border-[#B8E8C8] flex items-center justify-center text-center p-4`}
            >
              <div className="space-y-1">
                <div className="w-12 h-12 rounded-xl bg-[#032D1D]/75 backdrop-blur-md border border-[#35B978]/40 flex items-center justify-center mx-auto text-[#DDF5E3] mb-2">
                  {getCategoryIcon(modalProject.category)}
                </div>
                <h4 className="text-base font-bold text-[#FFFFFF] drop-shadow">{modalProject.title}</h4>
                <p className="text-xs text-[#DDF5E3] drop-shadow">Delivered by Pavan Digital Lab</p>
              </div>
            </div>

            {/* Description & Full Details */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-[#06452D]">Project Overview</h4>
              <p className="text-sm text-[#06452D]/85 leading-relaxed">{modalProject.description}</p>
              {modalProject.fullDetails && (
                <div className="p-4 rounded-xl bg-[#DDF5E3]/40 border border-[#B8E8C8] text-xs text-[#06452D] space-y-2">
                  <span className="font-bold text-[#06452D] block">Execution Highlights:</span>
                  <p className="leading-relaxed">{modalProject.fullDetails}</p>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#06452D]/70">Tags & Capabilities</h4>
              <div className="flex flex-wrap gap-1.5">
                {modalProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-md bg-[#DDF5E3] text-[#06452D] border border-[#B8E8C8] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* External Links */}
            {(modalProject.liveUrl || modalProject.instagramUrl) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {modalProject.liveUrl && (
                  <a
                    href={modalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#06452D] text-[#FFFFFF] text-xs font-bold flex items-center gap-1.5 hover:bg-[#032D1D]"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#48C987]" />
                    <span>View Live Website</span>
                  </a>
                )}
                {modalProject.instagramUrl && (
                  <a
                    href={modalProject.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[#DDF5E3] text-[#06452D] hover:bg-[#B8E8C8] text-xs font-bold flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#35B978]" />
                    <span>View on Instagram</span>
                  </a>
                )}
              </div>
            )}

            {/* Direct WhatsApp Enquiry Button */}
            <div className="pt-4 border-t border-[#B8E8C8] flex items-center justify-between gap-4">
              <a
                href={getWhatsAppServiceUrl(modalProject.category, `Regarding project: ${modalProject.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#48C987] hover:bg-[#35B978] text-[#06452D] hover:text-[#FFFFFF] font-extrabold text-xs sm:text-sm text-center flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.01]"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire Similar Project on WhatsApp</span>
              </a>

              <button
                onClick={() => handleDeleteProject(modalProject.id)}
                title="Delete from local portfolio"
                className="p-3 rounded-xl bg-rose-100 hover:bg-rose-200 text-rose-800 border border-rose-300"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Preview Modal */}
      {videoModalUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm rounded-2xl bg-[#06452D] border border-[#35B978] p-5 space-y-4 text-center">
            <button
              onClick={() => setVideoModalUrl(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#032D1D] text-[#FFFFFF] hover:bg-[#35B978] hover:text-[#06452D]"
            >
              <X className="w-4 h-4" />
            </button>
            <h4 className="text-base font-bold text-[#FFFFFF] pt-2">{videoModalUrl}</h4>
            <div className="aspect-[9/16] rounded-xl bg-[#032D1D] border border-[#35B978]/40 flex flex-col justify-between p-4 shadow-xl">
              <div className="flex justify-between items-center text-xs text-[#DDF5E3] font-mono">
                <span>PDL 4K RENDER</span>
                <span className="text-[#48C987]">60 FPS</span>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#48C987] text-[#06452D] flex items-center justify-center mx-auto shadow-md">
                  <Play className="w-6 h-6 fill-current ml-1 text-[#06452D]" />
                </div>
                <p className="text-xs text-[#FFFFFF] font-semibold">Simulated Video Reel Preview</p>
                <p className="text-[11px] text-[#DDF5E3]">Fast rhythm cuts, dynamic audio syncing, and color grading.</p>
              </div>
              <div className="space-y-1">
                <div className="w-full bg-[#06452D] h-1 rounded-full overflow-hidden border border-[#35B978]/30">
                  <div className="bg-[#48C987] h-full w-2/3 animate-pulse" />
                </div>
                <span className="text-[10px] text-[#DDF5E3]">Available in full resolution via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Manager Modal */}
      {isManagerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#FFFFFF] border-2 border-[#35B978] p-6 space-y-4 max-h-[90vh] overflow-y-auto text-left shadow-2xl">
            <button
              onClick={() => setIsManagerOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#DDF5E3] text-[#06452D] hover:bg-[#35B978] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-extrabold text-[#06452D]">
              {editingProject ? 'Edit Portfolio Project' : 'Add New Portfolio Project'}
            </h3>
            <p className="text-xs text-[#06452D]/70 font-medium">
              Update project details. Changes are saved to your browser’s local storage.
            </p>

            <form onSubmit={handleSaveProject} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#06452D] font-semibold mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Royal Wedding Video Invitation"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#06452D] font-semibold mb-1">Category *</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#B8E8C8] text-[#06452D] focus:outline-none focus:border-[#35B978]"
                  >
                    <option value="Promotional Videos">Promotional Videos</option>
                    <option value="Websites">Websites</option>
                    <option value="Wedding Invitations">Wedding Invitations</option>
                    <option value="Birthday Invitations">Birthday Invitations</option>
                    <option value="Business Cards">Business Cards</option>
                    <option value="Personal Songs">Personal Songs</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#06452D] font-semibold mb-1">Client Name</label>
                  <input
                    type="text"
                    value={formClientName}
                    onChange={(e) => setFormClientName(e.target.value)}
                    placeholder="e.g. Aura Luxe Restobar"
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#06452D] font-semibold mb-1">Short Description *</label>
                <textarea
                  required
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Summarize the work and deliverable..."
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978]"
                />
              </div>

              <div>
                <label className="block text-[#06452D] font-semibold mb-1">Execution Highlights / Details</label>
                <textarea
                  rows={3}
                  value={formFullDetails}
                  onChange={(e) => setFormFullDetails(e.target.value)}
                  placeholder="Camera gear used, software, turnaround time, results achieved..."
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#06452D] font-semibold mb-1">Live Website URL</label>
                  <input
                    type="url"
                    value={formLiveUrl}
                    onChange={(e) => setFormLiveUrl(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978]"
                  />
                </div>
                <div>
                  <label className="block text-[#06452D] font-semibold mb-1">Instagram URL</label>
                  <input
                    type="url"
                    value={formInstagramUrl}
                    onChange={(e) => setFormInstagramUrl(e.target.value)}
                    placeholder="https://instagram.com/..."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#06452D] font-semibold mb-1">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={formTags}
                  onChange={(e) => setFormTags(e.target.value)}
                  placeholder="4K Edit, WhatsApp Ready, Custom Lyrics"
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#B8E8C8] text-[#06452D] placeholder-[#06452D]/40 focus:outline-none focus:border-[#35B978]"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsManagerOpen(false)}
                  className="px-4 py-2 rounded-lg bg-[#DDF5E3] text-[#06452D] hover:bg-[#B8E8C8]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#48C987] hover:bg-[#35B978] text-[#06452D] hover:text-[#FFFFFF] font-extrabold flex items-center gap-1.5 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>{editingProject ? 'Update Project' : 'Publish Project'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
