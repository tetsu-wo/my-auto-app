"use client"

import { useEffect, useState } from "react";
// api.d.ts から自動生成された型をインポート
import { components } from "../../src/types/api";

// schemas から User 型を抽出
type User = components["schemas"]["User"];

const UserProfile = () => {
  // 状態（State）に型を適用する
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // JavaのバックエンドAPIからデータを取得
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/users/1`)
      .then((res) => res.json())
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("データ取得失敗:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (!user) return <div>ユーザーが見つかりません</div>;

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>ユーザープロフィール（動作確認）</h2>
      {/* Javaで定義したプロパティ名が補完・型チェックされます */}
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>名前:</strong> {user.name}</p>
      <p><strong>メール:</strong> {user.email}</p>
    </div>
  );
};

export default UserProfile;
