// import React, { useState, useMemo, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { 
//   FaMapMarkerAlt, 
//   FaBriefcase, 
//   FaTimes, 
//   FaUpload, 
//   FaSearch, 
//   FaChevronLeft,
//   FaArrowRight
// } from "react-icons/fa";
// import jobData from "../../data/jobData.json";


// export default function CareersPage() {
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");

//   // 1. Fix: Prevent background scrolling when modal is open
//   useEffect(() => {
//     if (selectedJob) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => { document.body.style.overflow = "unset"; };
//   }, [selectedJob]);

//   // 2. Search Logic
//   const filteredJobs = useMemo(() => {
//     return jobData.filter(job => 
//       job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       job.hiringOrganization.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }, [searchQuery]);

//   return (
//     <div className="min-h-screen font-sans bg-surfaceLight dark:bg-surfaceDark text-zinc-900 dark:text-zinc-100">
      
//       {/* --- HERO SECTION --- */}
//       <header className="relative px-6 pt-24 pb-16 overflow-hidden">
//         <div className="absolute top-0 w-full h-full -translate-x-1/2 left-1/2 bg-gradient-to-b from-brandPrimary/5 to-transparent -z-10" />
//         <div className="max-w-6xl mx-auto text-center">
//           <motion.span 
//             initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
//             className="inline-block px-4 py-1.5 rounded-full bg-brandDark dark:bg-brandAccent text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-6"
//           >
//             Join the Team
//           </motion.span>
//           <h1 className="mb-8 text-5xl font-bold tracking-tight md:text-7xl">
//             Work that <span className="text-brandDark dark:text-brandAccent">matters.</span>
//           </h1>
          
//           <div className="relative max-w-xl mx-auto">
//             <FaSearch className="absolute -translate-y-1/2 left-5 top-1/2 text-zinc-400" />
//             <input 
//               type="text" 
//               placeholder="Search by role or department..."
//               className="w-full py-4 pl-12 pr-6 transition-all bg-white border shadow-xl outline-none dark:bg-bgSurfaceDark border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-zinc-200/50 dark:shadow-none focus:ring-2 ring-brandPrimary/20"
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>
//       </header>

//       {/* --- JOB LISTING GRID --- */}
//       <main className="max-w-6xl px-6 pb-24 mx-auto">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {filteredJobs.length > 0 ? (
//             filteredJobs.map((job, idx) => (
//               <motion.div
//                 layout
//                 key={idx}
//                 onClick={() => setSelectedJob(job)}
//                 className="p-8 transition-all border cursor-pointer group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-3xl hover:border-brandPrimary hover:shadow-2xl hover:shadow-brandPrimary/5"
//               >
//                 <div className="flex items-start justify-between mb-6">
//                   <span className="text-[10px] font-bold px-2 py-1 bg-brandPrimary/10 text-brandPrimary rounded uppercase">
//                     {job.employmentType.replace('_', ' ')}
//                   </span>
//                 </div>
//                 <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-brandPrimary">{job.title}</h3>
//                 <p className="mb-6 text-sm font-medium text-zinc-500">{job.hiringOrganization.name}</p>
                
//                 <div className="flex items-center justify-between pt-6 border-t border-zinc-50 dark:border-zinc-800">
//                   <div className="flex items-center gap-2 text-xs text-zinc-400">
//                     <FaMapMarkerAlt className="text-brandPrimary" />
//                     {job.jobLocation.address.addressLocality}
//                   </div>
//                   <div className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-zinc-50 dark:bg-brandAccent group-hover:bg-brandDark group-hover:text-white">
//                     <FaArrowRight size={10} />
//                   </div>
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="py-20 text-center border-2 border-dashed col-span-full border-zinc-100 dark:border-zinc-800 rounded-3xl text-zinc-400">
//               No matching positions found.
//             </div>
//           )}
//         </div>
//       </main>

//       {/* --- APPLICATION MODAL (OVERLAPS EVERYTHING) --- */}
//       <AnimatePresence>
//         {selectedJob && (
//           <motion.div 
//             // Fixed at z-[9999] to ensure it sits on top of sticky headers
//             className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6"
//             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
//           >
//             {/* Backdrop with heavy blur */}
//             <div className="absolute inset-0 bg-zinc-950/60 backdrop-blur-xl" onClick={() => setSelectedJob(null)} />

