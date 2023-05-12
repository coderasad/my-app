import React from 'react';

async function getUses() {
   const res   = await fetch(`https://jsonplaceholder.typicode.com/users`)
   const data = await res.json()
   return data
}

export default async function Page() {
   const users = await getUses();
   return (
       <div className={`text-center`}>
          <h2 className={`text-center text-4xl uppercase font-bold mb-6`}>Users List-2</h2>
          <ul>

             {users.map((data) => (
                 <li>{data.name}</li>
             ))}
          </ul>
       </div>
   );
};

