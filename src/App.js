import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="add" element={<AddItem />} />
        <Route path="edit/:id" element={<EditItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
