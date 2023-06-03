import React from 'react'

const Backend = () => {
  return (
    <div className="skills-content">
        <h3 className="skills-title">Backend developer</h3>
        <div className="skills-box">
            <div className="skills-group">
                <div className="skills-data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills-name">PHP</h3>
                    <span className="skills-level">Basic</span>
                </div>
                </div>

                <div className="skills-data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills-name">NodeJs</h3>
                    <span className="skills-level">Basic</span>
                </div>
                </div>
            </div>
            <div className="skills-group">
                <div className="skills-data">
                <i class='bx bx-badge-check' ></i>

                <div>
                    <h3 className="skills-name">SQL/MySql</h3>
                    <span className="skills-level">Basic</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend