"use client"

import { ArrowRight } from 'lucide-react';
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
      location: <div className="w-full tab">
        <h3 className="tab-title">Location</h3>
        <p>Lagos Head office - Yaba</p>
        <p>Osogbo</p>
        <p>Retail Business OUTLET KANO</p>
      </div>,
      address: <div className="w-full tab">
        <h3 className="tab-title">Address</h3>
        <p>14, Hughes Avenue, Alagomeji, Yaba, Lagos</p>
        <p>2nd Floor, Jesus Court, Jesus Court, Isiaka Adeleke Freeway, Okefia, Oshogbo, Osun state.</p>
        <p>Skye Bank Plc, 23, Bello Road, Kano, Kano state</p>
      </div>
    }
  },
  {
    key: 'life', label: 'Tangerine Life', content: {
      location: <div className="w-full tab">
        <h3 className="tab-title">Location</h3>
        <p>Abuja</p>
        <p>Benin</p>
        <p>Ibadan</p>
        <p>Kaduna</p>
        <p>Retail Business OUTLET Abeokuta</p>
        <p>Retail Business OUTLET AKURE</p>
        <p>Retail Business OUTLET ONITSHA</p>
      </div>,
      address: <div className="w-full tab">
        <h3 className="tab-title">Address</h3>
        <p>5, Dambata close, Area 7, Garki, FCT</p>
        <p>1st Floor of Austin Lying Plaza, 99A, First East Circular Road, Opposite Uvbi Primary School, By St Joseph Catholic Church, Benin City.</p>
        <p>1st Floor, Heritage Mall, Cocoa House, Dugbe, Ibadan.</p>
        <p>Hasfsat Plaza, No, 4 Constitution Road Kaduna.</p>
        <p>23C Segun Osoba Way, Okelewo Abeokuta</p>
        <p>Ground floor, BOI building Alagbaka Akure</p>
        <p>C1 & C4 No. 65 New Market Road Onitsha.</p>
      </div>
    }
  },
  {
    key: 'pensions', label: 'Tangerine Pensions', content: {
      location: <div className="w-full tab">
        <h3 className="tab-title">Location</h3>
        <p>Head office (Main Office)</p>
        <p>Lagos</p>
        <p>Kano Office</p>
        <p>Kaduna Office</p>
        <p>Gombe Office</p>
      </div>,
      address: <div className="w-full tab">
        <h3 className="tab-title">Address</h3>
        <p>FMBN House, Plot 266, Cadastral AO. CBD, Abuja.</p>
        <p>21A & 21B Olosa Street Victoria Island Lagos</p>
        <p>No. 7 Zoo Road,Suite C2 Prime Hub Shopping complex, Kano</p>
        <p>3rd Floor BOI Building, 18 Mohammadu Buhari Way, Kaduna.</p>
        <p>CFA Building, Shehu Abubakar Road, Adjacent Sch. Of Nursing, Jeka da Fari, Gombe, Gombe State.</p>
      </div>
    }
  },
  {
    key: 'health', label: 'Tangerine Health', content: {
      location: <div className="w-full tab">
        <h3 className="tab-title">Location</h3>
        <p>Lagos office - Palmgrove Estate</p>
        <p>Lagos office - Palmgrove Estate</p>
        <p>Abuja</p>
        <p>Ibadan</p>
        <p>Enugu</p>
        <p>Yola</p>
        <p>Ilorin</p>
        <p>Port Harcourt</p>
      </div>,
      address: <div className="w-full tab">
        <h3 className="tab-title">Address</h3>
        <p>2 Marconi Road, Palmgrove Estate, Ilupeju, Lagos</p>
        <p>75 D'alberto Road, Palmgrove Estate, Ilupeju, Lagos</p>
        <p>2nd Foor, El-Yakubu Place, Plot 1129, Zakariya Malami Street, Adjacent to Nigeria Defence College, Central Business Distric, Abuja</p>
        <p>14th Floor, Cocoa House Building, Oba Adebimpe Road, Dugbe, Ibadan</p>
        <p>16 Marcus Harvey Street, New Garvey, Enugu</p>
        <p>Blue Plaza, Adjacent Unity Bank, Opposite House of Refuge Junction, Bekaji-Jimeta, Yola</p>
        <p>16B Cocacola Road, Opposite Ariya Hotel, Ilorin</p>
        <p>City View Plaza, 26A Aba Road Port Harcourt.</p>
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
      <div className="flex gap-10">
        <div className='flex items-center gap-2'>
          <p className='regular-18 text-generic-950'>Select a business</p>
          <ArrowRight size={16} className='text-generic-950' />
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
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab) =>
          activeTab === tab.key ? (
            <div key={tab.key} className="tab-content flex mt-8">
              {tab.content.location}
              {tab.content.address}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ContactTabs;
