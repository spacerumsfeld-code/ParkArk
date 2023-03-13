export const Index = () => {
  return <div>Hello World</div>;
};

export default Index;

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};
