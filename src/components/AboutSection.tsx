const AboutSection = () => {
  return (
    <section className="py-16 text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Info</h3>
            <ul className="list-disc list-inside">
              <li>이름 : 변정민</li>
              <li>생년월일 : 1993.10.09</li>
              <li>이메일 : jeongmin4256@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Education & Certificates
            </h3>
            <ul className="list-disc list-inside">
              <li>유한대학교 졸업 (2017.02)</li>
              <li>
                웹 디자인 기능사 (HTML5, CSS3, JQ) 취득 및 실무 양성 (B) 과정
                수료 (2020.09 ~ 2021.01)
              </li>
              <li>정보처리기능사 자격증 취득중 (필기 합격) (2023.10)</li>
              <li>2종보통 운전면허증 취득 (2012.07)</li>
              <li>컴퓨터 활용능력 2급 취득 (2020.07)</li>
              <li>GTQ 그래픽 기술자격 1급 취득 (2020.12)</li>
              <li>웹 디자인 기능사 (2021.03)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Experience</h3>
            <ul className="list-disc list-inside">
              <li>(주)그린비지니스 웹디자이너 근무 (2021.03 ~ 2021.10)</li>
              <li>
                주식회사 에이피메타랩스 웹디자이너/퍼블리셔 근무 (2022.01 ~
                2023.05)
              </li>
              <li>
                제로베이스 프론트엔드 과정 부트캠프 수료 (2024.01 ~ 2024.10)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
