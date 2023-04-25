import { faChartColumn } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";

const PageInfo = [
  {
    navItems: [
      {
        name: "Home",
        to: "/",
      },
      {
        name: "Studio",
        to: "#about",
      },
      {
        name: "Works",
        to: "#works",
      },
      {
        name: "Contact",
        to: "#contact",
      },
    ],
    bannerInfo: [
      {
        title: "Think. Make. Solve.",
        subtitle: "What We Do",
        desciption:
          "We enjoy creating user-friendly and outstanding digital design and platforms",
      },
    ],
    aboutText: [
      {
        title: "Think outside the space",
        subtitle: "Who We Are",
        desciption:
          "We are a creative group of designers and developers with a passion for the future arts and designs.",
      },
    ],
    workItems: [
      {
        id: 1,
        title: "Web Development",
        itemImg: faCode,
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: 2,
        title: "Graphic Design",
        itemImg: faPaintBrush,
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: 3,
        title: "Product Design",
        itemImg: faNetworkWired,
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: 4,
        title: "Digital Marketing",
        itemImg: faChartColumn,
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
      {
        id: 5,
        title: "Social Media",
        itemImg: faUserGroup,
        desciption:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
  },
];

export default PageInfo;
