export type userData = {
  fullname: string;
  email: string;
  country: string;
  profession: string;
  password: string;
  terms: boolean;
};

export type loginUserData = {
  email: string;
  password: string;
};

export type WeatherProps = {
  sys: {
    country: string;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  name: string;
};


