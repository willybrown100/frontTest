import React from 'react'
import Button from '../ui/Button'
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>

    <Outlet/>
    </div>
  );
}
