import Users from "./";
import { plainToClass } from "class-transformer";
const loadUser = (): Users[] => {
  return plainToClass(Users, [
    {
      fname:'Jonny',
      lname:'Biela',
      email:'a@gmail.com',
      password:'dummy@123',
      lastAccess:'6 days ago',
      role:'Customer'
    },
    {
      fname:'Jeal',
      lname:'Milh',
      email:'a@gmail.com',
      password:'dummy@123',
      lastAccess:'6 days ago',
      role:'Customer'    
    },
    {
      fname:'Ishitaa',
      lname:'Oza',
      email:'a@gmail.com',
      password:'dummy@123',
      lastAccess:'6 days ago',
      role:'Customer'
    },
    {
      fname:'Benny',
      lname:'Patel',
      email:'a@gmail.com',
      password:'dummy@123',
      lastAccess:'6 days ago',
      role:'Customer'
    },
    {
      fname:'Denisha',
      lname:'Birla',
      email:'a@gmail.com',
      password:'dummy@123',
      lastAccess:'6 days ago',
      role:'Customer'
    },
    {
      fname:'Karry',
      lname:'Gada',
      email:'a@gmail.com',
      password:'dummy@123',
      lastAccess:'6 days ago',
      role:'Customer'    
    },
    {
      fname:'Minja',
      lname:'Kerla',
      email:'a@gmail.com',
      password:'dummy@123',
      lastAccess:'6 days ago',
      role:'Customer'
    },
    {
      fname:'Lisha',
      lname:'Maheshwary',
      email:'a@gmail.com',
      password:'dummy@123',
      lastAccess:'6 days ago',
      role:'Customer'    
    }
  ]);
};

export default loadUser;
