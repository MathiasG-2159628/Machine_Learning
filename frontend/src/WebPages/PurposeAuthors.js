export function Purpose_Authors() {
    return (
        <div className="container-fluid">
            <div className="row">
                <h1>Purpose</h1>
                <p>The purpose of this tool is to discern which tool is in a given image. 
                    The tools our model can recognize are a screwdriver, hammer, combwrench and screwdriver.
                    This is a project made for educational purposes and should not be used in a real life environment. /</p>
            </div>
            <div className="row">
                <h2>Authors:</h2>
                <div className="col-4">
                    <h3>Denzell Mgbokwere, UHasselt master informatica</h3>
                    <img className="mx-2" src="denzell.png" style={{ maxWidth: '312px', maxHeight: '312px', minWidth: '312px', minHeight: '312px'}}></img>
                </div>
                <div className="col-4">
                    <h3>Mathias Gielen, UHasselt master informatica</h3>
                    <img className="mx-2" src="mathias.png" style={{ maxWidth: '312px', maxHeight: '312px', minWidth: '312px', minHeight: '312px'}}></img>
                </div>
                <div className="col-4">
                    <h3>Gijs Konings, UHasselt master informatica</h3>
                    <img className="mx-2" src="gijs.png" alt="Image of Gijs" style={{ maxWidth: '312px', maxHeight: '312px', minWidth: '312px', minHeight: '312px'}}></img>
                </div>
            </div>
        </div>
    );
}