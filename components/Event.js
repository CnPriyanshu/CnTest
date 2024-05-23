import { _classes, parse } from "../utilities/helpers";
import styles from "../styles/modules/Event.module.scss";
import Image from "next/image";
import Link from "next/link";

const cl = _classes(styles);

export default function Event({ title, meme, content, cta, image, event }) {
  return (
    <section className={cl("_")}>
      <div>
        <div className={cl(["main_div", event])}>
          <div className={cl("section")}>
            <h1 className={cl("main__title")}>{title}</h1>
            <div
              className={cl("main__content")}
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {cta && (
              <Link href={parse(cta).link} className={cl("link")}>
                {parse(cta).text}
                <i className="fas fa-solid fa-arrow-right"></i>
              </Link>
            )}
          </div>
          <div className={cl("image_section")}>
            <Image
              type="element"
              alt=""
              src={image}
              className={cl("illustration")}
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
