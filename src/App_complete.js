import React, { useState } from 'react';
import backgroundImage from './background.jpg';
import './App.css';
const PetrolBillGenerator = () => {
  const petrolStations = [
    { name: 'Shell', address: '123 Main St', rate: 90.50, phoneNumber: '0123456789', welcomeMessage: 'Welcome to Shell Petrol Station', thankYouMessage: 'Thank you for choosing Shell!', logo: 'https://example.com/shell-logo.png' },
    { name: 'BP', address: '456 Elm St', rate: 88.25, phoneNumber: '9876543210', welcomeMessage: 'Welcome to BP Petrol Station', thankYouMessage: 'Thank you for choosing BP!', logo: 'https://example.com/bp-logo.png' },
    { name: 'Exxon', address: '789 Oak St', rate: 91.80, phoneNumber: '1234567890', welcomeMessage: 'Welcome to Exxon Petrol Station', thankYouMessage: 'Thank you for choosing Exxon!', logo: 'https://example.com/exxon-logo.png' },
    // Add more petrol stations here
  ];

  const generateRandomBill = () => {
    const minBillSize = 3000;
    const maxBillSize = 4000;
    const randomBillSize = Math.floor(Math.random() * (maxBillSize - minBillSize + 1)) + minBillSize;
    const randomStation = petrolStations[Math.floor(Math.random() * petrolStations.length)];
    const liters = randomBillSize / randomStation.rate; // Liters calculated based on rate
    const litreRate = randomStation.rate;
    const totalAmount = randomBillSize;
    return {
      name: randomStation.name,
      address: randomStation.address,
      amount: randomBillSize.toFixed(2),
      liters: liters.toFixed(2),
      litreRate: litreRate.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      invoiceNumber: Math.floor(Math.random() * 10000) + 1000,
      phoneNumber: randomStation.phoneNumber, // Taking phone number from petrol station
      date: new Date().toLocaleDateString(),
      modeOfPayment: 'Cash',
      welcomeMessage: randomStation.welcomeMessage, // Welcome message from petrol station
      thankYouMessage: randomStation.thankYouMessage, // Thank you message from petrol station
      logo: randomStation.logo, // Logo of the petrol station
    };
  };

  const generateMonthlyBills = () => {
    let monthlyBills = [];
    let totalMonthlyAmount = 0;
    const totalMonthlyTarget = 40000;
    while (totalMonthlyAmount < totalMonthlyTarget) {
      let billAmount = 0;
      let days = 0;
      while (billAmount < 4000) {
        const bill = generateRandomBill();
        billAmount += parseFloat(bill.amount);
        days += Math.floor(Math.random() * 2) + 4; // Cadence of 4-5 days
        bill.date = new Date(new Date().getTime() + (days * 24 * 60 * 60 * 1000)).toLocaleDateString();
        monthlyBills.push(bill);
      }
      totalMonthlyAmount += billAmount;
    }
    return monthlyBills;
  };

  const [yearlyBills, setYearlyBills] = useState([]);

  const handleGenerateYearlyBills = () => {
    let bills = [];
    for (let i = 0; i < 12; i++) {
      bills.push(generateMonthlyBills());
    }
    setYearlyBills(bills);
  };

  return (
    <div style={{ fontFamily: 'Press Start 2P, Arial, sans-serif', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', textShadow: 'none', color: '#fff' }}>Petrol Bill Generator</h2>
      <button onClick={handleGenerateYearlyBills} style={{ display: 'block', margin: '0 auto', marginBottom: '10px' }}>Generate Petrol Bills for the Year</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {yearlyBills.map((monthBills, monthIndex) => (
          <div key={monthIndex}>
            {monthBills.map((bill, index) => (
              <div key={index} style={{ border: '1px solid #000', padding: '10px', marginBottom: '10px' }}>
                <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                  <img src={bill.logo} alt={bill.name} style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <h3 style={{ textAlign: 'center', marginTop: '0', textShadow: 'none', color: '#000' }}>{bill.welcomeMessage}</h3>
                <div>
                  <p><strong>Station Name:</strong> {bill.name}</p>
                  <p><strong>Address:</strong> {bill.address}</p>
                </div>
                <div>
                  <p><strong>Invoice Number:</strong> {bill.invoiceNumber}</p>
                  <p><strong>Date:</strong> {bill.date}</p>
                </div>
                <hr />
                <div>
                  <p><strong>Product Information:</strong> Petrol</p>
                  <p><strong>Quantity:</strong> {bill.liters} Liters</p>
                  <p><strong>Rate per Liter:</strong> Rs. {bill.litreRate}</p>
                  <p><strong>Total Amount:</strong> Rs. {bill.totalAmount}</p>
                </div>
                <hr />
                <div>
                  <p><strong>Mode of Payment:</strong> {bill.modeOfPayment}</p>
                  <p><strong>Telephone Number:</strong> {bill.phoneNumber}</p>
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: '0', textShadow: 'none', color: '#000' }}>{bill.thankYouMessage}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetrolBillGenerator;
