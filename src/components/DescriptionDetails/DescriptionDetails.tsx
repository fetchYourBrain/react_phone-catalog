import { useAppSelector } from "../../hooks/helperToolkit";
import styles from "./DescriptionDetails.module.scss";

export const DescriptionDetails = () => {
  const deviceById = useAppSelector((state) => state.device.deviceById);

  const productDescription =
    deviceById?.description.map((section) => ({
      ...section,
      text: section.text.map((paragraph) =>
        paragraph.replace(/{productName}/g, deviceById?.name)
      ),
    })) || [];

  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.info}>
          <h3 className={styles.section_title}>About</h3>
          {productDescription.map((section) => (
            <div key={section.title} className={styles.about_block}>
              <h4 className={styles.paragraph_title}>{section.title}</h4>
              {section.text.map((paragraph, i) => (
                <p
                  key={`${section.title}-${i}`}
                  className={styles.text_description}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.tech_specs}>
          <h3 className={styles.section_title}>Tech specs</h3>
          <table>
            <tbody>
              <tr>
                <td>Screen</td>
                <td>{deviceById?.screen}</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>{deviceById?.resolution}</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>{deviceById?.processor}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{deviceById?.ram}</td>
              </tr>
              <tr>
                <td>Built-in memory</td>
                <td>{deviceById?.capacity}</td>
              </tr>
              <tr>
                <td>Camera</td>
                <td>{deviceById?.camera}</td>
              </tr>
              <tr>
                <td>Zoom</td>
                <td>{deviceById?.zoom}</td>
              </tr>
              <tr>
                <td>Cell</td>
                <td>{deviceById?.cell.join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
