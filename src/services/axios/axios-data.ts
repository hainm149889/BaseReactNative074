/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Account {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  OfficeId?: string | null;
  Code?: string | null;
  Type?: string | null;
  Name?: string | null;
  Description?: string | null;
  AccountName?: string | null;
  AccountNumb?: string | null;
  BankBrand?: string | null;
  BankBranch?: string | null;
  Image?: string | null;
  ServiceId?: string | null;
  PrefixCode?: string | null;
  AutoBank?: boolean;
  Visible?: boolean;
  EntryItems?: EntryItem[] | null;
  Transactions?: Transaction[] | null;
}

export interface AccountLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Account[] | null;
}

export interface AccountReq {
  RequestInfo?: RequestInfo | null;
  Item?: Account | null;
}

export interface AccountRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Account | null;
}

export interface Action {
  Id?: string | null;
  FeatureId?: string | null;
  System?: string | null;
  Confirmed?: boolean;
  Expired?: boolean;
  Ticketed?: boolean;
  API?: boolean;
  AGT?: boolean;
  WEB?: boolean;
  Feature?: Feature | null;
}

export interface ActionLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Action[] | null;
}

export interface Activity {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  EmployeeId?: string | null;
  Title?: string | null;
  Content?: string | null;
  /** @format date-time */
  CreatedDate?: string;
  Visible?: boolean;
  Agent?: Agent | null;
  Employee?: Employee | null;
}

export interface ActivityLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Activity[] | null;
}

export interface ActivityReq {
  RequestInfo?: RequestInfo | null;
  Item?: Activity | null;
}

export interface ActivityRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Activity | null;
}

export interface Agent {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  ParentId?: string | null;
  OfficeId?: string | null;
  SISetId?: string | null;
  AgentCode?: string | null;
  PrefixCode?: string | null;
  CustomerID?: string | null;
  AgentGroup?: string | null;
  AgentType?: string | null;
  AgentName?: string | null;
  Password?: string | null;
  Contact?: string | null;
  Phone?: string | null;
  Email?: string | null;
  Address?: string | null;
  Remark?: string | null;
  Domain?: string | null;
  Template?: string | null;
  WebTmpl?: string | null;
  Logo?: string | null;
  /** @format date-time */
  ExpiryDate?: string;
  /** @format date-time */
  CreatedDate?: string;
  /** @format int32 */
  Status?: number;
  Active?: boolean;
  AllowSearch?: boolean;
  AllowBook?: boolean;
  AllowIssue?: boolean;
  AllowVoid?: boolean;
  Company?: string | null;
  TaxCode?: string | null;
  BankNumb?: string | null;
  BankName?: string | null;
  /** @format date-time */
  StartupDate?: string | null;
  /** @format date-time */
  ContractDate?: string | null;
  Visible?: boolean;
  /** @format double */
  CreditLimit?: number;
  /** @format double */
  Guarantee?: number;
  /** @format double */
  Deposit?: number;
  /** @format double */
  Balance?: number;
  UseAPI?: boolean;
  UseB2B?: boolean;
  UseB2C?: boolean;
  UsePLG?: boolean;
  UseWEB?: boolean;
  EnableHotel?: boolean;
  EnableCars?: boolean;
  Insurances?: boolean;
  ShowPolicy?: boolean;
  SeparatePolicy?: boolean;
  Activities?: Activity[] | null;
  Assignments?: Assignment[] | null;
  Contacts?: Contact[] | null;
  Departments?: Department[] | null;
  Documents?: Document[] | null;
  Employees?: Employee[] | null;
  InverseParent?: Agent[] | null;
  Office?: Office | null;
  Offices?: Office[] | null;
  Parent?: Agent | null;
  UserAccounts?: UserAccount[] | null;
  UserActions?: UserAction[] | null;
  UserGroups?: UserGroup[] | null;
  UserModules?: UserModule[] | null;
  WebConfigs?: WebConfig[] | null;
  AdminUser?: string | null;
  AdminPass?: string | null;
  AgentLevel?: string | null;
  RootAgent?: string | null;
}

export interface AgentGroup {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  ParentId?: string | null;
  AgentId?: string | null;
  Code?: string | null;
  NameEn?: string | null;
  NameVi?: string | null;
  Default?: boolean;
  Visible?: boolean;
}

export interface AgentGroupLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: AgentGroup[] | null;
}

export interface AgentGroupReq {
  RequestInfo?: RequestInfo | null;
  Item?: AgentGroup | null;
}

export interface AgentGroupRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: AgentGroup | null;
}

export interface AgentLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Agent[] | null;
}

export interface AgentReq {
  RequestInfo?: RequestInfo | null;
  Item?: Agent | null;
}

export interface AgentRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Agent | null;
}

export interface AgentType {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  ParentId?: string | null;
  AgentId?: string | null;
  Code?: string | null;
  NameEn?: string | null;
  NameVi?: string | null;
  Default?: boolean;
  Visible?: boolean;
}

export interface AgentTypeLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: AgentType[] | null;
}

export interface AgentTypeReq {
  RequestInfo?: RequestInfo | null;
  Item?: AgentType | null;
}

export interface AgentTypeRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: AgentType | null;
}

export interface AirGroup {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Code?: string | null;
  Name?: string | null;
  Description?: string | null;
  Default?: boolean;
  Visible?: boolean;
  AirMaps?: AirMap[] | null;
}

export interface AirGroupLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: AirGroup[] | null;
}

export interface AirGroupReq {
  RequestInfo?: RequestInfo | null;
  Item?: AirGroup | null;
}

export interface AirGroupRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: AirGroup | null;
}

export interface AirIgnore {
  /** @format int32 */
  Id?: number;
  AgentId?: string | null;
  Airline?: string | null;
  System?: string | null;
  Mode?: string | null;
}

export interface AirIgnoreLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: AirIgnore[] | null;
}

export interface AirIgnoreReq {
  RequestInfo?: RequestInfo | null;
  Item?: AirIgnore | null;
}

export interface AirIgnoreRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: AirIgnore | null;
}

export interface AirMap {
  /** @format int32 */
  Id?: number;
  AgentId?: string | null;
  AirGroupId?: string | null;
  AirlineCode?: string | null;
  AirGroup?: AirGroup | null;
  AirlineCodeNavigation?: Airline | null;
}

export interface Aircraft {
  Code?: string | null;
  Manufacturer?: string | null;
  Model?: string | null;
}

export interface AircraftLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Aircraft[] | null;
}

export interface AircraftReq {
  RequestInfo?: RequestInfo | null;
  Item?: Aircraft | null;
}

export interface AircraftRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Aircraft | null;
}

export interface Airline {
  Code?: string | null;
  AirGroup?: string | null;
  NameVi?: string | null;
  NameEn?: string | null;
  NameZh?: string | null;
  NameKo?: string | null;
  NameJa?: string | null;
  AirMaps?: AirMap[] | null;
}

export interface AirlineLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Airline[] | null;
}

export interface AirlineReq {
  RequestInfo?: RequestInfo | null;
  Item?: Airline | null;
}

export interface AirlineRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Airline | null;
}

export interface Ancillary {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  BookingId?: string | null;
  PassengerId?: string | null;
  Type?: string | null;
  Airline?: string | null;
  Value?: string | null;
  Code?: string | null;
  Name?: string | null;
  /** @format double */
  Price?: number;
  Currency?: string | null;
  /** @format int32 */
  Leg?: number;
  StartPoint?: string | null;
  EndPoint?: string | null;
  StatusCode?: string | null;
  Confirmed?: boolean;
  Booking?: Booking | null;
  Charges?: Charge[] | null;
  Passenger?: Passenger | null;
}

export interface Assignment {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  EmpoyeeId?: string | null;
  Role?: string | null;
  Primary?: boolean;
  Visible?: boolean;
  Agent?: Agent | null;
  Empoyee?: Employee | null;
}

export interface AssignmentLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Assignment[] | null;
}

export interface AssignmentReq {
  RequestInfo?: RequestInfo | null;
  Item?: Assignment | null;
}

export interface AssignmentRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Assignment | null;
}

export interface BaseReq {
  RequestInfo?: RequestInfo | null;
}

export interface BaseRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
}

export interface Booking {
  AgentCode?: string | null;
  AgentName?: string | null;
  SubAgId?: string | null;
  SubAgCode?: string | null;
  SubAgName?: string | null;
  CreatedUser?: string | null;
  CreatedAvar?: string | null;
  OrderCode?: string | null;
  BookingImage?: string | null;
  ListAirline?: Airline[] | null;
  ListAirport?: GeoAirport[] | null;
  ListAircraft?: Aircraft[] | null;
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  ListParent?: string | null;
  OrderId?: string | null;
  CreatedBy?: string | null;
  BookingCode?: string | null;
  BookingStatus?: string | null;
  /** @format date-time */
  BookingDate?: string;
  /** @format date-time */
  ExpirationDate?: string | null;
  /** @format date-time */
  TimePurchase?: string | null;
  System?: string | null;
  Source?: string | null;
  Airline?: string | null;
  /** @format int32 */
  Leg?: number;
  /** @format int32 */
  Itinerary?: number;
  StartPoint?: string | null;
  EndPoint?: string | null;
  /** @format date-time */
  DepartDate?: string | null;
  /** @format date-time */
  ReturnDate?: string | null;
  Message?: string | null;
  /** @format double */
  Latency?: number;
  Pcc?: string | null;
  SignIn?: string | null;
  /** @format int32 */
  Adt?: number;
  /** @format int32 */
  Chd?: number;
  /** @format int32 */
  Inf?: number;
  /** @format double */
  TotalPrice?: number;
  /** @format double */
  NetPrice?: number;
  /** @format double */
  Profit?: number;
  Currency?: string | null;
  EquivCurrency?: string | null;
  /** @format double */
  CurrencyRate?: number;
  FareClass?: string | null;
  FareBasis?: string | null;
  Promo?: boolean;
  AutoIssue?: boolean;
  AccountCode?: string | null;
  Tourcode?: string | null;
  CACode?: string | null;
  FlightType?: string | null;
  FlightInfo?: string | null;
  PaxName?: string | null;
  PaxSumm?: string | null;
  MultiCity?: boolean;
  RoundTrip?: boolean;
  ContactTitle?: string | null;
  ContactName?: string | null;
  ContactArea?: string | null;
  ContactPhone?: string | null;
  ContactEmail?: string | null;
  ContactAddress?: string | null;
  AgentPhone?: string | null;
  AgentEmail?: string | null;
  FareRule?: string | null;
  PNRImage?: string | null;
  Visible?: boolean;
  ParentId?: string | null;
  ParentPNR?: string | null;
  NdcCode?: string | null;
  Ancillaries?: Ancillary[] | null;
  Charges?: Charge[] | null;
  FareInfos?: FareInfo[] | null;
  Flights?: Flight[] | null;
  Order?: Order | null;
  Passengers?: Passenger[] | null;
  Tickets?: Ticket[] | null;
}

export interface BookingLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Booking[] | null;
}

export interface BookingReq {
  RequestInfo?: RequestInfo | null;
  Item?: Booking | null;
}

export interface BookingRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Booking | null;
}

export interface ByListIdReq {
  RequestInfo?: RequestInfo | null;
  ListId?: string[] | null;
}

export interface ChangePasswordReq {
  RequestInfo?: RequestInfo | null;
  UserId?: string | null;
  OldPassword?: string | null;
  NewPassword?: string | null;
}

export interface Charge {
  /** @format int32 */
  Id?: number;
  AgentId?: string | null;
  OrderId?: string | null;
  BookingId?: string | null;
  PassengerId?: string | null;
  AncillaryId?: string | null;
  PolicyId?: string | null;
  TicketId?: string | null;
  /** @format double */
  Amount?: number;
  Currency?: string | null;
  ChargeType?: string | null;
  ChargeValue?: string | null;
  PaxName?: string | null;
  Remark?: string | null;
  StartPoint?: string | null;
  EndPoint?: string | null;
  SupplierId?: string | null;
  IsPolicy?: boolean;
  Paid?: boolean;
  Ancillary?: Ancillary | null;
  Booking?: Booking | null;
  Order?: Order | null;
  Passenger?: Passenger | null;
  Policy?: Policy | null;
  Ticket?: Ticket | null;
}

export interface ChargeLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Charge[] | null;
}

export interface ChargeReq {
  RequestInfo?: RequestInfo | null;
  Item?: Charge | null;
}

export interface ChargeRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Charge | null;
}

export interface Contact {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Title?: string | null;
  FullName?: string | null;
  Email?: string | null;
  Phone?: string | null;
  Remark?: string | null;
  Photo?: string | null;
  Background?: string | null;
  /** @format date-time */
  DateOfBirth?: string | null;
  Visible?: boolean;
  Agent?: Agent | null;
}

export interface ContactLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Contact[] | null;
}

export interface ContactReq {
  RequestInfo?: RequestInfo | null;
  Item?: Contact | null;
}

export interface ContactRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Contact | null;
}

export interface Content {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  ObjectType?: string | null;
  ObjectField?: string | null;
  ObjectId?: string | null;
  Language?: string | null;
  Data?: string | null;
}

export interface ContentLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Content[] | null;
}

export interface ContentPutLst {
  RequestInfo?: RequestInfo | null;
  List?: Content[] | null;
}

export interface ContentReq {
  RequestInfo?: RequestInfo | null;
  Item?: Content | null;
}

export interface ContentRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Content | null;
}

export interface Currency {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Code?: string | null;
  NameVi?: string | null;
  NameEn?: string | null;
  NameZh?: string | null;
  NameKo?: string | null;
  NameJa?: string | null;
  /** @format double */
  Rate?: number;
  /** @format int32 */
  RoundUnit?: number;
  /** @format date-time */
  LastUpdate?: string;
  Default?: boolean;
  Active?: boolean;
  Visible?: boolean;
}

export interface CurrencyLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Currency[] | null;
}

export interface CurrencyReq {
  RequestInfo?: RequestInfo | null;
  Item?: Currency | null;
}

export interface CurrencyRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Currency | null;
}

export interface DelByIdReq {
  RequestInfo?: RequestInfo | null;
  Id?: string | null;
}

export interface Department {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  ParentId?: string | null;
  OfficeId?: string | null;
  Code?: string | null;
  Type?: string | null;
  Name?: string | null;
  Phone?: string | null;
  Email?: string | null;
  Address?: string | null;
  Manager?: string | null;
  Deputy?: string | null;
  Description?: string | null;
  Image?: string | null;
  /** @format int32 */
  Grade?: number;
  /** @format int32 */
  Order?: number;
  /** @format int32 */
  Members?: number;
  Visible?: boolean;
  Agent?: Agent | null;
  Employees?: Employee[] | null;
  InverseParent?: Department[] | null;
  Office?: Office | null;
  Parent?: Department | null;
}

export interface DepartmentLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Department[] | null;
}

export interface DepartmentReq {
  RequestInfo?: RequestInfo | null;
  Item?: Department | null;
}

export interface DepartmentRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Department | null;
}

export interface Document {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Type?: string | null;
  Name?: string | null;
  Size?: string | null;
  Link?: string | null;
  Visible?: boolean;
  Agent?: Agent | null;
}

export interface DocumentLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Document[] | null;
}

export interface DocumentReq {
  RequestInfo?: RequestInfo | null;
  Item?: Document | null;
}

export interface DocumentRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Document | null;
}

export interface Email {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  MailServer?: string | null;
  MailAddress?: string | null;
  Password?: string | null;
  Host?: string | null;
  SenderName?: string | null;
  /** @format int32 */
  Port?: number;
  EnableSSL?: boolean;
  CCEmail?: string | null;
  HeaderVi?: string | null;
  HeaderEn?: string | null;
  HeaderZh?: string | null;
  HeaderKo?: string | null;
  HeaderJa?: string | null;
  FooterVi?: string | null;
  FooterEn?: string | null;
  FooterZh?: string | null;
  FooterKo?: string | null;
  FooterJa?: string | null;
  ShowPNR?: boolean;
  ShowPrice?: boolean;
  ShowHeader?: boolean;
  ShowFooter?: boolean;
  IncludeETicket?: boolean;
  IndividualTicket?: boolean;
  TicketFormat?: string | null;
  Template?: string | null;
  Logo?: string | null;
}

export interface EmailReq {
  RequestInfo?: RequestInfo | null;
  Item?: Email | null;
}

export interface EmailRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Email | null;
}

