import Card from '../../Components/Cards/Card';

import Image1 from '../../assets/Articls/Custom.png'
import Image2 from '../../assets/Articls/Defining Web Application.jpg'
import Image3 from '../../assets/Articls/Prototyping & Design Testing.jpg'
import Image4 from '../../assets/Articls/Third Party Software Selections.jpg'
import Image5 from '../../assets/Articls/Web Application Structure.jpg'

const Title1 = "Custom Web App Integration";
const Title2 = "Defining Web Application";
const Title3 = "Web Application Structure";
const Title4 = "Research & UX Workflow";
const Title5 = "Third-Party Software Selections";

const Text1 = "We integrate disparate business systems and processes, add web service functionality to your existing applications, and synchronize data across those applications.";
const Text2 = "Whether you require a Web Development Solution developed from scratch, or a third-party integration to add to your existing app, Chetu can get the job done quickly, effectively, and affordably.";
const Text3 = "Our developers create a database architecture to effectively collect, store, retrieve, sort, and graph all of your data in your new integrated Custom Website or Application.";
const Text4 = "Our website developers dive deep into research and analysis to uncover the most effective strategies for improving user experiences across the board.";
const Text5 = "Our Custom Website Developers research and test the best state-of-the-art technologies, programming languages, and third-party vendors to integrate within your custom website or app.";

const items = () => {
   
  return (
    <div className='w-100 container d-flex flex-wrap justify-content-around my-5 pt-5 '>
        <Card IMG={Image1} title={Title1} text={Text1} />
        <Card IMG={Image2} title={Title2} text={Text2} />
        <Card IMG={Image3} title={Title3} text={Text3} />
        <Card IMG={Image4} title={Title4} text={Text4} />
        <Card IMG={Image5} title={Title5} text={Text5} />
        
    </div>
  )
}

export default items