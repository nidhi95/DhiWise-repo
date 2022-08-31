import React from "react";
import RequestPayments1 from "pages/RequestPayments1";
import Colors from "pages/Colors";
import Transactionsfilters from "pages/Transactionsfilters";
import Transactions from "pages/Transactions";
import RequestPayments from "pages/RequestPayments";
import SendPayments from "pages/SendPayments";
import PopupsDashboard from "pages/PopupsDashboard";
import Dashboard from "pages/Dashboard";
import Notifications from "pages/Notifications";
import WalletCards from "pages/WalletCards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/walletcards" element={<WalletCards />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/popupsdashboard" element={<PopupsDashboard />} />
        <Route path="/sendpayments" element={<SendPayments />} />
        <Route path="/requestpayments" element={<RequestPayments />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transactionsfilters" element={<Transactionsfilters />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/requestpayments1" element={<RequestPayments1 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
