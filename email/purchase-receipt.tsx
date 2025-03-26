import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { formatCurrency } from "@/lib/utils";
import { Order } from "@/types";
import sampleData from "@/db/sample-data";

type OrderInformationProps = {
  order: Order;
};
import dotenv from 'dotenv';
dotenv.config();

const dateFormatter = new Intl.DateTimeFormat("en", { dateStyle: "medium" });

export default function PurchaseReceiptEmail({ order }: { order: Order }) {
  return <Html></Html>;
}
