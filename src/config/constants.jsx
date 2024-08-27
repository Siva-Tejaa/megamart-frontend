import {
  FaRegUser,
  LuHeart,
  HiOutlineShoppingBag,
} from "../assets/images/iconImports";

//Nav Items
export const navItems = [
  {
    id: 1,
    name: "Profile",
    icon: <FaRegUser style={{ fontSize: "1.3em" }} />,
  },
  {
    id: 2,
    name: "Wishlist",
    icon: <LuHeart style={{ fontSize: "1.3em" }} />,
    link: "/wishlist",
  },
  {
    id: 3,
    name: "Bag",
    icon: <HiOutlineShoppingBag style={{ fontSize: "1.3em" }} />,
    link: "/cart",
  },
];

//Profile Items
export const profileItems = [
  {
    id: 1,
    name: "Orders",
    link: "/orders",
  },
  {
    id: 2,
    name: "Wishlist",
    link: "/wishlist",
  },
  {
    id: 3,
    name: "Gift Cards",
    link: "/giftcards",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/contactus",
  },
  {
    id: 5,
    name: "MegaMart Insider",
    link: "/megamartinsider",
  },
];
