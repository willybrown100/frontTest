import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp';
import RootLayout from './components/RootLayout';
import Dashboard from './features/Dashboard';
import Airtime from './features/Airtime';
import Settings from './features/Settings';
import DashboardHome from './components/DashboardHome';
import TransactionHistory from './features/transaction/TransactionHistory';
import AirtimeToCash from './features/AirtimeToCash';
import HelpAndSupport from './features/HelpAndSupport';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import BuyData from './features/BuyData';
import TvSubscription from './features/TvSubscription';
import ElectricityBills from './features/ElectricityBills';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
     <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="rootlayout" element={<RootLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="dashhome"/>}/>

            <Route index={true} path="dashhome" element={<DashboardHome />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="airtime" element={<Airtime />} />
          <Route path="transaction" element={<TransactionHistory />} />
          <Route path="data" element={< BuyData/>} />
          <Route path="tv" element={<TvSubscription/>} />
          <Route path="airtimetocash" element={<AirtimeToCash />} />
          <Route path="bills" element={<ElectricityBills />} />
          <Route path="help" element={<HelpAndSupport />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
     </QueryClientProvider>
  );
}

export default App
