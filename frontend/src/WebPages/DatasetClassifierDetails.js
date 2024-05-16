export function Dataset_ClassifierDetails() {
  return (
    <div className="container">
      <div className="row justify-content-center my-4">
          <div className="card">
              <div className="card-body">
                  <h1 className="card-title text-center my-4">Dataset:</h1>
                  <p className="card-text text-justify lead mb-4">The dataset we have used consists of three parts: the first one being real images made by Prof. dr. Gustavo Alberto (Gustavo) Rovelo Ruiz and granted to us by the EDM. (50 images per tool, 4x rotated, 800 images in total)<br></br>
                    The second part consists of AI generated which have also been provided by the EDM. (600 images per tool, 2400 images in total)<br></br>
                    The third and final part are images that we, the authors of this model, have generated using Bing Copilot (20 images per tool, 4x rotated, 320 images in total)<br></br></p>
              </div>
          </div>
      </div>
      <div className="row justify-content-center my-4">
          <div className="card">
              <div className="card-body">
                  <h1 className="card-title text-center my-4">Classifier:</h1>
                  <p className="card-text text-justify lead mb-4">The classifier we have used is a convolutional neural network (CNN) which has been trained on the dataset mentioned above.<br></br>
                    The model has been trained using the Adam optimizer using a learning rate of 0.001 and a categorical crossentropy loss function.<br></br>
                    The architecture of the model consists of 3 convolutional layers, each consisting of respectively 32, 64 and 64 layers.<br></br>
                    Each of these convolutional layers is then subjected to a weight normalization layer.<br></br>
                    This is then followed up by a batch normalization layer and then a max pooling layer.<br></br>
                    After these convolutional layers, the model has a flatten layer and a dense layer with 386 nodes.<br></br>
                    This dense layer is then followed by a dropout layer with a dropout rate of 0.2.<br></br>
                    Finally, we have an output layer with 4 nodes, one for each tool.<br></br>
                    Our amount of epochs is either 800 or our loss function does not achieve a minimum within 10 epochs.<br></br>
                    We have used batches of size 50, so we can fit more data in the graphical processing unit (GPU) memory.</p>
                    <img className="mx-4 mt-4" src="CNN.png" alt="Image of model"></img>
              </div>
          </div>
      </div>
    </div>
  );
}