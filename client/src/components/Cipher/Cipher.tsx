// modules
import React from 'react';

// components/functions
import CipherInput from './CipherInput';
import DecodedCipher from './DecodedCipher';

const Cipher = () => {
  return (
    <div>
      <CipherInput />
      <DecodedCipher />
    </div>
  )
}

export default Cipher