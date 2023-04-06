import '../styles/Footer.css';
import '../styles/ModuleStyle.css'
import data from '../JSONfile/ModulesData.json';

function Modules () {
    const collapse = (event) =>{
        const content = event.currentTarget.nextElementSibling;
        content.style.maxHeight = (content.style.maxHeight) ? null : content.scrollHeight + "px";
    }
    return (
      <>
      {data.map(item =>{
        return(
        <>
            <button className='collapsible'onClick={collapse}>{item.title}</button>
            <div className='content'>
                <ul>
                    {item.links.map(link => {
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
  
export default Modules;