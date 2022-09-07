import "./intro.css"
import me from "../../img/me.png"
import githubNormallogo from '../../img/githubNormal.png'
import githubMouseOverLogo from '../../img/gitHubMouseOver.png'
import linkedinNormalLogo from '../../img/linkedinNormal.png'
import linkedinMouseOver from '../../img/linkedinMouseOver.png'
import gmail from '../../img/gmail.png'
import gmailMouseOver from '../../img/gmailMouseOver.png'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">hello, my name is</h2> 
                    <h1 className="i-name">Matthieu</h1>   
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Student</div>
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Problem Solver</div>
                            <div className="i-title-item">Self Starter</div>
                            <div className="i-title-item">Data Scientist</div>
                        </div>
                    </div>
                    <p className="i-desc">
                        I currently study at the University of Edinburgh on the 5 year integrated masters in Informatics course (mInf).
                    </p>            
                    <div className="links">
                    <a href = "https://github.com/matth1eumartin">
                        <img src={githubNormallogo} width="50px" height="50px" alt='github link' 
                        onMouseOver={e => e.currentTarget.src=githubMouseOverLogo}
                        onMouseOut={e => e.currentTarget.src=githubNormallogo}
                        className = 'link'></img>
                    </a>

                    <a href = "https://www.linkedin.com/in/matthieu-martin-/">
                        <img src={linkedinNormalLogo} width="50px" height="50px" alt='linkedin link' 
                        onMouseOver={e => e.currentTarget.src=linkedinMouseOver}
                        onMouseOut={e => e.currentTarget.src=linkedinNormalLogo}
                        className = 'link'></img>
                    </a>

                    <a href = "mailto:matthieum2003@gmail.com">
                        <img src={gmail} width="50px" height="50px" alt='mailto gmail link' 
                        onMouseOver={e => e.currentTarget.src=gmailMouseOver}
                        onMouseOut={e => e.currentTarget.src=gmail}
                        className ='link'></img>
                    </a>
                </div>
                </div>
            </div>
            
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro