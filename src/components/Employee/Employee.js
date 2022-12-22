import profile_photo from '../../assets/images/profile-photo.png';
import check from '../../assets/icons/check.svg';
import styles from './Employee.module.css';

function Employee() {
  return (
    <div className={styles.profile}>
      <div className={styles.background} />
      <img src={profile_photo} className={styles.profile_photo} alt="" />
      <div className={styles.name}>
        Артур Гаврилов
        <div>
          <img src={check} className={styles.check} alt="" />
        </div>
      </div>
      <div className={styles.company}>Работает в компании Premier Tips</div>
      <div className={styles.caption}>Собираю на новый Genesis G90!</div>
    </div>
  );
}
export { Employee };
