const imageCategories = [
  { _id: 1, text: "Animals", value: "animals" },
  { _id: 2, text: "Art", value: "art" },
  { _id: 3, text: "Automobiles", value: "automobiles" },
  { _id: 4, text: "Landscapes", value: "landscapes" },
];

const textColorOptions = [
  { _id: 1, className: "bg-white", value: "" },
  { _id: 2, className: "bg-gray", value: "gray-text" },
  { _id: 3, className: "bg-dark", value: "dark-text" },
  { _id: 4, className: "bg-red", value: "red-text" },
  { _id: 5, className: "bg-light-green", value: "light-green-text" },
  { _id: 6, className: "bg-blue", value: "blue-text" },
  { _id: 7, className: "bg-light-blue", value: "light-blue-text" },
];

const refreshTimeOptions = [
  { _id: 1, text: "15 min", value: 900000 },
  { _id: 2, text: "30 min", value: 1800000 },
  { _id: 3, text: "1 hr", value: 3600000 },
  { _id: 4, text: "2 hrs", value: 7200000 },
];

export { imageCategories, refreshTimeOptions, textColorOptions };
