import React, { useEffect, useState } from 'react';

const Cuda = () => {
  const [contents, setContents] = useState('Lol');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/.netlify/functions/hello')
      .then((data) => data.json())
      .then((resp) => {
        setContents(resp);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      { isLoading ? (
        <h4>
          Loading...
        </h4>
      ) : (
        <h4>
          {` ${contents.msg} `}
        </h4>
      ) }
    </div>
  );
};

export default Cuda;
