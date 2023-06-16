import React from "react";
import '../styles/myJobs.css'
import { api } from "../../jobs";

const MyJobs = () => {
  return (
    <div>
      <div>
        {
          api.map((job) =>
            <section key={job.id}>
              <section>
                <h2>{job.nameProyect}</h2>
              </section>
              <section>
                <img src={job.image} alt="imagen del proyecto" />
              </section>
              <section>
                <p>{job.infoProyect}</p>
              </section>
              <section>
                <button>ojito</button>
                <button>github</button>
              </section>
            </section>
          )
        }
      </div>
    </div>
  );
}

export default MyJobs;
