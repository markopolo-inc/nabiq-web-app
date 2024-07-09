import React, { SetStateAction } from "react";

interface Option {
  label: string;
  value: string | number;
  icon: React.FC<{ size: number; strokeWidth: number }>;
}

const OptionTabs: React.FC<{
  active: string | number;
  setActive: React.Dispatch<SetStateAction<string | number>>;
  options: Option[];
}> = ({ active, setActive, options }) => {
  return options.map((item, idx) => {
    const isSelected = active === item.value;
    const Icon = item?.icon;
    return (
      <span
        onClick={() => setActive(item.value)}
        key={idx}
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          cursor: "pointer",
          padding: "8px 12px",
          borderRadius: 6,
          border: isSelected ? "0.75px solid rgba(13, 18, 28, 0.48)" : "none",
          background: isSelected ? "#FFF" : "#F8FAFC",
          boxShadow: isSelected
            ? "0px 1px 2px 0px rgba(13, 18, 28, 0.48), 0px 0px 1px 0px rgba(13, 18, 28, 0.08)"
            : "none",
          color: isSelected ? "#364152" : "#697586",
          fontWeight: 600,
        }}
      >
        {Icon && <Icon size={20} strokeWidth={2.2} />} {item.label}
      </span>
    );
  });
};

export default OptionTabs;
