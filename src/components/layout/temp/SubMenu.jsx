import { ChevronRight } from "lucide-react";

export default function SubMenu({
  isOpen,
  megaData,
  activeNestedSubmenu,
  setActiveNestedSubmenu,
}) {
  if (!isOpen) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {megaData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {section.title && (
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {section.title}
            </h4>
          )}

          <ul className="space-y-2">
            {section.items.map((item, index) => {
              const hasSubmenu = !!item.submenus;
              const isActive = activeNestedSubmenu === item.label;

              return (
                <li
                  key={index}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setActiveNestedSubmenu(item.label)}
                  onMouseLeave={() => hasSubmenu && setActiveNestedSubmenu(null)}
                >
                  <a
                    href={item.path || "#"}
                    className="
                      flex items-center justify-between
                      px-3 py-2 rounded-lg
                      text-sm font-medium
                      text-gray-700 dark:text-gray-200
                      hover:bg-black/5 dark:hover:bg-white/6
                      transition
                    "
                  >
                    {item.label}
                    {hasSubmenu && <ChevronRight size={14} />}
                  </a>

                  {/* Nested submenu */}
                  {hasSubmenu && isActive && (
                    <div
                      className="
                        absolute left-full top-0 ml-2
                        w-64 rounded-xl
                        bg-white dark:bg-[#001A44]
                        shadow-xl border border-black/5 dark:border-white/10
                        p-2 z-50
                      "
                    >
                      {item.submenus.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href={sub.path || "#"}
                          className="
                            block px-3 py-2 rounded-lg
                            text-sm text-gray-700 dark:text-gray-200
                            hover:bg-black/5 dark:hover:bg-white/6
                            transition
                          "
                        >
                          {sub.title || sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
