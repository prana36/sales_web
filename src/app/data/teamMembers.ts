/// <reference types="vite/client" />
import sanjayImg from "../assets/images/team/Sanjay-Singh.png";
import milliImg from "../assets/images/team/Milli-Juneja.png";
import sanskritaImg from "../assets/images/team/Sanskrita-Singh.png";
import lajooImg from "../assets/images/team/Lajoo-Charles.png";

export type TeamMember = {
  name: string;
  role: string;
  url: string;
  image: string | null;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Sanjay Singh",
    role: "Sales Coach",
    url: "https://www.linkedin.com/in/sanjay4sales/",
    image: sanjayImg,
  },
  {
    name: "Dhananjay Singh",
    role: "Consultant",
    url: "https://www.linkedin.com/in/dhananjay-singh-sales/",
    image: null,
  },
  {
    name: "Mili Juneja",
    role: "Consultant / Lead",
    url: "https://www.linkedin.com/in/milijuneja/",
    image: milliImg,
  },
  {
    name: "Alok Dubey",
    role: "Consultant",
    url: "",
    image: null,
  },
  {
    name: "Nripendra Singh",
    role: "Senior Consultant",
    url: "https://www.linkedin.com/in/nripendra-singh-sales/",
    image: null,
  },
  {
    name: "Lajoo Charles",
    role: "Senior Consultant",
    url: "https://www.linkedin.com/in/lajoo-charles/",
    image: lajooImg,
  },
  {
    name: "Faizaan Sayeed",
    role: "Sales Associate",
    url: "https://www.linkedin.com/in/faizaan-sayeed/",
    image: null,
  },
  {
    name: "Sanskrita Singh",
    role: "Co-Founder / Consultant",
    url: "",
    image: sanskritaImg,
  },
];

export function teamInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}