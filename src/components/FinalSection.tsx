import Footer from './Footer';
import MotionSection from './MotionSection';

const FinalSection = () => {
  return (
    <div className="bg-gradient-to-br from-gradient-start to-gradient-end relative">
      <MotionSection>
        <div className="relative text-center py-[40vh] mb-4">
          <h1 className="block lg:text-9xl text-6xl font-bold text-white opacity-70">
            Thank You
          </h1>
          <p className="w-full lg:text-5xl text-3xl font-bold absolute top-1/2 text-gray-600 opacity-70 z-10 leading-none">
            봐주셔서 감사합니다!
          </p>
        </div>
      </MotionSection>
      <Footer />
    </div>
  );
};

export default FinalSection;
