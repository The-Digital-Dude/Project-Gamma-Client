import styles from "./ComparisonTable.module.scss";
import { FiCheck, FiX } from "react-icons/fi";

const ComparisonTable = () => {
  return (
    <div className={styles.comparisonContainer}>
      <h2 className={styles.heading}>
        How Does Our Integrated Service Compare?
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Features</th>
            <th>The Rentalease Service</th>
            <th>Individual Tradies &amp; Contractors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Low, Transparent Rates</td>
            <td className={styles.check}>
              <FiCheck />
            </td>
            <td>Varies</td>
          </tr>
          <tr>
            <td>Seamless Technology Solution</td>
            <td className={styles.check}>
              <FiCheck />
            </td>
            <td className={styles.cross}>
              <FiX />
            </td>
          </tr>
          <tr>
            <td>Active Tenant Management</td>
            <td className={styles.check}>
              <FiCheck />
            </td>
            <td className={styles.cross}>
              <FiX />
            </td>
          </tr>
          <tr>
            <td>Common Repairs Included (batteries)</td>
            <td className={styles.check}>
              <FiCheck />
            </td>
            <td>Often Extra</td>
          </tr>
          <tr>
            <td>Free Quotes for Repairs</td>
            <td className={styles.check}>
              <FiCheck />
            </td>
            <td>Varies</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
