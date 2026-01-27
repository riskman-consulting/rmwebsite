
import React from "react";
import { Linkedin } from "lucide-react";
import { teamsImages } from "../../assets/teams";

/* ========= CONFIG ========= */
const COLUMNS_DESKTOP = 10;

/* Tile size (matches screenshot density) */
const TILE_CLASS =
  "w-[96px] h-[96px] rounded-lg";

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
  /* allMembers remains unchanged */
  const allMembers = [
    { id: 1, image: teamsImages.ShantaPal, linkedin: "https://linkedin.com/in/example"},
    { id: 22, image: teamsImages.Pranshul, linkedin: "https://linkedin.com/in/example" },

    { id: 2, image: teamsImages.VishalSharma },
    { id: 3, image: teamsImages.RohitGupta },
    { id: 4, image: teamsImages.Yashvi },
    { id: 5, image: teamsImages.Yugmita },
    { id: 6, image: teamsImages.Debottam },
    { id: 7, image: teamsImages.NishanAgarwal },
    { id: 8, image: teamsImages.Ayush },
    { id: 9, image: teamsImages.MayukhDhar },
    { id: 10, image: teamsImages.Kaushik },
    { id: 11, image: teamsImages.RishbhaJain },
    { id: 12, image: teamsImages.SakshamAhuja },
    { id: 13, image: teamsImages.Priyanshibisht },
    { id: 14, image: teamsImages.JaiDeep },
    { id: 15, image: teamsImages.Palak },
    { id: 16, image: teamsImages.VanshGarg  },
    { id: 17, image: teamsImages.Artika },
    { id: 18, image: teamsImages.sidhi },
    { id: 19, image: teamsImages.Sakshi },
    { id: 20, image: teamsImages.priyanshu },
    { id: 21, image: teamsImages.monika },
    { id: 23, image: teamsImages.Angel },
    { id: 24, image: teamsImages.VinayakPoddar },
    { id: 25, image: teamsImages.Tushar },
    { id: 26, image: teamsImages.JaiDeep },
    { id: 27, image: teamsImages.AnirbanBiswas },
    { id: 28, image: teamsImages.Vanshika },
    { id: 29, image: teamsImages.Kartik },
    { id: 30, image: teamsImages.Pawan },
    {id:31, image:teamsImages.Simran},
    {id:32,image:teamsImages.Jay},
    {id:32,image:teamsImages.Arif},
    {id:33,image:teamsImages.Harsh},
    {id:34,image:teamsImages.Kiran},
    {id:35, image:teamsImages.monica}
  ];
  const gridItems = injectLogo(allMembers);

  return (
    <section
      id="riskman-teams"
      className="py-20 bg-surfaceLight dark:bg-surfaceDark"
    >
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-brandPrimary dark:text-brandAccent">
          Meet the RiskMan Team
        </h1>

        <div className="flex justify-center">
          <div
            className="
              grid
              grid-cols-4
              sm:grid-cols-6
              md:grid-cols-8
              lg:grid-cols-10

              gap-4
              sm:gap-5
              lg:gap-6
              
            "
            
          >
            {gridItems.map((item, idx) =>
              item.type === "logo" ? (
                /* LOGO TILE */
                <div
                  key={`logo-${idx}`}
                  className={`${TILE_CLASS}
                    flex flex-col items-center justify-center
                    bg-white dark:bg-brandNavy
                    border-2 border-brandAccent
                    shadow-sm`}
                >
                  <img src="/rm.png" className="w-14 mb-1 dark:hidden" />
                  <img
                    src="/riskman-logo-white.svg"
                    className="hidden w-14 mb-1 dark:block"
                  />
                </div>
              ) : (
                /* MEMBER TILE */
                <div
                  key={item.id}
                  className={`${TILE_CLASS}
                    relative group overflow-hidden
                    bg-slate-100 dark:bg-brandDark
                    border border-slate-200 dark:border-white/10
                    shadow-sm hover:shadow-md transition`}
                >
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover object-top w-full h-full"
                  />

                  {item.linkedin && (
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity opacity-0 bg-black/60 group-hover:opacity-100">
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full transition hover:scale-110"
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

