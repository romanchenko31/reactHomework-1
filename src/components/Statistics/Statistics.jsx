import PropTypes from "prop-types";
import style from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className={style.title}>
        {title}
      </h2>
      <ul className={style.statList}>
          {stats.map((value) => {
            return (<li key={value.id} className="item">
              <span className={style.label}>{value.label}</span>
              <span className="percentage">{value.percentage}%</span>
            </li>);   
          })}   
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title:PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
};

export default Statistics;