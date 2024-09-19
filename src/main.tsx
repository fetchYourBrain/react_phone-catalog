import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Root } from "./Root.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Root />
  </Provider>
);
