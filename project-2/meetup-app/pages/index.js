import React from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sydney_Opera_House%2C_vivid_Sydey.JPG/2880px-Sydney_Opera_House%2C_vivid_Sydey.JPG",
    address: "Some Address 5, 12345 A City",
    description: "This is a first meet-up!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sydney_%28AU%29%2C_Harbour_Bridge_--_2019_--_2179.jpg/2880px-Sydney_%28AU%29%2C_Harbour_Bridge_--_2019_--_2179.jpg",
    address: "Some Address 7, 56789 A City",
    description: "This is a second meet-up!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = async (context) => {
//   const req = context.request;
//   const res = context.response;

//   // fetch data from an API

//   return {
//     props: { DUMMY_MEETUPS },
//   };
// };

export const getStaticProps = async () => {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

export default HomePage;
