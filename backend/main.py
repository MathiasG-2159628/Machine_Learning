from fastapi import FastAPI, HTTPException
import pandas as pd
from keras import models
import cv2
from pydantic import BaseModel
class Image(BaseModel):
    data: str


from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"],
                   allow_credentials=True, allow_methods=["*"], allow_headers=["*"])

@app.post("/")
def read_root(img: Image):
    image = cv2.imread(img.data)
    image_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    image_normalized = image_gray #cv2.normalize(image_gray, None, 0, 1, cv2.NORM_MINMAX)
    image_resized = cv2.resize(image_normalized, (512, 512))

    labels = {'screwdriver': 0, 'combwrench': 1, 'hammer': 2, 'wrench': 3}
    model = models.load_model('./model.keras')
    model.Model.predict(image_resized)
    print("Model loaded")
    return "HALLO"