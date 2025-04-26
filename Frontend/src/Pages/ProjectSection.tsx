import { useState } from 'react';

type ProjEntry = {
  Title: string;
  'Tech Stack': string;
  Description: string;
  'GitHub Link': string;
  'Image URL': string;
  'Website': string;
};

export function ProjectsSection() {
  const rawData = localStorage.getItem('details');
  const parsed = rawData ? JSON.parse(rawData) : [];
  const fullProjects: ProjEntry[] = parsed[3] || [];

  const [search, setSearch] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const filtered = fullProjects.filter((proj) =>
    proj.Title.toLowerCase().includes(search.toLowerCase()) ||
    proj['Tech Stack'].toLowerCase().includes(search.toLowerCase())
  );

  const visible = filtered.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (startIndex + itemsPerPage < filtered.length) {
      setStartIndex((prev) => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prev) => prev - itemsPerPage);
    }
  };

  return (
    <div className="py-5 px-10 bg-white dark:bg-black text-black dark:text-white">
    <div className="flex justify-between">
      <h2 className="hidden md:block text-3xl font-bold mb-4">Projects</h2>

      <div className="flex justify-end w-80">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 5 30 20" strokeWidth="1.5" stroke="currentColor" className="mt-[10px] size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setStartIndex(0); 
        }}
        placeholder="Search by project name or tech stack"
        className="w-full p-2 mb-6 dark:bg-gray-800 dark:text-white"
      />
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visible.map((proj, idx) => (
          <div key={idx} className="flex flex-col md:flex-row justify-center bg-gray-100 dark:bg-gray-800 p-2 rounded shadow">
            <div className="md:pr-2">
            <img src={proj['Image URL']} alt={proj.Title} className="rounded mb-2 object-cover w-full h-40 md:h-40 md:w-40" />
            </div>
            <div>
            <a className="text-xl font-bold text-yellow-500" href={proj.Website}><h3>{proj.Title}</h3></a>
            <p className="text-sm text-gray-600 dark:text-gray-300">{proj.Description}</p>
            <p className="mt-2 h-10 text-sm font-mono text-red-600 line-clamp-2">{proj['Tech Stack']}</p>
            <div className="flex px-2 mt-3 space-x-3">
              <a href={proj['GitHub Link']} target="_blank" rel="noreferrer" className="text-blue-500 underline"><img className="h-7 w-7" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
              {proj.Website && (
                <a href={proj.Website} target="_blank" rel="noreferrer" className="text-green-500 underline"><img className="h-7 w-7" src="https://i.pinimg.com/736x/fd/71/cc/fd71cc920df96dfb498587b177d3c658.jpg"></img></a>
              )}
            </div>
            </div>
          </div>
        ))}
      </div>
      {filtered.length > itemsPerPage && (
        <div className="flex justify-center items-center mt-6 gap-4">
          <button onClick={handlePrev} disabled={startIndex === 0} className="bg-yellow-500 px-4 py-2 rounded disabled:opacity-30">
            &lt;
          </button>
          <button onClick={handleNext} disabled={startIndex + itemsPerPage >= filtered.length} className="bg-yellow-500 px-4 py-2 rounded disabled:opacity-30">
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
