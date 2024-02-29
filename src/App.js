import React, { useState } from 'react';
import backgroundImage from './background.jpg';
import './App.css';

const PetrolBillGenerator = () => {
  const petrolStations = [
    { address: 'Kharadi Mundhawa Bypass Kharadi, Pune', name: 'Shri Venkateshwaram HP Petroleum', phone: '020 2701 1111', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-hp.webp', thankYouMessage: 'Thank you for choosing Shri Venkateshwaram HP Petroleum', welcomeMessage: 'Welcome to Shri Venkateshwaram HP Petroleum', rate: 105.3 },
    { address: 'Yadav Service Station in Nagar Road, Pune', name: 'Yadav Service Station', phone: '1800 233 3555', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-hp.webp', thankYouMessage: 'Thank you for choosing Yadav Service Station', welcomeMessage: 'Welcome to Yadav Service Station', rate: 105.45 },
    { address: 'Kankariya Service Station Vadgaon Sheri, Pune', name: 'Kankariya Service Station', phone: '020 2703 0078', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-hp.webp', thankYouMessage: 'Thank you for choosing Kankariya Service Station', welcomeMessage: 'Welcome to Kankariya Service Station', rate: 105.52 },
    { address: 'Dmello Service Station Vadgaon Sheri, Pune', name: 'Dmello Service Station, Indian Oil', phone: '098220 32573', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-indian-oil.webp', thankYouMessage: 'Thank you for choosing Dmello Service Station, Indian Oil', welcomeMessage: 'Welcome to Dmello Service Station, Indian Oil', rate: 105.13 },
    { address: 'Ahmednagar Road Vadgaon Sheri, Pune', name: 'Petrol Pump', phone: '020 2703 0078', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-hp.webp', thankYouMessage: 'Thank you for choosing Petrol Pump', welcomeMessage: 'Welcome to Petrol Pump', rate: 104.5 },
    { address: 'Adarsh Petrol Pump Near Inorbit Mall Vadgaon Sheri, Pune', name: 'Adarsh Petrol Pump', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-hp.webp', thankYouMessage: 'Thank you for choosing Adarsh Petrol Pump', welcomeMessage: 'Welcome to Adarsh Petrol Pump', rate: 105.71 },
    { address: 'Bharat Petroleum Santipur, Pune', name: 'Bharat Petroleum', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-bharat-petroleum.webp', thankYouMessage: 'Thank you for choosing Bharat Petroleum', welcomeMessage: 'Welcome to Bharat Petroleum', rate: 105.64 },
    { address: 'Shell Petrol Pump Mh Sh 27 Kirtane Baug Mundhwa, Pune', name: 'Shell Petrol Pump', phone: '099602 80669', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-hp.webp', thankYouMessage: 'Thank you for choosing Shell Petrol Pump', welcomeMessage: 'Welcome to Shell Petrol Pump', rate: 105.17 },
    { address: 'Imperial Petroleum Opposite Sbi Mundhwa, Pune', name: 'Imperial Petroleum, Indian Oil', phone: '099219 60736', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-indian-oil.webp', thankYouMessage: 'Thank you for choosing Imperial Petroleum, Indian Oil', welcomeMessage: 'Welcome to Imperial Petroleum, Indian Oil', rate: 105.08 },
    { address: 'Shri Venkateshwara Petroleum Opposite Thite Wasti Kharadi, Pune', name: 'Shri Venkateshwara HP Petroleum', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-hp.webp', thankYouMessage: 'Thank you for choosing Shri Venkateshwara HP Petroleum', welcomeMessage: 'Welcome to Shri Venkateshwara HP Petroleum', rate: 104.62 },
    { address: 'Salvi Petro Station Near Mundhwa Pune GPO, Pune', name: 'Salvi Petro Station, Bharat Petroleum', phone: '090499 69646', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-bharat-petroleum.webp', thankYouMessage: 'Thank you for choosing Salvi Petro Station, Bharat Petroleum', welcomeMessage: 'Welcome to Salvi Petro Station, Bharat Petroleum', rate: 104.78 },
    { address: 'Yash Petroleum Mundhwa, Pune', name: 'Yash Petroleum, Bharat Petroleum', phone: '098220 55797', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-bharat-petroleum.webp', thankYouMessage: 'Thank you for choosing Yash Petroleum, Bharat Petroleum', welcomeMessage: 'Welcome to Yash Petroleum, Bharat Petroleum', rate: 104.83 },
    { address: 'Bharat Petroleum Santipur, Pune', name: 'Bharat Petroleum', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-bharat-petroleum.webp', thankYouMessage: 'Thank you for choosing Bharat Petroleum', welcomeMessage: 'Welcome to Bharat Petroleum', rate: 104.75 },
    { address: 'Magar Petroleum Opposite Magarpatta City Hadapsar, Pune', name: 'Magar, Bharat Petroleum', phone: '1800 22 4344', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-bharat-petroleum.webp', thankYouMessage: 'Thank you for choosing Magar, Bharat Petroleum', welcomeMessage: 'Welcome to Magar, Bharat Petroleum', rate: 104.53 },
    { address: 'Siddharth Petroleum Mundhwa, Pune', name: 'Siddharth Petroleum, HP', phone: '022 2286 3900', logo: 'https://freeforonline.com/assets/images/bill/pump-logo-hp.webp', thankYouMessage: 'Thank you for choosing Siddharth Petroleum, HP', welcomeMessage: 'Welcome to Siddharth Petroleum, HP', rate: 105.52 }
  ];
  
  const generateRandomDate = (usedDates, startDate, endDate) => {
    const minTimestamp = startDate.getTime();
    const maxTimestamp = endDate.getTime();
  
    let randomTimestamp;
    let randomDate;
    let formattedDate;
  
    do {
      randomTimestamp = Math.floor(minTimestamp + Math.random() * (maxTimestamp - minTimestamp + 1));
      randomDate = new Date(randomTimestamp);
      formattedDate = randomDate.toLocaleDateString();
    } while (usedDates.has(formattedDate));
  
    usedDates.add(formattedDate);
    return formattedDate;
  };
  
  const generateMonthlyBills = () => {
    const monthlyBills = [];
    const startDate = new Date('2023-04-01');
    const endDate = new Date('2024-02-28');
    const usedDates = new Set();
  
    // Iterate over each month from April 2023 to February 2024
    for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setMonth(currentDate.getMonth() + 1)) {
      const totalMonthlyTarget = Math.floor(Math.random() * (45000 - 35000 + 1)) + 35000;
      let totalMonthlyAmount = 0;
  
      while (totalMonthlyAmount < totalMonthlyTarget) {
        const randomStation = petrolStations[Math.floor(Math.random() * petrolStations.length)];
        const minBillSize = 3000;
        const maxBillSize = 5000;
        const randomBillSize = Math.floor(Math.random() * (maxBillSize - minBillSize + 1)) + minBillSize;
        const billAmount = totalMonthlyAmount + randomBillSize;
  
        if (billAmount > totalMonthlyTarget) {
          break; // Exit the loop if adding the random bill size exceeds the total monthly target
        }
  
        const liters = randomBillSize / randomStation.rate;
        const date = generateRandomDate(usedDates, currentDate, new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0));
  
        if (!date) {
          console.error('Error generating random date. Exiting the loop.');
          break; // Exit the loop if there's an error generating the random date
        }
  
        totalMonthlyAmount += randomBillSize;

        const existingDate = monthlyBills.find(bill => {
          const billDate = new Date(bill.date);
          const compareDate = new Date(date);

        });
        if (!existingDate) {
          monthlyBills.push({
            name: randomStation.name,
            address: randomStation.address,
            amount: randomBillSize.toFixed(2),
            liters: liters.toFixed(2),
            litreRate: randomStation.rate.toFixed(2),
            totalAmount: randomBillSize.toFixed(2),
            invoiceNumber: Math.floor(Math.random() * 10000) + 1000,
            phoneNumber: randomStation.phoneNumber,
            date: date,
            modeOfPayment: 'Cash',
            welcomeMessage: randomStation.welcomeMessage,
            thankYouMessage: randomStation.thankYouMessage,
            logo: randomStation.logo,
          });
        }
      }
    }
  
    return monthlyBills;
  };
  const [yearlyBills, setYearlyBills] = useState([]);
  const [monthlySummaries, setMonthlySummaries] = useState([]);

  const handleGenerateYearlyBills = () => {
    let bills = [];
    // for (let i = 0; i < 12; i++) {
      bills.push(generateMonthlyBills());
    // }
    setYearlyBills(bills);
    generateMonthlySummaries(bills);
  };

  const generateMonthlySummaries = (bills) => {
    console.log(bills)
    let summaries = [];
    bills.forEach(monthBills => {
      let totalAmount = 0;
      monthBills.forEach(bill => {
        totalAmount += parseFloat(bill.amount);
      });
      summaries.push({
        month: monthBills[0].date.split('/')[1], // Extracting month from the date
        totalAmount: totalAmount.toFixed(2),
        date: monthBills[0].date, // Take the date from the first bill of the month
      });
    });
    setMonthlySummaries(summaries);
  };

  return (
    <div style={{ fontFamily: 'Press Start 2P, Arial, sans-serif', backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', textShadow: 'none', color: '#fff' }}>Petrol Bill Generator</h2>
      <button onClick={handleGenerateYearlyBills} style={{ display: 'block', margin: '0 auto', marginBottom: '10px' }}>Generate Petrol Bills for the Year</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {yearlyBills.map((monthBills, monthIndex) => (
          monthBills.map((bill, index) => (
              <div key={index}>
              <div  style={{ border: '1px solid #000', padding: '10px', marginBottom: '10px' }}>
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
          </div>
            ))
        ))}
      </div>
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ textAlign: 'center', textShadow: 'none', color: '#000' }}>Monthly Bill Summaries</h2>
        <table style={{ margin: '0 auto', borderCollapse: 'collapse', border: '1px solid #000' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #000', padding: '5px', color: '#000' }}>Date</th>
              <th style={{ border: '1px solid #000', padding: '5px', color: '#000' }}>Month</th>
              <th style={{ border: '1px solid #000', padding: '5px', color: '#000' }}>Total Amount</th>
            </tr>
          </thead>
          <tbody>
          {yearlyBills.map((monthBills, monthIndex) => (
          monthBills.map((bill, index) => (
              <tr key={index}>
                <td style={{ border: '1px solid #000', padding: '5px', color: '#000' }}>{bill.date}</td>
                {/* <td style={{ border: '1px solid #000', padding: '5px', color: '#000' }}>{summary.month}</td> */}
                <td style={{ border: '1px solid #000', padding: '5px', color: '#000' }}>{bill.totalAmount}</td>
              </tr>
            ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PetrolBillGenerator;
