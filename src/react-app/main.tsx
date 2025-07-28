import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/react-app/index.css";
import App from "@/react-app/App.tsx";
import { FormspreeProvider } from "@formspree/react"; // 👈 Import this

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormspreeProvider>
      <App />
    </FormspreeProvider>
  </StrictMode>
);
