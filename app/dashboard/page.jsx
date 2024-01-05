import Card from "../ui/dashboard/card/card";
import ChartPage from "../ui/dashboard/chart/chart";
import styles from "../ui/dashboard/dasboard.module.css";
import RightbarPage from "../ui/dashboard/rightbar/rightbar";
import TransactionPage from "../ui/dashboard/transactions/transcations";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <TransactionPage />
        <ChartPage />
      </div>
      <div className={styles.side}>
        <RightbarPage />
      </div>
    </div>
  );
};
export default Dashboard;
