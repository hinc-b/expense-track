/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDNiLRKDCT-fyq4l3fYnV9O7j4rLKVRMGs",
  authDomain: "expense-track-2137.firebaseapp.com",
  projectId: "expense-track-2137",
  storageBucket: "expense-track-2137.appspot.com",
  messagingSenderId: "612647407779",
  appId: "1:612647407779:web:dbd1da0dd1489f491bef16",
  measurementId: "G-PXPTRCQTY8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)