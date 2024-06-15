"use client"
import User from "@/components/User";

export default function Home() {
  const users = [
    { id: "1", name: "waniya", email: "waniya@gmail.com", phone: "1234567" },
    { id: "2", name: "waniya", email: "waniya@gmail.com", phone: "1234567" },
    { id: "3", name: "waniya", email: "waniya@gmail.com", phone: "1234567" },
    { id: "4", name: "waniya", email: "waniya@gmail.com", phone: "1234567" },
    { id: "5", name: "waniya", email: "waniya@gmail.com", phone: "1234567" },
    { id: "6", name: "waniya", email: "waniya@gmail.com", phone: "1234567" }
  ];

  return (
    <main className="grid grid-cols-6 gap-4 mt-10">
      <User key={users[0].id} {...users[0]} className="bg-red-100" />
      <User key={users[1].id} {...users[1]} onClick={() => alert('Clicked!')} />
      <User key={users[2].id} {...users[2]} style={{ color: 'blue' }} />
      <User key={users[3].id} {...users[3]} />
      <User key={users[4].id} {...users[4]} />
      <User key={users[5].id} {...users[5]} />
    </main>
  );
}