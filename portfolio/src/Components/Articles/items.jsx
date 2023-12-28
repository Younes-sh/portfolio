import Card from '../../Components/Cards/Card';

import Image1 from '../../assets/Articls/Custom.png'
import Image2 from '../../assets/Articls/De.png'
import Image3 from '../../assets/Articls/Pr.png'
import Image4 from '../../assets/Articls/Third Party Software Selections.png'
import Image5 from '../../assets/Articls/Web Application Structure.png'

const Title1 = "Custom Web App Integration";
const Title2 = "Defining Web Application";
const Title3 = "Web Application Structure";
const Title4 = "Research & UX Workflow";
const Title5 = "Third-Party Software Selections";

const Text1 = "I integrate disparate systems and business processes, add web service functionality to your existing applications, and synchronize data across those applications.";
const Text2 = "Whether you require a Web Development Solution developed from scratch, or a third-party integration to add to your existing app, I can get the job done quickly, effectively, and affordably.";
const Text3 = "I will design your site using new methods. You will also get support in the shortest possible time";
const Text4 = "I integrate your site with other technologies.";
const Text5 = "Create a dynamic single page site using up-to-date technology such as React.js.";

const items = () => {
   
  return (
    <div className='w-100 container d-flex flex-wrap justify-content-around my-5 pt-5   '>
      <Card  IMG={Image1} title={Title1}  />
      <Card  IMG={Image2} title={Title2}  />
      <Card  IMG={Image3} title={Title3}  />
      <Card  IMG={Image4} title={Title4}  />
      <Card  IMG={Image5} title={Title5}  />
    </div>
  )
}

export default items