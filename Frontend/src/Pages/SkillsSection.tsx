import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  Category: string;
  Skill: string;
}

export function SkillSection() {
  const rawData = localStorage.getItem('details');
  const parsed = rawData ? JSON.parse(rawData) : [];
  const skillList: Skill[] = parsed[4] || [];

  const grouped = skillList.reduce<Record<string, string[]>>((acc, item) => {
    if (!acc[item.Category]) acc[item.Category] = [];
    acc[item.Category].push(item.Skill);
    return acc;
  }, {});

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex justify-center py-12 px-6 bg-white dark:bg-black text-black dark:text-white">
      <h2 className="text-sm md:text-3xl font-bold mb-6 text-center">  </h2>

      <div className="flex justify-center flex-col md:flex-row md:flex-wrap md:px-10 gap-5 md:gap-30 relative h-80%">
        {Object.entries(grouped).map(([category, skills], index) => (
          <div
            key={index}
            className="relative rounded-full shadow-lg hover:shadow-amber-300"
            onMouseEnter={() => setHovered(category)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.div
              className="w-fill flex justify-center bg-yellow-500 text-white text-sm md:text-lg p-4 md:px-10 md:py-10 rounded-full cursor-pointer transition"
              whileHover={{ scale: 1.1}}
            >
              {category}
            </motion.div>

            <AnimatePresence>
              {hovered === category && (
                <motion.div
                  className="absolute inset-8 z-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {skills.map((skill, idx) => {
                    const angle = (360 / skills.length) * idx;
                    const x = 90 * Math.cos((angle * Math.PI) / 180);
                    const y = 90 * Math.sin((angle * Math.PI) / 180);

                    return (
                      <motion.div
                        key={idx}
                        className="absolute px-3 py-2 bg-gray-800 text-white text-sm rounded-full shadow"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, x, y }}
                        exit={{ scale: 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {skill}
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
