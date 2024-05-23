import { _classes } from "../utilities/helpers";
import styles from "../styles/modules/Home.module.scss";
import HoursSection from "../components/HoursSection";
import Image from "next/image";
import fs from "fs";
import path from "path";
const cl = _classes(styles);

function Home(props) {
  const renderFaqs = () => (
    <div preset={"fadeup"} className={cl("faqs")}>
      <h1>FAQ</h1>
      <ol>
        {props?.page?.fieldgroup2?.map((item, index) => {
          return (
            <li key={index}>
              <h2 className={cl("question")}>{item.h1}</h2>
              <div
                className={cl("answer")}
                dangerouslySetInnerHTML={{ __html: item.h2 }}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
  return (
    <div className={cl("_")}>
      <div className={cl("hero")}>
        <Image
          src={props?.page?.fieldgroup1?.[0]?.image1}
          alt=""
          width={1300}
          height={850}
        />
      </div>

      <div className={cl("faqs__section")}>
        <div className={cl("container")}>{renderFaqs()}</div>
      </div>
      <div className={cl("hours__section")}>
        <HoursSection />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public/db.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const page = JSON.parse(jsonData).items[0]; // Adjust the path according to your JSON structure

  return {
    props: {
      page,
    },
  };
}

export default Home;
