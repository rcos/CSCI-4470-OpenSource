import '../styles/ModuleStyle.css';
import resourceData from '../JSONfile/ResourcesData.json';

function Resources () {
  const collapse = (event) =>{
    const content = event.currentTarget.nextElementSibling;
    content.style.maxHeight = (content.style.maxHeight) ? null : content.scrollHeight + "px";
  }
  // renders collapsible list of course resources
    return (
      <>
        <h3>Course Resources</h3>
        <p>Below are some resources provided to help you succeed in this course.
          Check this page if you need reference on past projects, a how-to guide,
          or a practice test.
        </p>
        {resourceData.map(item =>{
          return(
            <>
              <button className='collapsible'onClick={collapse}>{item.title}</button>
              <div className='content'>
              <ul>
                {item.links.map(link =>{
                  return(
                    <li><a href={link.link}>{link.linkName}</a></li>
                  );
                })}
              </ul>
              </div>
            </>
          )
        })}
      </>
      
    )
  }
  
export default Resources;