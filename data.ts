const DETAILS_DATA = [
  {
    title: "Fee type",
    dropdown: [
      "Tuition fee",
      "Registration fee",
      "Late payment fee",
      "Late registration fee",
    ],
  },
  {
    title: "Class",
    dropdown: ["J.S.S 1", "J.S.S 2", "J.S.S 3"],
  },
  { title: "Session", dropdown: ["2021/2022", "2022/2023", "2023/2024"] },
  { title: "Term", dropdown: ["First Term", "Second Term", "Third Term"] },

  {
    title: "Other associated fee",
    dropdown: [
      "W.A.E.C fee",
      "Graduation fee",
      "Extra Lesson fee",
      "Online lesson fee",
    ],
  },
];

export default DETAILS_DATA;

export const PAYMENT_DETAILS = [
  {
    id: 1,
    title: "Tuition fee",
    price: "₦30,000.00",
  },
  {
    id: 2,
    title: "Extra lesson fee",
    price: "₦30,000.00",
  },
  {
    id: 3,
    title: "Online lesson fee",
    price: "₦30,000.00",
  },
  {
    id: 4,
    title: "W.A.E.C fee",
    price: "₦30,000.00",
  },
  {
    id: 5,
    title: "Graduation fee",
    price: "₦20,000.00",
  },
  {
    id: 6,
    title: "Graduation fee",
    price: "₦20,000.00",
  },
  {
    id: 7,
    title: "Graduation fee",
    price: "₦20,000.00",
  },
  {
    id: 8,
    title: "Graduation fee",
    price: "₦20,000.00",
  },
];

export const COMPLETED_PAYMENT = [
  {
    id: 1,
    name: "Ogunsegbe Tosin",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 2,
    name: "Damilare Taiwo",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 3,
    name: "Oguntade Demilade",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 4,
    name: "Demilade Taiwo",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 5,
    name: "Damilare Taiwo",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 6,
    name: "Oguntade Demilade",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 7,
    name: "Oguntade Demilade",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 8,
    name: "Damilare Taiwo",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 9,
    name: "Demilade Taiw",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 10,
    name: "Mei",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 11,
    name: "Steve",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
];

export const PAYMENT_HISTORY = [
  {
    id: 1,
    paymentType: "Tuition fee",
    amount: "₦320,000",
    status: "pending",
  },
  {
    id: 2,
    paymentType: "Multiple fees",
    amount: "₦700,000",
    status: "successful",
  },
  { id: 3, paymentType: "Party fee", amount: "₦300,000", status: "failed" },
  { id: 4, paymentType: "W.A.E.C Fee", amount: "₦400,00", status: "pending" },
  { id: 5, paymentType: "Tuition fee", amount: "₦60,000", status: "pending" },
  {
    id: 6,
    paymentType: "Multiple fees",
    amount: "₦8,000",
    status: "successful",
  },
  { id: 7, paymentType: "Party fee", amount: "₦20,000", status: "failed" },
  { id: 8, paymentType: "W.A.E.C Fee", amount: "₦4,500", status: "successful" },
];
