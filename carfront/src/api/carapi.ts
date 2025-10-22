// api/carapi.ts 파일 생성
import axios from "axios";
import { CarResponse, Car, CarEntity } from "../types";

export const getCars = async (): Promise<CarResponse[]> => {
  // export 다른 파일에서 사용하는 것이 가능함.
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`);

  return response.data._embedded.cars;
};

export const deleteCar = async (link: string): Promise<CarResponse> => {
  const response = await axios.delete(link);
  return response.data;
};

export const addCar = async (car: Car): Promise<CarResponse> => {
  // return 값이 CarResponse 인 이유 :
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/cars`,
    car,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const updateCar = async (carEntity: CarEntity): Promise<CarResponse> => {
  const response = await axios.put(carEntity.url, carEntity.car, {  // 간편한 코딩
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
}