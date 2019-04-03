import React from 'react';
import { Spinner, Button } from 'reactstrap';

const SpinnerButton = ({ loading, children, ...rest }) => {
  return (
    <Button { ...rest }>
      {loading ? <Spinner /> : children}
    </Button>
  );
}

export default SpinnerButton;
