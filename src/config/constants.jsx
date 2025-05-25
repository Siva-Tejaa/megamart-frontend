import {
  FaRegUser,
  LuHeart,
  HiOutlineShoppingBag,
  FaBox,
  FaBoxOpen,
  FaAddressBook,
  MdAccountCircle,
  BiSupport,
} from "../assets/iconImports";

//Social Media Images
import {
  GooglePlay,
  AppStore,
  Original,
  ReturnDays,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "../assets/imageImports";

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

//customerProfileNav Items
export const customerProfileNavItems = [
  {
    id: 1,
    key: "myAccount",
    name: "My Account",
    subTitle: "View & Manage orders and returns",
    icon: <FaBox style={{ fontSize: "1.3em" }} />,
  },
  {
    id: 2,
    key: "myOrders",
    name: "My Orders",
    subTitle: "View your orders",
    icon: <FaBoxOpen style={{ fontSize: "1.3em" }} />,
  },
  {
    id: 3,
    key: "myAddress",
    name: "Address Book",
    subTitle: "View & Manage Addresses",
    icon: <FaAddressBook style={{ fontSize: "1.3em" }} />,
  },
  {
    id: 4,
    key: "myProfile",
    name: "My Profile",
    subTitle: "Change your profile details & password",
    icon: <MdAccountCircle style={{ fontSize: "1.3em" }} />,
  },
  {
    id: 5,
    key: "helpAndSupport",
    name: "Help & Support",
    subTitle: "Contact us for help and support",
    icon: <BiSupport style={{ fontSize: "1.3em" }} />,
  },
];

//SocialMedia
export const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/myntra",
  },
  {
    id: 2,
    name: "Twitter(X)",
    icon: Twitter,
    link: "https://twitter.com/myntra",
  },
  {
    id: 3,
    name: "Youtube",
    icon: Youtube,
    link: "https://www.youtube.com/user/myntradotcom",
  },
  {
    id: 4,
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/myntra",
  },
];

//APPS
export const apps = [
  {
    id: 1,
    name: "Google Play",
    image: GooglePlay,
    link: "https://play.google.com/store/apps/details?id=com.myntra.android",
  },
  {
    id: 2,
    name: "App Store",
    image: AppStore,
    link: "https://itunes.apple.com/in/app/myntra-indias-fashion-store/id907394059",
  },
];

//Orignal, ReturnDays
export const originalReturn = [
  {
    id: 1,
    name: "<strong>100% ORIGINAL</strong> gurantee for all products at Mega Mart",
    image: Original,
  },
  {
    id: 2,
    name: "<strong>Return within 14days</strong> of receiving your order",
    image: ReturnDays,
  },
];
