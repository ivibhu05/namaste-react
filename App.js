import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1", //type
  { id: "heading1" }, //attributes
  "I am an h1 tag" //child
);

const heading2 = React.createElement(
  "h2",
  { id: "heading2" },
  "I am an h2 tag"
);

const child1 = React.createElement("div", { id: "child1" }, [
  heading1,
  heading2,
]);

const child2 = React.createElement("div", { id: "child2" }, [
  heading1,
  heading2,
]);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
