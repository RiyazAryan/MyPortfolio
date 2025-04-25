import { useState } from 'react';

type HomeEntry = { Field: string; Value: string };

export function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const Zapier =import.meta.env.VITE_Zapier
    const rawData = localStorage.getItem("details");
    const parsed = rawData ? JSON.parse(rawData) : [];
    const homeData:HomeEntry[] = parsed[0] || null;
    const home = Object.fromEntries(homeData.map(({ Field, Value }) => [Field, Value]));
    console.log(home)

    function handleChange(e:any){ 
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    async function handleSubmit(){
        try {
            await fetch(Zapier, {
                method: 'POST',
                body: new URLSearchParams(formData as any),
            });
        setSubmitted(true);
        console.log("Tested")
        } catch (err) {
        console.error('Submission error', err);
        }
    };

    return (
        <section className="py-12 px-6 bg-white dark:bg-black text-black dark:text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>

        {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow text-sm md:text-lg">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
                className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                required
                className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            />
            <textarea
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-2 rounded border dark:bg-gray-800 dark:text-white"
            />
            <button
                type="submit"
                className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600"
            >
                Send Message
            </button>
            </form>
        ) : (
            <p className="text-center text-green-600 font-semibold mt-4">Thanks! I’ll get back to you soon.</p>
        )}

        <div className="flex justify-center mt-10 text-center space-x-10">
            <a href={`mailto:${home.Gmail}`} className="text-blue-500 underline"><img className="h-7 w-7" src="https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/02/tech-guide_header-image-gmail.webp"></img></a>
            <a href={`${home.GitHub}`} target="_blank" rel="noreferrer" className="text-blue-500 underline"><img className="h-7 w-7" src="https://www.techcentral.ie/wp-content/uploads/2019/11/GitHub-Mark-560x520.png"></img></a>
            <a href={`${home.LinkedIn}`} target="_blank" rel="noreferrer" className="text-blue-500 underline"><img className="h-7 w-7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"></img></a>
            <a href={`${home.Leetcode}`} target="_blank" rel="noreferrer" className="text-blue-500 underline"><img className="h-7 w-7" src="https://image.pngaaa.com/427/6749427-middle.png"></img></a>
            <a href={`${home.ResumeLink}`} target="_blank" rel="noreferrer" className="text-blue-500 underline"><img className="h-7 w-7" src="https://icons.veryicon.com/png/o/miscellaneous/blue-whale-collar/my-resume.png"></img></a>
        </div>
        </section>
    );
}
