import { Suspense, lazy } from "react";
import Counter from "./components/Counter";
import Layout from "./components/Layout";
//import Users from "./components/Users";

const Users = lazy(() => import("./components/Users"));

const App = () => {
  return (
    <>
      <Layout>
        <Counter />
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          {
            // Muy util para componentes asincronos (y para micro-frontend) ->
          }
          <Users />
        </Suspense>
      </Layout>
    </>
  );
};

export default App;
