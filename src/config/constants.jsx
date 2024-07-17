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
  },
  {
    id: 3,
    name: "Bag",
    icon: <HiOutlineShoppingBag style={{ fontSize: "1.3em" }} />,
  },
];

//Profile Items
export const profileItems = [
  {
    id: 1,
    name: "Orders",
    link: "/my/orders",
  },
  {
    id: 2,
    name: "Wishlist",
    link: "/my/wishlist",
  },
  {
    id: 3,
    name: "Gift Cards",
    link: "/my/giftcards",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/my/contactus",
  },
  {
    id: 5,
    name: "MegaMart Insider",
    link: "/my/megamartinsider",
  },
];
