import {useState} from 'react';

const useFcm = () => {
  const [loading, SetLoading] = useState(false);

  const getFcm = async (fcm: string, title: string, msg: string) => {
    SetLoading(true);
    fetch('https://weremind.co/api/fcm_token.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        msg: msg,
        token: fcm,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.message !== undefined) {
          SetLoading(false);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return {
    loading,
    getFcm,
  };
};

export default useFcm;
