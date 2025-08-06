import Footer from './Footer';

const FinalSection = () => {
  return (
    <div className="bg-gradient-to-br from-gradient-start to-gradient-end relative">
      <div className="mb-4 relative text-center py-[40vh]">
        <h1 className="block text-9xl font-bold text-white opacity-70">
          Thank You
        </h1>
        <p className="w-full text-5xl font-bold absolute top-1/2 text-gray-600 opacity-70 z-10 leading-none">
          봐주셔서 감사합니다!
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default FinalSection;
