
// // import React, { useEffect } from 'react';



// // const EventModal = ({ event, onClose }) => {
// //   // Use escape key to close modal
// //   useEffect(() => {
// //     const handleEsc = (e) => {
// //       if (e.key === 'Escape') onClose();
// //     };
// //     window.addEventListener('keydown', handleEsc);
// //     return () => window.removeEventListener('keydown', handleEsc);
// //   }, [onClose]);

// //   return (
// //     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
// //       {/* Backdrop */}
// //       <div 
// //         className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-fade-in"
// //         onClick={onClose}
// //       ></div>

// //       {/* Modal Container */}
// //       <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-up max-h-[90vh] flex flex-col">
// //         {/* Close Button */}
// //         <button 
// //           onClick={onClose}
// //           className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-md"
// //         >
// //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
// //         </button>

// //         {/* Modal Body */}
// //         <div className="overflow-y-auto flex-grow">
// //           {/* Header Image */}
// //           <div className="relative h-64 sm:h-80 w-full">
// //             <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
// //             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
// //             <div className="absolute bottom-6 left-8 text-white">
// //               <span className="px-2 py-1 bg-blue-600 text-[10px] font-bold rounded uppercase mb-2 inline-block">Chapter Event</span>
// //               <h2 className="text-3xl font-bold mb-1">{event.title}</h2>
// //               <p className="text-slate-200 flex items-center text-sm">
// //                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
// //                 {event.location} • {event.date}
// //               </p>
// //             </div>
// //           </div>

// //           <div className="p-8">
// //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
// //               {/* Description Column */}
// //               <div className="lg:col-span-2">
// //                 <h3 className="text-xl font-bold text-slate-900 mb-4">About the Event</h3>
// //                 <p className="text-slate-600 leading-relaxed mb-8">
// //                   {event.fullDesc}
// //                 </p>

// //                 <h3 className="text-xl font-bold text-slate-900 mb-4">Gallery</h3>
// //                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
// //                   {event.gallery.map((img, idx) => (
// //                     <div key={idx} className="aspect-square rounded-xl overflow-hidden group">
// //                       <img 
// //                         src={img} 
// //                         alt={`Gallery ${idx}`} 
// //                         className="w-full h-full object-cover transition-transform group-hover:scale-110"
// //                       />
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Sidebar Column */}
// //               <div className="bg-slate-50 p-6 rounded-2xl h-fit border border-slate-200">
// //                 <h4 className="font-bold text-slate-900 mb-4">Event Details</h4>
// //                 <ul className="space-y-4 mb-6">
// //                   <li className="flex items-start">
// //                     <div className="w-5 h-5 mt-1 mr-3 text-blue-600">
// //                       <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
// //                     </div>
// //                     <div>
// //                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Date</p>
// //                       <p className="text-slate-900 font-medium">{event.date}</p>
// //                     </div>
// //                   </li>
// //                   <li className="flex items-start">
// //                     <div className="w-5 h-5 mt-1 mr-3 text-blue-600">
// //                       <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
// //                     </div>
// //                     <div>
// //                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Time</p>
// //                       <p className="text-slate-900 font-medium">09:00 AM - 05:00 PM</p>
// //                     </div>
// //                   </li>
// //                 </ul>
// //                 {/* <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors mb-3 shadow-lg shadow-blue-500/10">
// //                   Register Seat
// //                 </button>
// //                 <button className="w-full py-3 bg-white border border-slate-300 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition-colors">
// //                   Contact Organizers
// //                 </button> */}
// //                 <p className="mt-4 text-center text-xs text-slate-400">
// //                   Limited seats available. Members get 20% discount.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default EventModal;



// import React, { useEffect, useState } from 'react';

// const EventModal = ({ event, onClose }) => {
//   const [lightboxImage, setLightboxImage] = useState(null);

//   // Use escape key to close modal
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') {
//         if (lightboxImage) {
//           setLightboxImage(null);
//         } else {
//           onClose();
//         }
//       }
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [onClose, lightboxImage]);

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-fade-in"
//         onClick={onClose}
//       ></div>

//       {/* Modal Container */}
//       <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-scale-up max-h-[90vh] flex flex-col">
//         {/* Close Button */}
//         <button 
//           onClick={onClose}
//           className="absolute top-4 right-4 z-50 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-md"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
//         </button>

//         {/* Modal Body */}
//         <div className="overflow-y-auto flex-grow">
//           {/* Header Image - Fixed to not cut off */}
//           <div className="relative w-full">
//             <div className="w-full h-64 sm:h-80">
//               <img 
//                 src={event.image} 
//                 alt={event.title} 
//                 className="w-full h-full object-cover object-center"
//               />
//             </div>
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
//             <div className="absolute bottom-6 left-8 text-white">
//               <span className="px-2 py-1 bg-blue-600 text-[10px] font-bold rounded uppercase mb-2 inline-block">Chapter Event</span>
//               <h2 className="text-3xl font-bold mb-1">{event.title}</h2>
//               <p className="text-slate-200 flex items-center text-sm">
//                 <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
//                 {event.location} • {event.date}
//               </p>
//             </div>
//           </div>

