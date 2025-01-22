import { useState, useEffect } from "react";
import {
  fetchShoppingList,
  addShoppingItem,
  deleteShoppingItem,
} from "../service/api";
import { Item } from "../_type/item";

export default function ShoppingList() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    fetchShoppingList().then((res) => setItems(res.data));
  }, []);

  const handleAddItem = async () => {
    if (!name || quantity <= 0) return alert("Please enter valid data");
    await addShoppingItem({ name, quantity });
    setName("");
    setQuantity(0);
    const updatedList = await fetchShoppingList();
    setItems(updatedList.data);
  };

  const handleDeleteItem = async (id: number) => {
    await deleteShoppingItem(id);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border p-2 mr-2"
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAddItem} className="bg-green-500 text-white p-2">
          Add
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between border-b py-2">
            <span>
              {item.name} - {item.quantity}
            </span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="bg-red-500 text-white p-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
