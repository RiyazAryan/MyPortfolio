import { TypeAnimation } from 'react-type-animation';
import { TechIntroAnimation } from '../Components/TechIntroAnimation';

type HomeEntry = { Field: string; Value: string };

export function HomeSection() {
    const rawData = localStorage.getItem("details");
    const parsed = rawData ? JSON.parse(rawData) : [];
    const homeData:HomeEntry[] = parsed[0] || null;
    const home = Object.fromEntries(homeData.map(({ Field, Value }) => [Field, Value]));
    return(
        <div className="h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-black">
          <div className="md:w-1/2 text-center md:text-left space-y-4 pt-20 md:pt-0">
          <TechIntroAnimation/>
            <h2 className="text-xl md:text-[65px] font-bold text-right dark:text-slate-400">
                Full-stack <span className="text-amber-500">Developer</span> & <span className="text-amber-500">Data Engineer</span>
                </h2>
            <div className="h-10 md:h-0 text-sm md:text-lg text-gray-600 dark:text-gray-300 text-right">
              <TypeAnimation
                sequence={[
                  home["Description"],
                  5000,
                  "Skilled in MERN & Java Full Stack...",
                  3000,
                  "Deploying, scaling, automating...",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0 pt-4 md:pt-0">
          <div >
            <div className="md:pl-13">
            <img
                src="/images/Pic zoomin.png"
                alt="Shaik Riyaz Basha"
                className="w-62 h-62 rounded-full border-4 border-amber-500 shadow-lg shadow-amber-300 object-cover"
                />
            </div>
            <h1 className="pt-10 text-xl md:text-5xl font-bold text-gray-500 dark:text-slate-400 flex justify-center">
              {home["Name"]}
            </h1></div>
          </div>
        </div>
      );
    };
    