import { useState, useRef } from "react";
import NavbarTemplate from "./NavBarTemplate";

export default function Navbar({ mainNav, menus }) {
  const [active, setActive] = useState(null);
  const [position, setPosition] = useState({ right: 0 });

  const wrapperRef = useRef(null);
  const navRef = useRef(null);

  const handleHover = (item, e) => {
    const btnRect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();

    const buttonCenter = btnRect.left + btnRect.width / 2;
    const navRight = navRect.right;

    setPosition({
      right: navRight - buttonCenter,
    });

    setActive(item);
  };

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseLeave={() => setActive(null)}
    >
      <nav
        ref={navRef}
        className="container flex items-center justify-center gap-8 h-16"
      >
        {mainNav.map((item) => (
          <button
            key={item.key}
            onMouseEnter={(e) => handleHover(item, e)}
            className="font-medium text-brandPrimary hover:text-brandGold transition"
          >
            {item.label}
          </button>
        ))}
      </nav>

      {active?.type === "mega" && (
        <NavbarTemplate
          data={menus[`${active.key}MegaMenu`]}
          position={position}
        />
      )}
    </div>
  );
}
