import StyledListItem from './StyledListItem';
import { FaJs, FaReact, FaFigma, FaGithub, FaSlack } from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiStyledcomponents,
  SiFramer,
  SiTailwindcss,
  SiAxios,
  SiJest,
  SiTestinglibrary,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiNotion,
  SiMockserviceworker,
  SiSketch,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { BsClipboardCheck } from 'react-icons/bs';

const AboutSection = () => {
  return (
    <section className="py-16 text-black">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-base">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Info</h3>
            <ul>
              <StyledListItem>이름 : 변정민</StyledListItem>
              <StyledListItem>생년월일 : 1993.10.09</StyledListItem>
              <StyledListItem>이메일 : jeongmin4256@gmail.com</StyledListItem>
              <StyledListItem>
                유한대학교 기계설계과 졸업 (2017.02)
              </StyledListItem>
              <StyledListItem>
                웹 디자인 기능사 (HTML5, CSS3, JQ)
                <br />
                취득 및 실무 양성 (B) 과정 수료 (2020.09 ~ 2021.01)
              </StyledListItem>
              <StyledListItem>
                제로베이스 프론트엔드 과정 부트캠프 수료 (2024.01 ~ 2024.10)
              </StyledListItem>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Certificates & Experience
            </h3>
            <ul>
              <StyledListItem>2종보통 운전면허증 취득 (2012.07)</StyledListItem>
              <StyledListItem>
                컴퓨터 활용능력 2급 취득 (2020.07)
              </StyledListItem>
              <StyledListItem>
                GTQ 그래픽 기술자격 1급 취득 (2020.12)
              </StyledListItem>
              <StyledListItem>웹 디자인 기능사 (2021.03)</StyledListItem>
              <StyledListItem>
                정보처리기능사 자격증 취득 (2025.07)
              </StyledListItem>
              <li className="my-2">
                <hr />
              </li>
              <StyledListItem>
                (주)그린비지니스 웹디자이너 근무 (2021.03 ~ 2021.10)
              </StyledListItem>
              <StyledListItem>
                주식회사 에이피메타랩스 웹디자이너/퍼블리셔 근무 (2022.01 ~
                2023.05)
              </StyledListItem>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Skills & Tools</h3>
            <ul className="flex flex-wrap gap-4 cursor-default">
              <li>
                <ul>
                  <li className="flex items-center gap-2">
                    <FaJs className="text-[#F7DF1E]" /> JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <FaReact className="text-[#61DAFB]" /> React
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTypescript className="text-[#3178C6]" /> TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <SiNextdotjs className="text-[#000000]" /> NextJs
                  </li>
                  <li className="flex items-center gap-2">
                    <TbBrandReactNative className="text-[#61DAFB]" />{' '}
                    ReactNative
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="flex items-center gap-2">
                    <SiStyledcomponents className="text-[#DB7093]" />{' '}
                    styled-components
                  </li>
                  <li className="flex items-center gap-2">
                    <SiFramer className="text-[#0055FF]" /> framer-motion
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTailwindcss className="text-[#06B6D4]" /> Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <BsClipboardCheck /> Zustand
                  </li>
                  <li className="flex items-center gap-2">
                    <SiAxios className="text-[#5A29E4]" /> Axios
                  </li>
                  <li className="flex items-center gap-2">
                    <SiJest className="text-[#C21325]" /> Jest
                  </li>
                  <li className="flex items-center gap-2">
                    <SiTestinglibrary className="text-[#E33332]" /> React
                    Testing Library
                  </li>
                  <li className="flex items-center gap-2">
                    <SiMockserviceworker className="text-[#FF6A33]" /> Mock
                    Server Work
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li className="flex items-center gap-2">
                    <FaFigma className="text-[#F24E1E]" /> Figma
                  </li>
                  <li className="flex items-center gap-2">
                    <SiSketch className="text-[#F7B500]" /> Sketch
                  </li>
                  <li className="flex items-center gap-2">
                    <SiAdobeillustrator /> Illustrator
                  </li>
                  <li className="flex items-center gap-2">
                    <SiAdobephotoshop /> Photoshop
                  </li>
                  <li className="flex items-center gap-2">
                    <FaGithub className="text-[#181717]" /> github
                  </li>
                  <li className="flex items-center gap-2">
                    <SiNotion className="text-[#000000]" /> Notion
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSlack className="text-[#4A154B]" /> slack
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