//             {/* Modal Body */}
//             <motion.div 
//               className="relative w-full h-full md:h-auto md:max-h-[92vh] md:max-w-6xl bg-white dark:bg-zinc-900 md:rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
//               initial={{ y: 50, opacity: 0, scale: 0.95 }}
//               animate={{ y: 0, opacity: 1, scale: 1 }}
//               exit={{ y: 50, opacity: 0, scale: 0.95 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Close Button (Floating for mobile) */}
//               <button 
//                 onClick={() => setSelectedJob(null)}
//                 className="absolute z-20 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg top-6 right-6 dark:bg-zinc-800 md:hidden"
//               >
//                 <FaTimes />
//               </button>

//               {/* LEFT: JOB DETAILS (Scrollable) */}
//               <div className="flex-[1.2] p-8 md:p-12 overflow-y-auto bg-zinc-50/50 dark:bg-zinc-800/20 border-b md:border-b-0 md:border-r border-zinc-100 dark:border-zinc-800">
//                 <button 
//                   onClick={() => setSelectedJob(null)}
//                   className="hidden md:flex items-center gap-2 text-[10px] font-black tracking-widest text-zinc-400 hover:text-brandPrimary mb-10 transition-colors"
//                 >
//                   <FaChevronLeft /> BACK TO OPPORTUNITIES
//                 </button>
                
//                 <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight md:text-4xl">{selectedJob.title}</h2>
//                 <div className="flex gap-4 mb-8">
//                   <span className="text-xs font-bold text-brandPrimary">{selectedJob.hiringOrganization.name}</span>
//                   <span className="text-xs font-bold text-zinc-400">•</span>
//                   <span className="text-xs font-bold text-zinc-400">{selectedJob.jobLocation.address.addressLocality}</span>
//                 </div>

//                 <div 
//                   className="prose-sm prose prose-zinc dark:prose-invert max-w-none prose-h3:text-lg prose-h3:font-bold prose-p:leading-relaxed prose-li:my-1"
//                   dangerouslySetInnerHTML={{ __html: selectedJob.description }}
//                 />
//               </div>

//               {/* RIGHT: APPLICATION FORM */}
//               <div className="flex-1 p-8 overflow-y-auto bg-white md:p-12 dark:bg-zinc-900">
//                 <h3 className="mb-2 text-xl font-bold">Apply Now</h3>
//                 <p className="mb-8 text-sm text-zinc-500">Complete the form below to submit your interest.</p>

//                 <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Full Name</label>
//                     <input type="text" placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 transition-all text-sm" />
//                   </div>
                  
//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Email Address</label>
//                     <input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border-none outline-none focus:ring-2 ring-brandPrimary/30 transition-all text-sm" />
//                   </div>

//                   <div className="space-y-1.5">
//                     <label className="text-[10px] font-bold uppercase text-zinc-400 tracking-widest">Resume / CV</label>
//                     <div className="flex flex-col items-center justify-center p-10 transition-all border-2 border-dashed cursor-pointer group border-zinc-200 dark:border-zinc-800 rounded-2xl hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
//                       <div className="flex items-center justify-center w-12 h-12 mb-3 transition-transform rounded-full bg-brandPrimary/5 group-hover:scale-110">
//                         <FaUpload className="text-brandPrimary" />
//                       </div>
//                       <span className="text-xs font-bold text-zinc-500">Upload PDF</span>
//                       <span className="text-[10px] text-zinc-400 mt-1">Maximum file size 5MB</span>
//                     </div>
//                   </div>

//                   <div className="pt-4">
//                     <button className="w-full py-4 bg-brandPrimary text-white rounded-2xl font-bold shadow-xl shadow-brandPrimary/20 hover:opacity-90 active:scale-[0.98] transition-all">
//                       Submit Application
//                     </button>
//                     <p className="text-[10px] text-center text-zinc-400 mt-4 leading-relaxed">
//                       By clicking submit, you agree to our Terms of Service and Privacy Policy regarding applicant data.
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaTimes, 
  FaUpload, 
  FaSearch, 
  FaChevronLeft,
  FaArrowRight
} from "react-icons/fa";
import jobData from "../../data/jobData.json";


