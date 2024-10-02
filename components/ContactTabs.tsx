"use client";

import { ArrowDown, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

interface Tab {
  key: string;
  label: string;
  content: {
    location: string;
    address: string;
  }[];
}

const tabs: Tab[] = [
  {
    key: 'general',
    label: 'Tangerine General',
    content: [
      { location: 'Lagos Head office - Yaba', address: '14, Hughes Avenue, Alagomeji, Yaba, Lagos' },
      { location: 'Osogbo', address: '2nd Floor, Jesus Court, Isiaka Adeleke Freeway, Okefia, Oshogbo, Osun state.' },
      { location: 'Retail Business OUTLET KANO', address: 'Skye Bank Plc, 23, Bello Road, Kano, Kano state' },
    ]
  },
  {
    key: 'life',
    label: 'Tangerine Life',
    content: [
      { location: 'Abuja', address: '5, Dambata close, Area 7, Garki, FCT' },
      { location: 'Benin', address: '1st Floor of Austin Lying Plaza, 99A, First East Circular Road, Opposite Uvbi Primary School, By St Joseph Catholic Church, Benin City.' },
      { location: 'Ibadan', address: '1st Floor, Heritage Mall, Cocoa House, Dugbe, Ibadan' },
      { location: 'Kaduna', address: 'Hasfsat Plaza, 4 Constitution Road Kaduna' },
      { location: 'Retail Business OUTLET Abeokuta', address: '23C Segun Osoba Way, Abeokuta' },
      { location: 'Retail Business OUTLET AKURE', address: 'BOI building, Alagbaka, Akure' },
      { location: 'Retail Business OUTLET ONITSHA', address: '65 New Market Road, Onitsha' },
    ]
  },
  {
    key: 'pensions',
    label: 'Tangerine Pensions',
    content: [
      { location: 'Head office (Main Office)', address: 'FMBN House, Plot 266, CBD, Abuja' },
      { location: 'Lagos', address: '21A & 21B Olosa Street, Victoria Island, Lagos' },
      { location: 'Kano Office', address: '7 Zoo Road, Prime Hub Shopping Complex, Kano' },
      { location: 'Kaduna Office', address: 'BOI Building, 18 Mohammadu Buhari Way, Kaduna' },
      { location: 'Gombe Office', address: 'CFA Building, Jeka da Fari, Gombe' },
    ]
  },
  {
    key: 'health',
    label: 'Tangerine Health',
    content: [
      { location: 'Lagos office - Palmgrove Estate', address: '2 Marconi Road, Palmgrove Estate, Lagos' },
      { location: 'Abuja', address: '1129 Zakariya Malami Street, Abuja' },
      { location: 'Ibadan', address: '14th Floor, Cocoa House, Ibadan' },
      { location: 'Enugu', address: '16 Marcus Harvey Street, Enugu' },
      { location: 'Yola', address: 'Bekaji-Jimeta, Yola' },
      { location: 'Ilorin', address: '16B Cocacola Road, Ilorin' },
      { location: 'Port Harcourt', address: '26A Aba Road, Port Harcourt' },
    ]
  }
];

const ContactTabs: React.FC = () => {
  const [ activeTab, setActiveTab ] = useState<string>(tabs[ 0 ].key);

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
                  {tab.content.map((item, index) => (
                    <tr key={index} className="mb-4">
                      <td className="pr-8 py-4 align-top paragraph border-b">
                        {item.location}
                      </td>
                      <td className="py-4 align-top paragraph border-b">
                        {item.address}
                      </td>
                    </tr>
                  ))}
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
