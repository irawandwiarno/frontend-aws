import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const [name, setName] = useState("");
  const [desk, setDesk] = useState("");
  const [produsen, setProdusen] = useState("Pabrik");
  const navigate = useNavigate();

  const saveItem = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/items", {
        name,
        desk,
        produsen,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveItem}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">desk</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={desk}
                onChange={(e) => setDesk(e.target.value)}
                placeholder="desk"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">produsen</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={produsen}
                  onChange={(e) => setProdusen(e.target.value)}
                >
                  <option value="UMKM">UMKM</option>
                  <option value="Pabrik">Pabrik</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
