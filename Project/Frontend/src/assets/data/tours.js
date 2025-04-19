import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Taj Mahal",
    city: "Agra",
    distance: 230,
    address: "Dharmapuri, Forest Colony, Tajganj, Agra",
    price: 499,
    maxGroupSize: 20,
    description: "One of the Seven Wonders of the World, the Taj Mahal is a symbol of love.",
    reviews: [
      {
        name: "Avi Sharma",
        rating: 4.9,
      },
    ],
    avgRating: 4.9,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Jaipur City Palace",
    city: "Jaipur",
    distance: 280,
    address: "J.D.A. Market, Jaleb Chowk, Jaipur",
    price: 399,
    maxGroupSize: 15,
    description: "The City Palace is a royal residence with museums and courtyards.",
    reviews: [
      {
        name: "Avi Sharma",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Jim Corbett National Park",
    city: "Nainital",
    distance: 250,
    address: "Ramnagar, Uttarakhand",
    price: 599,
    maxGroupSize: 10,
    description: "A wildlife sanctuary known for Bengal tigers, elephants, and rich flora.",
    reviews: [
      {
        name: "Avi Sharma",
        rating: 4.6,
      },
    ],
    avgRating: 4.6,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Rishikesh Ganga Aarti",
    city: "Rishikesh",
    distance: 240,
    address: "Triveni Ghat, Rishikesh",
    price: 299,
    maxGroupSize: 12,
    description: "Experience spiritual calmness by attending the Ganga Aarti at sunset.",
    reviews: [
      {
        name: "Avi Sharma",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Neemrana Fort",
    city: "Neemrana",
    distance: 120,
    address: "Neemrana, Alwar District, Rajasthan",
    price: 349,
    maxGroupSize: 8,
    description: "A 15th-century heritage hotel with beautiful views and architecture.",
    reviews: [
      {
        name: "Avi Sharma",
        rating: 4.5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Chandni Chowk Food Walk",
    city: "Delhi",
    distance: 5,
    address: "Old Delhi, near Red Fort",
    price: 199,
    maxGroupSize: 6,
    description: "Explore the flavors of Delhi through its most iconic food street.",
    reviews: [
      {
        name: "Avi Sharma",
        rating: 4.7,
      },
    ],
    avgRating: 4.7,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Sultanpur Bird Sanctuary",
    city: "Gurgaon",
    distance: 50,
    address: "Sultanpur, Haryana",
    price: 150,
    maxGroupSize: 10,
    description: "Ideal spot for bird watching during winter months.",
    reviews: [
      {
        name: "Avi Sharma",
        rating: 4.3,
      },
    ],
    avgRating: 4.3,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Mussoorie Hill Station",
    city: "Mussoorie",
    distance: 280,
    address: "Dehradun District, Uttarakhand",
    price: 499,
    maxGroupSize: 12,
    description: "Popular hill station known for its cool climate and natural beauty.",
    reviews: [
      {
        name: "Avi Sharma",
        rating: 4.8,
      },
    ],
    avgRating: 4.8,
    photo: tourImg03,
    featured: false,
  },
];

export default tours;