export interface Employee {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  ParentId?: string | null;
  OfficeId?: string | null;
  DepartmentId?: string | null;
  FullName?: string | null;
  /** @format int32 */
  Gender?: number;
  Email?: string | null;
  Phone?: string | null;
  Address?: string | null;
  HomeTown?: string | null;
  Remark?: string | null;
  Photo?: string | null;
  Background?: string | null;
  /** @format date-time */
  DateOfBirth?: string | null;
  Position?: string | null;
  Title?: string | null;
  /** @format int32 */
  Grade?: number;
  ZaloId?: string | null;
  ViberId?: string | null;
  SkypeId?: string | null;
  TelegramId?: string | null;
  Website?: string | null;
  Visible?: boolean;
  Activities?: Activity[] | null;
  Agent?: Agent | null;
  Assignments?: Assignment[] | null;
  Department?: Department | null;
  InverseParent?: Employee[] | null;
  Office?: Office | null;
  Parent?: Employee | null;
  UserAccounts?: UserAccount[] | null;
}

export interface EmployeeLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Employee[] | null;
}

export interface EmployeeReq {
  RequestInfo?: RequestInfo | null;
  Item?: Employee | null;
}

export interface EmployeeRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Employee | null;
}

export interface EntryItem {
  CreatedName?: string | null;
  ApproveName?: string | null;
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  AccountId?: string | null;
  CustomerId?: string | null;
  Type?: boolean;
  Title?: string | null;
  Remark?: string | null;
  /** @format double */
  Amount?: number;
  /** @format double */
  Balance?: number;
  Currency?: string | null;
  /** @format double */
  Rate?: number;
  /** @format int32 */
  DocNumb?: number;
  RefNumb?: string | null;
  EntryType?: string | null;
  AccDebit?: string | null;
  AccCredit?: string | null;
  PaymentMethod?: string | null;
  /** @format date-time */
  PaymentDate?: string | null;
  ReceiveUser?: string | null;
  CreatedUser?: string | null;
  /** @format date-time */
  CreatedDate?: string;
  ApproveUser?: string | null;
  /** @format date-time */
  ApproveDate?: string | null;
  Approved?: boolean;
  Visible?: boolean;
  Account?: Account | null;
  EntryTypeNavigation?: EntryType | null;
}

export interface EntryItemLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: EntryItem[] | null;
}

export interface EntryItemReq {
  RequestInfo?: RequestInfo | null;
  Item?: EntryItem | null;
}

export interface EntryItemRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: EntryItem | null;
}

export interface EntryType {
  Code?: string | null;
  AgentId?: string | null;
  NameVi?: string | null;
  NameEn?: string | null;
  ViewVi?: string | null;
  ViewEn?: string | null;
  Type?: boolean;
  Default?: boolean;
  /** @format int32 */
  Order?: number;
  Visible?: boolean;
  EntryItems?: EntryItem[] | null;
}

export interface EntryTypeLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: EntryType[] | null;
}

export interface Eticket {
  ListContent?: Content[] | null;
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Template?: string | null;
  MainColor?: string | null;
  ForeColor?: string | null;
  TextColor?: string | null;
  PNRColor?: string | null;
  Logo?: string | null;
  ShowTicket?: boolean;
}

export interface EticketReq {
  RequestInfo?: RequestInfo | null;
  Item?: Eticket | null;
}

export interface EticketRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Eticket | null;
}

export interface FareInfo {
  /** @format int32 */
  Id?: number;
  BookingId?: string | null;
  PaxType?: string | null;
  SegmentId?: string | null;
  StartPoint?: string | null;
  EndPoint?: string | null;
  FareClass?: string | null;
  FareBasis?: string | null;
  HandBaggage?: string | null;
  FreeBaggage?: string | null;
  FareFamily?: string | null;
  CabinCode?: string | null;
  CabinName?: string | null;
  Refundable?: boolean;
  Booking?: Booking | null;
}

export interface FareRule {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  PartnerId?: string | null;
  System?: string | null;
  Airline?: string | null;
  FareClass?: string | null;
  ContentVi?: string | null;
  ContentEn?: string | null;
  ContentKo?: string | null;
  ContentZh?: string | null;
  ContentJa?: string | null;
  Visible?: boolean;
}

export interface FareRuleLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: FareRule[] | null;
}

export interface FareRuleReq {
  RequestInfo?: RequestInfo | null;
  Item?: FareRule | null;
}

export interface FareRuleRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: FareRule | null;
}

export interface Feature {
  Code?: string | null;
  NameVi?: string | null;
  NameEn?: string | null;
  Icon?: string | null;
  Style?: string | null;
  /** @format int32 */
  Order?: number;
  Group?: string | null;
  Visible?: boolean;
  Actions?: Action[] | null;
}

export interface Flight {
  /** @format int32 */
  Id?: number;
  BookingId?: string | null;
  /** @format int32 */
  Leg?: number;
  FlightId?: string | null;
  Airline?: string | null;
  Operator?: string | null;
  StartPoint?: string | null;
  EndPoint?: string | null;
  /** @format date-time */
  DepartDate?: string;
  /** @format date-time */
  ArriveDate?: string;
  FlightNumber?: string | null;
  /** @format int32 */
  StopNum?: number;
  /** @format double */
  Duration?: number;
  Booking?: Booking | null;
  Segments?: Segment[] | null;
}

export interface GenQRRequest {
  BankBrand?: string | null;
  ServiceId?: string | null;
  Code?: string | null;
  Amount?: string | null;
}

export interface GenQRRequestReq {
  RequestInfo?: RequestInfo | null;
  Item?: GenQRRequest | null;
}

export interface GenQRResponse {
  Text?: string | null;
  Base64Image?: string | null;
}

export interface GenQRResponseRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: GenQRResponse | null;
}

export interface GeoAirport {
  CityName?: string | null;
  CountryName?: string | null;
  RegionName?: string | null;
  RegionCode?: string | null;
  Code?: string | null;
  CityCode?: string | null;
  NameVi?: string | null;
  NameEn?: string | null;
  NameZh?: string | null;
  NameKo?: string | null;
  NameJa?: string | null;
  Timezone?: string | null;
  /** @format int32 */
  Order?: number | null;
  CityCodeNavigation?: GeoCity | null;
}

export interface GeoAirportDetail {
  Airport?: GeoAirport | null;
  City?: GeoCity | null;
  Country?: GeoCountry | null;
}

export interface GeoAirportDetailLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: GeoAirportDetail[] | null;
}

export interface GeoAirportLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: GeoAirport[] | null;
}

export interface GeoAirportReq {
  RequestInfo?: RequestInfo | null;
  Item?: GeoAirport | null;
}

export interface GeoAirportRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: GeoAirport | null;
}

export interface GeoCity {
  Code?: string | null;
  CountryCode?: string | null;
  NameVi?: string | null;
  NameEn?: string | null;
  NameZh?: string | null;
  NameKo?: string | null;
  NameJa?: string | null;
  CountryCodeNavigation?: GeoCountry | null;
  GeoAirports?: GeoAirport[] | null;
}

export interface GeoCityLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: GeoCity[] | null;
}

export interface GeoCityReq {
  RequestInfo?: RequestInfo | null;
  Item?: GeoCity | null;
}

export interface GeoCityRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: GeoCity | null;
}

export interface GeoCountry {
  Code?: string | null;
  RegionCode?: string | null;
  NameVi?: string | null;
  NameEn?: string | null;
  NameZh?: string | null;
  NameKo?: string | null;
  NameJa?: string | null;
  Description?: string | null;
  DialCode?: string | null;
  GeoCities?: GeoCity[] | null;
  GeoMaps?: GeoMap[] | null;
}

export interface GeoCountryLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: GeoCountry[] | null;
}

export interface GeoCountryReq {
  RequestInfo?: RequestInfo | null;
  Item?: GeoCountry | null;
}

export interface GeoCountryRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: GeoCountry | null;
}

export interface GeoMap {
  /** @format int32 */
  Id?: number;
  AgentId?: string | null;
  GeoRegionId?: string | null;
  CountryCode?: string | null;
  CountryCodeNavigation?: GeoCountry | null;
  GeoRegion?: GeoRegion | null;
}

export interface GeoRegion {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Code?: string | null;
  NameVi?: string | null;
  NameEn?: string | null;
  NameZh?: string | null;
  NameKo?: string | null;
  NameJa?: string | null;
  Description?: string | null;
  Default?: boolean;
  Visible?: boolean;
  GeoMaps?: GeoMap[] | null;
}

export interface GeoRegionDetail {
  Region?: GeoRegion | null;
  Airports?: GeoAirportDetail[] | null;
}

export interface GeoRegionDetailRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: GeoRegionDetail | null;
}

export interface GeoRegionLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: GeoRegion[] | null;
}

export interface GeoRegionReq {
  RequestInfo?: RequestInfo | null;
  Item?: GeoRegion | null;
}

export interface GeoRegionRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: GeoRegion | null;
}

export interface GetByDateReq {
  RequestInfo?: RequestInfo | null;
  /** @format int32 */
  PageSize?: number;
  /** @format int32 */
  PageIndex?: number;
  LastId?: string | null;
  DataMode?: string | null;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  /** @format date-time */
  From?: string;
  /** @format date-time */
  To?: string;
}

export interface GetByIdReq {
  RequestInfo?: RequestInfo | null;
  Id?: string | null;
  Forced?: boolean;
}

export interface GetFlightReportReq {
  RequestInfo?: RequestInfo | null;
  /** @format int32 */
  PageSize?: number;
  /** @format int32 */
  PageIndex?: number;
  LastId?: string | null;
  DataMode?: string | null;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  Mode?: string | null;
  AgentId?: string | null;
}

export interface GetGeoRegion {
  RequestInfo?: RequestInfo | null;
  RegionId?: string | null;
  /** @format int32 */
  Take?: number;
}

export interface GetListReq {
  RequestInfo?: RequestInfo | null;
  /** @format int32 */
  PageSize?: number;
  /** @format int32 */
  PageIndex?: number;
  LastId?: string | null;
  DataMode?: string | null;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
}

export interface History {
  CreatedName?: string | null;
  CreatedPhoto?: string | null;
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  ObjectId?: string | null;
  ObjectType?: string | null;
  ActionCode?: string | null;
  ActionName?: string | null;
  Message?: string | null;
  CreatedUser?: string | null;
  /** @format date-time */
  CreatedDate?: string;
  UserType?: string | null;
  VersionId?: string | null;
  BookingCode?: string | null;
  Airline?: string | null;
  System?: string | null;
  Status?: boolean;
}

export interface HistoryActionReq {
  RequestInfo?: RequestInfo | null;
  Item?: any;
  ActionCode?: string | null;
  ActionName?: string | null;
  Message?: string | null;
}

export interface HistoryChange {
  PropertyName?: string | null;
  PropertyText?: string | null;
  OldValue?: string | null;
  NewValue?: string | null;
}

export interface HistoryChangeReq {
  RequestInfo?: RequestInfo | null;
  Old?: any;
  New?: any;
  ObjectType?: string | null;
  IgnoreFields?: string[] | null;
}

export interface HistoryDetail {
  HistoryId?: string | null;
  ObjectId?: string | null;
  ObjectType?: string | null;
  ObjectName?: string | null;
  Changes?: HistoryChange[] | null;
}

export interface HistoryInsertReq {
  RequestInfo?: RequestInfo | null;
  Item?: any;
}

export interface HistoryLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: History[] | null;
}

export interface HistoryReq {
  RequestInfo?: RequestInfo | null;
  Item?: History | null;
}

export interface Invoice {
  /** @format int32 */
  Id?: number;
  AgentId?: string | null;
  OrderId?: string | null;
  CompanyName?: string | null;
  CompanyCity?: string | null;
  CompanyCountry?: string | null;
  CompanyAddress?: string | null;
  CompanyPostCode?: string | null;
  CompanyTaxCode?: string | null;
  ReceiverName?: string | null;
  ReceiverPhone?: string | null;
  ReceiverEmail?: string | null;
  ReceiverAddress?: string | null;
  Remark?: string | null;
  Order?: Order | null;
}

export interface InvoiceRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Invoice | null;
}

export interface LoginReq {
  RequestInfo?: RequestInfo | null;
  AgentCode?: string | null;
  Username?: string | null;
  Password?: string | null;
  Remember?: boolean;
}

export interface LoginRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  TokenLogin?: string | null;
}

export interface NameValue {
  Name?: string | null;
  Value?: string | null;
  Contain?: boolean;
}

export interface Office {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  ParentId?: string | null;
  Code?: string | null;
  Type?: string | null;
  Name?: string | null;
  Phone?: string | null;
  Email?: string | null;
  Address?: string | null;
  Manager?: string | null;
  Description?: string | null;
  Image?: string | null;
  /** @format int32 */
  Grade?: number;
  /** @format int32 */
  Order?: number;
  Visible?: boolean;
  Agent?: Agent | null;
  Agents?: Agent[] | null;
  Departments?: Department[] | null;
  Employees?: Employee[] | null;
  InverseParent?: Office[] | null;
  Parent?: Office | null;
  UserAccounts?: UserAccount[] | null;
}

export interface OfficeLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Office[] | null;
}

export interface OfficeReq {
  RequestInfo?: RequestInfo | null;
  Item?: Office | null;
}

export interface OfficeRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Office | null;
}

export interface Order {
  AgentCode?: string | null;
  AgentName?: string | null;
  SubAgId?: string | null;
  SubAgCode?: string | null;
  SubAgName?: string | null;
  CreatedUser?: string | null;
  CreatedAvar?: string | null;
  MonitorUser?: string | null;
  /** @format double */
  Payable?: number;
  /** @format double */
  TotalEquiv?: number;
  ListAirline?: Airline[] | null;
  ListAirport?: GeoAirport[] | null;
  ListAircraft?: Aircraft[] | null;
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  ListParent?: string | null;
  CreatedBy?: string | null;
  MonitorBy?: string | null;
  OrderType?: string | null;
  OrderStatus?: string | null;
  /** @format date-time */
  CreatedDate?: string;
  ContactTitle?: string | null;
  ContactName?: string | null;
  ContactArea?: string | null;
  ContactPhone?: string | null;
  ContactEmail?: string | null;
  ContactAddress?: string | null;
  ContactRemark?: string | null;
  PaymentMethod?: string | null;
  PaymentGateway?: string | null;
  /** @format date-time */
  PaymentExpiry?: string | null;
  /** @format date-time */
  PaymentDate?: string | null;
  PaymentStatus?: string | null;
  FlightBooking?: string | null;
  FlightSystem?: string | null;
  FlightInfo?: string | null;
  FlightType?: string | null;
  PaxName?: string | null;
  PaxSumm?: string | null;
  /** @format double */
  TotalPrice?: number;
  /** @format double */
  NetPrice?: number;
  /** @format double */
  Profit?: number;
  Currency?: string | null;
  EquivCurrency?: string | null;
  /** @format double */
  CurrencyRate?: number;
  /** @format double */
  PaidAmt?: number;
  PaidCur?: string | null;
  Language?: string | null;
  IPAddress?: string | null;
  Checked?: boolean;
  Locked?: boolean;
  Message?: string | null;
  Visible?: boolean;
  Bookings?: Booking[] | null;
  Charges?: Charge[] | null;
  Invoices?: Invoice[] | null;
  Remarks?: Remark[] | null;
  Tickets?: Ticket[] | null;
}

export interface OrderLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Order[] | null;
}

export interface OrderReq {
  RequestInfo?: RequestInfo | null;
  Item?: Order | null;
}

export interface OrderRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Order | null;
}

export interface Passenger {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  BookingId?: string | null;
  /** @format int32 */
  PaxIndex?: number;
  /** @format int32 */
  ParentId?: number | null;
  PaxType?: string | null;
  GivenName?: string | null;
  Surname?: string | null;
  Title?: string | null;
  /** @format int32 */
  Gender?: number;
  NameId?: string | null;
  /** @format date-time */
  BirthDate?: string | null;
  Nationality?: string | null;
  IssueCountry?: string | null;
  DocumentType?: string | null;
  DocumentNumb?: string | null;
  /** @format date-time */
  DocumentExpiry?: string | null;
  Membership?: string | null;
  Visible?: boolean;
  Ancillaries?: Ancillary[] | null;
  Booking?: Booking | null;
  Charges?: Charge[] | null;
  Tickets?: Ticket[] | null;
}

export interface PassengerLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Passenger[] | null;
}

export interface PassengerReq {
  RequestInfo?: RequestInfo | null;
  Item?: Passenger | null;
}

export interface PassengerRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Passenger | null;
}

