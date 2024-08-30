import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="md:grid min-h-screen md:grid-rows-[auto,1fr] md:grid-cols-[16rem,1fr]">
      <Navbar />
      <Sidebar />
      <main className='my-4 overflow-hidden w-full'>
      <Outlet />
      </main>
    </div>
  );
}
