const filters = [
  { label: "All Projects", value: "all" },
  { label: "New Construction", value: "new-construction" },
  { label: "Remodels and Repipes", value: "remodels-repipes" },
  { label: "Service and Repairs", value: "service-repairs" },
];

export default function GalleryFilterBar({ active, onChange }) {
  return (
    <section style={{ backgroundColor: "#F7F4EF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => {
            const isActive = active === f.value;
            return (
              <button
                key={f.value}
                onClick={() => onChange(f.value)}
                className="font-body font-medium text-sm px-5 py-2 rounded-full border-2 transition-all duration-200"
                style={{
                  backgroundColor: isActive ? "#1A8781" : "transparent",
                  color: isActive ? "#FFFFFF" : "#13233B",
                  borderColor: isActive ? "#1A8781" : "#13233B",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "rgba(26,135,129,0.08)";
                    e.currentTarget.style.borderColor = "#1A8781";
                    e.currentTarget.style.color = "#1A8781";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#13233B";
                    e.currentTarget.style.color = "#13233B";
                  }
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}