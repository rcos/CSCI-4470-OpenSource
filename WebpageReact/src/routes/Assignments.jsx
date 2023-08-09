import AnalysisHW from '../JSONfile/AnalysisHW.json';
import TermProject from '../JSONfile/TermProject.json';
import '../styles/Assignments.css';

function Assignment () {
    /* when a button for the module is clicked, it should collapse
     * i.e. the height of the following content div should 
     * switch between 0 and its nonzero scrollHeight
     */
    const collapse = (event) =>{
        const content = event.currentTarget.nextElementSibling;
        content.style.maxHeight = (content.style.maxHeight) ? null : content.scrollHeight + "px";
    }
    return (
      <>
        <div className='AnalysisHW'>
            <button className='collapsible'onClick={collapse}>Analysis Homework</button>
            <div className='content'>
                <ul>
                    {AnalysisHW.map(item => {
                        return(
                          <li><a href={item.link}>{item.title}</a></li>
                        );
                    })}
                </ul>
            </div>
        </div>

        <div className='TermWork'>
            <button className='collapsible'onClick={collapse}>Term Project</button>
            <div className='content'>
                <ul>
                    {TermProject.map(item => {
                        return(
                          <li><a href={item.link}>{item.title}</a></li>
                        );
                    })}
                </ul>
            </div>
        </div>
      </>
    )
}
  
export default Assignment;