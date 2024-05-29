import React from 'react'
import { Link } from 'react-router-dom';
import Ulogo from '../../assets/Ulogo.png';
import './resources.css'
import { Navbar } from '../../components';
import health from '../../assets/health.jpg'
import info from '../../assets/info.avif'
const resources = () => {
  return (
  <>
   <div className="card-section">
<div className="res-header">
  <p >Helpful Information and Resources</p>
  <p id='res-head-p2' >At your disposal</p>
  </div>
<div className="res-intro">
  <div className='resintro-sub'>
    <b>Overview</b><br/>
  In recent years, there has been increasing acknowledgement of the important role mental health plays in achieving global development goals, as illustrated by the inclusion of mental health in the Sustainable Development Goals. Depression is one of the leading causes of disability. Suicide is the fourth leading cause of death among 15-29-year-olds. People with severe mental health conditions die prematurely – as much as two decades early – due to preventable physical conditions.

Despite progress in some countries, people with mental health conditions often experience severe human rights violations, discrimination, and stigma.

Many mental health conditions can be effectively treated at relatively low cost, yet the gap between people needing care and those with access to care remains substantial. Effective treatment coverage remains extremely low.

Increased investment is required on all fronts: for mental health awareness to increase understanding and reduce stigma; for efforts to increase access to quality mental health care and effective treatments; and for research to identify new treatments and improve existing treatments for all mental disorders. In 2019, WHO launched the <a id='intro-a' href='https://apps.who.int/iris/handle/10665/310981'> WHO Special Initiative for Mental Health (2019-2023): Universal Health Coverage for Mental Health</a> to ensure access to quality and affordable care for mental health conditions in 12 priority countries to 100 million more people.

In 2022, WHO launched the World Mental Health Report: <a id='intro-a' href='https://www.who.int/publications-detail-redirect/9789240049338'>Transforming Mental health for All.</a> </div></div>
{/* total-card section starts here */}
<div className="res-card-whole">
  {/* fullcard starts here */}
<div className='res-fullcard'>
  <div className="res-image1">
  <img src={health}  alt='health-topics'/>
  </div>
  <div className="health-text">
  <h3 id='health-h3'>Health topics</h3><br/>
    <p>Welcome to our 'Hot Topics' section, where you can delve into important mental health subjects and expand your knowledge. We've curated a collection of topics that are crucial for understanding and addressing mental health concerns. Each topic provides valuable insights,
       practical tips, and resources to support your mental well-being.


This section is designed to empower you with knowledge and resources to navigate the complexities of mental health. Click on the topics above to access in-depth information and practical guidance. Remember, learning about mental health is a journey, and we are here to support you every step of the way."</p>
  </div>
</div>

<div className='res-fullcard'>
  <div className="res-image1">
  <img src={info}  alt='health-topics'/>
  </div>
  <div className="health-text">
  <h3 id='health-h3'>Information materials</h3><br/>
    <p>

</p>Welcome to our Information Materials section, where you can access a variety of resources to expand your understanding of mental health. We have curated a collection of informative materials to provide you with valuable insights, guidance, and support.

Brochures: Delve into our collection of brochures that cover a wide range of mental health topics. These concise and informative documents provide an overview of different mental health conditions, symptoms, treatment options, and practical tips for managing mental well-being.

Fact Sheets: Our fact sheets offer in-depth information on specific mental health issues. These detailed resources provide a deeper understanding of various conditions, including their causes, risk factors, prevalence, and evidence-based interventions. Fact sheets are an excellent resource for those seeking in-depth knowledge on specific mental health topics.

Pamphlets: Discover our collection of pamphlets that present key mental health concepts in a concise and visually appealing format. These engaging materials cover a range of topics, including self-care practices, coping strategies, and information on available support resources.

Leaflets: Our leaflets offer a comprehensive overview of mental health-related subjects. These informative materials delve into specific issues, such as stress management, anxiety reduction techniques, and how to support a loved one experiencing mental health challenges.

We believe that access to accurate and reliable information is crucial for promoting mental well-being. Click on the materials above to explore and expand your knowledge on various mental health topics.

Remember, knowledge is power, and we are committed to providing you with the resources you need to navigate your mental health journey.
  </div>
</div>

<div className='res-fullcard'>
  <div className="res-image1">
  <img src={health}  alt='health-topics'/>
  </div>
  <div className="health-text">
  <h3 id='health-h3'>Emrgency help line</h3><br/>
    <p> In this section, we provide valuable resources and helpline information to support your mental health and well-being. Whether you or someone you know is in need of immediate assistance, seeking professional guidance, or 
      looking for support networks, you'll find helpful contacts and services listed
      Remember, seeking help is a sign of strength, and you don't have to face difficult times alone. Reach out to these helplines for immediate assistance or guidance, and they will provide the necessary support and connect you with additional resources.
       </p>
      
  </div>
</div>

{/* fullcard ends here */}



</div>
{/* total-card ends here */}
</div>
   
  
  </>
  )
}

export default resources