import classes from './index.module.scss';
import GoBack from '../../components/elements/buttons/go-back';
import Summary from '../../components/modules/checkout-summary';
import Form from '../../components/modules/form';
import OrderConfirmation from '../../components/modules/order-confirmation';

export default function Checkout() {
  return (
    <section className={classes.section}>
      <GoBack />
      <div className={classes.container}>
        <div className={classes.form}>
          <Form />
        </div>
        <div className={classes.summary}>
          <Summary />
          <OrderConfirmation />
        </div>
      </div>
    </section>
  );
}