//           <div className="p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//               {/* Description Column */}
//               <div className="lg:col-span-2">
//                 <h3 className="text-xl font-bold text-slate-900 mb-4">About the Event</h3>
//                 <p className="text-slate-600 leading-relaxed mb-8">
//                   {event.fullDesc}
//                 </p>

//                 <h3 className="text-xl font-bold text-slate-900 mb-4">Gallery</h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                   {event.gallery.map((img, idx) => (
//                     <div 
//                       key={idx} 
//                       className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
//                       onClick={() => setLightboxImage(img)}
//                     >
//                       <img 
//                         src={img} 
//                         alt={`Gallery ${idx}`} 
//                         className="w-full h-full object-cover transition-transform group-hover:scale-110"
//                       />
//                       <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
//                         <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
//                         </svg>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Sidebar Column */}
//               <div className="bg-slate-50 p-6 rounded-2xl h-fit border border-slate-200">
//                 <h4 className="font-bold text-slate-900 mb-4">Event Details</h4>
//                 <ul className="space-y-4 mb-6">
//                   <li className="flex items-start">
//                     <div className="w-5 h-5 mt-1 mr-3 text-blue-600">
//                       <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
//                     </div>
//                     <div>
//                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Date</p>
//                       <p className="text-slate-900 font-medium">{event.date}</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-5 h-5 mt-1 mr-3 text-blue-600">
//                       <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//                     </div>
//                     <div>
//                       <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Time</p>
//                       <p className="text-slate-900 font-medium">09:00 AM - 05:00 PM</p>
//                     </div>
//                   </li>
//                 </ul>
//                 <p className="mt-4 text-center text-xs text-slate-400">
//                   Limited seats available. Members get 20% discount.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lightbox for Gallery Images */}
//       {lightboxImage && (
//         <div 
//           className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 animate-fade-in"
//           onClick={() => setLightboxImage(null)}
//         >
//           <button 
//             onClick={() => setLightboxImage(null)}
//             className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
//           </button>
//           <img 
//             src={lightboxImage} 
//             alt="Gallery preview" 
//             className="max-w-full max-h-[90vh] object-contain rounded-lg"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventModal;

// import React, { useEffect, useState } from 'react';

// const EventModal = ({ event, onClose }) => {
//   const [lightboxImage, setLightboxImage] = useState(null);

//   // Use escape key to close modal
//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === 'Escape') {
//         if (lightboxImage) {
//           setLightboxImage(null);
//         } else {
//           onClose();
//         }
//       }
//     };
//     window.addEventListener('keydown', handleEsc);
//     return () => window.removeEventListener('keydown', handleEsc);
//   }, [onClose, lightboxImage]);

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//       {/* Backdrop */}
//       <div 
//         className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
//         onClick={onClose}
//       ></div>

//       {/* Modal Container */}
//       <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">
//         {/* Close Button */}
//         <button 
//           onClick={onClose}
//           className="absolute top-3 right-3 z-50 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-all hover:scale-110"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
//         </button>

//         {/* Modal Body */}
//         <div className="overflow-y-auto flex-grow">
//           {/* Header Image with Better Visibility */}
//           <div className="relative w-full h-72">
//             <img 
//               src={event.image} 
//               alt={event.title} 
//               className="w-full h-full object-cover"
//             />
//             {/* Lighter gradient for better image visibility */}
//             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
            
//             {/* Content Overlay */}
//             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
//               <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-lg uppercase mb-3">
//                 Chapter Event
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 drop-shadow-lg">
//                 {event.title}
//               </h2>
//               <p className="text-white/90 flex items-center text-sm font-medium">
//                 <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                 </svg>
//                 {event.location} • {event.date}
//               </p>
//             </div>
//           </div>

//           {/* Content Section with Optimized Spacing */}
//           <div className="p-6 lg:p-8">
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
//               {/* Description Column */}
//               <div className="lg:col-span-2 space-y-6">
//                 {/* About Section */}
//                 <div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
//                     <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
//                     About the Event
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed text-[15px]">
//                     {event.fullDesc}
//                   </p>
//                 </div>

//                 {/* Gallery Section */}
//                 <div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
//                     <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
//                     Gallery
//                   </h3>
//                   <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
//                     {event.gallery.map((img, idx) => (
//                       <div 
//                         key={idx} 
//                         className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer bg-slate-100"
//                         onClick={() => setLightboxImage(img)}
//                       >
//                         <img 
//                           src={img} 
//                           alt={`Gallery ${idx + 1}`} 
//                           className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                         />
//                         {/* Hover Overlay */}
//                         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
//                           <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
//                             <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Sidebar Column - Compact Design */}
//               <div className="lg:sticky lg:top-0 lg:self-start">
//                 <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-5 rounded-xl border border-slate-200/80 shadow-sm">
//                   <h4 className="font-bold text-slate-900 mb-4 text-lg">Event Details</h4>
                  
