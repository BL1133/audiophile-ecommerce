import classes from './go-back.module.scss';
import { useRouter } from 'next/router';

export default function GoBack() {
  const router = useRouter();

  return (
    <button className={classes.button} onClick={() => router.back()}>
      Go Back
    </button>
  );
}
