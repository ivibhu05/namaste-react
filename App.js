const heading1 = React.createElement(
  "h1",
  { id: "heading1" },
  "I am an h1 tag"
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