export interface PayLogger {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  OrderId?: string | null;
  /** @format double */
  TotalAmount?: number;
  /** @format double */
  PaymentFee?: number;
  /** @format double */
  PaidAmount?: number;
  Currency?: string | null;
  /** @format date-time */
  CreatedDate?: string;
  /** @format date-time */
  PaymentDate?: string | null;
  PaymentGateway?: string | null;
  PaymentMethod?: string | null;
  /** @format int32 */
  PaymentStatus?: number;
  BankCode?: string | null;
  PaymentUrl?: string | null;
  ReturnUrl?: string | null;
  CancelUrl?: string | null;
  Contact?: string | null;
  Email?: string | null;
  Phone?: string | null;
  Address?: string | null;
  IpAddress?: string | null;
  Language?: string | null;
  Remark?: string | null;
  Description?: string | null;
  RefNumb?: string | null;
  PaymentResult?: string | null;
  PaymentLog?: string | null;
  StatusMessage?: string | null;
  StatusCode?: string | null;
  Visible?: boolean;
}

export interface PayLoggerLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: PayLogger[] | null;
}

export interface PayLoggerReq {
  RequestInfo?: RequestInfo | null;
  Item?: PayLogger | null;
}

export interface PayLoggerRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: PayLogger | null;
}

export interface PayMethod {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Code?: string | null;
  Logo?: string | null;
  TitleVi?: string | null;
  TitleEn?: string | null;
  TitleZh?: string | null;
  TitleKo?: string | null;
  TitleJa?: string | null;
  DescriptionVi?: string | null;
  DescriptionEn?: string | null;
  DescriptionZh?: string | null;
  DescriptionKo?: string | null;
  DescriptionJa?: string | null;
  ConfigValue?: string | null;
  /** @format double */
  FeeAmount?: number;
  /** @format double */
  FeePercent?: number;
  /** @format int32 */
  Position?: number;
  NeedConfirmation?: boolean;
  TransferText?: boolean;
  Status?: boolean;
  Visible?: boolean;
}

export interface PayMethodLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: PayMethod[] | null;
}

export interface PayMethodReq {
  RequestInfo?: RequestInfo | null;
  Item?: PayMethod | null;
}

export interface PayMethodRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: PayMethod | null;
}

export interface Payment {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  SupplierId?: string | null;
  PaidAgent?: string | null;
  OrderId?: string | null;
  BookingId?: string | null;
  TicketId?: string | null;
  ParentId?: string | null;
  Title?: string | null;
  Remark?: string | null;
  /** @format double */
  Amount?: number;
  /** @format double */
  Balance?: number;
  /** @format double */
  PaidAmt?: number;
  Currency?: string | null;
  /** @format double */
  Rate?: number;
  /** @format date-time */
  PaymentDate?: string;
  CreatedUser?: string | null;
  RefNumb?: string | null;
  OrderCode?: string | null;
  BookingCode?: string | null;
  Airline?: string | null;
  System?: string | null;
  TicketNumber?: string | null;
  TicketType?: string | null;
  Passenger?: string | null;
  StartPoint?: string | null;
  EndPoint?: string | null;
  /** @format date-time */
  DepartDate?: string | null;
  /** @format date-time */
  ReturnDate?: string | null;
  /** @format int32 */
  Itinerary?: number;
  Roundtrip?: boolean;
  MultiCity?: boolean;
  Sandbox?: boolean;
  PolicyOwner?: string | null;
  IsPolicy?: boolean;
  Visible?: boolean;
  InverseParent?: Payment[] | null;
  Parent?: Payment | null;
}

export interface PaymentLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Payment[] | null;
}

export interface Policy {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  AgentGroup?: string | null;
  System?: string | null;
  AirGroup?: string | null;
  StartPoint?: string | null;
  EndPoint?: string | null;
  Currency?: string | null;
  Remark?: string | null;
  FareClassApply?: string | null;
  FareClassIgnore?: string | null;
  FareBasisApply?: string | null;
  FareBasisIgnore?: string | null;
  FlightNumbApply?: string | null;
  FlightNumbIgnore?: string | null;
  /** @format date-time */
  EffectFrom?: string | null;
  /** @format date-time */
  EffectTo?: string | null;
  /** @format date-time */
  DepartFrom?: string | null;
  /** @format date-time */
  DepartTo?: string | null;
  ItineraryType?: string | null;
  FlightType?: string | null;
  FareType?: string | null;
  /** @format double */
  ServiceFeeADT?: number;
  /** @format double */
  ServiceFeeCHD?: number;
  /** @format double */
  ServiceFeeINF?: number;
  /** @format int32 */
  ServiceFeeFormula?: number;
  /** @format double */
  DiscountADT?: number;
  /** @format double */
  DiscountCHD?: number;
  /** @format double */
  DiscountINF?: number;
  /** @format int32 */
  DiscountFormula?: number;
  Active?: boolean;
  Visible?: boolean;
  Charges?: Charge[] | null;
}

export interface PolicyLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Policy[] | null;
}

export interface PolicyReq {
  RequestInfo?: RequestInfo | null;
  Item?: Policy | null;
}

export interface PolicyRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Policy | null;
}

export interface Query {
  /** @format int32 */
  Id?: number;
  /** @format int32 */
  RequestId?: number;
  /** @format date-time */
  RequestTime?: string;
  ServiceName?: string | null;
  /** @format int32 */
  Step?: number;
  Request?: Request | null;
}

export interface ReadHistoryRes {
  Message?: string | null;
  StatusCode?: string | null;
  Success?: boolean;
  Item?: HistoryDetail | null;
}

export interface ReconciliationRequest {
  type?: string | null;
  providerId?: string | null;
  serviceId?: string | null;
  transDate?: string | null;
  fileType?: string | null;
  fileContent?: string | null;
}

export interface ReconciliationRequestReq {
  RequestInfo?: RequestInfo | null;
  Item?: ReconciliationRequest | null;
}

export interface ReconciliationResponse {
  providerId?: string | null;
  tranDate?: string | null;
  fileType?: string | null;
  fileName?: string | null;
  fileContent?: string | null;
}

export interface ReconciliationResponseRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: ReconciliationResponse | null;
}

export interface Remark {
  CreatedName?: string | null;
  CreatedPhoto?: string | null;
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OrderId?: string | null;
  UserId?: string | null;
  /** @format date-time */
  CreatedDate?: string;
  Message?: string | null;
  Order?: Order | null;
}

export interface RemarkLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Remark[] | null;
}

export interface RemarkReq {
  RequestInfo?: RequestInfo | null;
  Item?: Remark | null;
}

export interface RemarkRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Remark | null;
}

export interface Report {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  /** @format date-time */
  ReportDate?: string;
  /** @format int32 */
  BookTotal?: number | null;
  /** @format int32 */
  BookOK?: number;
  /** @format int32 */
  BookFail?: number;
  /** @format int32 */
  SearchTotal?: number;
  /** @format int32 */
  SearchDay?: number;
  /** @format int32 */
  SearchMin?: number | null;
  /** @format int32 */
  SearchMonth?: number;
  /** @format int32 */
  SearchOW?: number;
  /** @format int32 */
  SearchRT?: number;
  /** @format int32 */
  SearchMC?: number;
  /** @format int32 */
  SearchDom?: number;
  /** @format int32 */
  SearchInt?: number;
  /** @format int32 */
  SearchSoto?: number;
  /** @format int32 */
  TicketIssue?: number;
  /** @format int32 */
  TicketVoid?: number;
  /** @format int32 */
  Request?: number;
  /** @format int32 */
  OrderTotal?: number;
  /** @format double */
  Revenue?: number;
}

export interface ReportLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Report[] | null;
}

export interface ReportReq {
  RequestInfo?: RequestInfo | null;
  /** @format int32 */
  PageSize?: number;
  /** @format int32 */
  PageIndex?: number;
  LastId?: string | null;
  DataMode?: string | null;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  /** @format date-time */
  From?: string;
  /** @format date-time */
  To?: string;
  OfficeId?: string | null;
  AgentId?: string | null;
  StartPoint?: string | null;
  EndPoint?: string | null;
}

export interface ReportRes {
  Value?: string | null;
  Type?: string | null;
  /** @format int32 */
  Num1?: number;
  /** @format int32 */
  Num2?: number;
  /** @format int32 */
  Total?: number;
}

export interface ReportResLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: ReportRes[] | null;
}

export interface ReportResRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: ReportRes | null;
}

export interface Request {
  /** @format int32 */
  Id?: number;
  AgentId?: string | null;
  ObjectId?: string | null;
  /** @format date-time */
  RequestTime?: string;
  RequestType?: string | null;
  RequestInfo?: string | null;
  RequestKey?: string | null;
  /** @format double */
  Latency?: number;
  Status?: boolean;
  System?: string | null;
  Server?: string | null;
  Session?: string | null;
  Verify?: string | null;
  Message?: string | null;
  Completed?: boolean;
  Queries?: Query[] | null;
}

export interface RequestInfo {
  PrivateKey?: string | null;
  ApiAccount?: string | null;
  ApiPassword?: string | null;
  UserToken?: string | null;
  Currency?: string | null;
  Language?: string | null;
  IpAddress?: string | null;
}

export interface RequestLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Request[] | null;
}

export interface SIMap {
  /** @format int32 */
  Id?: number;
  SignInId?: string | null;
  SISetId?: string | null;
  Search?: boolean;
  Book?: boolean;
  Issue?: boolean;
  Action?: boolean;
  SISet?: SISet | null;
  SignIn?: SignIn | null;
}

export interface SIMapLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: SIMap[] | null;
}

export interface SIMapPutLst {
  RequestInfo?: RequestInfo | null;
  List?: SIMap[] | null;
}

export interface SISet {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Code?: string | null;
  Name?: string | null;
  Description?: string | null;
  Default?: boolean;
  Sandbox?: boolean;
  Visible?: boolean;
  SIMaps?: SIMap[] | null;
}

export interface SISetLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: SISet[] | null;
}

export interface SISetReq {
  RequestInfo?: RequestInfo | null;
  Item?: SISet | null;
}

export interface SISetRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: SISet | null;
}

export interface ScheduleTask {
  /** @format int32 */
  Id?: number;
  ActionUrl?: string | null;
  /** @format int32 */
  HourStast?: number | null;
  /** @format int32 */
  Seconds?: number;
  Enabled?: boolean;
  StopOnError?: boolean;
  /** @format date-time */
  LastStart?: string | null;
  /** @format date-time */
  LastEnd?: string | null;
  /** @format date-time */
  LastSuccess?: string | null;
}

export interface ScheduleTaskLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: ScheduleTask[] | null;
}

export interface ScheduleTaskReq {
  RequestInfo?: RequestInfo | null;
  Item?: ScheduleTask | null;
}

export interface ScheduleTaskRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: ScheduleTask | null;
}

export interface Search {
  /** @format int32 */
  Id?: number;
  AgentId?: string | null;
  /** @format date-time */
  SearchTime?: string;
  System?: string | null;
  /** @format int32 */
  Itinerary?: number;
  StartPoint?: string | null;
  EndPoint?: string | null;
  /** @format date-time */
  DepartDate?: string | null;
  /** @format date-time */
  ReturnDate?: string | null;
  /** @format int32 */
  Adt?: number;
  /** @format int32 */
  Chd?: number;
  /** @format int32 */
  Inf?: number;
  /** @format double */
  Latency?: number;
  SearchMode?: string | null;
  FlightType?: string | null;
  TripType?: string | null;
}

export interface SearchLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Search[] | null;
}

export interface Segment {
  /** @format int32 */
  Id?: number;
  /** @format int32 */
  FlightId?: number;
  /** @format int32 */
  Leg?: number;
  SegmentId?: string | null;
  Airline?: string | null;
  Operator?: string | null;
  StartPoint?: string | null;
  EndPoint?: string | null;
  /** @format date-time */
  DepartDate?: string;
  /** @format date-time */
  ArriveDate?: string;
  FlightNumber?: string | null;
  /** @format int32 */
  FlightsMiles?: number;
  MarriageGrp?: string | null;
  /** @format double */
  Duration?: number;
  Equipment?: string | null;
  StartTerminal?: string | null;
  EndTerminal?: string | null;
  HasStop?: boolean;
  StopPoint?: string | null;
  /** @format double */
  StopTime?: number;
  Status?: string | null;
  FareClass?: string | null;
  FareBasis?: string | null;
  Flight?: Flight | null;
}

export interface SignIn {
  Source?: string | null;
  Sandbox?: boolean;
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  AgentCode?: string | null;
  Name?: string | null;
  System?: string | null;
  Mode?: string | null;
  Type?: string | null;
  Kind?: string | null;
  Account?: string | null;
  Password?: string | null;
  Pcc?: string | null;
  Organization?: string | null;
  SecretKey?: string | null;
  ClientId?: string | null;
  Wsap?: string | null;
  Endpoint?: string | null;
  Ticketable?: boolean;
  StationNumber?: string | null;
  AccountNumber?: string | null;
  HardcopyPrinter?: string | null;
  TicketPrinter?: string | null;
  TktPrintRoutine?: string | null;
  Remark?: string | null;
  ApiToken?: string | null;
  /** @format date-time */
  Expiration?: string | null;
  /** @format date-time */
  LastUsedTime?: string | null;
  AllowRotate?: boolean;
  StillAlive?: boolean;
  ProxyIP?: string | null;
  /** @format int32 */
  ProxyPort?: number | null;
  ProxyUser?: string | null;
  ProxyPass?: string | null;
  Visible?: boolean;
  SIMaps?: SIMap[] | null;
}

export interface SignInLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: SignIn[] | null;
}

export interface SignInReq {
  RequestInfo?: RequestInfo | null;
  Item?: SignIn | null;
}

export interface SignInRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: SignIn | null;
}

export interface StringLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: string[] | null;
}

export interface StringRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: string | null;
}

export interface Ticket {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  ListParent?: string | null;
  PassengerId?: string | null;
  OrderId?: string | null;
  BookingId?: string | null;
  System?: string | null;
  Source?: string | null;
  Airline?: string | null;
  ConjTktNum?: string | null;
  TicketNumber?: string | null;
  TicketType?: string | null;
  TicketStatus?: string | null;
  TicketRelated?: string | null;
  RelatedType?: string | null;
  ServiceType?: string | null;
  ServiceCode?: string | null;
  BookingCode?: string | null;
  /** @format date-time */
  IssueDate?: string;
  IssueUser?: string | null;
  FullName?: string | null;
  Surname?: string | null;
  GivenName?: string | null;
  PaxType?: string | null;
  /** @format double */
  Fare?: number;
  /** @format double */
  Tax?: number;
  /** @format double */
  Fee?: number;
  /** @format double */
  Vat?: number;
  /** @format double */
  Total?: number;
  Currency?: string | null;
  /** @format double */
  OrgFare?: number;
  /** @format double */
  OrgTaxes?: number;
  /** @format double */
  OrgTotal?: number;
  OrgCurrency?: string | null;
  FlightType?: string | null;
  Segments?: string | null;
  StartPoint?: string | null;
  EndPoint?: string | null;
  /** @format date-time */
  DepartDate?: string | null;
  /** @format date-time */
  ReturnDate?: string | null;
  /** @format int32 */
  Itinerary?: number;
  Roundtrip?: boolean;
  MultiCity?: boolean;
  FareBasis?: string | null;
  FareClass?: string | null;
  Tourcode?: string | null;
  Remark?: string | null;
  Visible?: boolean;
  Booking?: Booking | null;
  Charges?: Charge[] | null;
  Order?: Order | null;
  Passenger?: Passenger | null;
}

export interface TicketLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Ticket[] | null;
}

export interface TicketReq {
  RequestInfo?: RequestInfo | null;
  Item?: Ticket | null;
}

export interface TicketRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Ticket | null;
}

export interface Tourcode {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Airline?: string | null;
  Alias?: string | null;
  Code?: string | null;
  Name?: string | null;
  Description?: string | null;
  /** @format date-time */
  FromDate?: string | null;
  /** @format date-time */
  ToDate?: string | null;
  Active?: boolean;
  Default?: boolean;
  Visible?: boolean;
}

export interface TourcodeLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: Tourcode[] | null;
}

export interface TourcodeReq {
  RequestInfo?: RequestInfo | null;
  Item?: Tourcode | null;
}

export interface TourcodeRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Tourcode | null;
}

export interface Transaction {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  SupplierId?: string | null;
  AccountId?: string | null;
  /** @format date-time */
  CreatedTime?: string;
  /** @format date-time */
  PaymentTime?: string | null;
  RequestTransId?: string | null;
  /** @format double */
  RequestAmount?: number;
  PaidStatus?: string | null;
  /** @format double */
  PaidAmount?: number;
  Currency?: string | null;
  CreatedUser?: string | null;
  TransId?: string | null;
  Remark?: string | null;
  Visible?: boolean;
  Account?: Account | null;
}

export interface TransactionRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: Transaction | null;
}

