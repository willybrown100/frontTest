// Input date string
const dateStr = "2024-02-06";

// Convert the string to a Date object
const date = new Date(dateStr);

// Options for formatting the date
const options = { year: "numeric", month: "long", day: "numeric" };

// Convert to the desired format
const formattedDate = date.toLocaleDateString("en-US", options);

// Display the formatted date
console.log(formattedDate); // "February 6, 2024"


export function formatedDate(dateStr){
  const date = new Date(dateStr);

  //   // Options for formatting the date
  //   const options = { year: "numeric", month: "long", day: "numeric" };

  //   // Convert to the desired format
  //   const formattedDate = date.toLocaleDateString("en-US", options);
  // Options for formatting the date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Convert to the desired format (day first)
  const formattedDate = date.toLocaleDateString("en-GB", options);
  console.log(formattedDate); // "February 6, 2024"
  return formattedDate;
  // Display the formatted date
}
// Input date string


export function convertTo12HourFormat(timeStr) {
  // Split the time string into hours, minutes, and seconds
  let [hours, minutes, seconds] = timeStr.split(':');

  // Convert hours to a number
  hours = parseInt(hours);

  // Determine if it's AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12 || 12;  // Convert 0 to 12 for midnight and handle noon properly

  // Return formatted time
  return `${hours}:${minutes} ${ampm}`;
}

// Example usage
const time = "06:29:00";
const formattedTime = convertTo12HourFormat(time);

console.log(formattedTime); // "6:29 AM"


export function convertToNaira(amount) {
  // Use Intl.NumberFormat to format the amount in Nigerian Naira
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN'
  });
  
  // Return the formatted amount
  return formatter.format(amount);
}

// Example usage
const amount = 2500;
const nairaAmount = convertToNaira(amount);

console.log(nairaAmount); // Output: ₦2,500.00