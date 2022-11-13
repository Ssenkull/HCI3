import "./App.css";

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import ModalController from "./components/ModalContent/ModalController";
import { useState } from "react";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const manageModalState = () => {
    setIsOpened((curState) => !curState);
  };

  return (
    <div className="wrapper">
      {isOpened && <ModalController onClose={manageModalState} />}
      {!isOpened && (
        <button className="button-40" onClick={manageModalState}>
          Open form{" "}
        </button>
      )}
      <ReactNotifications />
    </div>
  );
}

export default App;
