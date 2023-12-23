import room1 from "../assets/rooms/room_1.jpg";
import room2 from "../assets/rooms/room_2.jpg";
import room3 from "../assets/rooms/room_3.jpg";
import room4 from "../assets/rooms/room_4.jpg";
import room5 from "../assets/rooms/room_5.jpg";
import room6 from "../assets/rooms/room_6.jpg";

const rooms = [
  {
    room_number: "101",
    room_type: "Deluxe King",
    number_of_beds: 1,
    bed_size: "King",
    number_of_bathrooms: 1,
    amenities: "Mini fridge, coffee maker, bathrobes, slippers",
    base_rate: 249.99,
    image: room1,
  },
  {
    room_number: "201",
    room_type: "Two Queen Beds",
    number_of_beds: 2,
    bed_size: "Queen",
    number_of_bathrooms: 1,
    amenities: "Microwave, tea kettle, yoga mats",
    base_rate: 199.99,
    image: room2,
  },
  {
    room_number: "301",
    room_type: "Family Suite",
    number_of_beds: 2,
    bed_size: "King",
    number_of_bathrooms: 2,
    amenities: "Jetted tub, video games, kids toys",
    base_rate: 349.99,
    image: room3,
  },
  {
    room_number: "401",
    room_type: "Business Suite",
    number_of_beds: 1,
    bed_size: "King",
    number_of_bathrooms: 1,
    amenities: "Work desk, printer, office supplies",
    base_rate: 279.99,
    image: room4,
  },
  {
    room_number: "501",
    room_type: "Bridal Suite",
    number_of_beds: 1,
    bed_size: "King",
    number_of_bathrooms: 2,
    amenities: "Jacuzzi, robes, champagne",
    base_rate: 399.99,
    image: room5,
  },
  {
    room_number: "601",
    room_type: "Single King",
    number_of_beds: 1,
    bed_size: "Single",
    number_of_bathrooms: 1,
    amenities: "Jacuzzi, robes, champagne",
    base_rate: 399.99,
    image: room6,
  },
];

export default rooms;
