import {
  Lightbulb,
  Code2,
  Brain,
  BookOpen
} from "lucide-react";

const highlights = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Building efficient solutions through algorithms, data structures, and logical thinking."
  },
  {
     icon: Code2,
    title: "Web Development",
    description: "Building responsive and interactive web experiences with modern frontend technologies."
  },
  {
    icon: Brain,
    title: "AI & Technology",
    description: "Exploring artificial intelligence and applying computational concepts to real-world problems."
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Constantly learning new technologies and improving my programming and development skills."
  }
];



export const About=()=>{
 
    return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div>
        <div>
         {/*Left Column -text */}
          <div>
             <span>About Me</span>
          </div>
        </div>
      </div>

    </section>
    );


}