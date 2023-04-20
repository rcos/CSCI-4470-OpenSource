import '../styles/ModuleStyle.css';
// json file containing links for each module
import moduleData from '../JSONfile/ModulesData.json';

function Modules () {
    /* when a button for the module is clicked, it should collapse
     * i.e. the height of the following content div should 
     * switch between 0 and its nonzero scrollHeight
     */
    const collapse = (event) =>{
        const content = event.currentTarget.nextElementSibling;
        content.style.maxHeight = (content.style.maxHeight) ? null : content.scrollHeight + "px";
    }
    // renders a button and a collapsible list of important
    // links/files for each module in moduleData using mapping
    return (
      <>
      <h3>Course Modules </h3>
      <p>Here are the modules for the course. Click on a module for links to important stuff
        like labs, slides, and exercises. 
      </p>
        <div class="scroll-container">
            {moduleData.map((item) =>{
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
        </div>
      </>
    )
}
  
export default Modules;