export interface UserAccount {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  OfficeId?: string | null;
  AgentId?: string | null;
  UserGroupId?: string | null;
  EmployeeId?: string | null;
  SISetId?: string | null;
  SuperAdmin?: boolean;
  Username?: string | null;
  Password?: string | null;
  Email?: string | null;
  Phone?: string | null;
  Remark?: string | null;
  FullName?: string | null;
  Photo?: string | null;
  /** @format date-time */
  LastLoginDate?: string | null;
  LastLoginIP?: string | null;
  TokenLogin?: string | null;
  /** @format date-time */
  TokenExpiry?: string | null;
  Status?: boolean;
  Visible?: boolean;
  AllowSearch?: boolean;
  AllowBook?: boolean;
  AllowIssue?: boolean;
  AllowVoid?: boolean;
  AllowApprove?: boolean;
  ViewAllOffice?: boolean;
  ViewAllAccount?: boolean;
  Minify?: boolean;
  Agent?: Agent | null;
  Employee?: Employee | null;
  Office?: Office | null;
  UserGroup?: UserGroup | null;
}

export interface UserAccountLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: UserAccount[] | null;
}

export interface UserAccountReq {
  RequestInfo?: RequestInfo | null;
  Item?: UserAccount | null;
}

export interface UserAccountRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: UserAccount | null;
}

export interface UserAction {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  ModuleId?: string | null;
  Code?: string | null;
  Name?: string | null;
  Description?: string | null;
  Default?: boolean;
  Visible?: boolean;
  Agent?: Agent | null;
  Module?: UserModule | null;
}

export interface UserActionLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: UserAction[] | null;
}

export interface UserActionReq {
  RequestInfo?: RequestInfo | null;
  Item?: UserAction | null;
}

export interface UserActionRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: UserAction | null;
}

export interface UserGroup {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  ParentId?: string | null;
  Code?: string | null;
  Name?: string | null;
  Description?: string | null;
  /** @format int32 */
  Level?: number;
  Default?: boolean;
  Visible?: boolean;
  Agent?: Agent | null;
  InverseParent?: UserGroup[] | null;
  Parent?: UserGroup | null;
  UserAccounts?: UserAccount[] | null;
  UserPermissions?: UserPermission[] | null;
}

export interface UserGroupLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: UserGroup[] | null;
}

export interface UserGroupReq {
  RequestInfo?: RequestInfo | null;
  Item?: UserGroup | null;
}

export interface UserGroupRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: UserGroup | null;
}

export interface UserModule {
  /** @format int32 */
  Level?: number;
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  ParentId?: string | null;
  Role?: string | null;
  Product?: string | null;
  AllowDBS?: boolean;
  AllowAPI?: boolean;
  AllowB2B?: boolean;
  AllowB2C?: boolean;
  AllowPLG?: boolean;
  AllowWEB?: boolean;
  Code?: string | null;
  MenuType?: string | null;
  ItemType?: string | null;
  Name_Vi?: string | null;
  Name_En?: string | null;
  Description?: string | null;
  Path?: string | null;
  /** @format int32 */
  Position?: number;
  Expand?: boolean;
  Icon?: string | null;
  Format?: string | null;
  Active?: boolean;
  Visible?: boolean;
  Agent?: Agent | null;
  InverseParent?: UserModule[] | null;
  Parent?: UserModule | null;
  UserActions?: UserAction[] | null;
  UserPermissions?: UserPermission[] | null;
}

export interface UserModuleLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: UserModule[] | null;
}

export interface UserPermission {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  UserGroupId?: string | null;
  UserModuleId?: string | null;
  Action?: string | null;
  UserGroup?: UserGroup | null;
  UserModule?: UserModule | null;
}

export interface UserPermissionLst {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  /** @format int32 */
  TotalItem?: number;
  /** @format int32 */
  TotalPage?: number;
  /** @format int32 */
  PageIndex?: number;
  /** @format int32 */
  PageSize?: number;
  HasPreviousPage?: boolean;
  HasNextPage?: boolean;
  OrderBy?: string | null;
  SortType?: string | null;
  GetAll?: boolean;
  Filter?: NameValue[] | null;
  List?: UserPermission[] | null;
}

export interface UserPermissionPutLst {
  RequestInfo?: RequestInfo | null;
  List?: UserPermission[] | null;
}

export interface WebConfig {
  Id?: string | null;
  /** @format int32 */
  Index?: number;
  AgentId?: string | null;
  Domain?: string | null;
  Theme?: string | null;
  Folder?: string | null;
  WebTitle?: string | null;
  Slogan?: string | null;
  Copyright?: string | null;
  CustomCss?: boolean;
  HideCode?: boolean;
  Remark?: string | null;
  Visible?: boolean;
  Agent?: Agent | null;
}

export interface WebConfigRes {
  StatusCode?: string | null;
  Success?: boolean;
  Expired?: boolean;
  Message?: string | null;
  Language?: string | null;
  CustomProperties?: Record<string, any>;
  Item?: WebConfig | null;
}

