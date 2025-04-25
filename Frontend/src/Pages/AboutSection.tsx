import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = ['Experience', 'Education'];
type EduEntry = { Degree: string;
    Institution: string;
    'Start Date': string;
    'End Date': string;
    CGPA: string;
    Logo:string };

type Exp={
    Position: string;
    Company: string;
    Location: string;
    'Start Date': string;
    'End Date': string;
    'Project Summary': string;
    Logo:string
}

export function AboutSection() {
    const [activeTab, setActiveTab] = useState('Experience');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);

    const slideVariants = {
        initial: { x: '100%', opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: '-100%', opacity: 0 },
    };
    const rawData = localStorage.getItem("details");
    const parsed = rawData ? JSON.parse(rawData) : [];
    const edu:EduEntry[] = parsed[1] || null;
    const exp:Exp[] = parsed[2] || null;
    

    function handleNext() {
        setCurrentIndex((prev) => (prev + 1) % edu.length);
        };
    function handleNext2() {
        setCurrentIndex2((prev) => (prev + 1) % exp.length);
        };

    return (
        <div className="h-auto flex flex-col items-center justify-start p-6 bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-black">
        <p className="text-sm md:text-lg italic text-gray-600 dark:text-gray-400 mb-4">
            "From enterprise-grade automation to startup-scale innovation — I build systems that solve, scale, and sustain."
        </p>

        <div className="flex space-x-4 mb-4">
            {tabs.map((tab) => (
            <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-1 md:px-4 md:py-2 rounded-full transition ${
                activeTab === tab ? 'bg-amber-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
                }`}
            >
                {tab}
            </button>
            ))}
        </div>
        <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait">
            {activeTab === 'Experience' && (
                <motion.div
                key="experience"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-full md:flex md:justify-center "
                >
                {exp && exp.length > 0 ? (
                    <form className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow text-sm md:text-lg">
                        <div key={currentIndex2} className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                        <div className="flex justify-center">
                            <img src={exp[currentIndex2].Logo} alt="logo" className="w-auto h-10"></img>
                        </div>
                        <div className="md:flex md:justify-between">
                        <div className="md:p-4">
                        <h1 className="flex"><span className="font-bold pr-1">Position:</span> <p className="text-amber-500 font-bold"> {exp[currentIndex2].Position}</p></h1>
                        <h1 className="flex"><span className="font-bold pr-1">Company:</span><p className="text-amber-500 font-bold"> {exp[currentIndex2].Company}</p></h1>
                        <h1 className="flex"><span className="font-semibold pr-1">Location:</span> {exp[currentIndex2]['Location']}</h1>
                        <h1 className="flex"><span className="font-semibold pr-1">Duration:</span> {exp[currentIndex2]['Start Date']} – {exp[currentIndex2]['End Date']}</h1>
                        </div>
                        <div className="md:p-4">
                        <h1><span className="font-semibold pt-2">Summary:</span> <p className="p-2 pl-5 whitespace-pre-line">{exp[currentIndex2]['Project Summary']}</p></h1>
                        </div>
                        </div>
                        {exp.length > 1 && (
                            <div className="flex justify-end">
                            <button
                            onClick={handleNext2}
                            className="w-10 h-10 md:w-auto md:h-auto bg-amber-500 text-white px-4 py-2 rounded-md shadow hover:bg-amber-600 transition"
                            >
                    {">"}
                    </button>
                    </div>
        )}
                        </div>
                    
        </form>
                    ): (
                    <p className="text-gray-500 dark:text-gray-300">Loading Experience data...</p>)
                    }
                </motion.div>
            )}

            {activeTab === 'Education' && (
                <motion.div
                key="education"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="w-full md:flex md:justify-center "
                >
                    {edu && edu.length > 0 ? (
                        <form className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow text-sm md:text-lg">
                            <div key={currentIndex} className="bg-white dark:bg-gray-700 p-4 rounded shadow">
                            <div className="flex justify-center">
                                <img src={edu[currentIndex].Logo} alt="logo" className="w-auto h-10"></img>
                            </div>
                            <h1><span className="font-bold">Degree:</span> <p className="text-amber-500 font-bold"> {edu[currentIndex].Degree}</p></h1>
                            <h1><span className="font-bold">Institution:</span><p className="text-amber-500 font-bold"> {edu[currentIndex].Institution}</p></h1>
                            <h1><span className="font-semibold">Duration:</span> {edu[currentIndex]['Start Date']} – {edu[currentIndex]['End Date']}</h1>
                            <h1><span className="font-semibold">CGPA:</span> {edu[currentIndex].CGPA}</h1>
                            {edu.length > 1 && (
                        <div className="flex justify-end">
                            <button
                            onClick={handleNext}
                            className="w-10 h-10 md:w-auto md:h-auto bg-amber-500 text-white px-4 py-2 rounded-md shadow hover:bg-amber-600 transition"
                            >
                    {">"}
                    </button>
                    </div>
        )}
                            </div>
                 </form>
                    ): (
                    <p className="text-gray-500 dark:text-gray-300">Loading Education data...</p>)
                    }
                </motion.div>
            )}
            </AnimatePresence>
        </div>
        </div>
    );
}
