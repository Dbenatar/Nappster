import React, { useState } from "react";
import axios from "axios";
import EditFeed from "./EditFeed";

export default function NewFeed({ feeds, setFeeds, feed, setFeed }) {
  const [formData, setFormData] = useState(
    feed ?? {
      name: "",
      startTime: "",
      endTime: "",
    }
  );

  // async function addFeed(e) {
  //   e.preventDefault();
  //   const API = "http://localhost:8080/feeding";
  //   const res = await axios.post(API, formData);
  //   setFeeds([...feeds, res.data]);
  // }

  async function handleSubmit(event) {
    event.preventDefault();

    const API = "http://localhost:8080/feeding";
    const res = await axios.post(API, formData);
    console.log(feeds);
    setFeeds([...feeds, res.data]);
  }

  function handleChange(e) {
    const { name, type } = e.target;
    let newForm = {
      ...formData,
      [name]: e.target[type === "checkbox" ? "checked" : "value"],
    };

    setFormData(newForm);
  }

  function handleEdit() {
    setIsEditable(!isEditable);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="feed1">
          Breastfed
          <input type="checkbox" onChange={handleChange} name="status" />
          {formData.status && (
            // if checkbox
            <div>
              <label>
                <input type="checkbox" />
                Left
                <input type="checkbox" />
                Right
              </label>
            </div>
          )}
        </label>
        <label htmlFor="feed2">
          Bottle
          <input
            name="feed2"
            type="checkbox"
            value="Bottle"
            onChange={handleChange}
            id="feed2"
          />
        </label>
        {/* conditional render feed1 && <input left or right>*/}
        <input
          name="startTime"
          type="datetime-local"
          placeholder="Start of feed"
          onChange={handleChange}
        />
        <input
          name="endTime"
          type="datetime-local"
          placeholder="End of feed"
          onChange={handleChange}
        />
        <input type="submit" value="New feed" />
        <EditFeed />
      </form>
    </>
  );
}
