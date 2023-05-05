'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { 
  GiGamepad,
  GiMusicalNotes,
  GiClothes,
  GiKitchenKnives,
  GiWeightLiftingUp
} from 'react-icons/gi';
import { MdOutlineDevicesOther} from 'react-icons/md';
import {
  BiParty,
  BiCamera,
  BiBook,
  BiCar
} from 'react-icons/bi'

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Party and Events',
    icon: BiParty,
    description: 'Barbecue, Chairs & Sofas, Decoration, Food Booths, Lighting equipment, Tables, Tents, etc.',
  },
  {
    label: 'Gaming',
    icon: GiGamepad,
    description: 'Consoles, Games, Outdoor toys, Toys, Virtual Reality, etc.',
  },
  {
    label: 'Photography',
    icon: BiCamera,
    description: ' Photography Accesories, Cameras, Lens, Batteries, Case, etc.'
  },
  {
    label: 'Music',
    icon: GiMusicalNotes,
    description: 'Music Accessories, Music Players, Musical Instruments, Sound Equipments, etc.'
  },
  {
    label: 'Clothing',
    icon: GiClothes,
    description: "Children's Clothing, Clothing Accessories(Sunglasses, Handbags, etc.), Men's Clothing, Women's Clothing, Costumes, Footware, etc."
  },
  {
    label: 'Kitchen',
    icon: GiKitchenKnives,
    description: 'Cookware, Cutlery, Kitchen Appliances, Tableware, Refrigerators, Microwave and Ovens, etc.'
  },
  {
    label: 'Books',
    icon: BiBook,
    description: 'Fictional / Non-fictionl Novels, Comics, Manga, etc.'
  },
  {
    label: 'Transport',
    icon: BiCar,
    description: 'Bicycles, Scooters, Cars, Bikes, Skates, Skateboards, etc.'
  },
  {
    label: 'Electronics',
    icon: MdOutlineDevicesOther,
    description: 'Computers, Grooming appliances, Laptops, Storage Devices, Mouse, Keyboard, Phones, Cables and accessories, etc.'
  },
  {
    label: 'Fitness',
    icon: GiWeightLiftingUp,
    description: 'Gym Equipments, Massage chairs, Steamer, etc.'
  },
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;