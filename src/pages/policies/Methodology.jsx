import { SectionWrapper, SectionTag, SectionTitle } from "../../components/ui/SectionComponents";
import methodologyImg from "../../assets/images/policies/methodology-framework.png";

export default function MethodologySection() {
  return (
    <SectionWrapper id="methodology">
      <div className="px-6 py-24 transition-colors duration-300 bg-slate-50 dark:bg-brandDark/30">
        <div className="max-w-6xl mx-auto">
          <SectionTag>Execution</SectionTag>
          {/* <SectionTitle>Methodology and Execution Framework</SectionTitle> */}
          
          <div className="p-6 overflow-hidden bg-white border shadow-lg dark:bg-surfaceDark border-slate-200 dark:border-brandPrimary/30 rounded-2xl dark:shadow-2xl">
            <img src={methodologyImg} alt="Methodology and Execution Framework" className="w-full h-full transition-opacity rounded-lg opacity-100 dark:opacity-90 dark:hover:opacity-100" />
          </div>
          
          <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3">
            <div className="p-6 bg-white border shadow-sm dark:bg-brandNavy/20 border-slate-200 dark:border-brandPrimary/20 rounded-xl dark:shadow-none">
              <h3 className="mb-3 text-lg font-bold text-brandPrimary dark:text-brandAccent">Phase I-II: Diagnostic & Design</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Review existing practices, map current processes, and develop Core SOPs with standardized process maps and clear RACI matrices.</p>
            </div>
            <div className="p-6 bg-white border shadow-sm dark:bg-brandNavy/20 border-slate-200 dark:border-brandPrimary/20 rounded-xl dark:shadow-none">
              <h3 className="mb-3 text-lg font-bold text-brandPrimary dark:text-brandAccent">Phase III-IV: Customization & Alignment</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Identify location-specific deviations, conduct alignment workshops, and ensure validation of SOP design and controls.</p>
            </div>
            <div className="p-6 bg-white border shadow-sm dark:bg-brandNavy/20 border-slate-200 dark:border-brandPrimary/20 rounded-xl dark:shadow-none">
              <h3 className="mb-3 text-lg font-bold text-brandPrimary dark:text-brandAccent">Phase V: Finalization</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Deliver final SOPs, provide MIS templates, conduct training workshops, and ensure smooth internal rollout.</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
