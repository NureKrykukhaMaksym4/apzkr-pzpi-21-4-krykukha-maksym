import { GridValidRowModel } from "@mui/x-data-grid/models";
import { AccidentInfoDto, DriverCarInfoDto, DriverInfoDto, UserInfoDto, WatcherInfoDto } from "./account";
import { CarInfoDto } from "./car";
import { ServiceInfoDto } from "./service";
import { TripFullInfo } from "./trip";

export interface GridCar extends CarInfoDto, GridValidRowModel { }
export interface GridUser extends UserInfoDto, GridValidRowModel { }
export interface GridWatcher extends WatcherInfoDto, GridValidRowModel { }
export interface GridDriver extends DriverInfoDto, GridValidRowModel { }
export interface GridDriverCar extends DriverCarInfoDto, GridValidRowModel { }
export interface GridAccident extends AccidentInfoDto, GridValidRowModel { }
export interface GridTrip extends TripFullInfo, GridValidRowModel { }
export interface GridService extends ServiceInfoDto, GridValidRowModel { }