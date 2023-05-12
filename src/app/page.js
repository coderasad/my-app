import Image from 'next/image'
import variables from './variables.module.scss';

export default function Home() {
   return (
       <main className="flex min-h-screen flex-col items-center justify-between p-24">
          NEW NEXT PAGE -2
          <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>
       </main>
   )
}
