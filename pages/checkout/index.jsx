import classes from './index.module.scss';
import GoBack from '../../components/elements/buttons/go-back';

export default function Checkout() {
  return (
    <section className={classes.section}>
      <GoBack />
      <div className={classes.container}>
        <div className={classes.form}></div>
        <div className={classes.summary}></div>
      </div>
    </section>
  );
}
