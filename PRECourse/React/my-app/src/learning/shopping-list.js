import React from "react";

export class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        {/* <h1>Shopping List for {this.props.name}</h1> */}
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export class ShoppingList2 extends React.Component {
  render() {
      return (React.createElement("div", { className: "shopping-list" },
          // React.createElement("h1", null, "Shopping List for ", props.name),
          React.createElement("ul", null,
              React.createElement("li", null, "Instagram"),
              React.createElement("li", null, "WhatsApp"),
              React.createElement("li", null, "Oculus"))));
  }
}
