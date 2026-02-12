import React, { useState } from 'react';

const RiskManCareerPage = () => {
  // State for validation before submission
  const [formData, setFormData] = useState({
    Name_First: '',
    Name_Last: '',
    Email: '',
  });

  // Note: Zoho requires specific 'name' attributes for the backend to recognize the data
  const ZOHO_ACTION_URL = "https://forms.zohopublic.in/riskmanconsultingllp1/form/RiskManCareerPage/formperma/G0oOcPBf5wXoJ8tXvQuZHcaE4NU3RnMJewAvtKEcNHU/htmlRecords/submit";

  return (
    <div className="min-h-screen bg-[#edeff4] py-8 px-4 font-sans text-[#444444]">
      <div className="max-w-[800px] mx-auto bg-white rounded-[10px] shadow-[0px_0px_22px_0px_#d8dfed]">
        
        <div className="border-b border-[#ced3e0] p-7 md:p-10 text-center">
          <h2 className="text-[#252c3e] text-[33px] font-medium italic">RiskMan Career Page</h2>
        </div>

        {/* We use the standard HTML action/method here. 
          Zoho's validation script 'zf_ValidateAndSubmit()' usually handles this, 
          but in React, we use the URL directly.
        */}
        <form 
          action={ZOHO_ACTION_URL} 
          name="form" 
          method="POST" 
          acceptCharset="UTF-8" 
          enctype="multipart/form-data"
          id="form"
          className="p-4 md:p-10"
        >
          {/* Hidden inputs required by Zoho tracking */}
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />

          <div className="space-y-6">
            {/* Name Fields */}
            <div>
              <label className="block text-[16px] font-medium text-[#252c3e] mb-2">
                Name <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_First"
                    required
                    className="w-full h-[40px] border border-[#b8bbd3] rounded-[4px] px-3 py-2 focus:border-[#2eb79f] outline-none"
                  />
                  <label className="text-[13px] text-[#252c3e] opacity-80 mt-2 block">First Name</label>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    maxLength="255"
                    name="Name_Last"
                    required
                    className="w-full h-[40px] border border-[#b8bbd3] rounded-[4px] px-3 py-2 focus:border-[#2eb79f] outline-none"
                  />
                  <label className="text-[13px] text-[#252c3e] opacity-80 mt-2 block">Last Name</label>
                </div>
              </div>
            </div>

            {/* Email Field - checktype c5 corresponds to email validation */}
            <div>
              <label className="block text-[16px] font-medium text-[#252c3e] mb-2">
                Email <span className="text-red-600 font-bold">*</span>
              </label>
              <input
                type="text"
                name="Email"
                required
                className="w-full h-[40px] border border-[#b8bbd3] rounded-[4px] px-3 py-2 focus:border-[#2eb79f] outline-none"
              />
            </div>

            {/* File Upload - name must match 'FileUpload' */}
            <div>
              <label className="block text-[16px] font-medium text-[#252c3e] mb-2">
                Upload Resume <span className="text-red-600 font-bold">*</span>
              </label>
              <div className="w-full md:w-1/2">
                <input
                  type="file"
                  name="FileUpload"
                  required
                  className="w-full border border-dashed border-[#b8bbd3] rounded-[4px] p-3 text-[15px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 pb-4 text-center">
            <button
              type="submit"
              className="bg-[#2eb79f] text-white px-10 py-3 rounded-full text-[16px] transition-transform hover:scale-105 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RiskManCareerPage;