import { USER } from "../user/type";

export const newUserBody = ({
  fullName,
  username,
  password,
  email,
}: {
  fullName: string;
  username: string;
  password: string;
  email: string;
}) => {
  const [firstname, lastname] = fullName.split(" ");

  return {
    address: {
      geolocation: {
        lat: "-37.3159",
        long: "81.1496",
      },
      city: "kilcoole",
      street: "new road",
      number: 7682,
      zipcode: "12926-3874",
    },
    id: Date.now(),
    email,
    username,
    password,
    name: {
      firstname,
      lastname,
    },
    phone: "1-570-236-7033",
    __v: 0,
  } as USER;
};
