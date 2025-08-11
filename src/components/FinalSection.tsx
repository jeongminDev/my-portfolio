import Footer from './Footer';
import MotionSection from './MotionSection';

const FinalSection = () => {
  return (
    <div className="bg-gradient-to-br from-gradient-start to-gradient-end relative">
      <MotionSection>
        <div className="flex flex-col items-center justify-center py-[30vh] gap-y-5">
          <div className="relative text-center mb-4">
            <h1 className="block lg:text-9xl text-6xl font-bold text-white opacity-70">
              Thank You
            </h1>
            <p className="w-full lg:text-5xl text-3xl font-bold absolute top-1/2 text-gray-600 opacity-70 z-10 leading-none">
              봐주셔서 감사합니다!
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-8 pb-12">
            <a
              href="/Resume_BYEON_JEONG_MIN.pdf"
              download
              className="text-white border border-white rounded-full px-6 py-2 text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-300"
            >
              이력서 및 자소서 다운로드
            </a>
            <a
              href="/Portfolio_BYEON_JEONG_MIN.pdf"
              download
              className="text-white border border-white rounded-full px-6 py-2 text-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-300"
            >
              포트폴리오 PDF용 다운로드
            </a>
          </div>
        </div>
      </MotionSection>
      <Footer />
    </div>
  );
};

export default FinalSection;
