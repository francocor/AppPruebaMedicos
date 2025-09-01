import React from "react";
import { Home, FileText, CreditCard } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavbarSecretaria() {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { icon: Home, label: "Home", path: "/secretaria" },
    { icon: FileText, label: "Médicos", path: "/secretaria/medicos" },
    { icon: CreditCard, label: "Facturación", path: "/secretaria/facturacion" },
  ];

  const isActive = (path) =>
    path === "/secretaria"
      ? location.pathname === "/secretaria"
      : location.pathname.startsWith(path);

  return (
    <header className="w-full bg-transparent px-4 sm:px-6 py-2">
      <div className="flex items-center justify-center w-full">
        <ul className="flex flex-row gap-3 list-none m-0 p-0">
          {items.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <button
                  onClick={() => navigate(item.path)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full shadow transition
                    bg-white hover:bg-blue-100 ${active ? "ring-2 ring-black/20" : ""}`}
                  aria-label={item.label}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

