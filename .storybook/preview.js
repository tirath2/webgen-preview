import "../app/globals.css";

const preview = {
  parameters: {
    layout: "fullscreen",
    controls: {
      expanded: true
    },
    backgrounds: {
      default: "preview cream",
      values: [
        { name: "preview cream", value: "#fbf3e5" },
        { name: "white", value: "#ffffff" },
        { name: "dark", value: "#10261f" }
      ]
    }
  },
  decorators: [
    (Story) => (
      <div
        className="site-preview theme-storybook"
        style={{
          "--hero-image": "url(\"https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85\")",
          "--ink": "#211911",
          "--muted": "#746658",
          "--bg": "#fbf3e5",
          "--panel": "#fffaf1",
          "--line": "#e4d4bd",
          "--green": "#6f4a24",
          "--deep": "#24160d",
          "--accent": "#c4863a",
          "--warm": "#efe0c6",
          "--cream": "#fbf3e5",
          "--body-font": "Arial, Helvetica, sans-serif",
          "--display-font": "Georgia, 'Times New Roman', serif",
          "--card-radius": "8px",
          "--button-radius": "8px",
          "--max-width": "1140px"
        }}
      >
        <Story />
      </div>
    )
  ]
};

export default preview;
