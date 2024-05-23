import { useState, useEffect } from "react";
import { _classes } from "../utilities/helpers";
import Image from "next/image";
import Intro from "../components/Intro";
import styles from "../styles/pages/About.module.scss";
import Event from "../components/Event";
const cl = _classes(styles);

function AboutUs() {
  const [pageData, setPageData] = useState();
  const [eventPageData, setEventPageData] = useState();

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("../db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }

        return response.json();
      })
      .then((json) => {
        setPageData(json.items[1]);
        setEventPageData(json.items);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (!pageData) {
    return <p>No Data</p>;
  }

  return (
    <div className={cl("_")}>
      <div className={cl("hero")}>
        <Image
          src={pageData.fieldgroup1[0].image1}
          alt=""
          width={1300}
          height={850}
        />
      </div>

      <div id="about">
        <Intro
          title={pageData.h2 || "This is the intro title"}
          meme={pageData.h3 || "Meme Text Here"}
          content={pageData.blurb1 || "This is the intro content"}
          cta={pageData.buttonlink1}
        />
      </div>
      <div id="about">
        <Event
          title={"PLAN YOUR EVENT "}
          meme={pageData.h3 || "Meme Text Here"}
          content={
            "<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. <br/>  <br/>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  "
          }
          cta={eventPageData[0].buttonlink1}
          image={eventPageData[1].fieldgroup2[0].image1}
          event={"event1"}
        />
      </div>
      <div id="about">
        <Event
          title={"EAT. DRINK. "}
          meme={pageData.h3 || "Meme Text Here"}
          content={
            "<br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in. <br/>  <br/>Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  "
          }
          cta={eventPageData[1].fieldgroup2[1].buttonlink1}
          image={eventPageData[1].fieldgroup1[1].image1}
          event={"event2"}
        />
      </div>
    </div>
  );
}

export default AboutUs;
