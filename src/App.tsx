import SaveButton from "./components/SaveButton";

import NewDocumentButton from "./components/NewDocumentButton";
import ConfirmButton from "./components/ConfirmButton";
import ThemeButton from "./components/ThemeButton";
import FileName from "./components/FileName";

const App = () => {
  return (
    <div className="container flex flex-col items-center justify-center gap-12">
      <SaveButton />
      <NewDocumentButton />
      <ConfirmButton />
      <ThemeButton />
      <FileName />
    </div>
  );
};

export default App;
