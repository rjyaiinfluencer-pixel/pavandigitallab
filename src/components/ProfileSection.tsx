import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  GraduationCap,
  Camera,
  Edit3,
  Check,
  X,
  MessageCircle,
  Instagram,
  Mail,
  MapPin,
} from 'lucide-react';
import { UserProfile } from '../types';
import { DEFAULT_PROFILE, getGeneralWhatsAppUrl } from '../data/config';

const PROFILE_STORAGE_KEY = 'pavan_digital_lab_profile_v2';

export const ProfileSection: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [isEditing, setIsEditing] = useState(false);

  // Form states
  const [formName, setFormName] = useState('');
  const [formTitle, setFormTitle] = useState('');
  const [formEducation, setFormEducation] = useState('');
  const [formBio, setFormBio] = useState('');
  const [formSkills, setFormSkills] = useState('');
  const [formAvatarUrl, setFormAvatarUrl] = useState('');
  const [formInstagram, setFormInstagram] = useState('');
  const [formEmail, setFormEmail] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (saved) {
        setProfile(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load profile', e);
    }
  }, []);

  const handleOpenEdit = () => {
    setFormName(profile.name);
    setFormTitle(profile.title);
    setFormEducation(profile.education);
    setFormBio(profile.bio);
    setFormSkills(profile.skills.join(', '));
    setFormAvatarUrl(profile.avatarUrl);
    setFormInstagram(profile.instagramUrl);
    setFormEmail(profile.email);
    setIsEditing(true);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedSkills = formSkills
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const updatedProfile: UserProfile = {
      ...profile,
      name: formName || DEFAULT_PROFILE.name,
      title: formTitle || DEFAULT_PROFILE.title,
      education: formEducation || DEFAULT_PROFILE.education,
      bio: formBio || DEFAULT_PROFILE.bio,
      skills: updatedSkills.length > 0 ? updatedSkills : profile.skills,
      avatarUrl: formAvatarUrl,
      instagramUrl: formInstagram || profile.instagramUrl,
      email: formEmail || profile.email,
    };

    setProfile(updatedProfile);
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updatedProfile));
    } catch (e) {
      console.error('Failed to save profile', e);
    }
    setIsEditing(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setFormAvatarUrl(result);
        const updated = { ...profile, avatarUrl: result };
        setProfile(updated);
        try {
          localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updated));
        } catch (err) {
          console.error(err);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="profile" className="py-20 lg:py-28 relative scroll-mt-20 bg-[#06452D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#032D1D] border border-[#B8E8C8]/40 text-xs font-semibold text-[#DDF5E3]">
            <Sparkles className="w-3.5 h-3.5 text-[#48C987]" />
            <span>FOUNDER & LEAD CREATOR PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight">
            Meet The Creator
          </h2>
          <p className="text-sm text-[#DDF5E3]">
            Dedicated to helping businesses and creators achieve standout visibility and growth.
          </p>
        </div>

        {/* Profile Card Container */}
        <div className="relative rounded-3xl bg-[#032D1D] border border-[#B8E8C8]/40 p-6 sm:p-10 shadow-2xl overflow-hidden text-left">
          {/* Ambient inner glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#35B978]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Profile Photo & Visual Identity */}
            <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
              <div className="relative group">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-tr from-[#35B978] via-[#48C987] to-[#DDF5E3] p-[3px] shadow-[0_0_25px_rgba(53,185,120,0.3)]">
                  <div className="w-full h-full rounded-[14px] bg-[#06452D] overflow-hidden flex items-center justify-center relative">
                    {profile.avatarUrl ? (
                      <img
                        src={profile.avatarUrl}
                        alt={profile.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      /* Monogram Branded Portrait Frame */
                      <div className="w-full h-full bg-[#06452D] flex flex-col items-center justify-center p-4 text-center space-y-2">
                        <div className="w-16 h-16 rounded-full bg-[#48C987] flex items-center justify-center text-[#06452D] font-extrabold text-2xl shadow-md">
                          TP
                        </div>
                        <span className="text-xs font-bold text-[#FFFFFF] tracking-wider block">
                          T PAVAN
                        </span>
                        <span className="text-[10px] text-[#DDF5E3] font-mono">
                          PAVAN DIGITAL LAB
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Edit Photo / Upload Button */}
                <label className="absolute bottom-2 right-2 p-2.5 rounded-xl bg-[#48C987] hover:bg-[#35B978] text-[#06452D] hover:scale-105 transition-all cursor-pointer shadow-lg flex items-center justify-center">
                  <Camera className="w-4 h-4" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-[#DDF5E3] flex items-center justify-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#48C987]" />
                  <span>{profile.location}</span>
                </span>
                <button
                  onClick={handleOpenEdit}
                  className="text-xs font-semibold text-[#48C987] hover:text-[#DDF5E3] flex items-center justify-center gap-1 mx-auto pt-1 transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Profile Details</span>
                </button>
              </div>
            </div>

            {/* Right: Credentials, Bio & Skills */}
            <div className="lg:col-span-8 space-y-6">
              {/* Name & Title */}
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight">
                  {profile.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#48C987]">
                  {profile.title}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#FFFFFF] pt-1">
                  <GraduationCap className="w-4 h-4 text-[#48C987] shrink-0" />
                  <span className="font-medium text-[#DDF5E3]">{profile.education}</span>
                </div>
              </div>

              {/* Bio Prose */}
              <p className="text-sm sm:text-base text-[#DDF5E3] leading-relaxed font-normal">
                {profile.bio}
              </p>

              {/* Skills Grid */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#DDF5E3] block">
                  Core Skills & Creative Competencies
                </span>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-3 py-1.5 rounded-lg bg-[#06452D] text-[#FFFFFF] border border-[#B8E8C8]/40 hover:border-[#35B978] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Contact Buttons */}
              <div className="pt-4 border-t border-[#B8E8C8]/30 flex flex-wrap items-center gap-3">
                <a
                  href={getGeneralWhatsAppUrl(`Hi Pavan, I visited your profile on Pavan Digital Lab and would like to connect!`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#48C987] hover:bg-[#35B978] text-[#06452D] font-bold text-xs flex items-center gap-2 shadow-[0_4px_16px_rgba(72,201,135,0.3)] transition-all hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp (+91 9573313317)</span>
                </a>

                <a
                  href={profile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#06452D] hover:bg-[#032D1D] text-[#FFFFFF] hover:text-[#48C987] border border-[#B8E8C8]/40 hover:border-[#35B978] font-bold text-xs flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Instagram className="w-4 h-4 text-[#48C987]" />
                  <span>Instagram Profile</span>
                </a>

                <a
                  href={`mailto:${profile.email}`}
                  className="px-4 py-2.5 rounded-xl bg-[#06452D] hover:bg-[#032D1D] text-[#DDF5E3] hover:text-[#FFFFFF] border border-[#B8E8C8]/40 text-xs font-medium flex items-center gap-2 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#48C987]" />
                  <span>{profile.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#032D1D] border border-[#B8E8C8]/50 p-6 space-y-4 max-h-[90vh] overflow-y-auto text-left shadow-2xl">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-[#06452D] text-[#DDF5E3] hover:text-[#FFFFFF] border border-[#B8E8C8]/40"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-bold text-[#FFFFFF]">Edit Personal Profile</h3>
            <p className="text-xs text-[#DDF5E3]">
              Update your name, bio, education, skills, and photo. Changes are saved locally.
            </p>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#DDF5E3] font-semibold mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#06452D] border border-[#B8E8C8]/40 text-[#FFFFFF] focus:outline-none focus:border-[#48C987]"
                />
              </div>

              <div>
                <label className="block text-[#DDF5E3] font-semibold mb-1">Professional Title</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#06452D] border border-[#B8E8C8]/40 text-[#FFFFFF] focus:outline-none focus:border-[#48C987]"
                />
              </div>

              <div>
                <label className="block text-[#DDF5E3] font-semibold mb-1">Education</label>
                <input
                  type="text"
                  value={formEducation}
                  onChange={(e) => setFormEducation(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#06452D] border border-[#B8E8C8]/40 text-[#FFFFFF] focus:outline-none focus:border-[#48C987]"
                />
              </div>

              <div>
                <label className="block text-[#DDF5E3] font-semibold mb-1">Professional Bio</label>
                <textarea
                  rows={4}
                  value={formBio}
                  onChange={(e) => setFormBio(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#06452D] border border-[#B8E8C8]/40 text-[#FFFFFF] focus:outline-none focus:border-[#48C987]"
                />
              </div>

              <div>
                <label className="block text-[#DDF5E3] font-semibold mb-1">Skills (comma-separated)</label>
                <input
                  type="text"
                  value={formSkills}
                  onChange={(e) => setFormSkills(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#06452D] border border-[#B8E8C8]/40 text-[#FFFFFF] focus:outline-none focus:border-[#48C987]"
                />
              </div>

              <div>
                <label className="block text-[#DDF5E3] font-semibold mb-1">Photo Image URL (or use file upload)</label>
                <input
                  type="text"
                  value={formAvatarUrl}
                  onChange={(e) => setFormAvatarUrl(e.target.value)}
                  placeholder="https://... or upload photo above"
                  className="w-full px-3 py-2 rounded-lg bg-[#06452D] border border-[#B8E8C8]/40 text-[#FFFFFF] focus:outline-none focus:border-[#48C987]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[#DDF5E3] font-semibold mb-1">Instagram URL</label>
                  <input
                    type="url"
                    value={formInstagram}
                    onChange={(e) => setFormInstagram(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#06452D] border border-[#B8E8C8]/40 text-[#FFFFFF] focus:outline-none focus:border-[#48C987]"
                  />
                </div>
                <div>
                  <label className="block text-[#DDF5E3] font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#06452D] border border-[#B8E8C8]/40 text-[#FFFFFF] focus:outline-none focus:border-[#48C987]"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-lg bg-[#06452D] text-[#DDF5E3] hover:text-[#FFFFFF] border border-[#B8E8C8]/40"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#48C987] hover:bg-[#35B978] text-[#06452D] font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Profile</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
