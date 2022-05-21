import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./routes";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AllRoutes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
