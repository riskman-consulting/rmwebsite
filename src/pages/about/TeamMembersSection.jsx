import React from "react";
import { Linkedin } from "lucide-react";

/* ========= TEAM IMAGES ========= */
import ShantaPal from "../../assets/teams/Shanta Pal.png";
import VishalSharma from "../../assets/teams/Vishal Sharma.png";
import RohitGupta from "../../assets/teams/Rohit Gupta.png";
import Yashvi from "../../assets/teams/Yashvi.png";
import Yugmita from "../../assets/teams/Yugmita.png";
import Debottam from "../../assets/teams/Debottam.png";
import NishanAgarwal from "../../assets/teams/Nishan Agarwal.png";
import Ayush from "../../assets/teams/Ayush.png";
import MayukhDhar from "../../assets/teams/Mayukh Dhar.png";
import Kaushik from "../../assets/teams/Kaushik.png";
import RishbhaJain from "../../assets/teams/Rishbha Jain.jpg";
import SakshamAhuja from "../../assets/teams/Saksham Ahuja.jpeg";
import Priyanshibhist from "../../assets/teams/priyanshibhist.png";
import JaiDeep from "../../assets/teams/JaiDeep.png";
import monika from "../../assets/teams/monika.jpeg";
import Palak from "../../assets/teams/Palak.jpeg";
import pranshul from "../../assets/teams/Pranshul.png";
import priyanshu from "../../assets/teams/priyanshu.jpeg";
import sidhi from "../../assets/teams/sidhi.jpeg";
import Sakshi from "../../assets/teams/sakshi.jpeg";
import Tanisha from "../../assets/teams/Tanisha.jpeg";
import Simran from "../../assets/teams/Simran.jpeg";
import Tushar from "../../assets/teams/Tushar.jpg";
import VanshGarg from "../../assets/teams/Vansh Garg.jpeg";
import VinayakPoddar from "../../assets/teams/Vinayak Poddar.png";
import Artika from "../../assets/teams/Artika.jpg";
import Angel from "../../assets/teams/Angel.jpeg";
import AnirbanBiswas from "../../assets/teams/Anirban Biswas.png";
import Vanshika from "../../assets/teams/Vanshika.jpeg";
import Kartik from "../../assets/teams/kartik.png";
import Pawan from "../../assets/teams/Pawan.png";
import { teamsImages } from "../../assets/teams";




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
    { id: 1, image: ShantaPal, linkedin: "https://linkedin.com/in/example" },
    { id: 2, image: VishalSharma },
    { id: 3, image: RohitGupta },
    { id: 4, image: Yashvi },
    { id: 5, image: Yugmita },
    { id: 6, image: Debottam },
    { id: 7, image: NishanAgarwal },
    { id: 8, image: Ayush },
    { id: 9, image: MayukhDhar },
    { id: 10, image: Kaushik },
    { id: 11, image: monika },
    { id: 12, image: RishbhaJain },
    { id: 13, image: SakshamAhuja },
    { id: 14, image: Priyanshibhist },
    { id: 15, image: Palak },
    { id: 16, image: VanshGarg },
    { id: 17, image: Artika },
    { id: 18, image: sidhi },
    { id: 19, image: Sakshi },
    { id: 20, image: priyanshu },
    { id: 21, image: Tanisha },
    { id: 22, image: pranshul, linkedin: "https://linkedin.com/in/example" },
    { id: 23, image: Angel },
    { id: 24, image: VinayakPoddar },
    { id: 25, image: Tushar },
    { id: 26, image: JaiDeep },
    { id: 27, image: AnirbanBiswas },
    { id: 28, image: Vanshika },
    { id: 29, image: Kartik },
    { id: 30, image: Pawan },
    {id:31, image:Simran},
  ];

  const gridItems = injectLogo(allMembers);

  return (
    <section id="riskman-teams" className="py-20 bg-slate-50 dark:bg-surfaceDark">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-brandPrimary dark:text-brandAccent">
          Meet the RiskMan Team
        </h1>

        <div className="flex justify-center">
          <div
            className="
              grid gap-4
              sm:[grid-template-columns:repeat(6,1fr)]
              md:[grid-template-columns:repeat(8,1fr)]
              lg:[grid-template-columns:repeat(10,1fr)]
            "
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
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover object-top w-full h-full"
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
