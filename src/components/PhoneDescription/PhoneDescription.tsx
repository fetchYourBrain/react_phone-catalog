import styles from "./PhoneDescription.module.scss";

export const PhoneDescription = ({
  description,
  name,
  screen,
  resolution,
  processor,
  ram,
  capacity,
  camera,
  zoom,
  cell
}) => {
  const productDescription = description.map((section) => ({
    ...section,
    text: section.text.map((paragraph) =>
      paragraph.replace(/{productName}/g, name)
    ),
  }));

  return (
    <section className={styles.section}>
      <div className={styles.section_container}>
        <div className={styles.info}>
          <h3>About</h3>
          {productDescription.map((section) => (
            <div key={section.title} className={styles.about_block}>
              <h4>{section.title}</h4>
              {section.text.map((paragraph, i) => (
                <p key={`${section.title}-${i}`}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>

        <div className={styles.tech_specs}>
          <h3>Tech specs</h3>
          <table>
            <tbody>
              <tr>
                <td>Screen</td>
                <td>{screen}</td>
              </tr>
              <tr>
                <td>Resolution</td>
                <td>{resolution}</td>
              </tr>
              <tr>
                <td>Processor</td>
                <td>{processor}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td>Built-in memory</td>
                <td>{capacity}</td>
              </tr>
              <tr>
                <td>Camera</td>
                <td>{camera}</td>
              </tr>
              <tr>
                <td>Zoom</td>
                <td>{zoom}</td>
              </tr>
              <tr>
                <td>Cell</td>
                <td>{cell.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
