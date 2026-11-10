import { SectionWrapper, SectionTag, SectionTitle } from "../../components/ui/SectionComponents";
import sopImg from "../../assets/images/policies/sop-document.png"

export default function SOPSection() {
  return (
    <SectionWrapper id="sop">
      <div className="py-20 transition-colors duration-300 bg-surfaceLight dark:bg-surfaceDark">
        <div className="container">
          <SectionTag>Deliverables</SectionTag>
          {/* <SectionTitle>Standard Operating Procedure Document</SectionTitle> */}
          
          <div className="relative p-6 overflow-hidden bg-bgLight border shadow-lg dark:bg-bgDark border-slate-200 dark:border-brandPrimary/30 rounded-2xl dark:shadow-2xl group">
            <img src={sopImg} alt="Standard Operating Procedure Document Structure" className="relative z-0 w-full h-auto rounded-lg" />
            
            <div className="relative z-20 grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
              <div className="h-full p-5 transition-transform transform border rounded-2xl shadow-sm bg-white/90 dark:bg-brandDark/90 backdrop-blur-sm border-slate-200 dark:border-brandPrimary/40 hover:-translate-y-1">
                <div className="mb-2 font-bold text-brandPrimary dark:text-brandAccent">Organization Structure</div>
                <p className="text-xs text-slate-600 dark:text-slate-300">Clear hierarchy and reporting lines ensuring accountability across all levels.</p>
              </div>
              <div className="h-full p-5 transition-transform transform border rounded-2xl shadow-sm bg-white/90 dark:bg-brandDark/90 backdrop-blur-sm border-slate-200 dark:border-brandPrimary/40 hover:-translate-y-1">
                <div className="mb-2 font-bold text-brandPrimary dark:text-brandAccent">Process Maps</div>
                <p className="text-xs text-slate-600 dark:text-slate-300">Visual workflows detailing every step, decision point, and system interaction.</p>
              </div>
              <div className="h-full p-5 transition-transform transform border rounded-2xl shadow-sm bg-white/90 dark:bg-brandDark/90 backdrop-blur-sm border-slate-200 dark:border-brandPrimary/40 hover:-translate-y-1">
                <div className="mb-2 font-bold text-brandPrimary dark:text-brandAccent">Process Narratives</div>
                <p className="text-xs text-slate-600 dark:text-slate-300">Detailed step-by-step descriptions with inputs, outputs, and responsibilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
