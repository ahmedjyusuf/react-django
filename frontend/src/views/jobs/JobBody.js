const JobBody = ({jobs}) => {
    return (
        <div>
            {jobs.map(job => {return <h1>{job.title}</h1>})}
        </div>
    )
}

export default JobBody