export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [isSearching, setIsSearching] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedJob) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedJob]);

  // Extract unique values for filters
  const departments = useMemo(() => {
    // Since hiringOrganization.name doesn't exist in your data, we'll use job titles as departments
    const depts = [...new Set(jobData.map(job => {
      // Extract department from job title (e.g., "Senior Risk Consultant" -> "Risk")
      if (job.title) {
        if (job.title.toLowerCase().includes('risk')) return 'Risk Management';
        if (job.title.toLowerCase().includes('audit')) return 'Internal Audit';
        if (job.title.toLowerCase().includes('security')) return 'Cyber Security';
        if (job.title.toLowerCase().includes('compliance')) return 'Compliance';
      }
      return 'General';
    }).filter(Boolean))];
    return ["all", ...depts];
  }, []);

  const locations = useMemo(() => {
    const locs = [...new Set(jobData.map(job => job.jobLocation?.address?.addressLocality).filter(Boolean))];
    return ["all", ...locs];
  }, []);

  const employmentTypes = useMemo(() => {
    const types = [...new Set(jobData.map(job => job.employmentType).filter(Boolean))];
    return ["all", ...types];
  }, []);

  // Helper function to extract department from job title
  const getDepartmentFromTitle = (title) => {
    if (!title) return 'General';
    const titleLower = title.toLowerCase();
    if (titleLower.includes('risk')) return 'Risk Management';
    if (titleLower.includes('audit')) return 'Internal Audit';
    if (titleLower.includes('security')) return 'Cyber Security';
    if (titleLower.includes('compliance')) return 'Compliance';
    return 'General';
  };

  // Enhanced Search and Filter Logic
  const filteredJobs = useMemo(() => {
    return jobData.filter(job => {
      // Search works immediately - even with 1 character
      const searchLower = searchQuery.toLowerCase().trim();
      const jobDepartment = getDepartmentFromTitle(job.title);
      
      const matchesSearch = 
        searchLower === "" || // Show all if search is empty
        (job.title && job.title.toLowerCase().includes(searchLower)) ||
        (jobDepartment && jobDepartment.toLowerCase().includes(searchLower)) ||
        (job.description && job.description.toLowerCase().includes(searchLower));
      
      const matchesDepartment = 
        selectedDepartment === "all" || 
        jobDepartment === selectedDepartment;
      
      const matchesLocation = 
        selectedLocation === "all" || 
        (job.jobLocation?.address?.addressLocality === selectedLocation);
      
      const matchesType = 
        selectedType === "all" || 
        job.employmentType === selectedType;

      return matchesSearch && matchesDepartment && matchesLocation && matchesType;
    });
  }, [searchQuery, selectedDepartment, selectedLocation, selectedType]);

  // Determine if we should show empty state
  // Only show empty state if:
  // - Search is at least 2 characters (prevents flash while typing first chars)
  // - OR other filters are active (deliberate user action)
  const hasActiveFilters = 
    (searchQuery.trim().length >= 2) || 
    selectedDepartment !== "all" || 
    selectedLocation !== "all" || 
    selectedType !== "all";
  const shouldShowEmptyState = filteredJobs.length === 0 && hasActiveFilters;
  
  // Show all jobs if we're in the "no results but search too short" state
  const jobsToDisplay = (filteredJobs.length === 0 && searchQuery.trim().length > 0 && searchQuery.trim().length < 2) 
    ? jobData 
    : filteredJobs;

  return (
    <div className="min-h-screen font-sans bg-bgLight dark:bg-bgDark text-brandDark dark:text-white">
      
      {/* --- HERO SECTION --- */}
      <header className="relative px-6 pt-32 pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brandPrimary/5 via-transparent to-brandGold/5 dark:from-brandPrimary/10 dark:to-brandGold/10" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 mb-6 text-xs font-bold tracking-wider uppercase border rounded-full bg-brandLight dark:bg-surfaceDark border-brandPrimary/20 dark:border-brandGold/30 text-brandPrimary dark:text-brandGold"
          >
            Join the Team
          </motion.span>
          
          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 text-5xl font-black tracking-tight md:text-6xl lg:text-7xl font-heading"
          >
            Work that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandPrimary to-brandGold">
              matters.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10 text-base leading-relaxed text-brandNavy dark:text-white/70"
          >
            Join a team where your expertise shapes the future. Explore opportunities 
            that challenge, inspire, and reward excellence.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-xl mx-auto mb-8"
          >
            <FaSearch className="absolute z-10 text-brandPrimary/50 dark:text-brandGold/50 -translate-y-1/2 left-5 top-1/2" />
            <input 
              type="text" 
              placeholder="Search by role, department, or keyword..."
              value={searchQuery}
              className="w-full py-4 pl-12 pr-6 text-base transition-all border shadow-lg bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brandPrimary/30 dark:focus:ring-brandGold/30 focus:border-brandPrimary dark:focus:border-brandGold"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto"
          >
            {/* Department Filter */}
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2.5 text-sm font-medium transition-all border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl focus:outline-none focus:ring-2 focus:ring-brandPrimary/30 dark:focus:ring-brandGold/30 focus:border-brandPrimary dark:focus:border-brandGold text-brandDark dark:text-white"
            >
              <option value="all">All Departments</option>
              {departments.filter(d => d !== "all").map((dept, idx) => (
                <option key={idx} value={dept}>{dept}</option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2.5 text-sm font-medium transition-all border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl focus:outline-none focus:ring-2 focus:ring-brandPrimary/30 dark:focus:ring-brandGold/30 focus:border-brandPrimary dark:focus:border-brandGold text-brandDark dark:text-white"
            >
              <option value="all">All Locations</option>
              {locations.filter(l => l !== "all").map((loc, idx) => (
                <option key={idx} value={loc}>{loc}</option>
              ))}
            </select>

            {/* Employment Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2.5 text-sm font-medium transition-all border cursor-pointer bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl focus:outline-none focus:ring-2 focus:ring-brandPrimary/30 dark:focus:ring-brandGold/30 focus:border-brandPrimary dark:focus:border-brandGold text-brandDark dark:text-white"
            >
              <option value="all">All Types</option>
              {employmentTypes.filter(t => t !== "all").map((type, idx) => (
                <option key={idx} value={type}>
                  {type.replace('_', ' ')}
                </option>
              ))}
            </select>

            {/* Clear Filters Button */}
            {(searchQuery || selectedDepartment !== "all" || selectedLocation !== "all" || selectedType !== "all") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedDepartment("all");
                  setSelectedLocation("all");
                  setSelectedType("all");
                }}
                className="px-4 py-2.5 text-sm font-bold transition-all border bg-brandLight dark:bg-brandDark border-borderLight dark:border-borderDark rounded-xl hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:border-brandPrimary dark:hover:border-brandGold text-brandPrimary dark:text-brandGold"
              >
                Clear Filters
              </button>
            )}
          </motion.div>
        </div>
      </header>

      {/* Results Count */}
      <div className="max-w-6xl px-6 mx-auto mb-6">
        <p className="text-sm font-medium text-brandNavy/60 dark:text-white/50">
          {jobsToDisplay.length} {jobsToDisplay.length === 1 ? 'position' : 'positions'} found
          {hasActiveFilters && (
            <span className="ml-2 text-xs text-brandNavy/40 dark:text-white/30">
              (filtered from {jobData.length} total)
            </span>
          )}
        </p>
      </div>

      {/* --- JOB LISTING GRID --- */}
      <main className="max-w-6xl px-6 pb-24 mx-auto">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {jobsToDisplay.length > 0 ? (
            jobsToDisplay.map((job, idx) => (
              <motion.div
                layout
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedJob(job)}
                className="relative p-6 transition-all border cursor-pointer group bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-2xl hover:shadow-xl hover:shadow-brandPrimary/5 dark:hover:shadow-brandGold/10 hover:border-brandPrimary/40 dark:hover:border-brandGold/40 hover:-translate-y-1"
              >
                {/* Employment Type Badge */}
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-brandPrimary/10 dark:bg-brandGold/10 text-brandPrimary dark:text-brandGold rounded-full uppercase tracking-wider">
                    {job.employmentType.replace('_', ' ')}
                  </span>
                </div>
                
                {/* Job Title */}
                <h3 className="mb-2 text-lg font-bold leading-tight transition-colors font-heading group-hover:text-brandPrimary dark:group-hover:text-brandGold">
                  {job.title}
                </h3>
                
                {/* Department (extracted from title) */}
                <p className="mb-5 text-sm font-medium text-brandNavy/70 dark:text-white/60">
                  {getDepartmentFromTitle(job.title)}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-borderLight dark:border-borderDark">
                  <div className="flex items-center gap-2 text-xs font-medium text-brandNavy/60 dark:text-white/50">
                    <FaMapMarkerAlt className="text-brandPrimary dark:text-brandGold" size={12} />
                    {job.jobLocation.address.addressLocality}
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 transition-all rounded-full bg-brandLight dark:bg-brandDark group-hover:bg-brandPrimary dark:group-hover:bg-brandGold group-hover:text-white">
                    <FaArrowRight size={10} />
                  </div>
                </div>
              </motion.div>
            ))
          ) : shouldShowEmptyState ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-20 text-center border-2 border-dashed col-span-full border-borderLight dark:border-borderDark rounded-2xl bg-brandLight/30 dark:bg-brandDark/30"
            >
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-brandPrimary/10 dark:bg-brandGold/10">
                  <FaSearch className="text-2xl text-brandPrimary dark:text-brandGold" />
                </div>
                
                <h3 className="mb-2 text-xl font-bold text-brandDark dark:text-white">
                  No positions found
                </h3>
                <p className="mb-1 text-base text-brandNavy/70 dark:text-white/60">
                  We couldn't find any positions matching:
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4 mb-6">
                  {searchQuery && (
                    <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-brandPrimary/10 dark:bg-brandGold/10 text-brandPrimary dark:text-brandGold">
                      "{searchQuery}"
                    </span>
                  )}
                  {selectedDepartment !== "all" && (
                    <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-brandPrimary/10 dark:bg-brandGold/10 text-brandPrimary dark:text-brandGold">
                      {selectedDepartment}
                    </span>
                  )}
                  {selectedLocation !== "all" && (
                    <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-brandPrimary/10 dark:bg-brandGold/10 text-brandPrimary dark:text-brandGold">
                      {selectedLocation}
                    </span>
                  )}
                  {selectedType !== "all" && (
                    <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-brandPrimary/10 dark:bg-brandGold/10 text-brandPrimary dark:text-brandGold">
                      {selectedType.replace('_', ' ')}
                    </span>
                  )}
                </div>
                <p className="text-sm text-brandNavy/50 dark:text-white/40">
                  Try adjusting your search or filters to find what you're looking for
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedDepartment("all");
                    setSelectedLocation("all");
                    setSelectedType("all");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 mt-6 text-sm font-bold transition-all border bg-surfaceLight dark:bg-surfaceDark border-borderLight dark:border-borderDark rounded-xl hover:bg-brandPrimary/10 dark:hover:bg-brandGold/10 hover:border-brandPrimary dark:hover:border-brandGold text-brandPrimary dark:text-brandGold"
                >
                  <FaTimes size={12} />
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          ) : null}
        </div>
      </main>

      {/* --- APPLICATION MODAL --- */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div 
            className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-brandDark/80 dark:bg-black/90 backdrop-blur-xl" 
              onClick={() => setSelectedJob(null)} 
            />

            {/* Modal Body */}
            <motion.div 
              className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-6xl bg-surfaceLight dark:bg-surfaceDark md:rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
              initial={{ y: 50, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button (Mobile) */}
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute z-20 flex items-center justify-center w-10 h-10 transition-all rounded-full shadow-lg top-6 right-6 bg-surfaceLight dark:bg-surfaceDark hover:bg-brandLight dark:hover:bg-brandDark md:hidden"
              >
                <FaTimes className="text-brandDark dark:text-white" />
              </button>

              {/* LEFT: JOB DETAILS (Scrollable) */}
              <div className="flex-[1.4] p-8 md:p-10 lg:p-12 overflow-y-auto bg-brandLight/50 dark:bg-brandDark/30 border-b md:border-b-0 md:border-r border-borderLight dark:border-borderDark">
                {/* Back Button (Desktop) */}
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="hidden md:flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-brandNavy/60 dark:text-white/50 hover:text-brandPrimary dark:hover:text-brandGold mb-8 transition-colors"
                >
                  <FaChevronLeft size={10} /> Back to Opportunities
                </button>
                
                {/* Job Title */}
                <h2 className="mb-3 text-3xl font-black leading-tight tracking-tight md:text-4xl font-heading text-brandDark dark:text-white">
                  {selectedJob.title}
                </h2>
                
                {/* Meta Info */}
                <div className="flex flex-wrap gap-3 pb-6 mb-6 border-b border-borderLight dark:border-borderDark">
                  <span className="flex items-center gap-2 text-sm font-bold text-brandPrimary dark:text-brandGold">
                    <FaBriefcase size={12} />
                    {getDepartmentFromTitle(selectedJob.title)}
                  </span>
                  <span className="text-sm font-bold text-brandNavy/40 dark:text-white/30">•</span>
                  <span className="flex items-center gap-2 text-sm font-bold text-brandNavy/70 dark:text-white/60">
                    <FaMapMarkerAlt size={12} />
                    {selectedJob.jobLocation.address.addressLocality}
                  </span>
                </div>

                {/* Job Description */}
                <div 
                  className="prose-sm prose prose-zinc dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-brandDark dark:prose-headings:text-white prose-p:text-base prose-p:leading-relaxed prose-p:text-brandNavy dark:prose-p:text-white/70 prose-li:text-base prose-li:my-1 prose-ul:my-3"
                  dangerouslySetInnerHTML={{ __html: selectedJob.description }}
                />
              </div>

              {/* RIGHT: APPLICATION FORM */}
              <div className="flex-1 p-8 overflow-y-auto md:p-10 lg:p-12 bg-surfaceLight dark:bg-surfaceDark">
                <h3 className="mb-2 text-2xl font-bold font-heading text-brandDark dark:text-white">
                  Apply Now
                </h3>
                <p className="mb-8 text-base leading-relaxed text-brandNavy/70 dark:text-white/60">
                  Complete the form below to submit your application.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-brandNavy/70 dark:text-white/60">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3.5 text-base rounded-xl bg-brandLight dark:bg-brandDark border border-borderLight dark:border-borderDark outline-none focus:ring-2 focus:ring-brandPrimary/30 dark:focus:ring-brandGold/30 focus:border-brandPrimary dark:focus:border-brandGold transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500" 
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-brandNavy/70 dark:text-white/60">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3.5 text-base rounded-xl bg-brandLight dark:bg-brandDark border border-borderLight dark:border-borderDark outline-none focus:ring-2 focus:ring-brandPrimary/30 dark:focus:ring-brandGold/30 focus:border-brandPrimary dark:focus:border-brandGold transition-all placeholder:text-zinc-400 dark:placeholder:text-zinc-500" 
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-brandNavy/70 dark:text-white/60">
                      Resume / CV
                    </label>
                    <div className="flex flex-col items-center justify-center p-8 transition-all border-2 border-dashed cursor-pointer group border-borderLight dark:border-borderDark rounded-xl hover:bg-brandLight dark:hover:bg-brandDark hover:border-brandPrimary dark:hover:border-brandGold">
                      <div className="flex items-center justify-center w-12 h-12 mb-3 transition-transform rounded-full bg-brandPrimary/10 dark:bg-brandGold/10 group-hover:scale-110">
                        <FaUpload className="text-brandPrimary dark:text-brandGold" />
                      </div>
                      <span className="text-sm font-bold text-brandNavy dark:text-white/80">
                        Upload PDF
                      </span>
                      <span className="text-xs text-brandNavy/50 dark:text-white/40 mt-1.5">
                        Maximum file size 5MB
                      </span>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full py-4 text-base font-bold text-white transition-all shadow-lg bg-brandPrimary dark:bg-brandGold dark:text-brandDark rounded-xl shadow-brandPrimary/20 dark:shadow-brandGold/20 hover:opacity-90 active:scale-[0.99]"
                    >
                      Submit Application
                    </button>
                    <p className="text-xs text-center leading-relaxed mt-4 text-brandNavy/50 dark:text-white/40">
                      By clicking submit, you agree to our Terms of Service and Privacy Policy regarding applicant data.
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}