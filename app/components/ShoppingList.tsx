import { FormEvent, useState } from "react";
import { Item } from "../_type/item";

export function ShoppingList() {
  const [items, setItems] = useState<Item[]>([]);
  const [newItem, setNewItem] = useState({ name: "", quantity: 0 });

  async function fetchItems() {
    const response = await fetch("http://localhost:8080/shopping-list");
    const data: Item[] = await response.json();
    setItems(data);
  }

  async function addItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await fetch("http://localhost:8080/shopping-list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    });
    setNewItem({ name: "", quantity: 0 });
    fetchItems();
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-500">
      <h1 className="text-2xl font-bold text-center mb-4">Shopping List</h1>
      <form onSubmit={addItem} className="flex gap-2">
        <input
          type="text"
          placeholder="Item Name"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="border p-2 rounded-md"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
          className="border p-2 rounded-md"
        />
        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500" type="submit">
          Add
        </button>
      </form>
      <ul className="mt-4">
        {items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className="p-2 bg-white shadow-md rounded-md mt-2">
              {item.name || "No name"} - {item.quantity || "No quantity"}
            </li>
          ))
        ) : (
          <p className="text-white">No items found</p>
        )}
      </ul>
    </div>
  );
}
