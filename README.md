# 📊 Name Classifier API

A simple Node.js + Express API that predicts gender based on a given name using an external classification service. The API processes the response, adds confidence logic, and returns structured metadata.

---

## 🚀 Features

- Accepts a name via query parameter
- Fetches gender prediction from an external classify service
- Calculates confidence level based on probability and sample size
- Returns standardized JSON response
- Handles errors cleanly (400, 422, 404, 500)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- TypeScript
- Axios


---

## 📡 API Endpoint

### GET `/classify`

Classifies a name using an external prediction service.

---

## 🔎 Query Parameters

| Parameter | Type   | Required | Description      |
|----------|--------|----------|------------------|
| name     | string | Yes      | Name to classify |

---

## 📌 Example Request
GET http://localhost:5000/classify?name=john

---

## 📤 Success Response

```json
{
  "status": "success",
  "data": {
    "name": "john",
    "gender": "male",
    "probability": "0.93",
    "sample_size": 120,
    "is_confident": true,
    "processed_at": "2026-04-13T10:20:30.000Z"
  }
}
```
---

## ❌ Error Responses

### 400 — Missing Name

```json
{
  "status": "error",
  "message": "Name parameter is not found"
}

```
## 422 — Invalid Query Type

```json
{
  "status": "error",
  "message": "Query parameter cannot be processed"
}

```
## 404 — No Prediction Found

```json
{
  "status": "error",
  "message": "No prediction available for the provided name"
}

```

## 500 — Internal Server Error

```json
{
  "status": "error",
  "message": "Internal server error"
}
