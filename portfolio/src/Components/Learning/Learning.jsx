import {Row,Col} from 'react-bootstrap';
import Zohal from '../../assets/SVG/giphy.svg';
import './style.css'
const Learning = () => {
  return (
    <div className='w-100 h-auto px-4'>
      <Row>
        <Col className='m-auto' lg={6}>
          <h1 className='text-center Capsmall' >Learning</h1>
          <img className='w-100' src="https://user-images.githubusercontent.com/74038190/212748842-9fcbad5b-6173-4175-8a61-521f3dbb7514.gif" alt="" />
          {/* <img className='w-100' src="https://user-images.githubusercontent.com/74038190/264141683-8aa99f6c-267d-4977-9cd3-1a4c11675863.gif" alt="" /> */}
        </Col>
      </Row>
      <Row>
            <Col style={{textAlign:''}} className='order-2 order-lg-1 mt-5 mt-lg-0 ' lg={8}>
              <h2 className='text-start treeD' >React Navtive</h2>
              <br />

              <h1 className='text-start mt-lg-3'>Embracing Mobile App Development with React Native</h1>
              <h4 className='text-start mt-lg-5 pt-5 pt-lg-1 '>Introduction</h4>
              <p  className="text-start   ">As a passionate and aspiring mobile app developer, I've recently embarked on a thrilling journey into the world of mobile application development. My interest in this dynamic field has led me to explore the exciting possibilities that mobile apps offer, and I'm eager to share my progress and learning experiences.</p>

              <h4 className='text-start mt-lg-5'>Discovering React Native:</h4>
              <p className='text-start'>One of the most significant milestones on my path to becoming a mobile app developer is my introduction to React Native. I've recently started my journey with this powerful framework, and I'm already captivated by its potential. React Native allows me to craft mobile applications for both iOS and Android platforms, all while utilizing a single codebase written in JavaScript and React.</p>

              <h4 className='text-start mt-lg-5'>Why React Native:</h4>
              <p className='text-start'>What intrigues me about React Native is its ability to bridge the gap between web and native app development. The framework leverages JavaScript and React, technologies I've been fond of, to create applications that exhibit native-like performance. The idea of writing code once and deploying it across different platforms is not only efficient but also opens up a world of possibilities for innovation.</p>

              <h4 className='text-start mt-lg-5'>My Learning Path:</h4>
              <p className='text-start'>While I'm at the beginning of my journey with React Native, I'm committed to deepening my knowledge and honing my skills in this field. I'm currently exploring the fundamental concepts of React Native, understanding its architecture, and diving into building small-scale mobile applications to apply what I've learned.</p>

              <h4 className='text-start mt-lg-5'>Passion for Mobile Apps:</h4>
              <p className='text-start'>What excites me the most about mobile app development is the potential to create solutions that make people's lives more convenient, enjoyable, or efficient. Whether it's crafting an elegant user interface or solving real-world problems through intuitive mobile applications, I'm driven by the endless possibilities this field offers.</p>

              <h4 className='text-start mt-lg-5'>Future Endeavors:</h4>
              <p className='text-start'>I'm eager to continue my journey in mobile app development, expand my knowledge of React Native, and work on projects that showcase my skills and creativity. As I progress, I aim to contribute to the growing world of mobile apps and, ultimately, create apps that leave a positive impact on users.</p>

              <h4 className='text-start mt-lg-5'>Conclusion</h4>
              <p className='text-start'>My portfolio is a testament to my budding interest in mobile app development and my commitment to learning and growth. Stay tuned for updates as I embark on exciting projects, share my learning experiences, and evolve as a mobile app developer with a focus on React Native.</p>

            </Col>
            <Col className='order-1 order-lg-2' lg={4}>
              <img style={{width:'100%'}} src="https://i.pinimg.com/564x/bb/78/c3/bb78c3d3ff0ff11487237880dcaa7960.jpg" alt="React native" />
              <img className='d-xs-none d-sm-none d-md-none  d-xm d-lg-inline' style={{width:'100%'}} src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*C3kxjCrJy-aWSMpe2chfaA.png" alt="" />
              <img src="" alt="" />
            </Col>
      </Row>
      <Row>
            <Col lg={4}>

            </Col>
            <Col lg={8}>

            </Col>
      </Row>
    </div>
  )
}

export default Learning