import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import ApiPage from "./pages/ApiPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<TaskManager />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
