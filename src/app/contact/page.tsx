import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Become a Distributor",
  description:
    "Join the Baidehi network. Direct factory contact for wholesale inquiries, distribution partnerships, and bulk orders across Nepal.",
};

export default function Contact() {
  return <ContactClient />;
}
