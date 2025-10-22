// AddCar.tsx
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button
} from "@mui/material";
import { Car } from "../types";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCar } from "../api/carapi";
import CarDialogContent from "./CarDialogContent";

function AddCar() {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState<Car>({
    brand: "",
    model: "",
    color: "",
    registrationNumber: "",
    modelYear: 0,
    price: 0,
  });

  const handleClickOpen = () => setOpen(true);

  const handleClickClose = () => setOpen(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const queryClient = useQueryClient();

  const { mutate } = useMutation(addCar, {
    onSuccess: () => {
      queryClient.invalidateQueries(["cars"]);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSave = () => {
    mutate(car);
    setCar({
      brand: "",
      model: "",
      color: "",
      registrationNumber: "",
      modelYear: 0,
      price: 0,
    });
    handleClickClose();
  };

  return (
    <>
      <Button onClick={handleClickOpen} variant="outlined">New Car</Button>
      <Dialog open={open}>
        <DialogTitle>New Car</DialogTitle>
        <CarDialogContent car={car} handleChange={handleChange}/> 
        {/* car={car}에서 car는 CarDialogContent의 매개변수, {car}는 위의 상태의 car 구분하기 */}
        <DialogActions>
          <Button onClick={handleClickClose}>Cancel | 취소</Button>
          <Button onClick={handleSave}>Save | 저장</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCar;
