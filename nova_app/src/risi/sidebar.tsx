import { ReactNode, useState } from "react";

// Define props interface for sidebar items
interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

// SidebarItem component
const SidebarItem = ({ icon, text, active, onClick }: SidebarItemProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        cursor: "pointer",
        transition: "background-color 0.2s ease",
        backgroundColor: active ? "#4f46e5" : "transparent",
        color: active ? "white" : "#d1d5db",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = "#374151";
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      <div
        style={{
          marginRight: "12px",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "24px",
        }}
      >
        {icon}
      </div>
      <span style={{ fontSize: "14px", fontWeight: 500 }}>{text}</span>
    </div>
  );
};

// Define props interface for the sidebar
interface SidebarProps {
  logo?: ReactNode;
  title?: string;
}

// Main Sidebar component
const Sidebar = ({ logo, title = "Nova App" }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState(0);

  // Example sidebar navigation items
  const navItems = [
    { icon: "🏠", text: "Home" },
    { icon: "📊", text: "Dashboard" },
    { icon: "📝", text: "Add Prescription" },
    { icon: "📁", text: "Encyclopedia" },
  ];

  return (
    <div
      style={{
        width: "256px",
        height: "100vh",
        backgroundColor: "#1f2937",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Sidebar Header */}
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid #374151",
          display: "flex",
          alignItems: "center",
        }}
      >
        {logo && (
          <div style={{ fontSize: "24px", marginRight: "12px" }}>{logo}</div>
        )}
        <h2 style={{ fontSize: "18px", fontWeight: 600, margin: 0 }}>
          {title}
        </h2>
      </div>

      {/* Navigation Items */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        {navItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            text={item.text}
            active={activeItem === index}
            onClick={() => setActiveItem(index)}
          />
        ))}
      </div>

      {/* Sidebar Footer */}
      <div
        style={{
          borderTop: "1px solid #374151",
          paddingTop: "8px",
        }}
      >
        <SidebarItem icon="👤" text="Profile" />
        <SidebarItem icon="🚪" text="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
