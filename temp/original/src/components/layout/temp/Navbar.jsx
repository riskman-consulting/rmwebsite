import { ChevronDown } from "lucide-react";

export default function Navbar({
  mainNav,
  handleMouseEnter,
  handleMouseLeave,
  openMenu,
}) {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {mainNav.map((item) => {
        const isActive = openMenu === item.label;

        return (
          <div
            key={item.label}
            onMouseEnter={() => item.type === "mega" && handleMouseEnter(item.label)}
            onMouseLeave={() => item.type === "mega" && handleMouseLeave()}
            className="relative"
          >
            <a
              href={item.path}
              className={`
                flex items-center gap-1 text-sm font-medium
                transition-colors
                ${
                  isActive
                    ? "text-[#004080] dark:text-[#FFC000]"
                    : "text-gray-700 dark:text-gray-200 hover:text-[#004080] dark:hover:text-[#FFC000]"
                }
              `}
            >
              {item.label}
              {item.type === "mega" && (
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isActive ? "rotate-180" : ""}`}
                />
              )}
            </a>
          </div>
        );
      })}
    </nav>
  );
}
