import React from "react";

async function getData() {
  const res = await fetch(
    "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=3fLsDyAUeZtbuEuK296eGs6z5dli7mf1"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Events = async () => {
  const data = await getData();
  console.log(data);
  return <div>Events</div>;
};

export default Events;
