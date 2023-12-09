import { Oval } from 'react-loader-spinner';

export const Loader = () => (
  <Oval
    height={80}
    width={80}
    color="#4fa94d"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: '4 auto',
    }}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#4fa94d"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
);
