# 📮 Pincode Lookup App

A responsive React application to search Indian pincodes and retrieve details of post offices using the [India Post API](https://api.postalpincode.in/). Users can also filter post offices in real-time by name. Designed with Bootstrap and built for performance, error handling, and user experience.

## 🚀 Project Overview

This app allows users to:
- Enter a **6-digit Indian pincode**.
- Click a **"Lookup" button** to fetch details of that pincode.
- View a list of **Post Offices** including:
  - Post Office Name
  - Pincode
  - District
  - State
- **Filter** post offices by name in real time.
- See a **custom loader** while data is being fetched.
- Receive clear **error messages** for invalid inputs, API failures, or empty filter results.

> 🔗 [Figma UI Design Reference](https://www.figma.com/file/3cNCfMB8eiGezRAkt7T91s/Contest-3)

## 🎯 Features

- 📮 Lookup any **6-digit Indian Postal Code**
- 🏤 Display **Post Office** details dynamically
- 🔎 Real-time filtering by **Post Office name**
- 🔄 Custom loader while fetching API
- ❌ Input validation & error handling:
  - Invalid pincode (non-6-digit)
  - API response error
  - No post office match on filtering

## 🧰 Tech Stack

- **Frontend**: React
- **Styling**: Bootstrap 5, Custom CSS
- **API**: [India Post Pincode API](https://api.postalpincode.in)

## 🖼️ UI Preview

> *(Add screenshots here when available)*  
> Homepage | Pincode Results | Error States | Loader

## 🏗️ Project Structure

src/ ├── FilteredPinCode.jsx # Displays the filtered list of post offices 
     ├── Form.jsx # Handles pincode input, API call, and UI state 
  ├── App.jsx # Main app rendering structure 
  ├── main.jsx 
