import React from "react";
import { motion } from "framer-motion";
import Marquee from "../../components/Marquee/Marquee";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function MarqueeClientsSection({ title = "Our Marquee Clients", bgStyle = "bg-surfaceLight dark:bg-surfaceDark" }) {
  const clients = [
    { name: "Moder", logo: "https://images.squarespace-cdn.com/content/v1/628d18ddf477d1092801dcb2/ce6bfc6d-46cf-43a4-9f45-dce56bd7b2c0/Moder_Logotype_Soft-Black_RGB.png" },
    { name: "Zomato", logo: "https://www.boardinfinity.com/blog/content/images/2024/09/1712377685818.png" },
    { name: "Jindal Steel & Power", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Jindal_Steel_and_Power_Logo.svg/2560px-Jindal_Steel_and_Power_Logo.svg.png" },
    { name: "Blinkit", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Blinkit-logo-1-1.webp" },
    { name: "The World Bank", logo: "https://www.grsproadsafety.org/wp-content/uploads/2023/05/WorldBankLogo.png" },
    { name: "Indorama", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Indorama_Ventures_Logo.svg-2.webp" },
    { name: "Electrosteel", logo: "https://companieslogo.com/img/orig/ELECTCAST.NS_BIG-aca1b4fb.png?t=1720244491" },
    { name: "Emami Agrotech", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Emami-logo-2.webp" },
    { name: "Ambuja Neotia", logo: "https://phrealtors.in/wp-content/uploads/2023/07/Ambuja-Neotia-logo.png" },
    { name: "Jindal Renewables", logo: "https://sgurrenergy.com/wp-content/uploads/2025/01/jindal-renewables.png" },
    { name: "Innovist", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Innovist-logo-1-150x20.webp" },
    { name: "India TV", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Indiatv-logo-1.webp" },
    { name: "Nexval", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Nexval-logo-150x40.webp" },
    { name: "Khadim", logo: "https://devopsstaging.riskman.in/wp-content/uploads/2025/06/Khadim-logo-3-150x35.webp" },
    { name: "Cars24", logo: "https://cdn2.advanceinfotech.org/emarat.directory/1200x675/business/1777/cars-24-1707391875.webp" },
    { name: "Kariwala", logo: "https://framerusercontent.com/images/8rDBwXLJfngm6aEglJBVvfW31sQ.png?scale-down-to=512" },
    { name: "India Power", logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFwvCiZN3K5qw/company-logo_200_200/company-logo_200_200/0/1631340755897?e=2147483647&v=beta&t=h0kmW4zhFqFukc8m4-RLaK4BPrLjg6li0sFBPl-dEiM" },
    { name: "Pernod Ricard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pernod_Ricard_logo_2019.svg/1280px-Pernod_Ricard_logo_2019.svg.png?20191029154406" },
    { name: "SKL Automotive", logo: "https://www.skautomotive.com.br/wp-content/themes/SK%20Custom%20Theme/img/logo_sk_2025.png" },
    { name: "Feeding India", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuP0hq62APhBHQvN0qiB4ay9p-5RZD85HmcA&s" },
    { name: "Schoolnet", logo: "https://images.financialexpressdigital.com/2022/05/schoolnet.png" },
    { name: "Danieli", logo: "https://download.logo.wine/logo/Danieli/Danieli-Logo.wine.png" },
    { name: "Care Health Insurance", logo: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/care-insurance-logo-hd.png" },
  ];


  return (
    <section className={`relative overflow-hidden py-14 ${bgStyle} md:py-20`}>
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-12 text-3xl font-bold text-start md:text-4xl"
        >
          {title.split(" ")[0] + " "}
          {/* <br /> */}
          <span className="text-brandPrimary dark:text-brandAccent">{title.split(" ")[1]+" "}</span>{title.length >= 3 && title.split(" ").slice(2).join(" ")}
        </motion.h2>

        {/* Marquee Rows */}
        <div className="space-y-6">
          {/* Row 1 - Left to Right */}
          <Marquee
            companies={clients.slice(0, 6)}
            start={0}
            end={"-100%"}
            duration={30}
          />

          {/* Row 2 - Right to Left */}
          <Marquee
            companies={clients.slice(6, 12)}
            start={"-100%"}
            end={0}
            duration={28}
          />

          {/* Row 3 - Left to Right */}
          <Marquee
            companies={clients.slice(12, 18)}
            start={0}
            end={"-100%"}
            duration={32}
          />

          {/* Row 4 - Right to Left */}
          <Marquee
            companies={clients.slice(18, 23)}
            start={"-100%"}
            end={0}
            duration={26}
          />
        </div>
      </div>
    </section>
  );
}