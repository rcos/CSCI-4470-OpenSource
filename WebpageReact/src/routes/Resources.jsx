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
        <h1>Course Resources</h1>
        {resourceData.map(item =>{
          return(
            <>
              <button className='collapsible'onClick={collapse}>{item.title}</button>
              <div className='content'></div>
              <ul>
                {item.links.map(link =>{
                  return(
                    <li><a href={link.link}>{link.linkName}</a></li>
                  );
                })}
              </ul>
            </>
          )
        })}
      </>
      
    )
  }
  
export default Resources;