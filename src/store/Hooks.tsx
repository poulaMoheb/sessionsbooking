import { type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, type AppDispatch } from "./Store";

type DispatchFunction = () => AppDispatch

export const useSessionDispatch: DispatchFunction = useDispatch;
export const useSessionState: TypedUseSelectorHook<RootState> = useSelector;
