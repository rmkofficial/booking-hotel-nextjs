"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Hotel } from "@/types/types";

interface RouterLayoutProps {
  children: React.ReactNode;
}

const RouterLayout = ({ children }: RouterLayoutProps) => {
  const [data, setData] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const dummyData: Hotel = {
        collectionId: "1",
        collectionName: "Hotels",
        contact_email: "info@hotel.com",
        contact_phone: "123-456-7890",
        created: new Date().toISOString(),
        description: "A luxury hotel in Turkey",
        id: "hotel1",
        images: ["/images/hotel1.jpg"],
        location: "Ayvalik, Turkey",
        name: "Hotel One",
        summary: "Luxurious hotel in Ayvalik",
        updated: new Date().toISOString(),
      };
      setData(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer data={data as Hotel} loading={loading} />
    </>
  );
};

export default RouterLayout;
