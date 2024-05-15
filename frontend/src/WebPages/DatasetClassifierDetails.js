export function Dataset_ClassifierDetails() {
  return (
    <div>
      <h1>Dataset:</h1>
      <p>The dataset we have used consists of three parts: the first one being real images made by dr. prof. Gustavo achternaam and granted to us by the EDM. (200 images per tool, 800 images in total)
        The second part consists of AI generated which have also been provided by the EDM. (600 images per tool, 2400 images in total)
        The third and final part are images that we, the authors of this model, have generated using Bing Copilot (20 images per tool, 80 images in total)
      </p>
      <h1>Classifier:</h1>
      <p>
        The classifier we have used is a convolutional neural network (CNN) which has been trained on the dataset mentioned above. 
        The model has been trained using the Adam optimizer using a learning rate of 0.0001 and a categorical crossentropy loss function. 
        The architecture of the model consists of 3 convolutional layers, each consisting of respectively 16, 32 and 64 layers.
        Each of these convolutional layers is then subjected to a weight normalization layer.
        This is then followed up by a batch normalization layer and then a max pooling layer.
        After these convolutional layers, the model has a flatten layer and a dense layer with 386 nodes.
        Finally, we have an output layer with 4 nodes, one for each tool.
        Our amount of epochs is either 800 or our loss function does not achieve a minimum within 10 epochs.
        We have used batches of size 50, so we can fit more data in the graphical processing unit (GPU) memory.
      </p>
    </div>
  );
}