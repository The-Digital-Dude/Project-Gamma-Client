import React from "react";
import Headline from "../Headline/Headline";
import { siteConfig } from "@/config/site";
import { Button } from "../ui-elements/Button/Button";
import ContactMini from "../ContactMini/ContactMini";
import "./ServiceHero.scss";

type Props = {
  mainText: string;
  boldText?: string;
  highlightText?: string;
  description: string;
};

export default function ServiceHero({
  mainText,
  highlightText,
  boldText,
  description,
}: Props) {
  return (
    <div className="service__hero">
      <div>
        <p className="sub-heading">{siteConfig.name} Residential</p>
        <Headline
          mainText={mainText}
          boldText={boldText ? boldText : ""}
          highlightText={highlightText ? highlightText : ""}
        />
        <div className="description">
          <p>{description}</p>
        </div>
        <Button variant="default" href="/contact">
          Reach Out To Us
        </Button>
      </div>
      <ContactMini />
    </div>
  );
}
