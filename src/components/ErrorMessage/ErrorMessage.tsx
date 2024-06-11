import React from 'react';

import styles from './ErrorMessage.module.css';

interface ErrorMessageProps {
  error: string | null ;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
  console.log(error);
  return (
    <>
      {error ?
        <div className={styles.containerError}>
          <div className={styles.error}>{error}</div>
        </div> :
        <div className={styles.containerError}>
          <div className={styles.error}>Post Not Found</div>
        </div>
      }
    </>
  );
};

export default ErrorMessage;
