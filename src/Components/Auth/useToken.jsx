import React, { useEffect, useState } from 'react';

const useToken = user => {
  const [token, setToken] = useState(' ');
  useEffect(() => {
    const email = user?.user?.email;
    const currentUser = { email: email }

    if (email) {
      fetch(`http://localhost:5000/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(currentUser)
      })
        .then(res => res.json())
        .then(data => {
          const myAccessToken = data?.token;
          setToken(myAccessToken);
          localStorage.setItem("accessToken", myAccessToken);

        })
    }


  }, [user])

  return [token]
};

export default useToken;