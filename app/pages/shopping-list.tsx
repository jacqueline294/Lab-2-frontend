
import { useEffect, useState } from "react";
import {
  fetchShoppingItems,
  addShoppingItem,
  deleteShoppingItem,
} from "../service/api";
import { ShoppingItem } from "../_types/ICustomUser";

export default function ShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const userId = 1;

  useEffect(() => {
    const loadItems = async () => {
      const data = await fetchShoppingItems(userId);
      setItems(data);
    };
    loadItems();
  }, [userId]);

  const handleAddItem = async () => {
    const newItem = await addShoppingItem({
      userId,
      name,
      quantity,
      id: 0,
    });
    setItems([...items, newItem]);
  };

  const handleDeleteItem = async (id: number) => {
    await deleteShoppingItem(id, userId);
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} ({item.quantity}){" "}
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
