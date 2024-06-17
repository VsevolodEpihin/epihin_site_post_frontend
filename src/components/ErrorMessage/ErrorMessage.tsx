import { errorMessage } from '../../errorMessage';

import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <>
      <div className={styles.containerError}>
        <div className={styles.error}>{`${errorMessage}, ошибка: ${error}`}</div>
      </div>
    </>
  );
};

export default ErrorMessage;
