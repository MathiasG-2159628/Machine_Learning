export function Dataset_ClassifierDetails() {
  return (
    <div className="container">
      <div className="row justify-content-center my-4">
          <div className="card">
              <div className="card-body">
                  <h1 className="card-title text-center my-4">Dataset:</h1>
                  <p className="card-text text-justify lead mb-4">The dataset we have used consists of three parts: the first one being real images made by Prof. dr. Gustavo Alberto (Gustavo) Rovelo Ruiz and granted to us by the EDM. <br></br>
                    <i>± 50 images per tool, 4x rotated, 800 images in total.</i><br></br><br></br>
                      The second part consists of AI generated which have also been provided by the EDM.<br></br>
                    <i>600 images per tool, 2400 images in total.</i><br></br><br></br>
                    The third and final part are images that we, the authors of this model, have generated using Bing Copilot.<br></br>
                    <i>20 images per tool, 4x rotated, 320 images in total.</i><br></br><br></br>
                    <b>The total amount of distinct images in the dataset results to 3528.</b><br></br><br></br>
                    These images have been labeled with the correct tool, so the model can learn to recognize the tools.<br></br>
                    Our process for augmenting the dataset involves converting images to grayscale to simplify data by removing unnecessary color dimensions. <br></br> 
                    Followed by resizing to 384x384 to standardize input size for easier training and memory management. <br></br>
                    Finally, we apply a salt and pepper function to enhance the model's resilience to noisy images, improving its ability to recognize objects across a range of image clarities. This is then followed by a normalization function. <br></br>
                    We ensure that the pixel values are specifically normalized between 0 and 1 using a min-max normalization method because this prevents the domination of certain features and mitigates the effect of outliers in the training process. <br></br> <br></br>
                    The dataset has been split into a training set and a validation set, with 80% of the images being used for training and 20% for validation.<br></br>
                    
                    </p>
              </div>
          </div>
      </div>
      <div className="row justify-content-center my-4">
          <div className="card">
              <div className="card-body">
                  <h1 className="card-title text-center my-4">Classifier:</h1>
                  <p className="card-text text-justify lead mb-4">The classifier we have used is a convolutional neural network (CNN) which has been trained on the dataset mentioned above.<br></br>
                    The model has been trained using the Adam optimizer using a learning rate of 0.001 and a categorical crossentropy loss function.<br></br>
                    The architecture of the model consists of 3 convolutional layers, each consisting of respectively 32, 64 and 64 filters.<br></br>
                    These layers progressively detect geometric features, from basic shapes to specific tool parts, through hierarchical decomposition. <br></br>
                    Each of these convolutional layers is then subjected to a weight normalization layer.<br></br>
                    This is then followed up by a batch normalization layer. <br></br>
                    These are applied to speed up training, prevent overfitting, and maintain consistent activations. <br></br>
                    The activation function used in these layers is the rectified linear unit (ReLU).<br></br>
                    Pooling layers follow each convolutional layer to reduce the spatial dimensions of the input.<br></br>
                    Subsequently, the model has a flatten layer and a dense layer with 386 nodes.<br></br>
                    This dense layer is then followed by a dropout layer with a dropout rate of 0.2 to improve generalization.<br></br>
                    Finally, we have an output layer with 4 nodes, one for each tool of our classification.<br></br> <br></br>
                    We cap our training at a maximum of 800 epochs. However, we've integrated an early stopping mechanism that halts training if the loss function doesn't improve within 10 epochs.<br></br>
                    This strategy optimizes training time and prevents unnecessary computation. <br></br>
                    To efficiently utilize our graphical processing unit (GPU) memory, we've chosen batch sizes of 50.<br></br>
                    This allows us to accommodate more data per training iteration, enhancing computational efficiency during model training.
                    </p>
                    
                    <img className="mx-4 mt-4" src="CNN.png" alt="Image of model"></img>
              </div>
          </div>
      </div>
    </div>
  );
}