import SaveButton from "./components/SaveButton";

import NewDocumentButton from "./components/NewDocumentButton";
import ConfirmButton from "./components/ConfirmButton";

const App = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12">
      <SaveButton />
      <NewDocumentButton />
      <ConfirmButton />
    </div>
  );
};

export default App;
