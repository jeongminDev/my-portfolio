import { motion } from 'framer-motion';
import Image from 'next/image';
import Card from './Card';
import ProjectCard from './ProjectCard';
import { ReactNode } from 'react';

type GridItemProps = {
  children: ReactNode;
  gridArea: string;
  delay?: number;
};

const GridItem = ({ children, gridArea, delay = 0 }: GridItemProps) => {
  const itemVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
        delay,
      },
    },
  };

  return (
    <motion.div style={{ gridArea }} variants={itemVariants}>
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  return (
    <div className="lg:fixed inset-0 bg-gradient-to-br from-gradient-start to-gradient-end w-full">
      <div className="flex flex-col lg:h-full lg:items-center lg:justify-center space-y-2 xl:space-y-6 pt-20 lg:pt-0">
        <motion.section
          className="flex flex-col items-center justify-center p-4 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hidden mb-4 relative text-center 3xl:block">
            <h1 className="block text-9xl font-bold text-white stroke-0 opacity-70">
              Front-End
            </h1>
            <p className="w-full text-[2rem] font-medium absolute top-1/2 text-gray-600 opacity-70 z-10 leading-none">
              프론트엔드 개발자{' '}
              <span className="text-[2.5rem] font-bold">변정민</span> 입니다.
            </p>
          </div>
          <div className="relative flex flex-col gap-4 lg:grid lg:grid-cols-7 lg:grid-rows-3 w-full max-w-7xl mx-auto p-4 lg:h-auto">
            <div className="lg:col-start-3 lg:col-span-3 lg:row-span-2 order-1 lg:order-none">
              <GridItem gridArea="" delay={0}>
                <Card className="flex items-center justify-center h-full">
                  <video
                    src="/mainCover_video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                </Card>
              </GridItem>
            </div>

            <div className="lg:col-start-1 lg:col-span-2 lg:row-start-2 lg:row-span-2 order-2 lg:order-none">
              <GridItem gridArea="" delay={0.1}>
                <Card>
                  <div className="flex flex-col items-center text-center h-full justify-center p-4">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-lighter">
                      <Image
                        src="/JeongMin_photo.jpg"
                        alt="Id_Photo"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-bold text-text-primary">
                      Frontend Developer
                    </h2>
                    <h3 className="text-xl font-bold text-text-primary">
                      변 정 민
                    </h3>
                    <div className="mt-2 text-sm text-text-primary/70">
                      <p>jeongmin4256@gmail.com</p>
                    </div>
                  </div>
                </Card>
              </GridItem>
            </div>

            <div className="lg:col-start-3 lg:col-span-3 lg:row-start-3 order-3 lg:order-none">
              <GridItem gridArea="" delay={0.2}>
                <Card>
                  <div className="flex justify-center flex-col h-full p-4">
                    <h3 className="font-bold text-lg mb-2 text-text-primary">
                      Career
                    </h3>
                    <ul className="space-y-1 text-text-primary/80 text-sm">
                      <li>
                        2022.01 ~ 2023.05 - 주식회사 에이피메타랩스
                        웹디자이너/퍼블리셔 근무
                      </li>
                      <li>
                        2021.03 ~ 2021.10 - (주)그린비지니스 웹디자이너 근무
                      </li>
                    </ul>
                  </div>
                </Card>
              </GridItem>
            </div>

            <div className="lg:col-start-6 lg:col-span-2 lg:row-start-1 lg:row-span-3 order-4 lg:order-none">
              <GridItem gridArea="" delay={0.3}>
                <Card className="bg-opacity-50 h-full">
                  <div className="flex justify-center flex-col h-full p-4 gap-4 transition bg-custom-bg hover:bg-custom-bg/50">
                    <h3 className="font-bold text-lg mb-2 text-text-primary">
                      Projects
                    </h3>
                    <ul className="flex flex-col gap-1 space-y-1 text-black text-base font-light">
                      <ProjectCard
                        name="Animal Map(가제)"
                        date="2025. 07 ~ 진행중"
                        notionUrl="https://jm-front.notion.site/Animal-Map-1e3fcc0bc00b80e7a567c390a3da0548"
                        githubUrl="https://github.com/jeongminDev/animal-map-app"
                        webUrl="#"
                      />
                      <ProjectCard
                        name="Doodle Play"
                        date="2024. 10 ~ 2025. 01"
                        notionUrl="https://jm-front.notion.site/Doodle-Play-1c2fcc0bc00b806085fae7886a9a2b63?pvs=4"
                        githubUrl="https://github.com/DoodlePlay/Frontend"
                        webUrl="https://www.doodleplay.xyz/"
                        figmaUrl="https://www.figma.com/design/1ZCji1TU18PFMzwbLtL32j/Two-Meet's-team-library?node-id=2317-191&t=3ET9eArK5Bbqwqah-1"
                      />
                      <ProjectCard
                        name="Training Diary(트.다)"
                        date="2024. 06 ~ 2024. 08"
                        notionUrl="https://jm-front.notion.site/1c2fcc0bc00b80c784b3cf77f272b641"
                        githubUrl="https://github.com/TrainingDiary"
                        webUrl="https://www.doodleplay.xyz/"
                      />
                      <ProjectCard
                        name="WheelTalk"
                        date="2024.05 ~ 2024.07"
                        notionUrl="https://jm-front.notion.site/Pre-WheelTalk-8ec5b7d85eda464da007dbabcda792ea?pvs=74"
                        githubUrl="https://github.com/jeongminDev/WheelTalk"
                        webUrl="https://wheeltalkproject.web.app/"
                      />
                    </ul>
                  </div>
                </Card>
              </GridItem>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default HeroSection;
