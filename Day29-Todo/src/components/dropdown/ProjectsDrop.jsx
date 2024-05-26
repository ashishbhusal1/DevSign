function ProjectsDrop ({ projects, selected }) {
    return (
        <>
            <div className="projectmenu">
                <ul>
                    {
                        projects.map (project => {
                            return (<li key={project.id} onClick={() => selected(project)}>{project.title}</li>)
                        })
                    }
                </ul>
            </div>
            <div className="overlay"></div>
        </>
    );
}

export default ProjectsDrop;