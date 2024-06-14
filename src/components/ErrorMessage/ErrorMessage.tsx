import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  error: string | null ;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <>
      <div className={styles.containerError}>
        <div className={styles.error}>{error}</div>
      </div>
    </>
  );
};

export default ErrorMessage;
