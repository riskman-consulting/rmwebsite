import React from "react";
import { Linkedin } from "lucide-react";
import CloudinaryImage from "../../components/common/CloudinaryImage";
/* ========= CONFIG ========= */
const COLUMNS_DESKTOP = 10;
const TILE_CLASS = "w-[96px] h-[96px]";

/* ========= AUTO LOGO POSITION ========= */
function injectLogo(members) {
  const total = members.length + 1;
  const rows = Math.ceil(total / COLUMNS_DESKTOP);

  const centerRow = Math.floor(rows / 2);
  const centerCol = Math.floor(COLUMNS_DESKTOP / 2);

  const logoIndex = centerRow * COLUMNS_DESKTOP + centerCol;

  const grid = [...members];
  grid.splice(logoIndex, 0, { type: "logo" });

  return grid;
}

const RiskManTeams = () => {
  const allMembers = [
    { id: 1, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895914/Shanta_Pal_fyz3dq.webp", linkedin: "https://linkedin.com/in/example" },
    { id: 22, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895926/pranshul_jxkf7z.webp", linkedin: "https://linkedin.com/in/example" },

    { id: 2, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895921/Vishal_Sharma_qfwz3c.webp" },
    { id: 3, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895917/Rohit_Gupta_hitsef.webp" },
    { id: 4, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895928/Yashvi_lmcrou.webp" },
    { id: 5, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895923/Yugmita_oqwd9q.webp" },
    { id: 6, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895911/Debottam_h4r0iu.webp" },
    { id: 7, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895918/Nishan_Agarwal_tun6iq.webp" },
    { id: 8, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895909/Ayush_qalxxi.webp" },
    { id: 9, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895917/Mayukh_Dhar_trqblj.webp" },
    { id: 10, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895918/Kaushik_lbsk5h.webp" },
    { id: 11, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895906/Rishbha_Jain_iswn9f.webp" },
    { id: 12, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895910/Saksham_Ahuja_aoiyiz.webp" },
    { id: 13, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895908/priyanshibhist_w5svtp.webp" },
    { id: 14, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895911/JaiDeep_fbb0td.webp" },
    { id: 15, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895918/Palak_juihxw.webp" },
    { id: 16, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895917/Vansh_Garg_zf6shv.webp" },
    { id: 17, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895906/artika_uquhi4.webp" },
    { id: 18, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895912/sidhi_wo0atz.webp" },
    { id: 19, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895910/sakshi_fx2yyt.webp" },
    { id: 20, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895906/priyanshu_havoal.webp" },
    { id: 21, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895918/monika_jo68ea.webp" },
    { id: 23, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895904/Angel_h8p6ad.webp" },
    { id: 24, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895925/Vinayak_Poddar_ksofip.webp" },
    { id: 25, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895917/Tushar_xuqlei.webp" },
    { id: 26, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895916/Tanisha_t8pawn.webp" },
    {id:36,image:"https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768905723/monica_q0whwr.webp"},
    { id: 27, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895906/Anirban_Biswas_ymyt8j.webp" },
    { id: 28, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895918/Vanshika_zbcuui.webp" },
    { id: 29, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895914/kartik_ihauvm.webp" },
    { id: 30, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895919/pawan_fcglzi.webp" },
    { id: 31, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895915/Simran_ya7f6b.webp" },
    { id: 32, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895912/jay_rq6fgv.webp" },
    { id: 32, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895904/arif_qiuu3m.webp" },
    { id: 33, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895908/Harsh_bsqdqs.webp" },
    { id: 34, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895914/kiran_vu5dtv.webp" },
    { id: 35, image: "https://res.cloudinary.com/dwbcjcqdt/image/upload/v1768895905/ashish_ceo4su.webp" },
    //  {id:37,image:""}
  ];

  const gridItems = injectLogo(allMembers);

  return (
    <section id="riskman-teams" className="py-20 bg-surfaceLight dark:bg-surfaceDark">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-brandPrimary dark:text-brandAccent">
          Meet the RiskMan Team
        </h1>

        <div className="flex justify-center">
          <div
            className="grid grid-cols-6 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10"
          >
            {gridItems.map((item, idx) =>
              item.type === "logo" ? (
                /* LOGO TILE */
                <div
                  key={`logo-${idx}`}
                  className={`${TILE_CLASS}
                    flex flex-col items-center justify-center
                    rounded-md
                    bg-white dark:bg-brandNavy
                    border-2 border-brandAccent
                    shadow-md`}
                >
                  <img src="/rm.png" className="mb-1 w-14 dark:hidden" />
                  <img
                    src="/riskman-logo-white.svg"
                    className="hidden mb-1 w-14 dark:block"
                  />
                  {/* <span className="text-[10px] font-semibold text-brandPrimary dark:text-brandAccent text-center leading-tight">
                    Certified <br /> Internal Auditor
                  </span> */}
                </div>
              ) : (
                /* MEMBER TILE */
                <div
                  key={item.id}
                  className={`${TILE_CLASS}
                    relative group overflow-hidden
                    rounded-md
                    bg-slate-100 dark:bg-brandDark
                    border border-slate-200 dark:border-white/10`}
                >
                 <CloudinaryImage
                    src={item.image}
                    width={192}
                    height={192}
                    face
                    className="object-cover w-full h-full"
                  />

                  {/* LINKEDIN OVERLAY (ONLY IF EXISTS) */}
                  {item.linkedin && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/60 group-hover:opacity-100">
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition bg-white rounded-full hover:scale-110"
                      >
                        <Linkedin size={18} className="text-brandPrimary" />
                      </a>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RiskManTeams;


// // import React from "react";