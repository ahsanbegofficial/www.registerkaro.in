import React, { FC } from 'react';
import styles from '../../assets/styles/components/Banner.module.css';

const Banner: FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.info}>
        <div>
          <h2>22+</h2>
          <p>Global Branches</p>
        </div>
        <div>
          <h2>20,000+</h2>
          <p>Successfully Served Clients</p>
        </div>
        <div>
          <h2>200+</h2>
          <p>Dedicated Employees</p>
        </div>
        <div>
          <h2>8</h2>
          <p>Years of Service Journey</p>
        </div>
      </section>
    </div>
  );
};

export default Banner;