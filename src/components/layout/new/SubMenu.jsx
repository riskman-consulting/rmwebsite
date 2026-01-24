export default function SubMenu({ options }) {
  return (
    <div className="absolute left-full top-0 ml-4">
      <div className="bg-surfaceLight dark:bg-surfaceDark shadow-lg rounded-lg p-4 min-w-[240px]">
        <ul className="space-y-2">
          {options.map((opt) => (
            <li key={opt.label || opt.id}>
              <a
                href={opt.path || "#"}
                className="text-sm text-brandPrimary hover:text-brandGold"
              >
                {opt.title || opt.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
