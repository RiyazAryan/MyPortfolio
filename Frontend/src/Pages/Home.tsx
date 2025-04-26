import { useEffect } from 'react'
import axios  from 'axios'
import { alldetails } from '../store/atom/atom'
import { FadeInSection } from '../Components/FadeInSection';
import { CombinedData } from '../types'
import { useSetRecoilState } from 'recoil'
import { Element } from 'react-scroll';
import { Navbar } from '../Components/Navbar'
import { HomeSection } from './HomeSection'
import { AboutSection } from './AboutSection'
import { ContactSection } from './ContactSection'
import { ProjectsSection } from './ProjectSection'
import { SkillSection } from './SkillsSection';


export function Home(){
    const SHEET_TABS = {
        home: 'Home',
        projects: 'Projects',
        skills: 'Skills',
        certifications: 'Certifications',
        experience:'Experience',
        education:'Education'
      };
    
    const BASE_URL= import.meta.env.VITE_BASE_URL
    const setUid=useSetRecoilState<CombinedData>(alldetails)
    useEffect(() => {
        const fetchData = async () => {
            const [homeRes, educationRes, experienceRes, projRes, skillRes, certRes] = await Promise.all([
            axios.get(`${BASE_URL}/${SHEET_TABS.home}`),
            axios.get(`${BASE_URL}/${SHEET_TABS.education}`),
            axios.get(`${BASE_URL}/${SHEET_TABS.experience}`),
            axios.get(`${BASE_URL}/${SHEET_TABS.projects}`),
            axios.get(`${BASE_URL}/${SHEET_TABS.skills}`),
            axios.get(`${BASE_URL}/${SHEET_TABS.certifications}`)
            ]);
            setUid([
            homeRes.data,
            educationRes.data,
            experienceRes.data,
            projRes.data,
            skillRes.data,
            certRes.data
            ]);
        };
        fetchData();
        }, []);
    return(
      <div className="min-h-fill bg-white dark:bg-black text-black dark:text-white overflow:hidden">
      <Navbar />
      <FadeInSection>
      <Element name="home" className="h-fill"> <HomeSection /> </Element>
      </FadeInSection>
      <FadeInSection>
      <Element name="about" className="h-fill"> <AboutSection /> </Element>
      </FadeInSection>
      <FadeInSection>
      <Element name="projects" className="h-fill"> <ProjectsSection /> </Element>
      </FadeInSection>
      <FadeInSection>
      <Element name="skills" className="h-fill"> <SkillSection /> </Element>
      </FadeInSection>
      <FadeInSection>
      <Element name="contact" className="h-fill"> <ContactSection /> </Element>
      </FadeInSection>
      <div className="flex justify-center p-10">
                <div className="text-[#4F4f4F] pr-2">
                  Made by
                </div>
                <div className="font-semibold">
                  Riyaz Basha
                </div>
                <img src="icons/Riyaz.ico" alt="icon" className="w- h-5 mr-2"></img>
      </div>
      </div>
    )
}
