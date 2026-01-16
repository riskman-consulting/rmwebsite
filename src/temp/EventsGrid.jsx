
// import React from 'react';


// const EventsGrid= ({ events, onCardClick }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//       {events.map((event) => (
//         <div 
//           key={event.id}
//           onClick={() => onCardClick(event)}
//           className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-400 transition-all hover:shadow-2xl flex flex-col sm:flex-row h-full"
//         >
//           <div className="w-full sm:w-1/3 relative h-48 sm:h-auto overflow-hidden">
//             <img 
//               src={event.image} 
//               alt={event.title}
//               className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             {event.features && (
//               <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
//                 Featured
//               </span>
//             )}
//           </div>
//           <div className="w-full sm:w-2/3 p-6 flex flex-col justify-between">
//             <div>
//               <div className="flex justify-between items-start mb-2">
//                 <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{event.date}</span>
//                 <span className="text-xs text-slate-400 flex items-center">
//                   <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
//                   {event.location}
//                 </span>
//               </div>
//               <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
//                 {event.title}
//               </h3>
//               <p className="text-slate-500 text-sm line-clamp-2">
//                 {event.shortDesc}
//               </p>
//             </div>
            
//             <div className="mt-6 flex items-center text-blue-600 font-bold text-sm">
//               Read More
//               <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventsGrid;

import React from 'react';

const EventsGrid = ({ events, onCardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <div 
          key={event.id}
          onClick={() => onCardClick(event)}
          className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-200 transition-all hover:border-blue-500 hover:shadow-xl flex flex-col"
        >
          {/* Compact Image */}
          <div className="h-44 relative overflow-hidden">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {event.featured && (
              <div className="absolute top-3 left-3">
                <span className="bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded shadow-sm">
                  Featured
                </span>
              </div>
            )}
          </div>

          {/* Content Area */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                {event.date}
              </span>
              <div className="flex items-center text-slate-400 text-[10px] font-medium uppercase tracking-tighter">
                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                </svg>
                {event.location.split(',')[0]}
              </div>
            </div>

            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-1">
              {event.title}
            </h3>
            
            <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
              {event.shortDesc}
            </p>

            <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">See details</span>
              <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsGrid;
