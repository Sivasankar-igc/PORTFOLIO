import "../CSS/education.css";
import school from "../ICONS/school.png";
import university from "../ICONS/university.png";
import college from "../ICONS/college.png";

const Education = () => {
    return (
        <>
            <section className="education__wrapper" id="education">
                <header><span>MY</span><span>EDUCATION</span></header>
                <div id="education__box">
                    <div className="card">
                        <img src={school} />
                        <p>Matriculation</p>
                        <p>Vivekananda Shiksha Kendra</p>
                        <p>2018-2019</p>
                        <div className="more"><p>Passed 10th standard from Vivekananda Shiksha Kendra school with a score of 74.5%.</p></div>
                    </div>
                    <div className="card">
                        <img src={college} />
                        <p>12th Standard</p>
                        <p>Maharshi College of Natural Law</p>
                        <p>2019-2021</p>
                        <div className="more"><p>Passed 12th standard in science stream from MCNL college with a score of 78.83%.</p></div>
                    </div>
                    <div className="card">
                        <img src={university} />
                        <p>Bachelor Degree</p>
                        <p>Utkal University, Bhubaneswar</p>
                        <p>2021-2024(expected)</p>
                        <div className="more"><p>Pursuing BCA at Utkal University with an excellent academic record.</p></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Education;