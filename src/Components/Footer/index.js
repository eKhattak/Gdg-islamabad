import React from "react";
import Divider from "@material-ui/core/Divider";
import classes from "./index.module.scss";
import { ReactComponent as Twitter } from "../../assets/twitter-brands.svg";
import { ReactComponent as Facebook } from "../../assets/fb.svg";
import { ReactComponent as Instagram } from "../../assets/insta.svg";
import { ReactComponent as Meetup } from "../../assets/meetup.svg";

const index = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.links}>
        <h4>Follow Us:</h4>
        <a target="_blank" href="https://www.facebook.com/GDGIslamabad/">
          <Facebook className={classes.icon} />
        </a>
        <a target="_blank" href="https://twitter.com/GDG_Islamabad/">
          <Twitter className={classes.icon} />
        </a>
        <a
          target="_blank"
          href="https://instagram.com/gdgislamabad?igshid=1avqytdgejagy"
        >
          <Instagram className={classes.icon} />
        </a>
        <a target="_blank" href="https://www.meetup.com/GDGIslamabad">
          <Meetup className={classes.icon} />
        </a>
      </div>
      <Divider />
      <div className={classes.footer_nav}>
        <h2 className={classes.footer_hero}>GDG Islamabad</h2>
        <a href="https://docs.google.com/document/d/1VPCF2_Affn4cp_nC5WA_rkUZrVmhqs9vGlre0tXtpXU/edit#heading=h.5mbzjti148z7">
          Code of Conduct
        </a>
        <p>Terms & Services</p>
        <p>Community Guidlines</p>
      </div>
    </footer>
  );
};

export default index;
