// Nerd/terminal-style background + text (dark themes, high contrast)

export interface ColorPalette {
  id: string;
  background: string;
  text: string;
}

export const colorPalettes: ColorPalette[] = [
  { id: "matrix", background: "#0d1117", text: "#00ff41" },
  { id: "amber-term", background: "#1a1a1a", text: "#ffb000" },
  { id: "cyan-term", background: "#0a0e14", text: "#39bae6" },
  { id: "gruvbox", background: "#282828", text: "#ebdbb2" },
  { id: "nord", background: "#2e3440", text: "#88c0d0" },
  { id: "dracula", background: "#282a36", text: "#f8f8f2" },
  { id: "one-dark", background: "#282c34", text: "#abb2bf" },
  { id: "monokai", background: "#272822", text: "#f8f8f2" },
  { id: "solarized-dark", background: "#002b36", text: "#839496" },
  { id: "green-on-black", background: "#0c0c0c", text: "#33ff33" },
  { id: "orange-term", background: "#1c1c1c", text: "#ff8c00" },
  { id: "purple-term", background: "#1e1e2e", text: "#cba6f7" },
  { id: "red-accents", background: "#161616", text: "#ff6b6b" },
  { id: "vscode-dark", background: "#1e1e1e", text: "#d4d4d4" },
  { id: "tokyo-night", background: "#1a1b26", text: "#a9b1d6" },
  { id: "catppuccin", background: "#1e1e2e", text: "#cdd6f4" },
];
