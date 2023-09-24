import "./App.css";
// import Balance from "./Components/Balance";
import AddTransaction from "./Components/AddTransaction";
// import History from "./Components/History";
// import { createContext } from "react";
// import { GlobalProvider } from "./Store/context";
import Profile from "./Components/Profile";
import Header from "./Components/Header";

// export const context = createContext();
const App = () => {
  return (
    <div className="flex p-20 gap-20 justify-center">
      <Profile />
      <Header />
    </div>

    // <div className="body">
// {/* <History /> */}
    //   {/* <GlobalProvider> */}
    //     <Balance />
    //   {/* </GlobalProvider> */}
    // </div>
  );
};
export default App;
