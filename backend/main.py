from fastapi import FastAPI, HTTPException
from keras.models import Sequential
from keras.layers import Conv2D, MaxPool2D, Flatten, Dense, Dropout, Lambda, BatchNormalization
from tensorflow_addons.layers import WeightNormalization
from keras import models
import tensorflow as tf
import cv2
from pydantic import BaseModel
import base64
import numpy as np

class Image(BaseModel):
    data: str


from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"],
                   allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.post("/")
def read_root(img: Image):
    height = 384
    width = 384
    img_data = img.data

    if img_data.startswith('data:image/png;base64,'):
        img_data = img_data.replace('data:image/png;base64,', '')

    if img_data.startswith('data:image/jpeg;base64,'):
        img_data = img_data.replace('data:image/jpeg;base64,', '')

    if img_data.startswith('data:image/jpg;base64,'):
        img_data = img_data.replace('data:image/jpg;base64,', '')
    
    image_data = base64.b64decode(img_data)
   # Convert the bytes to a NumPy array
    numpy_array = np.frombuffer(image_data, np.uint8)
    
    # Decode the image
    image = cv2.imdecode(numpy_array, cv2.IMREAD_COLOR)
    image_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    image_resized = cv2.resize(image_gray, (width, height))
    image_normalized = cv2.normalize(image_resized, None, 0, 1.0, cv2.NORM_MINMAX, dtype=cv2.CV_32F)

    model = Sequential()
    model.add(Lambda(lambda x: tf.cast(x, tf.float32), input_shape=(height, width, 1)))

    model.add(WeightNormalization(Conv2D(32, (3, 3), padding='same', activation='relu', input_shape=(height, width, 1))))
    model.add(BatchNormalization())
    model.add(MaxPool2D(pool_size=(2, 2)))
    # model.add(Dropout(0.2))

    model.add(WeightNormalization(Conv2D(64, (3, 3), padding='same', activation='relu')))
    model.add(BatchNormalization())
    model.add(MaxPool2D(pool_size=(2, 2)))
    # model.add(Dropout(0.2))

    model.add(WeightNormalization(Conv2D(64, (3, 3), padding='same', activation='relu')))
    model.add(BatchNormalization())
    model.add(MaxPool2D(pool_size=(2, 2)))
    # model.add(Dropout(0.2))



    model.add(Flatten())
    model.add(Dense(384, activation='relu'))
    model.add(Dropout(0.2))

    #model.add(Dense(128, activation='relu'))
    # model.add(Dropout(0.2))



    model.add(Dense(4, activation = "softmax"))


    # model = models.load_model('./model.h5')
    model.load_weights('./model_9_weights.h5')
    
    prediction = model.predict(image_normalized.reshape(1, width, height, 1))

    print(prediction)
    #prediction = model.predict(image_normalized)
    prediction_dict = {
    'screwdriver': float(prediction[0][0]),
    'combwrench': float(prediction[0][1]),
    'hammer': float(prediction[0][2]),
    'wrench': float(prediction[0][3])
    }

    return prediction_dict