import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({securityWorker, secure, format, ...axiosConfig}: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({...axiosConfig, baseURL: axiosConfig.baseURL || ''});
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === 'object') {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? {'Content-Type': type} : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title ApiData
 * @version 1.0
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Account
     * @name AccountAccountGetListCreate
     * @request POST:/api/Account/AccountGetList
     */
    accountAccountGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AccountLst, any>({
        path: `/api/Account/AccountGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAccountGetListByParentIdCreate
     * @request POST:/api/Account/AccountGetListByParentId
     */
    accountAccountGetListByParentIdCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AccountLst, any>({
        path: `/api/Account/AccountGetListByParentId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAccountGetByIdCreate
     * @request POST:/api/Account/AccountGetById
     */
    accountAccountGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AccountRes, any>({
        path: `/api/Account/AccountGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAccountInsertCreate
     * @request POST:/api/Account/AccountInsert
     */
    accountAccountInsertCreate: (data: AccountReq, params: RequestParams = {}) =>
      this.request<AccountRes, any>({
        path: `/api/Account/AccountInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAccountUpdateCreate
     * @request POST:/api/Account/AccountUpdate
     */
    accountAccountUpdateCreate: (data: AccountReq, params: RequestParams = {}) =>
      this.request<AccountRes, any>({
        path: `/api/Account/AccountUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAccountDeleteCreate
     * @request POST:/api/Account/AccountDelete
     */
    accountAccountDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Account/AccountDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAccountRestoreCreate
     * @request POST:/api/Account/AccountRestore
     */
    accountAccountRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Account/AccountRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAccountGetAllCreate
     * @request POST:/api/Account/AccountGetAll
     */
    accountAccountGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<AccountLst, any>({
        path: `/api/Account/AccountGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Action
     * @name ActionActionGetAllBySystemCreate
     * @request POST:/api/Action/ActionGetAllBySystem
     */
    actionActionGetAllBySystemCreate: (data: ByListIdReq, params: RequestParams = {}) =>
      this.request<ActionLst, any>({
        path: `/api/Action/ActionGetAllBySystem`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Action
     * @name ActionActionGetByBookingCreate
     * @request POST:/api/Action/ActionGetByBooking
     */
    actionActionGetByBookingCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ActionLst, any>({
        path: `/api/Action/ActionGetByBooking`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activity
     * @name ActivityActivityGetListCreate
     * @request POST:/api/Activity/ActivityGetList
     */
    activityActivityGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<ActivityLst, any>({
        path: `/api/Activity/ActivityGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activity
     * @name ActivityActivityGetByIdCreate
     * @request POST:/api/Activity/ActivityGetById
     */
    activityActivityGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ActivityRes, any>({
        path: `/api/Activity/ActivityGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activity
     * @name ActivityActivityInsertCreate
     * @request POST:/api/Activity/ActivityInsert
     */
    activityActivityInsertCreate: (data: ActivityReq, params: RequestParams = {}) =>
      this.request<ActivityRes, any>({
        path: `/api/Activity/ActivityInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activity
     * @name ActivityActivityUpdateCreate
     * @request POST:/api/Activity/ActivityUpdate
     */
    activityActivityUpdateCreate: (data: ActivityReq, params: RequestParams = {}) =>
      this.request<ActivityRes, any>({
        path: `/api/Activity/ActivityUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activity
     * @name ActivityActivityDeleteCreate
     * @request POST:/api/Activity/ActivityDelete
     */
    activityActivityDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Activity/ActivityDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activity
     * @name ActivityActivityRestoreCreate
     * @request POST:/api/Activity/ActivityRestore
     */
    activityActivityRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Activity/ActivityRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Activity
     * @name ActivityActivityGetAllByAgentIdCreate
     * @request POST:/api/Activity/ActivityGetAllByAgentId
     */
    activityActivityGetAllByAgentIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ActivityLst, any>({
        path: `/api/Activity/ActivityGetAllByAgentId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentGetListCreate
     * @request POST:/api/Agent/AgentGetList
     */
    agentAgentGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AgentLst, any>({
        path: `/api/Agent/AgentGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentGetByIdCreate
     * @request POST:/api/Agent/AgentGetById
     */
    agentAgentGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentInsertCreate
     * @request POST:/api/Agent/AgentInsert
     */
    agentAgentInsertCreate: (data: AgentReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentUpdateCreate
     * @request POST:/api/Agent/AgentUpdate
     */
    agentAgentUpdateCreate: (data: AgentReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentDeleteCreate
     * @request POST:/api/Agent/AgentDelete
     */
    agentAgentDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Agent/AgentDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentRestoreCreate
     * @request POST:/api/Agent/AgentRestore
     */
    agentAgentRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Agent/AgentRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentGetAllCreate
     * @request POST:/api/Agent/AgentGetAll
     */
    agentAgentGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<AgentLst, any>({
        path: `/api/Agent/AgentGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentGetByDomainCreate
     * @request POST:/api/Agent/AgentGetByDomain
     */
    agentAgentGetByDomainCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentGetByDomain`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentUpdateInfoCreate
     * @request POST:/api/Agent/AgentUpdateInfo
     */
    agentAgentUpdateInfoCreate: (data: AgentReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentUpdateInfo`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentUpdateConfigCreate
     * @request POST:/api/Agent/AgentUpdateConfig
     */
    agentAgentUpdateConfigCreate: (data: AgentReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentUpdateConfig`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentUpdateCompanyCreate
     * @request POST:/api/Agent/AgentUpdateCompany
     */
    agentAgentUpdateCompanyCreate: (data: AgentReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentUpdateCompany`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentUpdateBalanceCreate
     * @request POST:/api/Agent/AgentUpdateBalance
     */
    agentAgentUpdateBalanceCreate: (data: AgentReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentUpdateBalance`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentAgentGetInfoCreate
     * @request POST:/api/Agent/AgentGetInfo
     */
    agentAgentGetInfoCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AgentRes, any>({
        path: `/api/Agent/AgentGetInfo`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentGroup
     * @name AgentGroupAgentGroupGetListCreate
     * @request POST:/api/AgentGroup/AgentGroupGetList
     */
    agentGroupAgentGroupGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AgentGroupLst, any>({
        path: `/api/AgentGroup/AgentGroupGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentGroup
     * @name AgentGroupAgentGroupGetByIdCreate
     * @request POST:/api/AgentGroup/AgentGroupGetById
     */
    agentGroupAgentGroupGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AgentGroupRes, any>({
        path: `/api/AgentGroup/AgentGroupGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentGroup
     * @name AgentGroupAgentGroupInsertCreate
     * @request POST:/api/AgentGroup/AgentGroupInsert
     */
    agentGroupAgentGroupInsertCreate: (data: AgentGroupReq, params: RequestParams = {}) =>
      this.request<AgentGroupRes, any>({
        path: `/api/AgentGroup/AgentGroupInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentGroup
     * @name AgentGroupAgentGroupUpdateCreate
     * @request POST:/api/AgentGroup/AgentGroupUpdate
     */
    agentGroupAgentGroupUpdateCreate: (data: AgentGroupReq, params: RequestParams = {}) =>
      this.request<AgentGroupRes, any>({
        path: `/api/AgentGroup/AgentGroupUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentGroup
     * @name AgentGroupAgentGroupDeleteCreate
     * @request POST:/api/AgentGroup/AgentGroupDelete
     */
    agentGroupAgentGroupDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/AgentGroup/AgentGroupDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentGroup
     * @name AgentGroupAgentGroupRestoreCreate
     * @request POST:/api/AgentGroup/AgentGroupRestore
     */
    agentGroupAgentGroupRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/AgentGroup/AgentGroupRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentGroup
     * @name AgentGroupAgentGroupGetAllCreate
     * @request POST:/api/AgentGroup/AgentGroupGetAll
     */
    agentGroupAgentGroupGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<AgentGroupLst, any>({
        path: `/api/AgentGroup/AgentGroupGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentType
     * @name AgentTypeAgentTypeGetListCreate
     * @request POST:/api/AgentType/AgentTypeGetList
     */
    agentTypeAgentTypeGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AgentTypeLst, any>({
        path: `/api/AgentType/AgentTypeGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentType
     * @name AgentTypeAgentTypeGetByIdCreate
     * @request POST:/api/AgentType/AgentTypeGetById
     */
    agentTypeAgentTypeGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AgentTypeRes, any>({
        path: `/api/AgentType/AgentTypeGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentType
     * @name AgentTypeAgentTypeInsertCreate
     * @request POST:/api/AgentType/AgentTypeInsert
     */
    agentTypeAgentTypeInsertCreate: (data: AgentTypeReq, params: RequestParams = {}) =>
      this.request<AgentTypeRes, any>({
        path: `/api/AgentType/AgentTypeInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentType
     * @name AgentTypeAgentTypeUpdateCreate
     * @request POST:/api/AgentType/AgentTypeUpdate
     */
    agentTypeAgentTypeUpdateCreate: (data: AgentTypeReq, params: RequestParams = {}) =>
      this.request<AgentTypeRes, any>({
        path: `/api/AgentType/AgentTypeUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentType
     * @name AgentTypeAgentTypeDeleteCreate
     * @request POST:/api/AgentType/AgentTypeDelete
     */
    agentTypeAgentTypeDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/AgentType/AgentTypeDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentType
     * @name AgentTypeAgentTypeRestoreCreate
     * @request POST:/api/AgentType/AgentTypeRestore
     */
    agentTypeAgentTypeRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/AgentType/AgentTypeRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AgentType
     * @name AgentTypeAgentTypeGetAllCreate
     * @request POST:/api/AgentType/AgentTypeGetAll
     */
    agentTypeAgentTypeGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<AgentTypeLst, any>({
        path: `/api/AgentType/AgentTypeGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Aircraft
     * @name AircraftAircraftGetListCreate
     * @request POST:/api/Aircraft/AircraftGetList
     */
    aircraftAircraftGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AircraftLst, any>({
        path: `/api/Aircraft/AircraftGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Aircraft
     * @name AircraftAircraftGetByIdCreate
     * @request POST:/api/Aircraft/AircraftGetById
     */
    aircraftAircraftGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AircraftRes, any>({
        path: `/api/Aircraft/AircraftGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Aircraft
     * @name AircraftAircraftInsertCreate
     * @request POST:/api/Aircraft/AircraftInsert
     */
    aircraftAircraftInsertCreate: (data: AircraftReq, params: RequestParams = {}) =>
      this.request<AircraftRes, any>({
        path: `/api/Aircraft/AircraftInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Aircraft
     * @name AircraftAircraftUpdateCreate
     * @request POST:/api/Aircraft/AircraftUpdate
     */
    aircraftAircraftUpdateCreate: (data: AircraftReq, params: RequestParams = {}) =>
      this.request<AircraftRes, any>({
        path: `/api/Aircraft/AircraftUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Aircraft
     * @name AircraftAircraftDeleteCreate
     * @request POST:/api/Aircraft/AircraftDelete
     */
    aircraftAircraftDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Aircraft/AircraftDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Aircraft
     * @name AircraftAircraftGetAllCreate
     * @request POST:/api/Aircraft/AircraftGetAll
     */
    aircraftAircraftGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<AircraftLst, any>({
        path: `/api/Aircraft/AircraftGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirGroup
     * @name AirGroupAirGroupGetListCreate
     * @request POST:/api/AirGroup/AirGroupGetList
     */
    airGroupAirGroupGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AirGroupLst, any>({
        path: `/api/AirGroup/AirGroupGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirGroup
     * @name AirGroupAirGroupGetByIdCreate
     * @request POST:/api/AirGroup/AirGroupGetById
     */
    airGroupAirGroupGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AirGroupRes, any>({
        path: `/api/AirGroup/AirGroupGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirGroup
     * @name AirGroupAirGroupInsertCreate
     * @request POST:/api/AirGroup/AirGroupInsert
     */
    airGroupAirGroupInsertCreate: (data: AirGroupReq, params: RequestParams = {}) =>
      this.request<AirGroupRes, any>({
        path: `/api/AirGroup/AirGroupInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirGroup
     * @name AirGroupAirGroupUpdateCreate
     * @request POST:/api/AirGroup/AirGroupUpdate
     */
    airGroupAirGroupUpdateCreate: (data: AirGroupReq, params: RequestParams = {}) =>
      this.request<AirGroupRes, any>({
        path: `/api/AirGroup/AirGroupUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirGroup
     * @name AirGroupAirGroupDeleteCreate
     * @request POST:/api/AirGroup/AirGroupDelete
     */
    airGroupAirGroupDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/AirGroup/AirGroupDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirGroup
     * @name AirGroupAirGroupRestoreCreate
     * @request POST:/api/AirGroup/AirGroupRestore
     */
    airGroupAirGroupRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/AirGroup/AirGroupRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirGroup
     * @name AirGroupAirGroupGetAllCreate
     * @request POST:/api/AirGroup/AirGroupGetAll
     */
    airGroupAirGroupGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<AirGroupLst, any>({
        path: `/api/AirGroup/AirGroupGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirIgnore
     * @name AirIgnoreAirIgnoreGetListCreate
     * @request POST:/api/AirIgnore/AirIgnoreGetList
     */
    airIgnoreAirIgnoreGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AirIgnoreLst, any>({
        path: `/api/AirIgnore/AirIgnoreGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirIgnore
     * @name AirIgnoreAirIgnoreGetByIdCreate
     * @request POST:/api/AirIgnore/AirIgnoreGetById
     */
    airIgnoreAirIgnoreGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AirIgnoreRes, any>({
        path: `/api/AirIgnore/AirIgnoreGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirIgnore
     * @name AirIgnoreAirIgnoreInsertCreate
     * @request POST:/api/AirIgnore/AirIgnoreInsert
     */
    airIgnoreAirIgnoreInsertCreate: (data: AirIgnoreReq, params: RequestParams = {}) =>
      this.request<AirIgnoreRes, any>({
        path: `/api/AirIgnore/AirIgnoreInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirIgnore
     * @name AirIgnoreAirIgnoreUpdateCreate
     * @request POST:/api/AirIgnore/AirIgnoreUpdate
     */
    airIgnoreAirIgnoreUpdateCreate: (data: AirIgnoreReq, params: RequestParams = {}) =>
      this.request<AirIgnoreRes, any>({
        path: `/api/AirIgnore/AirIgnoreUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirIgnore
     * @name AirIgnoreAirIgnoreDeleteCreate
     * @request POST:/api/AirIgnore/AirIgnoreDelete
     */
    airIgnoreAirIgnoreDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/AirIgnore/AirIgnoreDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags AirIgnore
     * @name AirIgnoreAirIgnoreGetAllCreate
     * @request POST:/api/AirIgnore/AirIgnoreGetAll
     */
    airIgnoreAirIgnoreGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<AirIgnoreLst, any>({
        path: `/api/AirIgnore/AirIgnoreGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airline
     * @name AirlineAirlineGetListCreate
     * @request POST:/api/Airline/AirlineGetList
     */
    airlineAirlineGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<AirlineLst, any>({
        path: `/api/Airline/AirlineGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airline
     * @name AirlineAirlineGetByIdCreate
     * @request POST:/api/Airline/AirlineGetById
     */
    airlineAirlineGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AirlineRes, any>({
        path: `/api/Airline/AirlineGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airline
     * @name AirlineAirlineInsertCreate
     * @request POST:/api/Airline/AirlineInsert
     */
    airlineAirlineInsertCreate: (data: AirlineReq, params: RequestParams = {}) =>
      this.request<AirlineRes, any>({
        path: `/api/Airline/AirlineInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airline
     * @name AirlineAirlineUpdateCreate
     * @request POST:/api/Airline/AirlineUpdate
     */
    airlineAirlineUpdateCreate: (data: AirlineReq, params: RequestParams = {}) =>
      this.request<AirlineRes, any>({
        path: `/api/Airline/AirlineUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airline
     * @name AirlineAirlineDeleteCreate
     * @request POST:/api/Airline/AirlineDelete
     */
    airlineAirlineDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Airline/AirlineDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airline
     * @name AirlineAirlineGetAllCreate
     * @request POST:/api/Airline/AirlineGetAll
     */
    airlineAirlineGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<AirlineLst, any>({
        path: `/api/Airline/AirlineGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Airline
     * @name AirlineAirlineMappingCreate
     * @request POST:/api/Airline/AirlineMapping
     */
    airlineAirlineMappingCreate: (data: AirlineReq, params: RequestParams = {}) =>
      this.request<AirlineRes, any>({
        path: `/api/Airline/AirlineMapping`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignment
     * @name AssignmentAssignmentGetByAgentCreate
     * @request POST:/api/Assignment/AssignmentGetByAgent
     */
    assignmentAssignmentGetByAgentCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<AssignmentLst, any>({
        path: `/api/Assignment/AssignmentGetByAgent`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignment
     * @name AssignmentAssignmentInsertCreate
     * @request POST:/api/Assignment/AssignmentInsert
     */
    assignmentAssignmentInsertCreate: (data: AssignmentReq, params: RequestParams = {}) =>
      this.request<AssignmentRes, any>({
        path: `/api/Assignment/AssignmentInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignment
     * @name AssignmentAssignmentUpdatePrimaryCreate
     * @request POST:/api/Assignment/AssignmentUpdatePrimary
     */
    assignmentAssignmentUpdatePrimaryCreate: (data: AssignmentReq, params: RequestParams = {}) =>
      this.request<AssignmentRes, any>({
        path: `/api/Assignment/AssignmentUpdatePrimary`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Assignment
     * @name AssignmentAssignmentDeleteCreate
     * @request POST:/api/Assignment/AssignmentDelete
     */
    assignmentAssignmentDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Assignment/AssignmentDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Banking
     * @name BankingBankingGenQrCreate
     * @request POST:/api/Banking/BankingGenQR
     */
    bankingBankingGenQrCreate: (data: GenQRRequestReq, params: RequestParams = {}) =>
      this.request<GenQRResponseRes, any>({
        path: `/api/Banking/BankingGenQR`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Banking
     * @name BankingBankingReconciliationBidvCreate
     * @request POST:/api/Banking/BankingReconciliationBIDV
     */
    bankingBankingReconciliationBidvCreate: (data: ReconciliationRequestReq, params: RequestParams = {}) =>
      this.request<ReconciliationResponseRes, any>({
        path: `/api/Banking/BankingReconciliationBIDV`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingBookingGetListCreate
     * @request POST:/api/Booking/BookingGetList
     */
    bookingBookingGetListCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<BookingLst, any>({
        path: `/api/Booking/BookingGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingBookingGetByIdCreate
     * @request POST:/api/Booking/BookingGetById
     */
    bookingBookingGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BookingRes, any>({
        path: `/api/Booking/BookingGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingBookingUpdateCreate
     * @request POST:/api/Booking/BookingUpdate
     */
    bookingBookingUpdateCreate: (data: BookingReq, params: RequestParams = {}) =>
      this.request<BookingRes, any>({
        path: `/api/Booking/BookingUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingBookingGetStatisticsCreate
     * @request POST:/api/Booking/BookingGetStatistics
     */
    bookingBookingGetStatisticsCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<BookingLst, any>({
        path: `/api/Booking/BookingGetStatistics`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingBookingGetHistoryCreate
     * @request POST:/api/Booking/BookingGetHistory
     */
    bookingBookingGetHistoryCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<HistoryLst, any>({
        path: `/api/Booking/BookingGetHistory`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Booking
     * @name BookingBookingGetVersionCreate
     * @request POST:/api/Booking/BookingGetVersion
     */
    bookingBookingGetVersionCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BookingRes, any>({
        path: `/api/Booking/BookingGetVersion`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Charge
     * @name ChargeChargeGetByIdCreate
     * @request POST:/api/Charge/ChargeGetById
     */
    chargeChargeGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ChargeRes, any>({
        path: `/api/Charge/ChargeGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Charge
     * @name ChargeChargeGetByOrderCreate
     * @request POST:/api/Charge/ChargeGetByOrder
     */
    chargeChargeGetByOrderCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ChargeLst, any>({
        path: `/api/Charge/ChargeGetByOrder`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Charge
     * @name ChargeChargeInsertCreate
     * @request POST:/api/Charge/ChargeInsert
     */
    chargeChargeInsertCreate: (data: ChargeReq, params: RequestParams = {}) =>
      this.request<ChargeRes, any>({
        path: `/api/Charge/ChargeInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Charge
     * @name ChargeChargeUpdateCreate
     * @request POST:/api/Charge/ChargeUpdate
     */
    chargeChargeUpdateCreate: (data: ChargeReq, params: RequestParams = {}) =>
      this.request<ChargeRes, any>({
        path: `/api/Charge/ChargeUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Charge
     * @name ChargeChargeDeleteCreate
     * @request POST:/api/Charge/ChargeDelete
     */
    chargeChargeDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Charge/ChargeDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Common
     * @name CommonCommonSearchCreate
     * @request POST:/api/Common/CommonSearch
     */
    commonCommonSearchCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Common/CommonSearch`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Config
     * @name ConfigConfigGetSystemCreate
     * @request POST:/api/Config/ConfigGetSystem
     */
    configConfigGetSystemCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<StringLst, any>({
        path: `/api/Config/ConfigGetSystem`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactContactGetListCreate
     * @request POST:/api/Contact/ContactGetList
     */
    contactContactGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<ContactLst, any>({
        path: `/api/Contact/ContactGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactContactGetByIdCreate
     * @request POST:/api/Contact/ContactGetById
     */
    contactContactGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ContactRes, any>({
        path: `/api/Contact/ContactGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactContactInsertCreate
     * @request POST:/api/Contact/ContactInsert
     */
    contactContactInsertCreate: (data: ContactReq, params: RequestParams = {}) =>
      this.request<ContactRes, any>({
        path: `/api/Contact/ContactInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactContactUpdateCreate
     * @request POST:/api/Contact/ContactUpdate
     */
    contactContactUpdateCreate: (data: ContactReq, params: RequestParams = {}) =>
      this.request<ContactRes, any>({
        path: `/api/Contact/ContactUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactContactDeleteCreate
     * @request POST:/api/Contact/ContactDelete
     */
    contactContactDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Contact/ContactDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactContactRestoreCreate
     * @request POST:/api/Contact/ContactRestore
     */
    contactContactRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Contact/ContactRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Contact
     * @name ContactContactGetAllByAgentIdCreate
     * @request POST:/api/Contact/ContactGetAllByAgentId
     */
    contactContactGetAllByAgentIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ContactLst, any>({
        path: `/api/Contact/ContactGetAllByAgentId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentContentGetListCreate
     * @request POST:/api/Content/ContentGetList
     */
    contentContentGetListCreate: (data: ContentReq, params: RequestParams = {}) =>
      this.request<ContentLst, any>({
        path: `/api/Content/ContentGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentContentGetByIdCreate
     * @request POST:/api/Content/ContentGetById
     */
    contentContentGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ContentRes, any>({
        path: `/api/Content/ContentGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentContentInsertCreate
     * @request POST:/api/Content/ContentInsert
     */
    contentContentInsertCreate: (data: ContentReq, params: RequestParams = {}) =>
      this.request<ContentRes, any>({
        path: `/api/Content/ContentInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentContentInsertOrUpdateCreate
     * @request POST:/api/Content/ContentInsertOrUpdate
     */
    contentContentInsertOrUpdateCreate: (data: ContentPutLst, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Content/ContentInsertOrUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentContentUpdateCreate
     * @request POST:/api/Content/ContentUpdate
     */
    contentContentUpdateCreate: (data: ContentReq, params: RequestParams = {}) =>
      this.request<ContentRes, any>({
        path: `/api/Content/ContentUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Content
     * @name ContentContentDeleteCreate
     * @request POST:/api/Content/ContentDelete
     */
    contentContentDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Content/ContentDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CurrencyCurrencyGetListCreate
     * @request POST:/api/Currency/CurrencyGetList
     */
    currencyCurrencyGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<CurrencyLst, any>({
        path: `/api/Currency/CurrencyGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CurrencyCurrencyGetByIdCreate
     * @request POST:/api/Currency/CurrencyGetById
     */
    currencyCurrencyGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<CurrencyRes, any>({
        path: `/api/Currency/CurrencyGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CurrencyCurrencyGetByCodeCreate
     * @request POST:/api/Currency/CurrencyGetByCode
     */
    currencyCurrencyGetByCodeCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<CurrencyRes, any>({
        path: `/api/Currency/CurrencyGetByCode`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CurrencyCurrencyInsertCreate
     * @request POST:/api/Currency/CurrencyInsert
     */
    currencyCurrencyInsertCreate: (data: CurrencyReq, params: RequestParams = {}) =>
      this.request<CurrencyRes, any>({
        path: `/api/Currency/CurrencyInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CurrencyCurrencyUpdateCreate
     * @request POST:/api/Currency/CurrencyUpdate
     */
    currencyCurrencyUpdateCreate: (data: CurrencyReq, params: RequestParams = {}) =>
      this.request<CurrencyRes, any>({
        path: `/api/Currency/CurrencyUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CurrencyCurrencyDeleteCreate
     * @request POST:/api/Currency/CurrencyDelete
     */
    currencyCurrencyDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Currency/CurrencyDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CurrencyCurrencyRestoreCreate
     * @request POST:/api/Currency/CurrencyRestore
     */
    currencyCurrencyRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Currency/CurrencyRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name CurrencyCurrencyGetAllCreate
     * @request POST:/api/Currency/CurrencyGetAll
     */
    currencyCurrencyGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<CurrencyLst, any>({
        path: `/api/Currency/CurrencyGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentDepartmentGetListCreate
     * @request POST:/api/Department/DepartmentGetList
     */
    departmentDepartmentGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<DepartmentLst, any>({
        path: `/api/Department/DepartmentGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentDepartmentGetByIdCreate
     * @request POST:/api/Department/DepartmentGetById
     */
    departmentDepartmentGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<DepartmentRes, any>({
        path: `/api/Department/DepartmentGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentDepartmentInsertCreate
     * @request POST:/api/Department/DepartmentInsert
     */
    departmentDepartmentInsertCreate: (data: DepartmentReq, params: RequestParams = {}) =>
      this.request<DepartmentRes, any>({
        path: `/api/Department/DepartmentInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentDepartmentUpdateCreate
     * @request POST:/api/Department/DepartmentUpdate
     */
    departmentDepartmentUpdateCreate: (data: DepartmentReq, params: RequestParams = {}) =>
      this.request<DepartmentRes, any>({
        path: `/api/Department/DepartmentUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentDepartmentDeleteCreate
     * @request POST:/api/Department/DepartmentDelete
     */
    departmentDepartmentDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Department/DepartmentDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentDepartmentRestoreCreate
     * @request POST:/api/Department/DepartmentRestore
     */
    departmentDepartmentRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Department/DepartmentRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Department
     * @name DepartmentDepartmentGetAllCreate
     * @request POST:/api/Department/DepartmentGetAll
     */
    departmentDepartmentGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<DepartmentLst, any>({
        path: `/api/Department/DepartmentGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DocumentDocumentGetListCreate
     * @request POST:/api/Document/DocumentGetList
     */
    documentDocumentGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<DocumentLst, any>({
        path: `/api/Document/DocumentGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DocumentDocumentGetByIdCreate
     * @request POST:/api/Document/DocumentGetById
     */
    documentDocumentGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<DocumentRes, any>({
        path: `/api/Document/DocumentGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DocumentDocumentInsertCreate
     * @request POST:/api/Document/DocumentInsert
     */
    documentDocumentInsertCreate: (data: DocumentReq, params: RequestParams = {}) =>
      this.request<DocumentRes, any>({
        path: `/api/Document/DocumentInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DocumentDocumentUpdateCreate
     * @request POST:/api/Document/DocumentUpdate
     */
    documentDocumentUpdateCreate: (data: DocumentReq, params: RequestParams = {}) =>
      this.request<DocumentRes, any>({
        path: `/api/Document/DocumentUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DocumentDocumentDeleteCreate
     * @request POST:/api/Document/DocumentDelete
     */
    documentDocumentDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Document/DocumentDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DocumentDocumentRestoreCreate
     * @request POST:/api/Document/DocumentRestore
     */
    documentDocumentRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Document/DocumentRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Document
     * @name DocumentDocumentGetAllByAgentIdCreate
     * @request POST:/api/Document/DocumentGetAllByAgentId
     */
    documentDocumentGetAllByAgentIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<DocumentLst, any>({
        path: `/api/Document/DocumentGetAllByAgentId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name EmailEmailGetByAgentCreate
     * @request POST:/api/Email/EmailGetByAgent
     */
    emailEmailGetByAgentCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<EmailRes, any>({
        path: `/api/Email/EmailGetByAgent`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name EmailEmailGetSenderCreate
     * @request POST:/api/Email/EmailGetSender
     */
    emailEmailGetSenderCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<EmailRes, any>({
        path: `/api/Email/EmailGetSender`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name EmailEmailInsertCreate
     * @request POST:/api/Email/EmailInsert
     */
    emailEmailInsertCreate: (data: EmailReq, params: RequestParams = {}) =>
      this.request<EmailRes, any>({
        path: `/api/Email/EmailInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Email
     * @name EmailEmailUpdateCreate
     * @request POST:/api/Email/EmailUpdate
     */
    emailEmailUpdateCreate: (data: EmailReq, params: RequestParams = {}) =>
      this.request<EmailRes, any>({
        path: `/api/Email/EmailUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeEmployeeGetListCreate
     * @request POST:/api/Employee/EmployeeGetList
     */
    employeeEmployeeGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<EmployeeLst, any>({
        path: `/api/Employee/EmployeeGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeEmployeeGetByIdCreate
     * @request POST:/api/Employee/EmployeeGetById
     */
    employeeEmployeeGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<EmployeeRes, any>({
        path: `/api/Employee/EmployeeGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeEmployeeInsertCreate
     * @request POST:/api/Employee/EmployeeInsert
     */
    employeeEmployeeInsertCreate: (data: EmployeeReq, params: RequestParams = {}) =>
      this.request<EmployeeRes, any>({
        path: `/api/Employee/EmployeeInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeEmployeeUpdateCreate
     * @request POST:/api/Employee/EmployeeUpdate
     */
    employeeEmployeeUpdateCreate: (data: EmployeeReq, params: RequestParams = {}) =>
      this.request<EmployeeRes, any>({
        path: `/api/Employee/EmployeeUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeEmployeeDeleteCreate
     * @request POST:/api/Employee/EmployeeDelete
     */
    employeeEmployeeDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Employee/EmployeeDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeEmployeeRestoreCreate
     * @request POST:/api/Employee/EmployeeRestore
     */
    employeeEmployeeRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Employee/EmployeeRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeEmployeeGetAllCreate
     * @request POST:/api/Employee/EmployeeGetAll
     */
    employeeEmployeeGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<EmployeeLst, any>({
        path: `/api/Employee/EmployeeGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Employee
     * @name EmployeeEmployeeGetByAgentCreate
     * @request POST:/api/Employee/EmployeeGetByAgent
     */
    employeeEmployeeGetByAgentCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<EmployeeLst, any>({
        path: `/api/Employee/EmployeeGetByAgent`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemGetListCreate
     * @request POST:/api/EntryItem/EntryItemGetList
     */
    entryItemEntryItemGetListCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<EntryItemLst, any>({
        path: `/api/EntryItem/EntryItemGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemGetByIdCreate
     * @request POST:/api/EntryItem/EntryItemGetById
     */
    entryItemEntryItemGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<EntryItemRes, any>({
        path: `/api/EntryItem/EntryItemGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemGetTransactionByIdCreate
     * @request POST:/api/EntryItem/EntryItemGetTransactionById
     */
    entryItemEntryItemGetTransactionByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<TransactionRes, any>({
        path: `/api/EntryItem/EntryItemGetTransactionById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemGetByIdAndParentIdCreate
     * @request POST:/api/EntryItem/EntryItemGetByIdAndParentId
     */
    entryItemEntryItemGetByIdAndParentIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<EntryItemRes, any>({
        path: `/api/EntryItem/EntryItemGetByIdAndParentId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemInsertCreate
     * @request POST:/api/EntryItem/EntryItemInsert
     */
    entryItemEntryItemInsertCreate: (data: EntryItemReq, params: RequestParams = {}) =>
      this.request<EntryItemRes, any>({
        path: `/api/EntryItem/EntryItemInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemUpdateCreate
     * @request POST:/api/EntryItem/EntryItemUpdate
     */
    entryItemEntryItemUpdateCreate: (data: EntryItemReq, params: RequestParams = {}) =>
      this.request<EntryItemRes, any>({
        path: `/api/EntryItem/EntryItemUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemDeleteCreate
     * @request POST:/api/EntryItem/EntryItemDelete
     */
    entryItemEntryItemDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/EntryItem/EntryItemDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemRestoreCreate
     * @request POST:/api/EntryItem/EntryItemRestore
     */
    entryItemEntryItemRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/EntryItem/EntryItemRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemApproveCreate
     * @request POST:/api/EntryItem/EntryItemApprove
     */
    entryItemEntryItemApproveCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/EntryItem/EntryItemApprove`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemRejectCreate
     * @request POST:/api/EntryItem/EntryItemReject
     */
    entryItemEntryItemRejectCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/EntryItem/EntryItemReject`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryItem
     * @name EntryItemEntryItemGetOwnerCreate
     * @request POST:/api/EntryItem/EntryItemGetOwner
     */
    entryItemEntryItemGetOwnerCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<EntryItemLst, any>({
        path: `/api/EntryItem/EntryItemGetOwner`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags EntryType
     * @name EntryTypeEntryTypeGetAllCreate
     * @request POST:/api/EntryType/EntryTypeGetAll
     */
    entryTypeEntryTypeGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<EntryTypeLst, any>({
        path: `/api/EntryType/EntryTypeGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Eticket
     * @name EticketEticketGetByAgentCreate
     * @request POST:/api/Eticket/EticketGetByAgent
     */
    eticketEticketGetByAgentCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<EticketRes, any>({
        path: `/api/Eticket/EticketGetByAgent`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Eticket
     * @name EticketEticketInsertCreate
     * @request POST:/api/Eticket/EticketInsert
     */
    eticketEticketInsertCreate: (data: EticketReq, params: RequestParams = {}) =>
      this.request<EticketRes, any>({
        path: `/api/Eticket/EticketInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Eticket
     * @name EticketEticketUpdateCreate
     * @request POST:/api/Eticket/EticketUpdate
     */
    eticketEticketUpdateCreate: (data: EticketReq, params: RequestParams = {}) =>
      this.request<EticketRes, any>({
        path: `/api/Eticket/EticketUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FareRule
     * @name FareRuleFareRuleGetListCreate
     * @request POST:/api/FareRule/FareRuleGetList
     */
    fareRuleFareRuleGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<FareRuleLst, any>({
        path: `/api/FareRule/FareRuleGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FareRule
     * @name FareRuleFareRuleGetByIdCreate
     * @request POST:/api/FareRule/FareRuleGetById
     */
    fareRuleFareRuleGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<FareRuleRes, any>({
        path: `/api/FareRule/FareRuleGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FareRule
     * @name FareRuleFareRuleInsertCreate
     * @request POST:/api/FareRule/FareRuleInsert
     */
    fareRuleFareRuleInsertCreate: (data: FareRuleReq, params: RequestParams = {}) =>
      this.request<FareRuleRes, any>({
        path: `/api/FareRule/FareRuleInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FareRule
     * @name FareRuleFareRuleUpdateCreate
     * @request POST:/api/FareRule/FareRuleUpdate
     */
    fareRuleFareRuleUpdateCreate: (data: FareRuleReq, params: RequestParams = {}) =>
      this.request<FareRuleRes, any>({
        path: `/api/FareRule/FareRuleUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FareRule
     * @name FareRuleFareRuleDeleteCreate
     * @request POST:/api/FareRule/FareRuleDelete
     */
    fareRuleFareRuleDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/FareRule/FareRuleDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags FareRule
     * @name FareRuleFareRuleRestoreCreate
     * @request POST:/api/FareRule/FareRuleRestore
     */
    fareRuleFareRuleRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/FareRule/FareRuleRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoAirport
     * @name GeoAirportGeoAirportGetListCreate
     * @request POST:/api/GeoAirport/GeoAirportGetList
     */
    geoAirportGeoAirportGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<GeoAirportLst, any>({
        path: `/api/GeoAirport/GeoAirportGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoAirport
     * @name GeoAirportGeoAirportGetByIdCreate
     * @request POST:/api/GeoAirport/GeoAirportGetById
     */
    geoAirportGeoAirportGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<GeoAirportRes, any>({
        path: `/api/GeoAirport/GeoAirportGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoAirport
     * @name GeoAirportGeoAirportInsertCreate
     * @request POST:/api/GeoAirport/GeoAirportInsert
     */
    geoAirportGeoAirportInsertCreate: (data: GeoAirportReq, params: RequestParams = {}) =>
      this.request<GeoAirportRes, any>({
        path: `/api/GeoAirport/GeoAirportInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoAirport
     * @name GeoAirportGeoAirportUpdateCreate
     * @request POST:/api/GeoAirport/GeoAirportUpdate
     */
    geoAirportGeoAirportUpdateCreate: (data: GeoAirportReq, params: RequestParams = {}) =>
      this.request<GeoAirportRes, any>({
        path: `/api/GeoAirport/GeoAirportUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoAirport
     * @name GeoAirportGeoAirportDeleteCreate
     * @request POST:/api/GeoAirport/GeoAirportDelete
     */
    geoAirportGeoAirportDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/GeoAirport/GeoAirportDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoAirport
     * @name GeoAirportGeoAirportGetAllCreate
     * @request POST:/api/GeoAirport/GeoAirportGetAll
     */
    geoAirportGeoAirportGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<GeoAirportDetailLst, any>({
        path: `/api/GeoAirport/GeoAirportGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoAirport
     * @name GeoAirportGeoAirportGetByRegionCreate
     * @request POST:/api/GeoAirport/GeoAirportGetByRegion
     */
    geoAirportGeoAirportGetByRegionCreate: (data: GetGeoRegion, params: RequestParams = {}) =>
      this.request<GeoRegionDetailRes, any>({
        path: `/api/GeoAirport/GeoAirportGetByRegion`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoAirport
     * @name GeoAirportGeoAirportSearchAirportCreate
     * @request POST:/api/GeoAirport/GeoAirportSearchAirport
     */
    geoAirportGeoAirportSearchAirportCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<GeoAirportLst, any>({
        path: `/api/GeoAirport/GeoAirportSearchAirport`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCity
     * @name GeoCityGeoCityGetListCreate
     * @request POST:/api/GeoCity/GeoCityGetList
     */
    geoCityGeoCityGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<GeoCityLst, any>({
        path: `/api/GeoCity/GeoCityGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCity
     * @name GeoCityGeoCityGetByIdCreate
     * @request POST:/api/GeoCity/GeoCityGetById
     */
    geoCityGeoCityGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<GeoCityRes, any>({
        path: `/api/GeoCity/GeoCityGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCity
     * @name GeoCityGeoCityInsertCreate
     * @request POST:/api/GeoCity/GeoCityInsert
     */
    geoCityGeoCityInsertCreate: (data: GeoCityReq, params: RequestParams = {}) =>
      this.request<GeoCityRes, any>({
        path: `/api/GeoCity/GeoCityInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCity
     * @name GeoCityGeoCityUpdateCreate
     * @request POST:/api/GeoCity/GeoCityUpdate
     */
    geoCityGeoCityUpdateCreate: (data: GeoCityReq, params: RequestParams = {}) =>
      this.request<GeoCityRes, any>({
        path: `/api/GeoCity/GeoCityUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCity
     * @name GeoCityGeoCityDeleteCreate
     * @request POST:/api/GeoCity/GeoCityDelete
     */
    geoCityGeoCityDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/GeoCity/GeoCityDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCity
     * @name GeoCityGeoCityGetAllCreate
     * @request POST:/api/GeoCity/GeoCityGetAll
     */
    geoCityGeoCityGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<GeoCityLst, any>({
        path: `/api/GeoCity/GeoCityGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCountry
     * @name GeoCountryGeoCountryGetListCreate
     * @request POST:/api/GeoCountry/GeoCountryGetList
     */
    geoCountryGeoCountryGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<GeoCountryLst, any>({
        path: `/api/GeoCountry/GeoCountryGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCountry
     * @name GeoCountryGeoCountryGetByIdCreate
     * @request POST:/api/GeoCountry/GeoCountryGetById
     */
    geoCountryGeoCountryGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<GeoCountryRes, any>({
        path: `/api/GeoCountry/GeoCountryGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCountry
     * @name GeoCountryGeoCountryInsertCreate
     * @request POST:/api/GeoCountry/GeoCountryInsert
     */
    geoCountryGeoCountryInsertCreate: (data: GeoCountryReq, params: RequestParams = {}) =>
      this.request<GeoCountryRes, any>({
        path: `/api/GeoCountry/GeoCountryInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCountry
     * @name GeoCountryGeoCountryUpdateCreate
     * @request POST:/api/GeoCountry/GeoCountryUpdate
     */
    geoCountryGeoCountryUpdateCreate: (data: GeoCountryReq, params: RequestParams = {}) =>
      this.request<GeoCountryRes, any>({
        path: `/api/GeoCountry/GeoCountryUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCountry
     * @name GeoCountryGeoCountryDeleteCreate
     * @request POST:/api/GeoCountry/GeoCountryDelete
     */
    geoCountryGeoCountryDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/GeoCountry/GeoCountryDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCountry
     * @name GeoCountryGeoCountryGetAllCreate
     * @request POST:/api/GeoCountry/GeoCountryGetAll
     */
    geoCountryGeoCountryGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<GeoCountryLst, any>({
        path: `/api/GeoCountry/GeoCountryGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoCountry
     * @name GeoCountryGeoCountryMappingCreate
     * @request POST:/api/GeoCountry/GeoCountryMapping
     */
    geoCountryGeoCountryMappingCreate: (data: GeoCountryReq, params: RequestParams = {}) =>
      this.request<GeoCountryRes, any>({
        path: `/api/GeoCountry/GeoCountryMapping`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoRegion
     * @name GeoRegionGeoRegionGetListCreate
     * @request POST:/api/GeoRegion/GeoRegionGetList
     */
    geoRegionGeoRegionGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<GeoRegionLst, any>({
        path: `/api/GeoRegion/GeoRegionGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoRegion
     * @name GeoRegionGeoRegionGetByIdCreate
     * @request POST:/api/GeoRegion/GeoRegionGetById
     */
    geoRegionGeoRegionGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<GeoRegionRes, any>({
        path: `/api/GeoRegion/GeoRegionGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoRegion
     * @name GeoRegionGeoRegionInsertCreate
     * @request POST:/api/GeoRegion/GeoRegionInsert
     */
    geoRegionGeoRegionInsertCreate: (data: GeoRegionReq, params: RequestParams = {}) =>
      this.request<GeoRegionRes, any>({
        path: `/api/GeoRegion/GeoRegionInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoRegion
     * @name GeoRegionGeoRegionUpdateCreate
     * @request POST:/api/GeoRegion/GeoRegionUpdate
     */
    geoRegionGeoRegionUpdateCreate: (data: GeoRegionReq, params: RequestParams = {}) =>
      this.request<GeoRegionRes, any>({
        path: `/api/GeoRegion/GeoRegionUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoRegion
     * @name GeoRegionGeoRegionDeleteCreate
     * @request POST:/api/GeoRegion/GeoRegionDelete
     */
    geoRegionGeoRegionDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/GeoRegion/GeoRegionDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoRegion
     * @name GeoRegionGeoRegionRestoreCreate
     * @request POST:/api/GeoRegion/GeoRegionRestore
     */
    geoRegionGeoRegionRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/GeoRegion/GeoRegionRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags GeoRegion
     * @name GeoRegionGeoRegionGetAllCreate
     * @request POST:/api/GeoRegion/GeoRegionGetAll
     */
    geoRegionGeoRegionGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<GeoRegionLst, any>({
        path: `/api/GeoRegion/GeoRegionGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name HistoryHistorySaveCreateCreate
     * @request POST:/api/History/HistorySaveCreate
     */
    historyHistorySaveCreateCreate: (data: HistoryInsertReq, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/History/HistorySaveCreate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name HistoryHistorySaveChangeCreate
     * @request POST:/api/History/HistorySaveChange
     */
    historyHistorySaveChangeCreate: (data: HistoryChangeReq, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/History/HistorySaveChange`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name HistoryHistorySaveDeleteCreate
     * @request POST:/api/History/HistorySaveDelete
     */
    historyHistorySaveDeleteCreate: (data: HistoryInsertReq, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/History/HistorySaveDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name HistoryHistorySaveRestoreCreate
     * @request POST:/api/History/HistorySaveRestore
     */
    historyHistorySaveRestoreCreate: (data: HistoryInsertReq, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/History/HistorySaveRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name HistoryHistorySaveActionCreate
     * @request POST:/api/History/HistorySaveAction
     */
    historyHistorySaveActionCreate: (data: HistoryActionReq, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/History/HistorySaveAction`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name HistoryHistoryGetActionCreate
     * @request POST:/api/History/HistoryGetAction
     */
    historyHistoryGetActionCreate: (data: HistoryReq, params: RequestParams = {}) =>
      this.request<HistoryLst, any>({
        path: `/api/History/HistoryGetAction`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags History
     * @name HistoryHistoryGetDetailCreate
     * @request POST:/api/History/HistoryGetDetail
     */
    historyHistoryGetDetailCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ReadHistoryRes, any>({
        path: `/api/History/HistoryGetDetail`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Office
     * @name OfficeOfficeGetListCreate
     * @request POST:/api/Office/OfficeGetList
     */
    officeOfficeGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<OfficeLst, any>({
        path: `/api/Office/OfficeGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Office
     * @name OfficeOfficeGetByIdCreate
     * @request POST:/api/Office/OfficeGetById
     */
    officeOfficeGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<OfficeRes, any>({
        path: `/api/Office/OfficeGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Office
     * @name OfficeOfficeInsertCreate
     * @request POST:/api/Office/OfficeInsert
     */
    officeOfficeInsertCreate: (data: OfficeReq, params: RequestParams = {}) =>
      this.request<OfficeRes, any>({
        path: `/api/Office/OfficeInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Office
     * @name OfficeOfficeUpdateCreate
     * @request POST:/api/Office/OfficeUpdate
     */
    officeOfficeUpdateCreate: (data: OfficeReq, params: RequestParams = {}) =>
      this.request<OfficeRes, any>({
        path: `/api/Office/OfficeUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Office
     * @name OfficeOfficeDeleteCreate
     * @request POST:/api/Office/OfficeDelete
     */
    officeOfficeDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Office/OfficeDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Office
     * @name OfficeOfficeRestoreCreate
     * @request POST:/api/Office/OfficeRestore
     */
    officeOfficeRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Office/OfficeRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Office
     * @name OfficeOfficeGetAllCreate
     * @request POST:/api/Office/OfficeGetAll
     */
    officeOfficeGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<OfficeLst, any>({
        path: `/api/Office/OfficeGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderGetListCreate
     * @request POST:/api/Order/OrderGetList
     */
    orderOrderGetListCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<OrderLst, any>({
        path: `/api/Order/OrderGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderGetByListIdCreate
     * @request POST:/api/Order/OrderGetByListId
     */
    orderOrderGetByListIdCreate: (data: ByListIdReq, params: RequestParams = {}) =>
      this.request<OrderLst, any>({
        path: `/api/Order/OrderGetByListId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderGetByIdCreate
     * @request POST:/api/Order/OrderGetById
     */
    orderOrderGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderGetOrderCreate
     * @request POST:/api/Order/OrderGetOrder
     */
    orderOrderGetOrderCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderGetOrder`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderOpenOrderCreate
     * @request POST:/api/Order/OrderOpenOrder
     */
    orderOrderOpenOrderCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderOpenOrder`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderGetChargeCreate
     * @request POST:/api/Order/OrderGetCharge
     */
    orderOrderGetChargeCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderGetCharge`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderUpdateMonitorCreate
     * @request POST:/api/Order/OrderUpdateMonitor
     */
    orderOrderUpdateMonitorCreate: (data: OrderReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderUpdateMonitor`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderUpdateStatusCreate
     * @request POST:/api/Order/OrderUpdateStatus
     */
    orderOrderUpdateStatusCreate: (data: OrderReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderUpdateStatus`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderUpdateInfoCreate
     * @request POST:/api/Order/OrderUpdateInfo
     */
    orderOrderUpdateInfoCreate: (data: OrderReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderUpdateInfo`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderUpdateContactCreate
     * @request POST:/api/Order/OrderUpdateContact
     */
    orderOrderUpdateContactCreate: (data: OrderReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderUpdateContact`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderChangePaymentCreate
     * @request POST:/api/Order/OrderChangePayment
     */
    orderOrderChangePaymentCreate: (data: OrderReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderChangePayment`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderUpdatePaymentCreate
     * @request POST:/api/Order/OrderUpdatePayment
     */
    orderOrderUpdatePaymentCreate: (data: OrderReq, params: RequestParams = {}) =>
      this.request<OrderRes, any>({
        path: `/api/Order/OrderUpdatePayment`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderGetActivityCreate
     * @request POST:/api/Order/OrderGetActivity
     */
    orderOrderGetActivityCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<HistoryLst, any>({
        path: `/api/Order/OrderGetActivity`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Order
     * @name OrderOrderGetInvoiceCreate
     * @request POST:/api/Order/OrderGetInvoice
     */
    orderOrderGetInvoiceCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<InvoiceRes, any>({
        path: `/api/Order/OrderGetInvoice`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Passenger
     * @name PassengerPassengerGetByBookingIdCreate
     * @request POST:/api/Passenger/PassengerGetByBookingId
     */
    passengerPassengerGetByBookingIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<PassengerLst, any>({
        path: `/api/Passenger/PassengerGetByBookingId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Passenger
     * @name PassengerPassengerGetByIdCreate
     * @request POST:/api/Passenger/PassengerGetById
     */
    passengerPassengerGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<PassengerRes, any>({
        path: `/api/Passenger/PassengerGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Passenger
     * @name PassengerPassengerUpdateCreate
     * @request POST:/api/Passenger/PassengerUpdate
     */
    passengerPassengerUpdateCreate: (data: PassengerReq, params: RequestParams = {}) =>
      this.request<PassengerRes, any>({
        path: `/api/Passenger/PassengerUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayLogger
     * @name PayLoggerPayLoggerGetListCreate
     * @request POST:/api/PayLogger/PayLoggerGetList
     */
    payLoggerPayLoggerGetListCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<PayLoggerLst, any>({
        path: `/api/PayLogger/PayLoggerGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayLogger
     * @name PayLoggerPayLoggerGetByIdCreate
     * @request POST:/api/PayLogger/PayLoggerGetById
     */
    payLoggerPayLoggerGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<PayLoggerRes, any>({
        path: `/api/PayLogger/PayLoggerGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayLogger
     * @name PayLoggerPayLoggerInsertCreate
     * @request POST:/api/PayLogger/PayLoggerInsert
     */
    payLoggerPayLoggerInsertCreate: (data: PayLoggerReq, params: RequestParams = {}) =>
      this.request<PayLoggerRes, any>({
        path: `/api/PayLogger/PayLoggerInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayLogger
     * @name PayLoggerPayLoggerUpdateCreate
     * @request POST:/api/PayLogger/PayLoggerUpdate
     */
    payLoggerPayLoggerUpdateCreate: (data: PayLoggerReq, params: RequestParams = {}) =>
      this.request<PayLoggerRes, any>({
        path: `/api/PayLogger/PayLoggerUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayLogger
     * @name PayLoggerPayLoggerDeleteCreate
     * @request POST:/api/PayLogger/PayLoggerDelete
     */
    payLoggerPayLoggerDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/PayLogger/PayLoggerDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayLogger
     * @name PayLoggerPayLoggerRestoreCreate
     * @request POST:/api/PayLogger/PayLoggerRestore
     */
    payLoggerPayLoggerRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/PayLogger/PayLoggerRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentPaymentGetByAgentCreate
     * @request POST:/api/Payment/PaymentGetByAgent
     */
    paymentPaymentGetByAgentCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<PaymentLst, any>({
        path: `/api/Payment/PaymentGetByAgent`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentPaymentGetBySupplierCreate
     * @request POST:/api/Payment/PaymentGetBySupplier
     */
    paymentPaymentGetBySupplierCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<PaymentLst, any>({
        path: `/api/Payment/PaymentGetBySupplier`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentPaymentExpenseByOrderCreate
     * @request POST:/api/Payment/PaymentExpenseByOrder
     */
    paymentPaymentExpenseByOrderCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<PaymentLst, any>({
        path: `/api/Payment/PaymentExpenseByOrder`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Payment
     * @name PaymentPaymentReceiveByOrderCreate
     * @request POST:/api/Payment/PaymentReceiveByOrder
     */
    paymentPaymentReceiveByOrderCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<PaymentLst, any>({
        path: `/api/Payment/PaymentReceiveByOrder`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayMethod
     * @name PayMethodPayMethodGetListCreate
     * @request POST:/api/PayMethod/PayMethodGetList
     */
    payMethodPayMethodGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<PayMethodLst, any>({
        path: `/api/PayMethod/PayMethodGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayMethod
     * @name PayMethodPayMethodGetByIdCreate
     * @request POST:/api/PayMethod/PayMethodGetById
     */
    payMethodPayMethodGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<PayMethodRes, any>({
        path: `/api/PayMethod/PayMethodGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayMethod
     * @name PayMethodPayMethodInsertCreate
     * @request POST:/api/PayMethod/PayMethodInsert
     */
    payMethodPayMethodInsertCreate: (data: PayMethodReq, params: RequestParams = {}) =>
      this.request<PayMethodRes, any>({
        path: `/api/PayMethod/PayMethodInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayMethod
     * @name PayMethodPayMethodUpdateCreate
     * @request POST:/api/PayMethod/PayMethodUpdate
     */
    payMethodPayMethodUpdateCreate: (data: PayMethodReq, params: RequestParams = {}) =>
      this.request<PayMethodRes, any>({
        path: `/api/PayMethod/PayMethodUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayMethod
     * @name PayMethodPayMethodDeleteCreate
     * @request POST:/api/PayMethod/PayMethodDelete
     */
    payMethodPayMethodDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/PayMethod/PayMethodDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayMethod
     * @name PayMethodPayMethodRestoreCreate
     * @request POST:/api/PayMethod/PayMethodRestore
     */
    payMethodPayMethodRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/PayMethod/PayMethodRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags PayMethod
     * @name PayMethodPayMethodGetAllCreate
     * @request POST:/api/PayMethod/PayMethodGetAll
     */
    payMethodPayMethodGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<PayMethodLst, any>({
        path: `/api/PayMethod/PayMethodGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy
     * @name PolicyPolicyGetListCreate
     * @request POST:/api/Policy/PolicyGetList
     */
    policyPolicyGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<PolicyLst, any>({
        path: `/api/Policy/PolicyGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy
     * @name PolicyPolicyGetByIdCreate
     * @request POST:/api/Policy/PolicyGetById
     */
    policyPolicyGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<PolicyRes, any>({
        path: `/api/Policy/PolicyGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy
     * @name PolicyPolicyInsertCreate
     * @request POST:/api/Policy/PolicyInsert
     */
    policyPolicyInsertCreate: (data: PolicyReq, params: RequestParams = {}) =>
      this.request<PolicyRes, any>({
        path: `/api/Policy/PolicyInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy
     * @name PolicyPolicyUpdateCreate
     * @request POST:/api/Policy/PolicyUpdate
     */
    policyPolicyUpdateCreate: (data: PolicyReq, params: RequestParams = {}) =>
      this.request<PolicyRes, any>({
        path: `/api/Policy/PolicyUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy
     * @name PolicyPolicyDeleteCreate
     * @request POST:/api/Policy/PolicyDelete
     */
    policyPolicyDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Policy/PolicyDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Policy
     * @name PolicyPolicyRestoreCreate
     * @request POST:/api/Policy/PolicyRestore
     */
    policyPolicyRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Policy/PolicyRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remark
     * @name RemarkRemarkInsertCreate
     * @request POST:/api/Remark/RemarkInsert
     */
    remarkRemarkInsertCreate: (data: RemarkReq, params: RequestParams = {}) =>
      this.request<RemarkRes, any>({
        path: `/api/Remark/RemarkInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remark
     * @name RemarkRemarkUpdateCreate
     * @request POST:/api/Remark/RemarkUpdate
     */
    remarkRemarkUpdateCreate: (data: RemarkReq, params: RequestParams = {}) =>
      this.request<RemarkRes, any>({
        path: `/api/Remark/RemarkUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remark
     * @name RemarkRemarkDeleteCreate
     * @request POST:/api/Remark/RemarkDelete
     */
    remarkRemarkDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Remark/RemarkDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Remark
     * @name RemarkRemarkGetByOrderIdCreate
     * @request POST:/api/Remark/RemarkGetByOrderId
     */
    remarkRemarkGetByOrderIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<RemarkLst, any>({
        path: `/api/Remark/RemarkGetByOrderId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name ReportReportGetFlightReportCreate
     * @request POST:/api/Report/ReportGetFlightReport
     */
    reportReportGetFlightReportCreate: (data: GetFlightReportReq, params: RequestParams = {}) =>
      this.request<ReportLst, any>({
        path: `/api/Report/ReportGetFlightReport`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name ReportReportGetListSearchByDateCreate
     * @request POST:/api/Report/ReportGetListSearchByDate
     */
    reportReportGetListSearchByDateCreate: (data: ReportReq, params: RequestParams = {}) =>
      this.request<ReportResLst, any>({
        path: `/api/Report/ReportGetListSearchByDate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name ReportReportGetListBookingByDateCreate
     * @request POST:/api/Report/ReportGetListBookingByDate
     */
    reportReportGetListBookingByDateCreate: (data: ReportReq, params: RequestParams = {}) =>
      this.request<ReportResLst, any>({
        path: `/api/Report/ReportGetListBookingByDate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name ReportReportGetListRequestByDateCreate
     * @request POST:/api/Report/ReportGetListRequestByDate
     */
    reportReportGetListRequestByDateCreate: (data: ReportReq, params: RequestParams = {}) =>
      this.request<ReportResLst, any>({
        path: `/api/Report/ReportGetListRequestByDate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name ReportReportGetListTicketByDateCreate
     * @request POST:/api/Report/ReportGetListTicketByDate
     */
    reportReportGetListTicketByDateCreate: (data: ReportReq, params: RequestParams = {}) =>
      this.request<ReportResLst, any>({
        path: `/api/Report/ReportGetListTicketByDate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Report
     * @name ReportReportGetSyntheticReportCreate
     * @request POST:/api/Report/ReportGetSyntheticReport
     */
    reportReportGetSyntheticReportCreate: (data: ReportReq, params: RequestParams = {}) =>
      this.request<ReportResRes, any>({
        path: `/api/Report/ReportGetSyntheticReport`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Request
     * @name RequestRequestGetStatisticsCreate
     * @request POST:/api/Request/RequestGetStatistics
     */
    requestRequestGetStatisticsCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<RequestLst, any>({
        path: `/api/Request/RequestGetStatistics`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Request
     * @name RequestRequestGetResponseCreate
     * @request POST:/api/Request/RequestGetResponse
     */
    requestRequestGetResponseCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<StringRes, any>({
        path: `/api/Request/RequestGetResponse`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScheduleTask
     * @name ScheduleTaskScheduleTaskGetListCreate
     * @request POST:/api/ScheduleTask/ScheduleTaskGetList
     */
    scheduleTaskScheduleTaskGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<ScheduleTaskLst, any>({
        path: `/api/ScheduleTask/ScheduleTaskGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScheduleTask
     * @name ScheduleTaskScheduleTaskGetByIdCreate
     * @request POST:/api/ScheduleTask/ScheduleTaskGetById
     */
    scheduleTaskScheduleTaskGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<ScheduleTaskRes, any>({
        path: `/api/ScheduleTask/ScheduleTaskGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScheduleTask
     * @name ScheduleTaskScheduleTaskUpdateCreate
     * @request POST:/api/ScheduleTask/ScheduleTaskUpdate
     */
    scheduleTaskScheduleTaskUpdateCreate: (data: ScheduleTaskReq, params: RequestParams = {}) =>
      this.request<ScheduleTaskRes, any>({
        path: `/api/ScheduleTask/ScheduleTaskUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScheduleTask
     * @name ScheduleTaskScheduleTaskGetAllCreate
     * @request POST:/api/ScheduleTask/ScheduleTaskGetAll
     */
    scheduleTaskScheduleTaskGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<ScheduleTaskLst, any>({
        path: `/api/ScheduleTask/ScheduleTaskGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags ScheduleTask
     * @name ScheduleTaskScheduleTaskResetTaskSchedulerCreate
     * @request POST:/api/ScheduleTask/ScheduleTaskResetTaskScheduler
     */
    scheduleTaskScheduleTaskResetTaskSchedulerCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/ScheduleTask/ScheduleTaskResetTaskScheduler`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Search
     * @name SearchSearchGetStatisticsCreate
     * @request POST:/api/Search/SearchGetStatistics
     */
    searchSearchGetStatisticsCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<SearchLst, any>({
        path: `/api/Search/SearchGetStatistics`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SignIn
     * @name SignInSignInGetListCreate
     * @request POST:/api/SignIn/SignInGetList
     */
    signInSignInGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<SignInLst, any>({
        path: `/api/SignIn/SignInGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SignIn
     * @name SignInSignInGetByIdCreate
     * @request POST:/api/SignIn/SignInGetById
     */
    signInSignInGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<SignInRes, any>({
        path: `/api/SignIn/SignInGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SignIn
     * @name SignInSignInInsertCreate
     * @request POST:/api/SignIn/SignInInsert
     */
    signInSignInInsertCreate: (data: SignInReq, params: RequestParams = {}) =>
      this.request<SignInRes, any>({
        path: `/api/SignIn/SignInInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SignIn
     * @name SignInSignInUpdateCreate
     * @request POST:/api/SignIn/SignInUpdate
     */
    signInSignInUpdateCreate: (data: SignInReq, params: RequestParams = {}) =>
      this.request<SignInRes, any>({
        path: `/api/SignIn/SignInUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SignIn
     * @name SignInSignInDeleteCreate
     * @request POST:/api/SignIn/SignInDelete
     */
    signInSignInDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/SignIn/SignInDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SignIn
     * @name SignInSignInRestoreCreate
     * @request POST:/api/SignIn/SignInRestore
     */
    signInSignInRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/SignIn/SignInRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SignIn
     * @name SignInSignInGetAllCreate
     * @request POST:/api/SignIn/SignInGetAll
     */
    signInSignInGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<SignInLst, any>({
        path: `/api/SignIn/SignInGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SIMap
     * @name SiMapSiMapGetAllBySiSetIdCreate
     * @request POST:/api/SIMap/SIMapGetAllBySISetId
     */
    siMapSiMapGetAllBySiSetIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<SIMapLst, any>({
        path: `/api/SIMap/SIMapGetAllBySISetId`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SIMap
     * @name SiMapSiMapUpdateListCreate
     * @request POST:/api/SIMap/SIMapUpdateList
     */
    siMapSiMapUpdateListCreate: (data: SIMapPutLst, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/SIMap/SIMapUpdateList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SIMap
     * @name SiMapSiMapDeleteListCreate
     * @request POST:/api/SIMap/SIMapDeleteList
     */
    siMapSiMapDeleteListCreate: (data: ByListIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/SIMap/SIMapDeleteList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SISet
     * @name SiSetSiSetGetListCreate
     * @request POST:/api/SISet/SISetGetList
     */
    siSetSiSetGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<SISetLst, any>({
        path: `/api/SISet/SISetGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SISet
     * @name SiSetSiSetGetByIdCreate
     * @request POST:/api/SISet/SISetGetById
     */
    siSetSiSetGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<SISetRes, any>({
        path: `/api/SISet/SISetGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SISet
     * @name SiSetSiSetInsertCreate
     * @request POST:/api/SISet/SISetInsert
     */
    siSetSiSetInsertCreate: (data: SISetReq, params: RequestParams = {}) =>
      this.request<SISetRes, any>({
        path: `/api/SISet/SISetInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SISet
     * @name SiSetSiSetUpdateCreate
     * @request POST:/api/SISet/SISetUpdate
     */
    siSetSiSetUpdateCreate: (data: SISetReq, params: RequestParams = {}) =>
      this.request<SISetRes, any>({
        path: `/api/SISet/SISetUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SISet
     * @name SiSetSiSetDeleteCreate
     * @request POST:/api/SISet/SISetDelete
     */
    siSetSiSetDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/SISet/SISetDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SISet
     * @name SiSetSiSetRestoreCreate
     * @request POST:/api/SISet/SISetRestore
     */
    siSetSiSetRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/SISet/SISetRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags SISet
     * @name SiSetSiSetGetAllCreate
     * @request POST:/api/SISet/SISetGetAll
     */
    siSetSiSetGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<SISetLst, any>({
        path: `/api/SISet/SISetGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ticket
     * @name TicketTicketGetListCreate
     * @request POST:/api/Ticket/TicketGetList
     */
    ticketTicketGetListCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<TicketLst, any>({
        path: `/api/Ticket/TicketGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ticket
     * @name TicketTicketGetByIdCreate
     * @request POST:/api/Ticket/TicketGetById
     */
    ticketTicketGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<TicketRes, any>({
        path: `/api/Ticket/TicketGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ticket
     * @name TicketTicketInsertCreate
     * @request POST:/api/Ticket/TicketInsert
     */
    ticketTicketInsertCreate: (data: TicketReq, params: RequestParams = {}) =>
      this.request<TicketRes, any>({
        path: `/api/Ticket/TicketInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ticket
     * @name TicketTicketUpdateCreate
     * @request POST:/api/Ticket/TicketUpdate
     */
    ticketTicketUpdateCreate: (data: TicketReq, params: RequestParams = {}) =>
      this.request<TicketRes, any>({
        path: `/api/Ticket/TicketUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ticket
     * @name TicketTicketDeleteCreate
     * @request POST:/api/Ticket/TicketDelete
     */
    ticketTicketDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Ticket/TicketDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ticket
     * @name TicketTicketRestoreCreate
     * @request POST:/api/Ticket/TicketRestore
     */
    ticketTicketRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Ticket/TicketRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Ticket
     * @name TicketTicketGetStatisticsCreate
     * @request POST:/api/Ticket/TicketGetStatistics
     */
    ticketTicketGetStatisticsCreate: (data: GetByDateReq, params: RequestParams = {}) =>
      this.request<TicketLst, any>({
        path: `/api/Ticket/TicketGetStatistics`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tourcode
     * @name TourcodeTourcodeGetListCreate
     * @request POST:/api/Tourcode/TourcodeGetList
     */
    tourcodeTourcodeGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<TourcodeLst, any>({
        path: `/api/Tourcode/TourcodeGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tourcode
     * @name TourcodeTourcodeGetByIdCreate
     * @request POST:/api/Tourcode/TourcodeGetById
     */
    tourcodeTourcodeGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<TourcodeRes, any>({
        path: `/api/Tourcode/TourcodeGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tourcode
     * @name TourcodeTourcodeInsertCreate
     * @request POST:/api/Tourcode/TourcodeInsert
     */
    tourcodeTourcodeInsertCreate: (data: TourcodeReq, params: RequestParams = {}) =>
      this.request<TourcodeRes, any>({
        path: `/api/Tourcode/TourcodeInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tourcode
     * @name TourcodeTourcodeUpdateCreate
     * @request POST:/api/Tourcode/TourcodeUpdate
     */
    tourcodeTourcodeUpdateCreate: (data: TourcodeReq, params: RequestParams = {}) =>
      this.request<TourcodeRes, any>({
        path: `/api/Tourcode/TourcodeUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tourcode
     * @name TourcodeTourcodeDeleteCreate
     * @request POST:/api/Tourcode/TourcodeDelete
     */
    tourcodeTourcodeDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Tourcode/TourcodeDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tourcode
     * @name TourcodeTourcodeRestoreCreate
     * @request POST:/api/Tourcode/TourcodeRestore
     */
    tourcodeTourcodeRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/Tourcode/TourcodeRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tourcode
     * @name TourcodeTourcodeGetActiveCreate
     * @request POST:/api/Tourcode/TourcodeGetActive
     */
    tourcodeTourcodeGetActiveCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<TourcodeLst, any>({
        path: `/api/Tourcode/TourcodeGetActive`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountGetListCreate
     * @request POST:/api/UserAccount/UserAccountGetList
     */
    userAccountUserAccountGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<UserAccountLst, any>({
        path: `/api/UserAccount/UserAccountGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountGetByIdCreate
     * @request POST:/api/UserAccount/UserAccountGetById
     */
    userAccountUserAccountGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserAccount/UserAccountGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountInsertCreate
     * @request POST:/api/UserAccount/UserAccountInsert
     */
    userAccountUserAccountInsertCreate: (data: UserAccountReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserAccount/UserAccountInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountUpdateCreate
     * @request POST:/api/UserAccount/UserAccountUpdate
     */
    userAccountUserAccountUpdateCreate: (data: UserAccountReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserAccount/UserAccountUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountDeleteCreate
     * @request POST:/api/UserAccount/UserAccountDelete
     */
    userAccountUserAccountDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserAccount/UserAccountDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountRestoreCreate
     * @request POST:/api/UserAccount/UserAccountRestore
     */
    userAccountUserAccountRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserAccount/UserAccountRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountGetAllCreate
     * @request POST:/api/UserAccount/UserAccountGetAll
     */
    userAccountUserAccountGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<UserAccountLst, any>({
        path: `/api/UserAccount/UserAccountGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountLoginCreate
     * @request POST:/api/UserAccount/UserAccountLogin
     */
    userAccountUserAccountLoginCreate: (data: LoginReq, params: RequestParams = {}) =>
      this.request<LoginRes, any>({
        path: `/api/UserAccount/UserAccountLogin`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountGetByTokenCreate
     * @request POST:/api/UserAccount/UserAccountGetByToken
     */
    userAccountUserAccountGetByTokenCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserAccount/UserAccountGetByToken`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountChangePasswordCreate
     * @request POST:/api/UserAccount/UserAccountChangePassword
     */
    userAccountUserAccountChangePasswordCreate: (data: ChangePasswordReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserAccount/UserAccountChangePassword`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAccount
     * @name UserAccountUserAccountResetCreate
     * @request POST:/api/UserAccount/UserAccountReset
     */
    userAccountUserAccountResetCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserAccount/UserAccountReset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAction
     * @name UserActionUserActionGetListCreate
     * @request POST:/api/UserAction/UserActionGetList
     */
    userActionUserActionGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<UserActionLst, any>({
        path: `/api/UserAction/UserActionGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAction
     * @name UserActionUserActionGetByIdCreate
     * @request POST:/api/UserAction/UserActionGetById
     */
    userActionUserActionGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserActionRes, any>({
        path: `/api/UserAction/UserActionGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAction
     * @name UserActionUserActionInsertCreate
     * @request POST:/api/UserAction/UserActionInsert
     */
    userActionUserActionInsertCreate: (data: UserActionReq, params: RequestParams = {}) =>
      this.request<UserActionRes, any>({
        path: `/api/UserAction/UserActionInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAction
     * @name UserActionUserActionUpdateCreate
     * @request POST:/api/UserAction/UserActionUpdate
     */
    userActionUserActionUpdateCreate: (data: UserActionReq, params: RequestParams = {}) =>
      this.request<UserActionRes, any>({
        path: `/api/UserAction/UserActionUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAction
     * @name UserActionUserActionDeleteCreate
     * @request POST:/api/UserAction/UserActionDelete
     */
    userActionUserActionDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserAction/UserActionDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAction
     * @name UserActionUserActionRestoreCreate
     * @request POST:/api/UserAction/UserActionRestore
     */
    userActionUserActionRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserAction/UserActionRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserAction
     * @name UserActionUserActionGetAllCreate
     * @request POST:/api/UserAction/UserActionGetAll
     */
    userActionUserActionGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<UserActionLst, any>({
        path: `/api/UserAction/UserActionGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserGroup
     * @name UserGroupUserGroupGetListCreate
     * @request POST:/api/UserGroup/UserGroupGetList
     */
    userGroupUserGroupGetListCreate: (data: GetListReq, params: RequestParams = {}) =>
      this.request<UserGroupLst, any>({
        path: `/api/UserGroup/UserGroupGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserGroup
     * @name UserGroupUserGroupGetByIdCreate
     * @request POST:/api/UserGroup/UserGroupGetById
     */
    userGroupUserGroupGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserGroupRes, any>({
        path: `/api/UserGroup/UserGroupGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserGroup
     * @name UserGroupUserGroupInsertCreate
     * @request POST:/api/UserGroup/UserGroupInsert
     */
    userGroupUserGroupInsertCreate: (data: UserGroupReq, params: RequestParams = {}) =>
      this.request<UserGroupRes, any>({
        path: `/api/UserGroup/UserGroupInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserGroup
     * @name UserGroupUserGroupUpdateCreate
     * @request POST:/api/UserGroup/UserGroupUpdate
     */
    userGroupUserGroupUpdateCreate: (data: UserGroupReq, params: RequestParams = {}) =>
      this.request<UserGroupRes, any>({
        path: `/api/UserGroup/UserGroupUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserGroup
     * @name UserGroupUserGroupDeleteCreate
     * @request POST:/api/UserGroup/UserGroupDelete
     */
    userGroupUserGroupDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserGroup/UserGroupDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserGroup
     * @name UserGroupUserGroupRestoreCreate
     * @request POST:/api/UserGroup/UserGroupRestore
     */
    userGroupUserGroupRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserGroup/UserGroupRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserGroup
     * @name UserGroupUserGroupGetAllCreate
     * @request POST:/api/UserGroup/UserGroupGetAll
     */
    userGroupUserGroupGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<UserGroupLst, any>({
        path: `/api/UserGroup/UserGroupGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserModule
     * @name UserModuleUserModuleGetAllCreate
     * @request POST:/api/UserModule/UserModuleGetAll
     */
    userModuleUserModuleGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<UserModuleLst, any>({
        path: `/api/UserModule/UserModuleGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserModule
     * @name UserModuleUserModuleGetSideBarCreate
     * @request POST:/api/UserModule/UserModuleGetSideBar
     */
    userModuleUserModuleGetSideBarCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<UserModuleLst, any>({
        path: `/api/UserModule/UserModuleGetSideBar`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserPermission
     * @name UserPermissionUserPermissionGetAllCreate
     * @request POST:/api/UserPermission/UserPermissionGetAll
     */
    userPermissionUserPermissionGetAllCreate: (data: BaseReq, params: RequestParams = {}) =>
      this.request<UserPermissionLst, any>({
        path: `/api/UserPermission/UserPermissionGetAll`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserPermission
     * @name UserPermissionUserPermissionGetListByUserGroupCreate
     * @request POST:/api/UserPermission/UserPermissionGetListByUserGroup
     */
    userPermissionUserPermissionGetListByUserGroupCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserPermissionLst, any>({
        path: `/api/UserPermission/UserPermissionGetListByUserGroup`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserPermission
     * @name UserPermissionUserPermissionUpdateListCreate
     * @request POST:/api/UserPermission/UserPermissionUpdateList
     */
    userPermissionUserPermissionUpdateListCreate: (data: UserPermissionPutLst, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserPermission/UserPermissionUpdateList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSubAgent
     * @name UserSubAgentUserSubAgentGetListCreate
     * @request POST:/api/UserSubAgent/UserSubAgentGetList
     */
    userSubAgentUserSubAgentGetListCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserAccountLst, any>({
        path: `/api/UserSubAgent/UserSubAgentGetList`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSubAgent
     * @name UserSubAgentUserSubAgentGetByIdCreate
     * @request POST:/api/UserSubAgent/UserSubAgentGetById
     */
    userSubAgentUserSubAgentGetByIdCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserSubAgent/UserSubAgentGetById`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSubAgent
     * @name UserSubAgentUserSubAgentInsertCreate
     * @request POST:/api/UserSubAgent/UserSubAgentInsert
     */
    userSubAgentUserSubAgentInsertCreate: (data: UserAccountReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserSubAgent/UserSubAgentInsert`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSubAgent
     * @name UserSubAgentUserSubAgentUpdateCreate
     * @request POST:/api/UserSubAgent/UserSubAgentUpdate
     */
    userSubAgentUserSubAgentUpdateCreate: (data: UserAccountReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserSubAgent/UserSubAgentUpdate`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSubAgent
     * @name UserSubAgentUserSubAgentDeleteCreate
     * @request POST:/api/UserSubAgent/UserSubAgentDelete
     */
    userSubAgentUserSubAgentDeleteCreate: (data: DelByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserSubAgent/UserSubAgentDelete`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSubAgent
     * @name UserSubAgentUserSubAgentRestoreCreate
     * @request POST:/api/UserSubAgent/UserSubAgentRestore
     */
    userSubAgentUserSubAgentRestoreCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<BaseRes, any>({
        path: `/api/UserSubAgent/UserSubAgentRestore`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSubAgent
     * @name UserSubAgentUserSubAgentResetCreate
     * @request POST:/api/UserSubAgent/UserSubAgentReset
     */
    userSubAgentUserSubAgentResetCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<UserAccountRes, any>({
        path: `/api/UserSubAgent/UserSubAgentReset`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * No description
     *
     * @tags WebConfig
     * @name WebConfigWebConfigGetByDomainCreate
     * @request POST:/api/WebConfig/WebConfigGetByDomain
     */
    webConfigWebConfigGetByDomainCreate: (data: GetByIdReq, params: RequestParams = {}) =>
      this.request<WebConfigRes, any>({
        path: `/api/WebConfig/WebConfigGetByDomain`,
        method: 'POST',
        body: data,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
