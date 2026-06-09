'use client';

import { useEffect, useState } from 'react';

// データの型定義
interface Product {
  id?: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  // 1. Spring Boot APIからデータ一覧を取得
  const fetchProducts = async () => {
    const res = await fetch(`http://localhost:8080/api/products`);
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 2. Spring Boot APIへデータを送信（追加）
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

//     await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`, {
  await fetch(`http://localhost:8080/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price }),
    });

    setName('');
    setPrice(0);
    fetchProducts(); // 一覧を再更新
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>商品管理システム</h1>

      {/* 入力フォーム */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text" placeholder="商品名" value={name}
          onChange={(e) => setName(e.target.value)} required
        />
        <input
          type="number" placeholder="価格" value={price}
          onChange={(e) => setPrice(Number(e.target.value))} required
        />
        <button type="submit">追加</button>
      </form>

      {/* 一覧表示 */}
      <h2>商品一覧</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}円
          </li>
        ))}
      </ul>
    </div>
  );
}