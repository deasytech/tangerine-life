"use client"

import { ArrowDown, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

interface Tab {
  key: string;
  label: string;
  content: {
    location: React.ReactNode,
    address: React.ReactNode,
  };
}

const tabs: Tab[] = [
  {
    key: 'general', label: 'Tangerine General', content: {
      location: <div>
        <p>Lagos Head office - Yaba</p>
        <p>Osogbo</p>
        <p>Retail Business OUTLET KANO</p>
      </div>,
      address: <div>
        <p>14, Hughes Avenue, Alagomeji, Yaba, Lagos</p>
        <p>2nd Floor, Jesus Court, Isiaka Adeleke Freeway, Okefia, Oshogbo, Osun state.</p>
        <p>Skye Bank Plc, 23, Bello Road, Kano, Kano state</p>
      </div>
    }
  },
  {
    key: 'life', label: 'Tangerine Life', content: {
      location: <div>
        <p>Abuja</p>
        <p>Benin</p>
        <p>Ibadan</p>
        <p>Kaduna</p>
        <p>Retail Business OUTLET Abeokuta</p>
        <p>Retail Business OUTLET AKURE</p>
        <p>Retail Business OUTLET ONITSHA</p>
      </div>,
      address: <div>
        <p>5, Dambata close, Area 7, Garki, FCT</p>
        <p>1st Floor of Austin Lying Plaza, 99A, First East Circular Road, Opposite Uvbi Primary School, By St Joseph Catholic Church, Benin City.</p>
        <p>1st Floor, Heritage Mall, Cocoa House, Dugbe, Ibadan</p>
        <p>Hasfsat Plaza, 4 Constitution Road Kaduna</p>
        <p>23C Segun Osoba Way, Abeokuta</p>
        <p>BOI building, Alagbaka, Akure</p>
        <p>65 New Market Road, Onitsha</p>
      </div>
    }
  },
  {
    key: 'pensions', label: 'Tangerine Pensions', content: {
      location: <div>
        <p>Head office (Main Office)</p>
        <p>Lagos</p>
        <p>Kano Office</p>
        <p>Kaduna Office</p>
        <p>Gombe Office</p>
      </div>,
      address: <div>
        <p>FMBN House, Plot 266, CBD, Abuja</p>
        <p>21A & 21B Olosa Street, Victoria Island, Lagos</p>
        <p>7 Zoo Road, Prime Hub Shopping Complex, Kano</p>
        <p>BOI Building, 18 Mohammadu Buhari Way, Kaduna</p>
        <p>CFA Building, Jeka da Fari, Gombe</p>
      </div>
    }
  },
  {
    key: 'health', label: 'Tangerine Health', content: {
      location: <div>
        <p>Lagos office - Palmgrove Estate</p>
        <p>Abuja</p>
        <p>Ibadan</p>
        <p>Enugu</p>
        <p>Yola</p>
        <p>Ilorin</p>
        <p>Port Harcourt</p>
      </div>,
      address: <div>
        <p>2 Marconi Road, Palmgrove Estate, Lagos</p>
        <p>1129 Zakariya Malami Street, Abuja</p>
        <p>14th Floor, Cocoa House, Ibadan</p>
        <p>16 Marcus Harvey Street, Enugu</p>
        <p>Bekaji-Jimeta, Yola</p>
        <p>16B Cocacola Road, Ilorin</p>
        <p>26A Aba Road, Port Harcourt</p>
      </div>
    }
  },
];

const ContactTabs: React.FC = () => {
  const [ activeTab, setActiveTab ] = useState<string>(tabs[ 1 ].key);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="max-container w-full">
      <div className="flex flex-col md:flex-row gap-6 overflow-x-auto">
        <div className="flex items-center gap-2">
          <p className="regular-18 text-generic-950 text-nowrap">Select a business</p>
          <ArrowRight size={16} className="text-generic-950 max-sm:hidden" />
          <ArrowDown size={16} className="text-generic-950 md:hidden" />
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`py-2 px-4 transition-all ${activeTab === tab.key
              ? 'rounded-full bg-green-950 text-white hover:bg-green-base'
              : 'border rounded-full border-green-950 text-green-950 hover:border-green-base hover:text-green-base'
              }`}
          >
            <span className="text-nowrap">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) =>
          activeTab === tab.key ? (
            <div key={tab.key} className="tab-content flex mt-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 pb-3 text-green-950">Location</th>
                    <th className="border-b-2 pb-3 text-green-950">Address</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="pr-8 align-top paragraph">{tab.content.location}</td>
                    <td className="align-top paragraph">{tab.content.address}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ContactTabs;