//                   <ul className="space-y-3.5">
//                     <li className="flex items-start gap-3">
//                       <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
//                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
//                         </svg>
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Date</p>
//                         <p className="text-slate-900 font-semibold text-sm">{event.date}</p>
//                       </div>
//                     </li>
                    
//                     <li className="flex items-start gap-3">
//                       <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
//                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                         </svg>
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Time</p>
//                         <p className="text-slate-900 font-semibold text-sm">09:00 AM - 05:00 PM</p>
//                       </div>
//                     </li>

//                     <li className="flex items-start gap-3">
//                       <div className="w-10 h-10 rounded-lg bg-orange-600 flex items-center justify-center flex-shrink-0">
//                         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
//                         </svg>
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Location</p>
//                         <p className="text-slate-900 font-semibold text-sm">{event.location}</p>
//                       </div>
//                     </li>
//                   </ul>
                  
//                   {/* Info Box */}
//                   {/* <div className="mt-5 p-3 bg-blue-50 border border-blue-200 rounded-lg">
//                     <p className="text-center text-xs text-slate-600 leading-relaxed">
//                       <span className="font-bold text-blue-700">Limited seats available.</span><br />
//                       Members get 20% discount
//                     </p>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Lightbox for Gallery Images */}
//       {lightboxImage && (
//         <div 
//           className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm animate-fade-in"
//           onClick={() => setLightboxImage(null)}
//         >
//           <button 
//             onClick={() => setLightboxImage(null)}
//             className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all z-10 hover:scale-110"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//           <img 
//             src={lightboxImage} 
//             alt="Gallery preview" 
//             className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
//             onClick={(e) => e.stopPropagation()}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventModal;


import React, { useEffect, useState } from 'react';

const EventModal = ({ event, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(event.image);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Reset to main image when modal opens
  useEffect(() => {
    setSelectedImage(event.image);
  }, [event]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col">
        {/* Compact Navbar for Modal */}
        <div className="bg-slate-900 px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <span className="bg-blue-600 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-widest">Chapter Event</span>
            <h2 className="text-lg font-bold tracking-tight">{event.title}</h2>
          </div>
          <button 
            onClick={onClose} 
            className="hover:text-slate-300 transition-colors p-1 hover:bg-white/10 rounded-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        {/* Modal Body - Hidden Scrollbar */}
        <div className="flex-grow overflow-y-auto scrollbar-hide" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}>
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          <div className="flex flex-col lg:flex-row">
            {/* Visual Section - Left Side */}
            <div className="lg:w-1/2">
              <div className="h-[300px] lg:h-full relative">
                {/* Main/Selected Image */}
                <img 
                  src={selectedImage} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-all duration-300" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center space-x-6 text-white text-sm font-medium">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      {event.date}
                    </div>
                  </div>
                </div>

                {/* Image Indicator */}
                {selectedImage !== event.image && (
                  <button
                    onClick={() => setSelectedImage(event.image)}
                    className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-slate-900 text-xs font-bold rounded-lg hover:bg-white transition-all shadow-lg"
                  >
                    ← Back to Main
                  </button>
                )}
              </div>
            </div>

            {/* Information Section - Right Side */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="mb-8">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Event Overview</h3>
                <p className="text-slate-700 leading-relaxed text-sm lg:text-base">
                  {event.fullDesc}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Venue Gallery</h3>
                <div className="grid grid-cols-3 gap-2">
                  {event.gallery.map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`aspect-video rounded-lg overflow-hidden border-2 shadow-sm cursor-pointer group relative transition-all ${
                        selectedImage === img 
                          ? 'border-blue-500 ring-2 ring-blue-200' 
                          : 'border-slate-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img 
                        src={img} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105" 
                        alt={`Gallery ${idx + 1}`} 
                      />
                      {/* Hover Indicator */}
                      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all flex items-center justify-center">
                        <div className="bg-white/90 backdrop-blur-sm p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                          <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                          </svg>
                        </div>
                      </div>
                      {/* Selected Indicator */}
                      {selectedImage === img && (
                        <div className="absolute top-1 right-1 bg-blue-600 rounded-full p-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  Click any image to view on the left
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex-1 bg-slate-900 text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-all text-sm shadow-xl shadow-slate-900/10">
                  Register for Event
                </button>
                <button className="flex-1 bg-white border border-slate-200 text-slate-700 font-bold py-3 px-6 rounded-xl hover:bg-slate-50 transition-all text-sm">
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;