import { useState } from "react";
import SubMenu from "./SubMenu";

export default function NavbarTemplate({ data, position }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div
      className="absolute top-full pt-4"
      style={{
        right: position.right,
        transform: "translateX(50%)",
      }}
    >
      <div className="bg-surfaceLight dark:bg-surfaceDark rounded-xl shadow-xl p-6 min-w-[560px]">
        <div className="grid grid-cols-3 gap-6">
          {data.map((section, idx) => (
            <div key={idx}>
              {section.title && (
                <p className="mb-3 text-xs font-semibold text-brandGold">
                  {section.title}
                </p>
              )}

              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveItem(item)}
                    onMouseLeave={() => setActiveItem(null)}
                  >
                    <a
                      href={item.path || "#"}
                      className="text-sm text-brandPrimary hover:text-brandGold"
                    >
                      {item.label}
                    </a>

                    {item.submenus && activeItem === item && (
                      <SubMenu options={item.submenus} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
