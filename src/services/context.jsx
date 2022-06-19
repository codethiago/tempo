import { API } from "./api";
import { createContext, useContext, useMemo } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const search = async (name) => {
    const response = await API.get(name);
    return response;
  };

  const value = useMemo(() => ({
    search,
  }));
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
