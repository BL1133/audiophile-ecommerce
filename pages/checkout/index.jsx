import classes from './index.module.scss';
import GoBack from '../../components/elements/buttons/go-back';
import Summary from '../../components/modules/checkout-summary';

export default function Checkout() {
  return (
    <section className={classes.section}>
      <GoBack />
      <div className={classes.container}>
        <div className={classes.form}></div>
        <div className={classes.summary}>
          <Summary />
        </div>
      </div>
    </section>
  );
}
