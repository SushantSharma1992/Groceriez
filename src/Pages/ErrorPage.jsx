import React from "react";
import { SavedData } from "../Utils/Constants";

export default function ErrorPage() {
  const clearCache = () => {
    localStorage.removeItem(SavedData.GROCERIES);
    document.location.href="/";
  };
  return (
    <div className="fullpage center">
      <div>
        <button type="button" onClick={clearCache}>
          Clear cache and Reload
        </button>
      </div>
    </div>
  );
}
