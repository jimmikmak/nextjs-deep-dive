import React from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sydney_Opera_House%2C_vivid_Sydey.JPG/2880px-Sydney_Opera_House%2C_vivid_Sydey.JPG"
      title="First Meetup"
      address="Some Street 7, Some City"
      description="This is a first meetup"
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Sydney_Opera_House%2C_vivid_Sydey.JPG/2880px-Sydney_Opera_House%2C_vivid_Sydey.JPG",
        id: meetupId,
        title: "First Meetup",
        address: "Some Street 7, Some City",
        description: "This is a first meetup",
      },
    },
  };
};

export default MeetupDetails;
