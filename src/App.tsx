import { RouterProvider } from "react-router-dom";
import { router } from "./route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

//module federation: integrating different architectures as one.
//federated service.service federation.
//web pack five recently lauched - makes micro-frontend much easier.
//micro-frontend: the full page is broken down so that each component can be seen as a service.
//have a team working on header for ex. the header team has it's own service. they will deploy independently.
//
