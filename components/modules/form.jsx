import classes from './form.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function form() {
  return (
    <div className={classes.container}>
      <h3 className={classes.checkout}>CHECKOUT</h3>
      <Formik
        initialValues={{ name: '', email: '', phone: '' }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          phone: Yup.string()
            .min(10, 'Must be 10 numbers, including area code')
            .required('Required'),
          address: Yup.string().required('Required'),
          zipcode: Yup.string()
            .min(5, 'Must be 5 numbers')
            .max(5, 'Max 5 numbers')
            .required('Required'),
          city: Yup.string().required('Required'),
          country: Yup.string().required('Required'),
          moneynumber: Yup.string().required('Required'),
          moneypin: Yup.string().required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          {/*---------- BILLING DETAILS ----------- */}
          <h6 className={classes.sectionTitle}>Billing Details</h6>
          <div className={classes.grid}>
            <div className={classes.inputContainer}>
              <label htmlFor="name" className={classes.label}>
                Name
              </label>
              <Field
                className={classes.field}
                name="name"
                type="text"
                placeholder="Alexei Ward"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="name"
              />
            </div>

            <div className={classes.inputContainer}>
              <label htmlFor="email" className={classes.label}>
                Email Address
              </label>
              <Field
                className={classes.field}
                name="email"
                type="email"
                placeholder="alexei@mail.com"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="email"
              />
            </div>

            <div className={classes.inputContainer}>
              <label htmlFor="phone" className={classes.label}>
                Phone Number
              </label>
              <Field
                className={classes.field}
                name="phone"
                type="text"
                placeholder="202-555-0136"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="phone"
              />
            </div>
          </div>
          {/*---------- SHIPPING INFO ----------- */}
          <h6 className={classes.sectionTitle}>SHIPPING INFO</h6>
          <div className={classes.grid}>
            <div className={`${classes.inputContainer} ${classes.fullWidth}`}>
              <label htmlFor="address" className={classes.label}>
                Address
              </label>
              <Field
                className={classes.field}
                name="address"
                type="text"
                placeholder="1137 Williams Avenue"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="address"
              />
            </div>

            <div className={classes.inputContainer}>
              <label htmlFor="zipcode" className={classes.label}>
                ZIP Code
              </label>
              <Field
                className={classes.field}
                name="zipcode"
                type="text"
                placeholder="10001"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="zipcode"
              />
            </div>

            <div className={classes.inputContainer}>
              <label htmlFor="city" className={classes.label}>
                City
              </label>
              <Field
                className={classes.field}
                name="city"
                type="text"
                placeholder="New York"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="city"
              />
            </div>
            <div className={classes.inputContainer}>
              <label htmlFor="country" className={classes.label}>
                Country
              </label>
              <Field
                className={classes.field}
                name="country"
                type="text"
                placeholder="United States"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="country"
              />
            </div>
          </div>
          {/*---------- PAYMENT DETAILS ----------- */}
          <h6 className={classes.sectionTitle}>PAYMENT DETAILS</h6>
          <div className={classes.grid}>
            <p className={classes.label}>Payment method</p>

            <div
              className={classes.inputContainer}
              role="group"
              aria-labelledby="my-radio-group"
            >
              <label className={classes.payment__label}>
                <Field
                  className={classes.payment}
                  type="radio"
                  name="payment"
                  value="e-Money"
                />
                e-Money
              </label>
              <span></span>
              <label className={classes.payment__label}>
                <Field
                  className={classes.payment}
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                />
                Cash on Delivery
              </label>
            </div>

            <div className={classes.inputContainer}>
              <label htmlFor="moneynumber" className={classes.label}>
                e-Money Number
              </label>
              <Field
                className={classes.field}
                name="moneynumber"
                type="text"
                placeholder="238521993"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="moneynumber"
              />
            </div>

            <div className={classes.inputContainer}>
              <label htmlFor="moneypin" className={classes.label}>
                e-Money PIN
              </label>
              <Field
                className={classes.field}
                name="moneypin"
                type="text"
                placeholder="United States"
              />
              <ErrorMessage
                component="div"
                className={classes.error}
                name="moneypin"
              />
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
