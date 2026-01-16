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