export function Purpose_Authors() {
    return (
        <div className="container">
            <div className="row justify-content-center my-4">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title text-center my-4">Purpose:</h1>
                        <p className="card-text text-justify lead mb-4">The purpose of this tool is to discern which tool is in a given image in order to assist industry workers.<br></br>
                            The tools our model can recognize are a screwdriver, hammer, combwrench and screwdriver.<br></br>
                            This is a project made for educational purposes and should not be used in a real life environment.</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="card">
                    <div className="card-body">
                        <h1 className="my-4 card-title text-center">Authors:</h1>
                        <div className="row">
                            <div className="col-4">
                                <h3 className="card-title text-center">Denzell Mgbokwere<br></br> UHasselt, master informatica</h3>
                                <img className="mx-2 my-4" src="denzell.png" style={{ maxWidth: '312px', maxHeight: '312px', minWidth: '312px', minHeight: '312px'}}></img>
                            </div>
                            <div className="col-4">
                                <h3 className="card-title text-center">Mathias Gielen<br></br> UHasselt, master informatica</h3>
                                <img className="mx-2 my-4" src="mathias.png" style={{ maxWidth: '312px', maxHeight: '312px', minWidth: '312px', minHeight: '312px'}}></img>
                            </div>
                            <div className="col-4">
                                <h3 className="card-title text-center">Gijs Konings<br></br> UHasselt, master informatica</h3>
                                <img className="mx-2 my-4" src="gijs.png" alt="Image of Gijs" style={{ maxWidth: '312px', maxHeight: '312px', minWidth: '312px', minHeight: '312px'}}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}