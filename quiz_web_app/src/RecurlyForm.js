import React, { useState } from 'react';

import {
  CardElement,
  Elements,
  RecurlyProvider,
  useRecurly
} from '@recurly/react-recurly';

const handleBlur = () => console.log('[blur]');
const handleChange = change => console.log('[change]', change);
const handleFocus = () => console.log('[focus]');
const handleReady = () => console.log('[ready]');

export function CardElementDemo (props) {
  const [fontSize, setFontSize] = useState('18');

  

  return (
    <div className="DemoSection">
      <RecurlyProvider publicKey={process.env.REACT_APP_RECURLY_PUBLIC_KEY}>
        <Elements>
          <CardForm fontSize={`18px`} />
        </Elements>
      </RecurlyProvider>
    </div>
  );
}

function CardForm (props) {
  const { fontSize } = props;
  const recurly = useRecurly();
  const formRef = React.useRef();

  const handleSubmit = event => {
    if (event.preventDefault) event.preventDefault();
    recurly.token(formRef.current, (err, token) => {
      if (err) console.log('[error]', err);
      else console.log('[token]', token);
    });
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <input
          data-recurly="first_name"
          placeholder="First Name"
          defaultValue="John"
        />
        <input
          data-recurly="last_name"
          placeholder="Last Name"
          defaultValue="Smith"
        />
      </div>
      <CardElement
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        onReady={handleReady}
        onSubmit={handleSubmit}
        style={{ fontSize }}
      />
      <div>
        <button>Pay</button>
      </div>
    </form>
  );
}
