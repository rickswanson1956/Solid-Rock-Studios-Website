// ============================================================
//  Firebase configuration for Solid Rock Studios
//  ------------------------------------------------------------
//  These values are PUBLIC by design — they identify your
//  Firebase project in website code. Security is enforced by
//  Firebase rules + the authorized-domain + email allowlist,
//  NOT by hiding these values.
//
//  Replace the placeholders below with the firebaseConfig block
//  from your Firebase project (Project settings → Your apps → Web).
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyBI7dUON719IN4REH9L3ZiHHCnju3SLs-k",
  authDomain: "solid-rock-studios-art.firebaseapp.com",
  projectId: "solid-rock-studios-art",
  storageBucket: "solid-rock-studios-art.firebasestorage.app",
  messagingSenderId: "688929514579",
  appId: "1:688929514579:web:a47c592caccfaa2def52a6",
  measurementId: "G-WRY9QMYRE6"
};

// Only these Google accounts may publish to the gallery.
// (Also enforced server-side by Firestore + Storage security rules.)
export const ALLOWED_EMAILS = [
  "rickswanson1956@gmail.com",
  "parks.phone@gmail.com"
];
