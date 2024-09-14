import Route from "@/router/route";
import { Provider } from "./store";

export default function App() {
  return (
    <Provider>
      <Route />
    </Provider>
  );
}
