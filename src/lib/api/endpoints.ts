
export class Endpoint<Req, Res> {
    name: string;
    method: string;
    path: string;
    request: Req;
    response: Res;
    constructor(options: { name: string; method: string; path: string; request: Req; response: Res }) {
        this.name = options.name;
        this.method = options.method;
        this.path = options.path;
        this.request = options.request;
        this.response = options.response;
    }
    trigger(payload: Req): Promise<Res extends {'body': infer B} ? B : never> {
        console.log(`${this.name}({payload})`);
        /**
            // You have to implement this using prototype
            Endpoint.prototype.trigger = async function (this, payload) {
                // YOUR CODE
            };
        **/
        throw new Error('Unimplemented!');
    }
}
 type timestampSchema = (/** @maximum 33292598400
 * @minimum 950918400 */ (number)| (number)); type message = (string);/** @exclusiveMaximum 1000000000
 * @exclusiveMinimum 0 */ type id = (number);/** @description "Encrypted Token" */ type encryptedPassword = (string);/** @description "Timestamp" */ type timestamp = (number); type file = ( any| (string)); type data_flagging_formula = ( ({"type": (`add-constant`),"value": (number),})| ({"type": (`multiply-constant`),"value": (number),})| ({"type": (`set-constant`),"value": (number),})| ({"type": (`original`),}));/** @description "dict of (key of gases, value as numeric reading)" */ type payloadData = (Record<string | number | symbol,  (number)>); type payload = ({"deviceId": (string),"deviceType": (string),"payload": ({"t": timestamp,"s": (Record<string | number | symbol,  (string)>),"d": payloadData,}),});/** @description "Compact Realtime data" */ type rawRealtimePayloadData = ({"keys": (Array< (string)>),"deviceId": (string),"deviceType": (string),"data": (Array</** @maxItems 2
 * @minItems 2 */ (Array< any>)>),});/** @maximum 33292598400000
 * @minimum 950918400000 */ type timestampMsSchema = (number);/** @default 2
 * @maximum 5
 * @minimum 0 */ type env_unit_precision = (number); type env_average_strategy = ( ({"type": (`avg`),})| ({"type": (`sum`),})| ({"type": (`wind-speed`),"bindKey": (string),})| ({"type": (`wind-direction`),"bindKey": (string),})); type env_conversion_strategy = ( ({"type": (`x`),})| ({"type": (`mx`),"m": (number),})| ({"type": (`mx+c`),"m": (number),"c": (number),})); type env_comparison_strategy = ( ({"type": (`compare`),})| ({"type": (`wind-speed`),"bindKey": (string),})| ({"type": (`wind-direction`),"bindKey": (string),})); type unit = ({"precision": env_unit_precision,"parameter_id": (string),"parameter_label": (string),"unit_id": (string),"unit_label": (string),"zones": ({"lower": (number),"next": (Array< ({"color": (string),"inverted_color": (string),"upper": (number),})>),}),"is_visible": (boolean),"description"?: (string)|null,"info_link"?: (string)|null,"auto_generated"?: (boolean)|null,"ref_key"?: (string)|null,"average_strategy": env_average_strategy,"conversion_strategy": env_conversion_strategy,"comparison_strategy": env_comparison_strategy,"thresholds": (Array< ({"label": (string),"limit": (number),"period_id": (string),"color": (string),})>),}); type env_aqi_standard_strategy = ({"type": (`standard`),"indexFormula"?: ("aqi"|"custom"),"zones": ({"lower": (number),"next": (Array< ({"label": (string),"color": (string),"inverted_color": (string),"upper": (number),})>),}),"sub_indexes": (Array< ({"parameter_id": (string),"unit_id": (string),"period_id": (string),"zones": ({"lower": (number),"next": (Array< ({"upper": (number),"message": (string),})>),}),})>),}); type env_aqi_strategy = ( env_aqi_standard_strategy| ({"type": (`aqhi`),"zones": ({"lower": (number),"next": (Array< ({"label": (string),"color": (string),"inverted_color": (string),"upper": (number),"message": (string),})>),}),})| ({"type": (`none`),})); type aqi = ({"aqi_id": (string),"createdByOrgId": (string)|null,"aqi_label": (string),"description"?: (string)|null,"info_link"?: (string)|null,"measure_strategy": env_aqi_strategy,}); type env_aqi_and_units = ({"units": (Record<string | number | symbol,  unit>),"aqi_sub_index": (boolean),"aqis": (Record<string | number | symbol,  aqi>),"device_aqi_ids": (Record<string | number | symbol,  (string)>),"device_type_aqi_ids": (Record<string | number | symbol,  (string)>),});/** @examples [{"Hi":"Hello","Num":0}] */ type CONFIG = (any);/** @examples [{"Hi":"Hello","Num":0}] */ type CB_CONFIG = (any); type env_process_type = ( ({"type": (`raw`),})| ({"type": (`avg`),"avg": (number),})| ({"type": (`moving-avg`),"avg": (number),"offset": (number),})); type env_filter_strategy = ( ({"type": (`none`),})| ({"type": (`daily`),"filter": (Array< ({"from": (number),"to": (number),})>),}));/** @tags ["🏭 PROJECT"]
 * @summary "ADD_DEVICES_Org"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"topLvOrg\": true\n}\n```"
 * @operationId "ADD_DEVICES_Org"
 * @security [{"WebAuthorization":[]},{}] */ export const ADD_DEVICES_Org = (function () {
        type Req = ({"params": ({"targetOrgId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"addDevices": (Array< ({"deviceId": (string),"dataFrom": ( timestampSchema| (null)),"latitude": (number)|null,"longitude": (number)|null,"loc": (string)|null,"label": (string)|null,"city": (string)|null,"country": (string)|null,})>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "ADD_DEVICES_Org",path: "/orgs/{targetOrgId}/devices",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🏭 PROJECT"]
 * @summary "ADD_ORG"
 * @operationId "ADD_ORG"
 * @security [{"SystemAuthorization":[]},{}] */ export const ADD_ORG = (function () {
        type Req = ({"params"?: ({}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"orgId": (string),"info": ({"logo_url"?: (string)|null,"plan"?: (number)|null,"expiry"?: (number)|null,"max_seats": (number),"max_api_calls": (number),"max_sms_count": (number),"map_layers"?: (Array< ({"dataUrl": (string),"layerType": (string),})>)|null,}),"contactNum": (string)|null,"contactName": (string)|null,"orgName": (string)|null,"orgAddr": (string)|null,/** @default null */"expireOn"?: (number)|null,}),"setModuleExpiry": (Array< ({"moduleId": id,"expiry_date": timestampSchema,/** @description "[null | undefined | true] is higher rank than [false]"
 * @default {} */"options"?: (Record<string | number | symbol,  (boolean)>)|null,})>),"userData": ({"aqi_index_ids"?: (Array< id>),"email": (string),"name": (string)|null,"company": (string)|null,"contact": (string)|null,"location": (string)|null,"city": (string)|null,"state": (string)|null,"country": (string)|null,"modules": (Array< id>),"thumb": (string)|null,"settings": ({"timezone"?: ({"name"?: (string)|null,})|null,"time_format"?: (number)|null,"language"?: (string)|null,"working_hours"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"after"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,"before"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,})>)|null,})|null,"password": encryptedPassword,}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "ADD_ORG",path: "/orgs",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["MODAL"]
 * @summary "CancelModal"
 * @operationId "CancelModal"
 * @security [{"SystemAuthorization":[]},{}] */ export const CancelModal = (function () {
        type Req = ({"params": ({"modalId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "CancelModal",path: "/modal/{modalId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Complain"]
 * @summary "ComplainReportPdf"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"org\": \"req=>req.path.orgId\"\n}\n```"
 * @operationId "ComplainReportPdf"
 * @security [{"WebAuthorization":[]},{}] */ export const ComplainReportPdf = (function () {
        type Req = ({"params"?: ({/** @default "YG20199999" */"orgId"?: (string),}),"query": ({/** @default "Oizom" */"org"?: (string),"timezone": (string),"gte": timestamp,"lte": timestamp,/** @default false */"isTwelveHourFormat"?: (boolean),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "ComplainReportPdf",path: "/orgs/{orgId}/complain/pdf",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["MODAL"]
 * @summary "CreateModal"
 * @operationId "CreateModal"
 * @security [{"SystemAuthorization":[]},{}] */ export const CreateModal = (function () {
        type Req = ({"params"?: ({}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"userId": id,"metaData"?: any,}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"modalId": (string),"heartbeatUrl": (string),"eventsUrl": (string),"heartbeatIntervalInSec": (number),}),});
        return new Endpoint({name: "CreateModal",path: "/modal",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Complain"]
 * @summary "DELETE_OrgsComplain"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"org\": \"req=>req.path.orgId\"\n}\n```"
 * @operationId "DELETE_OrgsComplain"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_OrgsComplain = (function () {
        type Req = ({"params": ({"complainId": id,"orgId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_OrgsComplain",path: "/orgs/{orgId}/complain/{complainId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Complain"]
 * @summary "PATCH_OrgsComplain"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"org\": \"req=>req.path.orgId\"\n}\n```"
 * @operationId "PATCH_OrgsComplain"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_OrgsComplain = (function () {
        type Req = ({"params": ({"complainId": id,"orgId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"categoryId"?: ( id| (null)),"title"?: (string)|null,"message"?: (string)|null,"latitude"?: (number)|null,"longitude"?: (number)|null,"sources"?: (string)|null,"email"?: (string)|null,"name"?: (string)|null,"priority"?: (string)|null,"assignedUserId"?: ( id| (null)),"status"?: (number)|null,"phoneNo"?: (string)|null,"end_date"?: ( timestamp| (null)),"image_url"?: (string)|null,}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_OrgsComplain",path: "/orgs/{orgId}/complain/{complainId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🙋 USER"]
 * @summary "DELETE_User"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_User"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_User = (function () {
        type Req = ({"params": ({"userId": id,"targetUserId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_User",path: "/users/{userId}/users/{targetUserId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🙋 USER"]
 * @summary "PATCH_User"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.body.setDevices?.map(x=>x.deviceId)\",\n\t\"deviceDataFrom\": \"req=>req.body.setDevices?.map(x=>x.dataFrom??0)\"\n}\n```"
 * @operationId "PATCH_User"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_User = (function () {
        type Req = ({"params": ({"userId": id,"targetUserId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"name"?: (string)|null,"company"?: (string)|null,"contact"?: (string)|null,"location"?: (string)|null,"city"?: (string)|null,"state"?: (string)|null,"country"?: (string)|null,"modules"?: (Array< id>),"thumb"?: (string)|null,"aqi_index_id"?: (Array< id>),"settings"?: ({"timezone"?: ({"name"?: (string)|null,})|null,"time_format"?: (number)|null,"language"?: (string)|null,"working_hours"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"after"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,"before"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,})>)|null,})|null,}),/** @minItems 1 */"setDevices"?: (Array< ({"deviceId": (string),"dataFrom": ( timestampSchema| (null)),})>),"updateModuleExpiry"?: (Array< ({"moduleId": id,"expiry_date": timestampSchema,/** @description "[null | undefined | true] is higher rank than [false]"
 * @default {} */"options"?: (Record<string | number | symbol,  (boolean)>)|null,})>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_User",path: "/users/{userId}/users/{targetUserId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Alert"]
 * @summary "DELETE_UsersAlert"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_UsersAlert"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_UsersAlert = (function () {
        type Req = ({"params": ({"userId": id,"alertId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_UsersAlert",path: "/users/{userId}/alerts/{alertId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Alert"]
 * @summary "PATCH_UsersAlert"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "PATCH_UsersAlert"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_UsersAlert = (function () {
        type Req = ({"params": ({"alertId": id,"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"label"?: (string)|null,"conditions"?: ({/** @description "If mentioned, then on trigger, there will be a cooldown/ignore period of given sec where the same alert will be skipped" */"intervalInSec"?: (number),"gt"?: (Record<string | number | symbol,  (number)>),"lt"?: (Record<string | number | symbol,  (number)>),}),"description"?: (string)|null,"email"?: (string)|null,"phone"?: (string)|null,"enable"?: (boolean),"deviceIds"?: (Array< (string)>),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_UsersAlert",path: "/users/{userId}/alerts/{alertId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Analytics"]
 * @summary "DELETE_UsersAnalytic"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_UsersAnalytic"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_UsersAnalytic = (function () {
        type Req = ({"params": ({"analyticsId": id,"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_UsersAnalytic",path: "/users/{userId}/analytics/{analyticsId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Analytics"]
 * @summary "PATCH_UsersAnalytic"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "PATCH_UsersAnalytic"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_UsersAnalytic = (function () {
        type Req = ({"params": ({"analyticsId": id,"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"analytics_type"?: (number)|null,"title"?: (string)|null,"description"?: (string)|null,"devices"?: (Array< (string)>),"params"?: any,"start_time"?: (number)|null,"end_time"?: (number)|null,}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_UsersAnalytic",path: "/users/{userId}/analytics/{analyticsId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Cluster"]
 * @summary "DELETE_UsersCluster"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_UsersCluster"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_UsersCluster = (function () {
        type Req = ({"params": ({"clusterId": (string),"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_UsersCluster",path: "/users/{userId}/cluster/{clusterId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Cluster"]
 * @summary "PATCH_UsersCluster"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "PATCH_UsersCluster"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_UsersCluster = (function () {
        type Req = ({"params": ({"clusterId": (string),"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"label"?: (string)|null,"description"?: (string)|null,"config"?: ({"radius": (number),"devices": (Array< (string)>),"latitude": (number),"longitude": (number),"timeDiff"?: (number)|null,"deviceType": (string),"geojson"?: any,"timezone"?: (string)|null,}),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_UsersCluster",path: "/users/{userId}/cluster/{clusterId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Dispersion"]
 * @summary "DELETE_UsersDispersionSource"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_UsersDispersionSource"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_UsersDispersionSource = (function () {
        type Req = ({"params": ({"userId": id,"dispersionId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_UsersDispersionSource",path: "/users/{userId}/dispersion-source/{dispersionId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Dispersion"]
 * @summary "PATCH_UsersDispersionSource"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "PATCH_UsersDispersionSource"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_UsersDispersionSource = (function () {
        type Req = ({"params": ({"userId": id,"dispersionId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"label"?: (string)|null,/** @minimum 0 */"area"?: (number),"latitude"?: (number),"longitude"?: (number),"height"?: (number)|null,"emission"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"time": ({"start": ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),}),"end": ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),}),}),"emission_rate": (Array< ({"param": (string),"value": (number),})>),})>),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_UsersDispersionSource",path: "/users/{userId}/dispersion-source/{dispersionId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Display"]
 * @summary "DELETE_UsersDisplay"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_UsersDisplay"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_UsersDisplay = (function () {
        type Req = ({"params": ({"userId": id,"displayId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_UsersDisplay",path: "/users/{userId}/displays_v2/{displayId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Display"]
 * @summary "PATCH_UsersDisplay"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "PATCH_UsersDisplay"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_UsersDisplay = (function () {
        type Req = ({"params": ({"displayId": id,"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"label"?: (string)|null,"options"?: any,"dataReq"?: (Array< ({"deviceId": (string),"processType": ("raw"|"avg"|"moving-avg"|"latest"),"avg"?: (number),"lteOffset": ("now()"|"now().startOfHour()"|"now().startOf30Minutes()"|"now().startOf15Minutes()"),"gteRange": (number),})>),"enable"?: (boolean),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_UsersDisplay",path: "/users/{userId}/displays_v2/{displayId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Heatmap"]
 * @summary "DELETE_UsersHeatmap"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_UsersHeatmap"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_UsersHeatmap = (function () {
        type Req = ({"params": ({"userId": id,"heatmapId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_UsersHeatmap",path: "/users/{userId}/heatmap/{heatmapId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Heatmap"]
 * @summary "PATCH_UsersHeatmap"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "PATCH_UsersHeatmap"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_UsersHeatmap = (function () {
        type Req = ({"params": ({"heatmapId": (string),"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"label"?: (string)|null,"devices"?: (Array< (string)>),"boundary"?: (Array< ({"lat": (number),"lon": (number),})>),"keyColorLimits"?: (Record<string | number | symbol,  (Array< ({"color": (string),"limit": (number),})>)>),"options"?: ({"image_encoder"?: (string),"coloring_type"?: (string),/** @maximum 1000
 * @minimum 100 */"color_accuracy"?: (number),/** @maximum 1500
 * @minimum 100 */"resolution"?: (number),/** @maximum 10
 * @minimum 1 */"dist_pov"?: (number),/** @maximum 10
 * @minimum 1 */"wind_pov"?: (number),/** @maximum 1000
 * @minimum -1000 */"wind_effect"?: (number),}),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_UsersHeatmap",path: "/users/{userId}/heatmap/{heatmapId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Log Book"]
 * @summary "DELETE_UsersLog"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_UsersLog"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_UsersLog = (function () {
        type Req = ({"params": ({"userId": id,"logId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_UsersLog",path: "/users/{userId}/device-log-book/{logId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Reports"]
 * @summary "DELETE_UsersReport"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "DELETE_UsersReport"
 * @security [{"WebAuthorization":[]},{}] */ export const DELETE_UsersReport = (function () {
        type Req = ({"params": ({"reportId": id,"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "DELETE_UsersReport",path: "/users/{userId}/reports/{reportId}",method: "delete",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Reports"]
 * @summary "PATCH_UsersReport"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "PATCH_UsersReport"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_UsersReport = (function () {
        type Req = ({"params": ({"reportId": id,"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"label"?: (string)|null,"period"?: ("daily"|"weekly"|"monthly"),"email"?: (string)|null,"enable"?: (boolean),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_UsersReport",path: "/users/{userId}/reports/{reportId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "EMAIL_QuickReport"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.body.userId\",\n\t\"device\": \"req=>req.body.deviceIds\"\n}\n```"
 * @operationId "EMAIL_QuickReport"
 * @security [{"WebAuthorization":[]},{}] */ export const EMAIL_QuickReport = (function () {
        type Req = ({"params"?: ({}),"query"?: ({/** @default true */"csv"?: (boolean),/** @default true */"pdf"?: (boolean),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @default true */"getLive"?: (boolean),"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"keys"?: (/** @minItems 1 */ (Array< (string)>)| (string)),"processType": ("raw"|"avg"|"moving-avg"),/** @minimum 60 */"avg"?: (number),/** @default false */"admin"?: (boolean),"userId": id,"email": (/** @format "email" */ (string)| (Array</** @format "email" */ (string)>)),/** @default "all" */"filter"?: ("all"|"valid"|"real"),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (string),});
        return new Endpoint({name: "EMAIL_QuickReport",path: "/devices/data/email",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🔐 AUTH"]
 * @summary "ForgotPassword"
 * @operationId "ForgotPassword"
 * @security [{},{}] */ export const ForgotPassword = (function () {
        type Req = ({"params"?: ({}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @format "email" */"email": (string),/** @format "uri" */"redirectUrl"?: (string),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (string),});
        return new Endpoint({name: "ForgotPassword",path: "/users/forgot-password",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Simulation Logs"]
 * @summary "GET_ALLSimulationLogs"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_ALLSimulationLogs"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_ALLSimulationLogs = (function () {
        type Req = ({"params": ({"userId": id,}),"query": ({"topic": ("dispersion"|"heatmap"),"gte": timestamp,"lte": timestamp,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"userId": id,"simulationId": id,"topic": ("dispersion"|"heatmap"),"options": ({"emission_data": (Array< ({"source_id": id,"label": (string),"latitude": (number),"longitude": (number),"emission_rate": (number),"height"?: (number),"area"?: (number),"start_time": (number),"end_time": (number),})>),"start_time": (number),"end_time": (number),"model": (string)|null,"parameter": (string),"transient_mode": (boolean)|null,"compute_type": ("concentration"|"tranjectory")|null,"resolution": (number),"interval": (number),}),"created_on": timestamp,})>),});
        return new Endpoint({name: "GET_ALLSimulationLogs",path: "/users/{userId}/simulation-logs",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Simulation Logs"]
 * @summary "POST_UsersSimulationLog"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_UsersSimulationLog"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersSimulationLog = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"topic": ("dispersion"|"heatmap"),"options": ({"emission_data"?: (Array< ({"source_id": id,"label": (string),"latitude": (number),"longitude": (number),"emission_rate": (number),"height"?: (number),"area"?: (number),"start_time": (number),"end_time": (number),})>),"start_time"?: (number),"end_time"?: (number),"model"?: (string)|null,"parameter"?: (string),"transient_mode"?: (boolean)|null,"compute_type"?: ("concentration"|"tranjectory")|null,"resolution"?: (number),"interval"?: (number),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersSimulationLog",path: "/users/{userId}/simulation-logs",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Dispersion"]
 * @summary "GET_AllDispersionSources"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_AllDispersionSources"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_AllDispersionSources = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"userId": id,"dispersionSourceId": id,"label": (string)|null,/** @minimum 0 */"area": (number),"latitude": (number),"longitude": (number),"height": (number)|null,"emission": (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"time": ({"start": ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),}),"end": ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),}),}),"emission_rate": (Array< ({"param": (string),"value": (number),})>),})>),"created_on": timestamp,"updated_on": timestamp,})>),});
        return new Endpoint({name: "GET_AllDispersionSources",path: "/users/{userId}/dispersion-sources",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_DeviceConfig"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\"\n}\n```"
 * @operationId "GET_DeviceConfig"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DeviceConfig = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"configId": ( id| (null)),"deviceId": (string),"deviceType": (string),"serial": (string)|null,"type": (number)|null,"macId": (string)|null,"config"?: any,"init"?: any,"soft"?: any,"metaData": ({"lat"?: (number)|null,"lon"?: (number)|null,"loc"?: (string)|null,"labels"?: (Array< ({"key": (string),"value": (string),})>)|null,"dataValidation"?: (Record<string | number | symbol,  data_flagging_formula>)|null,}),"updateNote": ({"note"?: (string),"userId"?: (number),}),}),});
        return new Endpoint({name: "GET_DeviceConfig",path: "/devices/{deviceId}/config",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "PUT_DeviceConfig"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\"\n}\n```"
 * @operationId "PUT_DeviceConfig"
 * @security [{"WebAuthorization":[]},{}] */ export const PUT_DeviceConfig = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"userId": id,"update_note": (string),"data": ({"deviceType"?: (string),"serial"?: (string)|null,"type"?: (number)|null,"macId"?: (string)|null,"config"?: any,"init"?: any,"soft"?: any,"meta_data"?: ({"lat"?: (number)|null,"lon"?: (number)|null,"loc"?: (string)|null,"labels"?: (Array< ({"key": (string),"value": (string),})>)|null,"dataValidation"?: (Record<string | number | symbol,  data_flagging_formula>)|null,}),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PUT_DeviceConfig",path: "/devices/{deviceId}/config",method: "put",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DeviceDataPredict"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>[req.path.deviceId]\"\n}\n```"
 * @operationId "GET_DeviceDataPredict"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DeviceDataPredict = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"userId": id,"lte"?: timestamp,"gte"?: timestamp,/** @default "TimesFM-HourlyForecastGteLte" */"source"?: ("Nixtla-HourlyForecastGteLte"|"TimesFM-HourlyForecastGteLte"|"OpenWether-HourlyForecast4Days"|"OpenWether-DailyForecast16Days"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< payload>),});
        return new Endpoint({name: "GET_DeviceDataPredict",path: "/devices/{deviceId}/predict",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DeviceDataPredictRaw"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>[req.path.deviceId]\"\n}\n```"
 * @operationId "GET_DeviceDataPredictRaw"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DeviceDataPredictRaw = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"userId": id,"lte"?: timestamp,"gte"?: timestamp,/** @default "TimesFM-HourlyForecastGteLte" */"source"?: ("Nixtla-HourlyForecastGteLte"|"TimesFM-HourlyForecastGteLte"|"OpenWether-HourlyForecast4Days"|"OpenWether-DailyForecast16Days"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< payload>),});
        return new Endpoint({name: "GET_DeviceDataPredictRaw",path: "/devices/{deviceId}/predict-raw",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DeviceDataPredictWether"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>[req.path.deviceId]\"\n}\n```"
 * @operationId "GET_DeviceDataPredictWether"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DeviceDataPredictWether = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"userId": id,"lte": timestamp,"gte": timestamp,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< payload>),});
        return new Endpoint({name: "GET_DeviceDataPredictWether",path: "/devices/{deviceId}/wether-predict",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Custom Reports"]
 * @summary "GET_DeviceSlaPdf"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_DeviceSlaPdf"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DeviceSlaPdf = (function () {
        type Req = ({"params"?: ({}),"query": ({"lte": timestamp,"gte": timestamp,"userId": id,"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_DeviceSlaPdf",path: "/devices/pdf/sla",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DevicesData"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_DevicesData"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DevicesData = (function () {
        type Req = ({"params"?: ({}),"query": ({/** @default true */"getLive"?: (boolean),/** @default "default" */"database"?: ("default"|"influx"),"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"userId": id,"lte"?: timestamp,"gte"?: timestamp,"keys"?: (/** @minItems 1 */ (Array< (string)>)| (string)),"aqiKey"?: (boolean),"processType": ("raw"|"avg"|"moving-avg"|"latest"),/** @minimum 60 */"avg"?: (number),/** @default false */"unitConversion"?: (boolean),/** @default "all" */"filter"?: ("all"|"valid"|"real"),/** @default "envizom" */"mode"?: ("envizom"|"admin"|"all"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"deviceId": (string),"payload": (Array< payload>),})>),});
        return new Endpoint({name: "GET_DevicesData",path: "/devices/data",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Data Flagging"]
 * @summary "POST_DeviceData"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.body.map(x=>x.deviceId)\",\n\t\"deviceDataFrom\": \"req=>req.body.map(x=>x.payload.d.t)\"\n}\n```"
 * @operationId "POST_DeviceData"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_DeviceData = (function () {
        type Req = ({"params"?: ({}),"query"?: ({"ttl"?: (number),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ( payload| (Array< payload>)),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (string),});
        return new Endpoint({name: "POST_DeviceData",path: "/devices/data",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DevicesDataCsv"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.path.deviceId\"\n}\n```"
 * @operationId "GET_DevicesDataCsv"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DevicesDataCsv = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({/** @default true */"getLive"?: (boolean),"lte": timestamp,"gte": timestamp,"keys"?: (/** @minItems 1 */ (Array< (string)>)| (string)),"processType": ("raw"|"avg"|"moving-avg"),/** @minimum 60 */"avg"?: (number),/** @default false */"admin"?: (boolean),"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`text/csv`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_DevicesDataCsv",path: "/devices/{deviceId}/csv",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Data Flagging"]
 * @summary "GET_DevicesDataFlagging"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.query.deviceId\"\n}\n```"
 * @operationId "GET_DevicesDataFlagging"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DevicesDataFlagging = (function () {
        type Req = ({"params": ({"userId": id,}),"query": ({"deviceId": (string),"lte": timestamp,"gte": timestamp,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"changes": (Array< ({"id": (string),"t": timestamp,"type": (number),"formula"?: data_flagging_formula,"userId": id,})>),"payload": (Array< payload>),}),});
        return new Endpoint({name: "GET_DevicesDataFlagging",path: "/users/{userId}/devices/data-flagging",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Data Flagging"]
 * @summary "POST_DeviceDataFlagging"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.body.deviceId\",\n\t\"deviceDataFrom\": \"req=>req.body.changes.map(x=>x.points.map(y=>y.t)).flat()\"\n}\n```"
 * @operationId "POST_DeviceDataFlagging"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_DeviceDataFlagging = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"deviceType": (string),"deviceId": (string),"changes": (Array< ({"points": (Array< ({"t": timestamp,"keys": (Array< (string)>),})>),"type": (number),"formula"?: data_flagging_formula,})>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (string),});
        return new Endpoint({name: "POST_DeviceDataFlagging",path: "/users/{userId}/devices/data-flagging",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DevicesDataInsights"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.path.deviceId\"\n}\n```"
 * @operationId "GET_DevicesDataInsights"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DevicesDataInsights = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"lte": timestamp,"gte": timestamp,"userId": id,"mode": ("predict"|"historical"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"title": (string),"description": (string),"gte": timestamp,"lte": timestamp,})>),});
        return new Endpoint({name: "GET_DevicesDataInsights",path: "/devices/{deviceId}/insights",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DevicesDataPdf"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.path.deviceId\"\n}\n```"
 * @operationId "GET_DevicesDataPdf"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DevicesDataPdf = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({/** @default true */"getLive"?: (boolean),"lte": timestamp,"gte": timestamp,"keys"?: (/** @minItems 1 */ (Array< (string)>)| (string)),"processType": ("raw"|"avg"|"moving-avg"),/** @minimum 60 */"avg"?: (number),/** @default false */"admin"?: (boolean),"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_DevicesDataPdf",path: "/devices/{deviceId}/pdf",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DevicesDataStats"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_DevicesDataStats"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DevicesDataStats = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"keys"?: (/** @minItems 1 */ (Array< (string)>)| (string)),/** @default "envizom" */"mode"?: ("envizom"|"admin"|"all"),"userId": id,/** @minimum 60 */"avg"?: (number),/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"min": (Array< payload>),"max": (Array< payload>),"avg": payload,"counts": (Record<string | number | symbol,  (number)>),"deviceId": (string),})>),});
        return new Endpoint({name: "GET_DevicesDataStats",path: "/devices/stats",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_DevicesRealtimeData"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceId\"\n}\n```"
 * @operationId "GET_DevicesRealtimeData"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DevicesRealtimeData = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceId": (string),"userId": id,"lte": timestamp,"gte": timestamp,"keys": (/** @minItems 1 */ (Array< (string)>)| (string)),/** @default false */"unitConversion"?: (boolean),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": rawRealtimePayloadData,});
        return new Endpoint({name: "GET_DevicesRealtimeData",path: "/devices/realtime-data",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Sensor"]
 * @summary "GET_DevicesSensorExpiry"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\"\n}\n```"
 * @operationId "GET_DevicesSensorExpiry"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DevicesSensorExpiry = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"key": (string)|null,"expiry": timestamp,"sensorId": (string),"updated_on": timestamp,"flabel": (string)|null,})>),});
        return new Endpoint({name: "GET_DevicesSensorExpiry",path: "/devices/{deviceId}/sensor/expiry",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Dispersion"]
 * @summary "GET_DispersionPlumeData"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_DispersionPlumeData"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_DispersionPlumeData = (function () {
        type Req = ({"params": ({"userId": id,"dispersionId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"t": timestamp,"base64": (string),"bbox": ({"north": (number),"south": (number),"east": (number),"west": (number),}),})>),});
        return new Endpoint({name: "GET_DispersionPlumeData",path: "/users/{userId}/dispersion/{dispersionId}/kmls",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Display"]
 * @summary "GET_DisplayFromToken"
 * @operationId "GET_DisplayFromToken"
 * @security [{},{}] */ export const GET_DisplayFromToken = (function () {
        type Req = ({"params": ({"token": (string),}),"query"?: ({/** @default "false" */"profile"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"org"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"devices"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"cluster"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"aqi_and_units"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"device_types"?: ("require"|"auto"|"false"|"true"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"display": ({"displayId": id,"userId": id,"label": (string)|null,"options"?: any,"dataReq": (Array< ({"deviceId": (string),"processType": ("raw"|"avg"|"moving-avg"|"latest"),"avg"?: (number),"lteOffset": ("now()"|"now().startOfHour()"|"now().startOf30Minutes()"|"now().startOf15Minutes()"),"gteRange": (number),})>),"enable": (boolean),"token": (string),"created_on": timestamp,"updated_on": timestamp,}),"dataRes": (Array< ({"deviceId": (string),"processType": ("raw"|"avg"|"moving-avg"|"latest"),"avg"?: (number),"lteOffset": ("now()"|"now().startOfHour()"|"now().startOf30Minutes()"|"now().startOf15Minutes()"),"gteRange": (number),"data": (Array< payload>),})>),"profile"?: ({"userId": id,"email": (string),"org": (string),"name": (string)|null,"password": ( encryptedPassword| (null)),"company": (string)|null,"contact": (string)|null,"location": (string)|null,"city": (string)|null,"state": (string)|null,"country": (string)|null,"modules": (Array< id>),"thumb": (string)|null,"role": (number)|null,"aqi_index_id": (Array< id>),"settings": ({"timezone"?: ({"name"?: (string)|null,})|null,"time_format"?: (number)|null,"language"?: (string)|null,"working_hours"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"after"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,"before"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,})>)|null,})|null,"clientId": (string)|null,"clientSecret": (string)|null,}),"org"?: ({"orgId": (string),"info": ({"logo_url"?: (string)|null,"plan"?: (number)|null,"expiry"?: (number)|null,"used_seats": (number),"max_seats": (number),"used_api_calls": (number),"max_api_calls": (number),"used_sms_count": (number),"max_sms_count": (number),"projects"?: (number)|null,"map_layers"?: (Array< ({"dataUrl": (string),"layerType": (string),})>)|null,}),"contactNum": (string)|null,"contactName": (string)|null,"email": (string)|null,"orgName": (string)|null,"orgAddr": (string)|null,"clientAppId": (string)|null,"clientOrgId": (string)|null,"clientType": (string)|null,"expireOn": (number)|null,"userId": id,"created_on": timestamp,"archived": (boolean),"archived_on": ( timestamp| (null)),"archivedBy": ( id| (null)),"topLevel": (boolean),}),"devices"?: (Array< ({"deviceId": (string),"userId": id,"deviceType": (string),"label": (string),"url": (string)|null,"isEnabled": (boolean)|null,"created_on": timestamp,"dataFrom": ( timestampSchema| (null)),"options": ({"deviceTags"?: (Array< (string)>)|null,"markedAsFavourite"?: (boolean)|null,})|null,"weather"?: (boolean),"interval"?: (number),"latitude": (number)|null,"longitude": (number)|null,"loc": (string)|null,"labels": (Array< ({"key": (string),"value": (string),})>)|null,"dataValidation"?: (Record<string | number | symbol,  data_flagging_formula>)|null,})>),"cluster"?: (Array< ({"clusterId": (string),"userId": id,"label": (string)|null,"description": (string)|null,"config": ({"radius": (number),"devices": (Array< (string)>),"latitude": (number),"longitude": (number),"timeDiff"?: (number)|null,"deviceType": (string),"geojson"?: any,"timezone"?: (string)|null,}),"created_on": timestamp,"updated_on": timestamp,})>),"aqi_and_units"?: env_aqi_and_units,"device_types"?: (Array< ({"deviceTypeId": id,"key": (string),"label": (string)|null,"index": (boolean)|null,"description": (string)|null,"updated_on": timestamp,"widgets": (Array< id>),"indexLabel": (string)|null,"config"?: CONFIG,"calibration_config"?: CB_CONFIG,})>),}),});
        return new Endpoint({name: "GET_DisplayFromToken",path: "/display/{token}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Heatmap"]
 * @summary "GET_HeatmapImages"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_HeatmapImages"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_HeatmapImages = (function () {
        type Req = ({"params": ({"userId": id,"heatmapId": (string),}),"query": ({/** @default false */"needCtx"?: (boolean),/** @default true */"needImg"?: (boolean),"lte": timestamp,"gte": timestamp,"processType": ("raw"|"avg"|"moving-avg"),/** @minimum 60 */"avg"?: (number),"deviceType": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< (Record<string | number | symbol,  (string)>)>),});
        return new Endpoint({name: "GET_HeatmapImages",path: "/users/{userId}/heatmap/{heatmapId}/images",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Heatmap"]
 * @summary "GET_HeatmapValues"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_HeatmapValues"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_HeatmapValues = (function () {
        type Req = ({"params": ({"userId": id,"heatmapId": (string),}),"query": ({"lte": timestamp,"gte": timestamp,"processType": ("raw"|"avg"|"moving-avg"),/** @minimum 60 */"avg"?: (number),/** @maximum 90
 * @minimum -90 */"lat": (number),/** @maximum 180
 * @minimum -180 */"lon": (number),"deviceType": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< (Record<string | number | symbol,  (number)>)>),});
        return new Endpoint({name: "GET_HeatmapValues",path: "/users/{userId}/heatmap/{heatmapId}/values",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Custom Reports"]
 * @summary "GET_NeomPdf1"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_NeomPdf1"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_NeomPdf1 = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_NeomPdf1",path: "/devices/pdf/neom1",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Custom Reports"]
 * @summary "GET_NeomPdf2"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_NeomPdf2"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_NeomPdf2 = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_NeomPdf2",path: "/devices/pdf/neom2",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Custom Reports"]
 * @summary "GET_NeomPdf3"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_NeomPdf3"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_NeomPdf3 = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_NeomPdf3",path: "/devices/pdf/neom3",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Custom Reports"]
 * @summary "GET_NeomPdf4"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_NeomPdf4"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_NeomPdf4 = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_NeomPdf4",path: "/devices/pdf/neom4",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Custom Reports"]
 * @summary "GET_NeomPdf5"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_NeomPdf5"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_NeomPdf5 = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_NeomPdf5",path: "/devices/pdf/neom5",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Custom Reports"]
 * @summary "GET_NeomPdf6"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_NeomPdf6"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_NeomPdf6 = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_NeomPdf6",path: "/devices/pdf/neom6",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Custom Reports"]
 * @summary "GET_NeomPdf7"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_NeomPdf7"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_NeomPdf7 = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"lte": timestamp,"gte": timestamp,"userId": id,/** @default "all" */"filter"?: ("all"|"valid"|"real"),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GET_NeomPdf7",path: "/devices/pdf/neom7",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Analytics"]
 * @summary "GET_OpenAirAnalytics"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_OpenAirAnalytics"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_OpenAirAnalytics = (function () {
        type Req = ({"params"?: ({}),"query": ({"deviceIds": (/** @minItems 1 */ (Array< (string)>)| (string)),"userId": id,"lte": timestamp,"gte": timestamp,"keys"?: (/** @minItems 1 */ (Array< (string)>)| (string)),"processType": ("raw"|"avg"|"moving-avg"|"latest"),/** @minimum 60 */"avg": (number),/** @default false */"unitConversion"?: (boolean),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Record<string | number | symbol,  ({"data": (Record<string | number | symbol,  (Record<string | number | symbol,  ( (string)| (Record<string | number | symbol,  (string)>))>)>),})>),});
        return new Endpoint({name: "GET_OpenAirAnalytics",path: "/analytics/openair/polar",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Complain"]
 * @summary "GET_OrgsAllComplains"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"org\": \"req=>req.path.orgId\"\n}\n```"
 * @operationId "GET_OrgsAllComplains"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_OrgsAllComplains = (function () {
        type Req = ({"params": ({"orgId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"complainId": id,"categoryId": ( id| (null)),"title": (string)|null,"message": (string)|null,"latitude": (number)|null,"longitude": (number)|null,"sources": (string)|null,"email": (string)|null,"name": (string)|null,"priority": (string)|null,"orgId": (string)|null,"assignedUserId": ( id| (null)),"status": (number)|null,"phoneNo": (string)|null,"end_date": ( timestamp| (null)),"created_on": timestamp,"image_url": (string)|null,"label": (string)|null,"assignedUserEmail": (string),})>),});
        return new Endpoint({name: "GET_OrgsAllComplains",path: "/orgs/{orgId}/complain",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Complain"]
 * @summary "POST_OrgsComplain"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"org\": \"req=>req.path.orgId\"\n}\n```"
 * @operationId "POST_OrgsComplain"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_OrgsComplain = (function () {
        type Req = ({"params": ({"orgId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"categoryId": ( id| (null)),"title": (string)|null,"message": (string)|null,"latitude": (number)|null,"longitude": (number)|null,"sources": (string)|null,"email": (string)|null,"name": (string)|null,"priority": (string)|null,"assignedUserId": ( id| (null)),"status": (number)|null,"phoneNo": (string)|null,"image_url": (string)|null,"end_date": ( timestamp| (null)),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_OrgsComplain",path: "/orgs/{orgId}/complain",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🙋 USER"]
 * @summary "GET_OrgsUsers"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_OrgsUsers"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_OrgsUsers = (function () {
        type Req = ({"params": ({"targetOrgId": (string),"userId": id,}),"query"?: ({"targetUserId"?: id,"need_devices"?: (boolean),"need_moduleExpiry"?: (boolean),"chained"?: (boolean),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"userId": id,"email": (string),"org": (string),"name": (string)|null,"company": (string)|null,"contact": (string)|null,"location": (string)|null,"city": (string)|null,"state": (string)|null,"country": (string)|null,"modules": (Array< id>),"thumb": (string)|null,"role": (number)|null,"aqi_index_id": (Array< id>),"clientId": (string)|null,"clientSecret": (string)|null,"settings": ({"timezone"?: ({"name"?: (string)|null,})|null,"time_format"?: (number)|null,"language"?: (string)|null,"working_hours"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"after"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,"before"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,})>)|null,})|null,"share_token"?: (string),"devices"?: (Array< ({"deviceId": (string),"userId": id,"deviceType": (string),"label": (string),"url": (string)|null,"isEnabled": (boolean)|null,"created_on": timestamp,"dataFrom": ( timestampSchema| (null)),"options": ({"deviceTags"?: (Array< (string)>)|null,"markedAsFavourite"?: (boolean)|null,})|null,})|null>),"moduleExpiry"?: (Array< ({"userId": id,"moduleId": id,"expiry_date": timestampSchema,/** @description "[null | undefined | true] is higher rank than [false]" */"options": (Record<string | number | symbol,  (boolean)>)|null,})>),})>),});
        return new Endpoint({name: "GET_OrgsUsers",path: "/users/{userId}/orgs/{targetOrgId}/users",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceCpuLoadUsage"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceCpuLoadUsage"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceCpuLoadUsage = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,"time_groupby": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"statement_id": (number),"Series": (Array< ({"name": (string),"columns": (Array< (string)>),"values": (Array< (Array< (number)|null>)>),})>)|null,"Messages": (null),}),});
        return new Endpoint({name: "GET_UserDeviceCpuLoadUsage",path: "/device/cpuloadusage/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceCpuUsage"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceCpuUsage"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceCpuUsage = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,"time_groupby": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"statement_id": (number),"Series": (Array< ({"name": (string),"columns": (Array< (string)>),"values": (Array< (Array< (number)|null>)>),})>)|null,"Messages": (null),}),});
        return new Endpoint({name: "GET_UserDeviceCpuUsage",path: "/device/cpuusage/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceDataConsumptionAccordingNetworkInterface"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceDataConsumptionAccordingNetworkInterface"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceDataConsumptionAccordingNetworkInterface = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,"networkinterface": (string),"time_groupby": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"statement_id": (number),"Series": (Array< ({"name": (string),"columns": (Array< (string)>),"values": (Array< (Array< (number)|null>)>),})>)|null,"Messages": (null),}),});
        return new Endpoint({name: "GET_UserDeviceDataConsumptionAccordingNetworkInterface",path: "/device/dataconsumption/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceDataNetworkSpeedAccordingNetworkInterface"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceDataNetworkSpeedAccordingNetworkInterface"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceDataNetworkSpeedAccordingNetworkInterface = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,"networkinterface": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"columns": (Array< (string)>),"data": (Array< (Array< (number)|null>)>),"tags": (string)|null,}),});
        return new Endpoint({name: "GET_UserDeviceDataNetworkSpeedAccordingNetworkInterface",path: "/device/networkspeed/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceDiskUsage"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceDiskUsage"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceDiskUsage = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,"time_groupby": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"statement_id": (number),"Series": (Array< ({"name": (string),"columns": (Array< (string)>),"values": (Array< (Array< (number)|null>)>),})>)|null,"Messages": (null),}),});
        return new Endpoint({name: "GET_UserDeviceDiskUsage",path: "/device/diskusage/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceEventInfo"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceEventInfo"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceEventInfo = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({/** @format "uuid" */"devId": (string),"dgpId": (string),"appId": (string),"subEventType": (number),"description": (string),"statusCode": (number),/** @format "date-time" */"timestamp": (string),"deviceName": ({"String": (string),"Valid": (boolean),}),"dgpName": ({"String": (string),"Valid": (boolean),}),"appName": ({"String": (string),"Valid": (boolean),}),"subEventTypeName": (string),"severityText": (string),"misc": ({"link": ({/** @format "uri" */"domain": (string),"path": (string),}),}),})>),});
        return new Endpoint({name: "GET_UserDeviceEventInfo",path: "/device/event/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceInfo"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceInfo"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceInfo = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"id"?: (string),"name"?: (string),"desc"?: (string),"profileid"?: (string),"profilename"?: (string),"mac"?: (string),"lastseen"?: (string),"status"?: (number),"geolocation"?: ({"location"?: ({"lat"?: (number),"lng"?: (number),}),"accuracy"?: (number),}),"sysinfo"?: ({"device"?: ({"net"?: ({"intf"?: (Array< ({"name"?: (string),"mac"?: (string),"ipv4"?: (Array< (string)>)|null,"ipv6"?: (Array< (string)>)|null,})>),}),"wifi"?: (Array< (string)>),"model"?: (string),"agent"?: ({"config_version"?: (string),"image_date"?: (string),"image_name"?: (string),"image_type"?: (number),"image_version"?: (string),}),"board"?: ({"board_name"?: (string),"board_vendor"?: (string),"product_name"?: (string),}),}),"conf"?: (null),"tags2"?: (Array< ({"name"?: (string),"data"?: (string),"description"?: (string),})>),"mender_attributes"?: (Array< ({"name"?: (string),"value"?: (string),"scope"?: (string),})>),"tamper"?: ({"state"?: (string),"id"?: (string),}),}),"createdat"?: (string),}),});
        return new Endpoint({name: "GET_UserDeviceInfo",path: "/device/info/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceLastDowntime"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceLastDowntime"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceLastDowntime = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"deviceLastDowntime": (number),}),});
        return new Endpoint({name: "GET_UserDeviceLastDowntime",path: "/device/lastdowntime/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceMemoryUsage"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceMemoryUsage"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceMemoryUsage = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,"time_groupby": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"statement_id": (number),"Series": (Array< ({"name": (string),"columns": (Array< (string)>),"values": (Array< (Array< (number)|null>)>),})>)|null,"Messages": (null),}),});
        return new Endpoint({name: "GET_UserDeviceMemoryUsage",path: "/device/memoryusage/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceNetworkInterface"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceNetworkInterface"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceNetworkInterface = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"statement_id": (number),"Series": (Array< ({"name": (string),"tags": ({"interface": (string),}),"columns": (Array< (string)>),"values": (Array< (Array< (number)|null>)>),})>)|null,"Messages": (null),}),});
        return new Endpoint({name: "GET_UserDeviceNetworkInterface",path: "/device/getnetworkinterface/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UserDeviceUptime"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UserDeviceUptime"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UserDeviceUptime = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({"gte": timestamp,"lte": timestamp,"time_groupby": (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"statement_id": (number),"Series": (Array< ({"name": (string),"columns": (Array< (string)>),"values": (Array< (Array< (number)|null>)>),})>)|null,"Messages": (string)|null,}),});
        return new Endpoint({name: "GET_UserDeviceUptime",path: "/device/uptime/{deviceId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Alert"]
 * @summary "GET_UsersAllAlerts"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_UsersAllAlerts"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersAllAlerts = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"alertId": id,"label": (string)|null,/** @description "If set to \"raw\", ie, will be trigger every payload regardless of incomming payload interval." */"period": ("15min"|"hr"|"daily"|"8hr"|"raw"|"3hr"),"deviceTypeId": (number),"conditions": ({/** @description "If mentioned, then on trigger, there will be a cooldown/ignore period of given sec where the same alert will be skipped" */"intervalInSec"?: (number),"gt"?: (Record<string | number | symbol,  (number)>),"lt"?: (Record<string | number | symbol,  (number)>),}),"description": (string)|null,"userId": id,"email": (string)|null,"phone": (string)|null,"enable": (boolean),"deviceIds": (Array< (string)>),"created_on": timestamp,"updated_on": timestamp,})>),});
        return new Endpoint({name: "GET_UsersAllAlerts",path: "/users/{userId}/alerts",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Alert"]
 * @summary "POST_UsersAlert"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_UsersAlert"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersAlert = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"label": (string)|null,/** @description "If set to \"raw\", ie, will be trigger every payload regardless of incomming payload interval." */"period": ("15min"|"hr"|"daily"|"8hr"|"raw"|"3hr"),"deviceTypeId": (number),"conditions": ({/** @description "If mentioned, then on trigger, there will be a cooldown/ignore period of given sec where the same alert will be skipped" */"intervalInSec"?: (number),"gt"?: (Record<string | number | symbol,  (number)>),"lt"?: (Record<string | number | symbol,  (number)>),}),"description": (string)|null,"email": (string)|null,"phone": (string)|null,"deviceIds": (Array< (string)>),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersAlert",path: "/users/{userId}/alerts",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Analytics"]
 * @summary "GET_UsersAllAnalytics"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_UsersAllAnalytics"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersAllAnalytics = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"analyticsId": id,"analytics_type": (number)|null,"title": (string)|null,"description": (string)|null,"devices": (Array< (string)>),"params"?: any,"start_time": (number)|null,"end_time": (number)|null,"userId": ( id| (null)),"updated_on": ( timestamp| (null)),})>),});
        return new Endpoint({name: "GET_UsersAllAnalytics",path: "/users/{userId}/analytics",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Analytics"]
 * @summary "POST_UsersAnalytic"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_UsersAnalytic"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersAnalytic = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"analytics_type": (number)|null,"title": (string)|null,"description": (string)|null,"devices": (Array< (string)>),"params"?: any,"start_time": (number)|null,"end_time": (number)|null,}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersAnalytic",path: "/users/{userId}/analytics",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Display"]
 * @summary "GET_UsersAllDisplays"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_UsersAllDisplays"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersAllDisplays = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"displayId": id,"userId": id,"label": (string)|null,"options"?: any,"dataReq": (Array< ({"deviceId": (string),"processType": ("raw"|"avg"|"moving-avg"|"latest"),"avg"?: (number),"lteOffset": ("now()"|"now().startOfHour()"|"now().startOf30Minutes()"|"now().startOf15Minutes()"),"gteRange": (number),})>),"enable": (boolean),"token": (string),"created_on": timestamp,"updated_on": timestamp,})>),});
        return new Endpoint({name: "GET_UsersAllDisplays",path: "/users/{userId}/displays_v2",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Display"]
 * @summary "POST_UsersDisplay"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_UsersDisplay"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersDisplay = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"label": (string)|null,"options"?: any,"dataReq": (Array< ({"deviceId": (string),"processType": ("raw"|"avg"|"moving-avg"|"latest"),"avg"?: (number),"lteOffset": ("now()"|"now().startOfHour()"|"now().startOf30Minutes()"|"now().startOf15Minutes()"),"gteRange": (number),})>),/** @default true */"enable"?: (boolean),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersDisplay",path: "/users/{userId}/displays_v2",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Heatmap"]
 * @summary "GET_UsersAllHeatmap"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_UsersAllHeatmap"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersAllHeatmap = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"heatmapId": (string),"label": (string)|null,"userId": id,"boundary": (Array< ({"lat": (number),"lon": (number),})>),"devices": (Array< (string)>),"deviceTypeId": (number),"keyColorLimits": (Record<string | number | symbol,  (Array< ({"color": (string),"limit": (number),})>)>),"options": ({"image_encoder"?: (string),"coloring_type"?: (string),/** @maximum 1000
 * @minimum 100 */"color_accuracy"?: (number),/** @maximum 1500
 * @minimum 100 */"resolution"?: (number),/** @maximum 10
 * @minimum 1 */"dist_pov"?: (number),/** @maximum 10
 * @minimum 1 */"wind_pov"?: (number),/** @maximum 1000
 * @minimum -1000 */"wind_effect"?: (number),}),"created_on": timestamp,"updated_on": timestamp,})>),});
        return new Endpoint({name: "GET_UsersAllHeatmap",path: "/users/{userId}/heatmap",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Heatmap"]
 * @summary "POST_UsersHeatmap"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_UsersHeatmap"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersHeatmap = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"devices": (Array< (string)>),"label": (string)|null,"boundary": (Array< ({"lat": (number),"lon": (number),})>),"deviceTypeId": (number),/** @default {} */"keyColorLimits"?: (Record<string | number | symbol,  (Array< ({"color": (string),"limit": (number),})>)>),"options": ({"image_encoder"?: (string),"coloring_type"?: (string),/** @maximum 1000
 * @minimum 100 */"color_accuracy"?: (number),/** @maximum 1500
 * @minimum 100 */"resolution"?: (number),/** @maximum 10
 * @minimum 1 */"dist_pov"?: (number),/** @maximum 10
 * @minimum 1 */"wind_pov"?: (number),/** @maximum 1000
 * @minimum -1000 */"wind_effect"?: (number),}),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersHeatmap",path: "/users/{userId}/heatmap",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Log Book"]
 * @summary "GET_UsersAllLogs"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.query.deviceIds\"\n}\n```"
 * @operationId "GET_UsersAllLogs"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersAllLogs = (function () {
        type Req = ({"params": ({"userId": id,}),"query": ({"deviceIds"?: (/** @minItems 1 */ (Array< (string)>)| (string)),"topics"?: (/** @minItems 1 */ (Array< (string)>)| (string)),"targetUserIds"?: (/** @minItems 1 */ (Array< id>)| (string)),"gte": timestamp,"lte": timestamp,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"logId": id,"userId": ( id| (null)),"name": (string)|null,"email": (string),"topic": (string),"deviceId": (string),"note"?: any,"created_on": timestamp,"deleted_on": ( timestamp| (null)),})>),});
        return new Endpoint({name: "GET_UsersAllLogs",path: "/users/{userId}/device-log-book",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Log Book"]
 * @summary "POST_UsersLog"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.body.data.map(x=>x.deviceId)\"\n}\n```"
 * @operationId "POST_UsersLog"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersLog = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": (Array< ({"topic": (string),"deviceId": (string),"note"?: any,})>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersLog",path: "/users/{userId}/device-log-book",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Notification"]
 * @summary "GET_UsersAllNotifications"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_UsersAllNotifications"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersAllNotifications = (function () {
        type Req = ({"params": ({"userId": (number),}),"query": ({"gte": timestamp,"lte": timestamp,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"userId"?: id,"type": (number)|null,"deviceId": (string),"key": (string),"value": (number),"t": timestamp,"limitValue"?: (number),"operation": (string),"alertId": (number),"period"?: (string),})>),});
        return new Endpoint({name: "GET_UsersAllNotifications",path: "/users/{userId}/notifications",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🏭 PROJECT"]
 * @summary "GET_UsersAllOrgs"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_UsersAllOrgs"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersAllOrgs = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({"filter"?: (string),"targetOrgId"?: (string),"chained"?: (boolean),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"orgId": (string),"info": ({"logo_url"?: (string)|null,"plan"?: (number)|null,"expiry"?: (number)|null,"used_seats": (number),"max_seats": (number),"used_api_calls": (number),"max_api_calls": (number),"used_sms_count": (number),"max_sms_count": (number),"projects"?: (number)|null,"map_layers"?: (Array< ({"dataUrl": (string),"layerType": (string),})>)|null,}),"contactNum": (string)|null,"contactName": (string)|null,"email": (string)|null,"orgName": (string)|null,"orgAddr": (string)|null,"clientAppId": (string)|null,"clientOrgId": (string)|null,"clientType": (string)|null,"expireOn": (number)|null,"userId": id,"created_on": timestamp,"archived": (boolean),"archived_on": ( timestamp| (null)),"archivedBy": ( id| (null)),"masterOrgId": (string),})>),});
        return new Endpoint({name: "GET_UsersAllOrgs",path: "/users/{userId}/orgs",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🏭 PROJECT"]
 * @summary "POST_Org"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.body.setDevices.map(x=>x.deviceId)\",\n\t\"deviceDataFrom\": \"req=>req.body.setDevices.map(x=>x.dataFrom??0)\"\n}\n```"
 * @operationId "POST_Org"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_Org = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"orgId": (string),"info": ({"logo_url"?: (string)|null,"plan"?: (number)|null,"expiry"?: (number)|null,"max_seats": (number),"max_api_calls": (number),"max_sms_count": (number),"map_layers"?: (Array< ({"dataUrl": (string),"layerType": (string),})>)|null,}),"contactNum": (string)|null,"contactName": (string)|null,"orgName": (string)|null,"orgAddr": (string)|null,/** @default null */"expireOn"?: (number)|null,}),"setDevices": (Array< ({"deviceId": (string),"dataFrom": ( timestampSchema| (null)),})>),"setModuleExpiry": (Array< ({"moduleId": id,"expiry_date": timestampSchema,/** @description "[null | undefined | true] is higher rank than [false]"
 * @default {} */"options"?: (Record<string | number | symbol,  (boolean)>)|null,})>),"userData": ({"aqi_index_ids"?: (Array< id>),"email": (string),"name": (string)|null,"company": (string)|null,"contact": (string)|null,"location": (string)|null,"city": (string)|null,"state": (string)|null,"country": (string)|null,"modules": (Array< id>),"thumb": (string)|null,"settings": ({"timezone"?: ({"name"?: (string)|null,})|null,"time_format"?: (number)|null,"language"?: (string)|null,"working_hours"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"after"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,"before"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,})>)|null,})|null,"password": encryptedPassword,}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_Org",path: "/users/{userId}/orgs",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Reports"]
 * @summary "GET_UsersAllReports"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_UsersAllReports"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersAllReports = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"reportId": id,"label": (string)|null,"period": ("daily"|"weekly"|"monthly"),"deviceId": (string),"userId": id,"email": (string)|null,"enable": (boolean),"created_on": timestamp,"updated_on": timestamp,})>),});
        return new Endpoint({name: "GET_UsersAllReports",path: "/users/{userId}/reports",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Reports"]
 * @summary "POST_UsersReport"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_UsersReport"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersReport = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @minItems 1 */"dataList": (Array< ({"label": (string)|null,"period": ("daily"|"weekly"|"monthly"),"deviceId": (string),"email": (string)|null,})>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersReport",path: "/users/{userId}/reports",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "GET_UsersDeviceProfile"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "GET_UsersDeviceProfile"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersDeviceProfile = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"id": (string),"profileId": (string),/** @format "uri" */"validUrl": (string),"validToken": (string),/** @format "uri" */"terminal": (string),}),});
        return new Endpoint({name: "GET_UsersDeviceProfile",path: "/devices/{deviceId}/profile",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Notification"]
 * @summary "GET_UsersNotificationsLastSeen"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_UsersNotificationsLastSeen"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersNotificationsLastSeen = (function () {
        type Req = ({"params": ({"userId": (number),}),"query": ({"topics": (/** @minItems 1 */ (Array< (string)>)| (string)),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"topic": (string),"ts": ( timestamp| (null)),})>),});
        return new Endpoint({name: "GET_UsersNotificationsLastSeen",path: "/users/{userId}/last-seen",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Notification"]
 * @summary "PUT_UsersNotificationsLastSeen"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "PUT_UsersNotificationsLastSeen"
 * @security [{"WebAuthorization":[]},{}] */ export const PUT_UsersNotificationsLastSeen = (function () {
        type Req = ({"params": ({"userId": (number),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @default 2592000
 * @maximum 2592000
 * @minimum 86400 */"ttlInSec"?: (number),"data": (Array< ({"topic": (string),"ts": timestamp,})>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PUT_UsersNotificationsLastSeen",path: "/users/{userId}/last-seen",method: "put",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🙋 USER","V2 Web Apis"]
 * @summary "GET_UsersOverviewV2"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req2=>req2.path.userId\"\n}\n```"
 * @operationId "GET_UsersOverviewV2"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_UsersOverviewV2 = (function () {
        type Req = ({"params": ({"userId": (number),}),"query"?: ({/** @default "false" */"device_types"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"complain_categories"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"latest_features"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"modules"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"widgets"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"profile"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"cluster"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"devices"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"aqi_and_units"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"module_expiry"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"org"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"master_org"?: ("require"|"auto"|"false"|"true"),/** @default "false" */"preferences"?: ("require"|"auto"|"false"|"true"),"lastUpdatedToken"?: (string),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"module_expiry"?: (Array< ({"userId": id,"moduleId": id,"expiry_date": timestampSchema,/** @description "[null | undefined | true] is higher rank than [false]" */"options": (Record<string | number | symbol,  (boolean)>)|null,})>),"device_types"?: (Array< ({"deviceTypeId": id,"key": (string),"label": (string)|null,"index": (boolean)|null,"description": (string)|null,"updated_on": timestamp,"widgets": (Array< id>),"indexLabel": (string)|null,"config"?: CONFIG,"calibration_config"?: CB_CONFIG,})>),"profile"?: ({"userId": id,"email": (string),"org": (string),"name": (string)|null,"password": ( encryptedPassword| (null)),"company": (string)|null,"contact": (string)|null,"location": (string)|null,"city": (string)|null,"state": (string)|null,"country": (string)|null,"modules": (Array< id>),"thumb": (string)|null,"role": (number)|null,"aqi_index_id": (Array< id>),"settings": ({"timezone"?: ({"name"?: (string)|null,})|null,"time_format"?: (number)|null,"language"?: (string)|null,"working_hours"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"after"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,"before"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,})>)|null,})|null,"clientId": (string)|null,"clientSecret": (string)|null,}),"org"?: ({"orgId": (string),"info": ({"logo_url"?: (string)|null,"plan"?: (number)|null,"expiry"?: (number)|null,"used_seats": (number),"max_seats": (number),"used_api_calls": (number),"max_api_calls": (number),"used_sms_count": (number),"max_sms_count": (number),"projects"?: (number)|null,"map_layers"?: (Array< ({"dataUrl": (string),"layerType": (string),})>)|null,}),"contactNum": (string)|null,"contactName": (string)|null,"email": (string)|null,"orgName": (string)|null,"orgAddr": (string)|null,"clientAppId": (string)|null,"clientOrgId": (string)|null,"clientType": (string)|null,"expireOn": (number)|null,"userId": id,"created_on": timestamp,"archived": (boolean),"archived_on": ( timestamp| (null)),"archivedBy": ( id| (null)),"topLevel": (boolean),}),"master_org"?: ({"orgId": (string),"info": ({"logo_url"?: (string)|null,"plan"?: (number)|null,"expiry"?: (number)|null,"used_seats": (number),"max_seats": (number),"used_api_calls": (number),"max_api_calls": (number),"used_sms_count": (number),"max_sms_count": (number),"projects"?: (number)|null,"map_layers"?: (Array< ({"dataUrl": (string),"layerType": (string),})>)|null,}),"contactNum": (string)|null,"contactName": (string)|null,"email": (string)|null,"orgName": (string)|null,"orgAddr": (string)|null,"clientAppId": (string)|null,"clientOrgId": (string)|null,"clientType": (string)|null,"expireOn": (number)|null,"userId": id,"created_on": timestamp,"archived": (boolean),"archived_on": ( timestamp| (null)),"archivedBy": ( id| (null)),"topLevel": (boolean),}),"aqi_and_units"?: env_aqi_and_units,"complain_categories"?: (Array< ({"categoryId": id,"label": (string)|null,"orgId": (string),"userId": id,})>),"latest_features"?: (Array< ({"featureId": id,"features": (Record<string | number | symbol,  (Array< (string)>)>),"release_date": ( timestamp| (null)),"latest": (boolean),"updated_on": timestamp,"created_on": timestamp,"version": (string)|null,})>),"modules"?: (Array< ({"moduleId": id,"name": (string)|null,"description": (string)|null,"path": (string)|null,})>),"widgets"?: (Array< ({"widgetId": id,"label": (string),"description": (string)|null,"config": ({"subTitle"?: (string)|null,}),"updated_on": ( timestamp| (null)),})>),"cluster"?: (Array< ({"clusterId": (string),"userId": id,"label": (string)|null,"description": (string)|null,"config": ({"radius": (number),"devices": (Array< (string)>),"latitude": (number),"longitude": (number),"timeDiff"?: (number)|null,"deviceType": (string),"geojson"?: any,"timezone"?: (string)|null,}),"created_on": timestamp,"updated_on": timestamp,})>),"preferences"?: (Array< ({"user_id": (number),"topic": (string),"data"?: any,})>),"devices"?: (Array< ({"deviceId": (string),"userId": id,"deviceType": (string),"label": (string),"url": (string)|null,"isEnabled": (boolean)|null,"created_on": timestamp,"dataFrom": ( timestampSchema| (null)),"options": ({"deviceTags"?: (Array< (string)>)|null,"markedAsFavourite"?: (boolean)|null,})|null,"weather"?: (boolean),"interval"?: (number),"latitude": (number)|null,"longitude": (number)|null,"loc": (string)|null,"labels": (Array< ({"key": (string),"value": (string),})>)|null,"dataValidation"?: (Record<string | number | symbol,  data_flagging_formula>)|null,})>),"lastUpdatedToken"?: (string),}),});
        return new Endpoint({name: "GET_UsersOverviewV2",path: "/users/{userId}/overview/v2",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Units"]
 * @summary "GET_ValidEnv"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"org\": \"req=>req.path.org_id\"\n}\n```"
 * @operationId "GET_ValidEnv"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_ValidEnv = (function () {
        type Req = ({"params": ({"org_id": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"parameters": (Array< ({"parameter_id": (string),"org_id": (string)|null,"label": (string),"is_visible": (boolean),"error"?: (string),"details": ({"description"?: (string)|null,"info_link"?: (string)|null,"average_strategy": env_average_strategy,"comparison_strategy": env_comparison_strategy,"zones": ({"lower": (number),"next": (Array< ({"color": (string),"inverted_color": (string),"upper": (number),})>),}),"units": (Array< ({"unit_id": (string),"conversion_strategy": env_conversion_strategy,"label": (string),})>),}),})>),"aqis": (Array< ({"aqi_id": (string),"org_id": (string)|null,"label": (string),"error"?: (string),"details": ({"allowed_device_types"?: (Array< (string)>),"description"?: (string)|null,"info_link"?: (string)|null,"measure_strategy": env_aqi_strategy,}),})>),"periods": (Array< ({"period_id": (string),"org_id": (string)|null,"label": (string),"details": ({"process_type": env_process_type,"filter_strategy": env_filter_strategy,}),})>),"invalidAqis": (Array< ({"aqi_id": (string),"org_id": (string)|null,"label": (string),"error"?: (string),"details": ({"allowed_device_types"?: (Array< (string)>),"description"?: (string)|null,"info_link"?: (string)|null,"measure_strategy": env_aqi_strategy,}),})>),}),});
        return new Endpoint({name: "GET_ValidEnv",path: "/org/{org_id}/valid_env",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device Data"]
 * @summary "GET_WeatherDataByBoundingBox"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GET_WeatherDataByBoundingBox"
 * @security [{"WebAuthorization":[]},{}] */ export const GET_WeatherDataByBoundingBox = (function () {
        type Req = ({"params": ({"userId": id,}),"query": ({"north": (number),"south": (number),"east": (number),"west": (number),} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"lat": (number),"lon": (number),"ws": (number),"wd": (number),})>),});
        return new Endpoint({name: "GET_WeatherDataByBoundingBox",path: "/users/{userId}/weather/wind",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Workers"]
 * @summary "GeneratePdf"
 * @operationId "GeneratePdf"
 * @security [{"SystemAuthorization":[]},{}] */ export const GeneratePdf = (function () {
        type Req = ({"params"?: ({}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"logo_url": (string)|null,"body": (string),"head"?: (string),"fileName": (string),}),});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "GeneratePdf",path: "/pdf",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Workers"]
 * @summary "GetPdfPayload"
 * @operationId "GetPdfPayload"
 * @security [{},{}] */ export const GetPdfPayload = (function () {
        type Req = ({"params": ({/** @format "uuid" */"payloadId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"body": (string),"head"?: (string),"logo_url": (string)|null,}),});
        return new Endpoint({name: "GetPdfPayload",path: "/pdf/{payloadId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["MODAL"]
 * @summary "GetUserModals"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "GetUserModals"
 * @security [{"WebAuthorization":[]},{}] */ export const GetUserModals = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({"modalId"?: id,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (Array< ({"lastHeartbeatEpoch": (number),"events": (Array< ({"type": (string),"message": (string),"data"?: any,"epoch": (number),})>),"createdAtEpoch": (number),"metaData"?: any,"cancelledAtEpoch"?: (number),"modalId": (string),"isAborted": (boolean)|null,})>),});
        return new Endpoint({name: "GetUserModals",path: "/modal/{userId}",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🔐 AUTH","V2 Web Apis"]
 * @summary "LoginV2"
 * @operationId "LoginV2"
 * @security [{},{}] */ export const LoginV2 = (function () {
        type Req = ({"params"?: ({}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @format "email" */"email"?: (string),"password"?: encryptedPassword,"recaptcha"?: (string),"share_token"?: (string),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"userId": id,"token": ({"access_token": (string),"expires_in": (number),}),}),});
        return new Endpoint({name: "LoginV2",path: "/users/login/v2",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["MODAL"]
 * @summary "ModalEvents"
 * @operationId "ModalEvents"
 * @security [{},{}] */ export const ModalEvents = (function () {
        type Req = ({"params": ({"modalId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"type": (string),"message": (string),"data"?: any,"epoch": timestamp,}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "ModalEvents",path: "/modal/{modalId}/events",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["MODAL"]
 * @summary "ModalHeartbeat"
 * @operationId "ModalHeartbeat"
 * @security [{},{}] */ export const ModalHeartbeat = (function () {
        type Req = ({"params": ({"modalId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"epoch": timestamp,}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "ModalHeartbeat",path: "/modal/{modalId}/heartbeat",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Units"]
 * @summary "PATCH_EnvAqi"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"org\": \"req=>req.path.org_id\"\n}\n```"
 * @operationId "PATCH_EnvAqi"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_EnvAqi = (function () {
        type Req = ({"params": ({"aqi_id": (string),"org_id": (string)|null,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"update": ({"label": (string),"error"?: (string),"details": ({"allowed_device_types"?: (Array< (string)>),"description"?: (string)|null,"info_link"?: (string)|null,"measure_strategy": env_aqi_strategy,}),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        return new Endpoint({name: "PATCH_EnvAqi",path: "/org/{org_id}/env_aqi/{aqi_id}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🏭 PROJECT"]
 * @summary "PATCH_Org"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.body.setDevices?.map(x=>x.deviceId)\",\n\t\"deviceDataFrom\": \"req=>req.body.setDevices?.map(x=>x.dataFrom??0)\"\n}\n```"
 * @operationId "PATCH_Org"
 * @security [{"WebAuthorization":[]},{}] */ export const PATCH_Org = (function () {
        type Req = ({"params": ({"userId": id,"targetOrgId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"targetUserId": id,"update": ({"info": ({"logo_url"?: (string)|null,"plan"?: (number)|null,"expiry"?: (number)|null,"max_seats"?: (number),"max_api_calls"?: (number),"max_sms_count"?: (number),"map_layers"?: (Array< ({"dataUrl": (string),"layerType": (string),})>)|null,}),"contact_num"?: (string)|null,"contact_name"?: (string)|null,"org_name"?: (string)|null,"org_addr"?: (string)|null,/** @default null */"expireOn"?: (number)|null,}),"updateUser": ({"name"?: (string)|null,"company"?: (string)|null,"contact"?: (string)|null,"location"?: (string)|null,"city"?: (string)|null,"state"?: (string)|null,"country"?: (string)|null,"modules"?: (Array< id>),"thumb"?: (string)|null,"aqi_index_id"?: (Array< id>),"settings"?: ({"timezone"?: ({"name"?: (string)|null,})|null,"time_format"?: (number)|null,"language"?: (string)|null,"working_hours"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"after"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,"before"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,})>)|null,})|null,}),/** @minItems 1 */"setDevices"?: (Array< ({"deviceId": (string),"dataFrom": ( timestampSchema| (null)),})>),"updateModuleExpiry"?: (Array< ({"moduleId": id,"expiry_date": timestampSchema,/** @description "[null | undefined | true] is higher rank than [false]"
 * @default {} */"options"?: (Record<string | number | symbol,  (boolean)>)|null,})>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PATCH_Org",path: "/users/{userId}/orgs/{targetOrgId}",method: "patch",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Data Flagging"]
 * @summary "POST_DeviceDataUpload"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.body.deviceId\",\n\t\"deviceDataFrom\": \"req=>req.body.payload.map(x=>x.payload.d.t)\"\n}\n```"
 * @operationId "POST_DeviceDataUpload"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_DeviceDataUpload = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"deviceType": (string),"deviceId": (string),"payload": (Array< payload>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (string),});
        return new Endpoint({name: "POST_DeviceDataUpload",path: "/users/{userId}/devices/data-upload",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Data Flagging"]
 * @summary "POST_DeviceDataValidation"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.path.deviceId\"\n}\n```"
 * @operationId "POST_DeviceDataValidation"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_DeviceDataValidation = (function () {
        type Req = ({"params": ({"userId": id,"deviceId": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"dataValidation": (Record<string | number | symbol,  data_flagging_formula>),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (string),});
        return new Endpoint({name: "POST_DeviceDataValidation",path: "/users/{userId}/devices/{deviceId}/data-validation",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Units"]
 * @summary "POST_EnvAqi"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"org\": \"req=>req.path.org_id\"\n}\n```"
 * @operationId "POST_EnvAqi"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_EnvAqi = (function () {
        type Req = ({"params": ({"org_id": (string)|null,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"label": (string),"error"?: (string),"details": ({"allowed_device_types"?: (Array< (string)>),"description"?: (string)|null,"info_link"?: (string)|null,"measure_strategy": env_aqi_strategy,}),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        return new Endpoint({name: "POST_EnvAqi",path: "/org/{org_id}/env_aqi",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Alert"]
 * @summary "POST_MigrateUsersAllAlerts"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_MigrateUsersAllAlerts"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_MigrateUsersAllAlerts = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"disableOldAlerts": (boolean),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_MigrateUsersAllAlerts",path: "/users/{userId}/migration/alerts",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Reports"]
 * @summary "POST_MigrateUsersAllReports"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_MigrateUsersAllReports"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_MigrateUsersAllReports = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"disableOldReports": (boolean),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_MigrateUsersAllReports",path: "/users/{userId}/migration/reports",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🙋 USER"]
 * @summary "POST_User"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.body.setDevices.map(x=>x.deviceId)\",\n\t\"deviceDataFrom\": \"req=>req.body.setDevices.map(x=>x.dataFrom??0)\"\n}\n```"
 * @operationId "POST_User"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_User = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @minItems 1 */"setDevices": (Array< ({"deviceId": (string),"dataFrom": ( timestampSchema| (null)),})>),"setModuleExpiry": (Array< ({"moduleId": id,"expiry_date": timestampSchema,/** @description "[null | undefined | true] is higher rank than [false]"
 * @default {} */"options"?: (Record<string | number | symbol,  (boolean)>)|null,})>),"data": ({"email": (string),"name": (string)|null,"company": (string)|null,"contact": (string)|null,"location": (string)|null,"city": (string)|null,"state": (string)|null,"country": (string)|null,"modules": (Array< id>),"thumb": (string)|null,"settings": ({"timezone"?: ({"name"?: (string)|null,})|null,"time_format"?: (number)|null,"language"?: (string)|null,"working_hours"?: (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"after"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,"before"?: ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),})|null,})>)|null,})|null,"aqi_index_ids"?: (Array< id>),"password": encryptedPassword,}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_User",path: "/users/{userId}/users",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Cluster"]
 * @summary "POST_UsersCluster"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_UsersCluster"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersCluster = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"label": (string)|null,"description": (string)|null,"config": ({"radius": (number),"devices": (Array< (string)>),"latitude": (number),"longitude": (number),"timeDiff"?: (number)|null,"deviceType": (string),"geojson"?: any,"timezone"?: (string)|null,}),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersCluster",path: "/users/{userId}/cluster",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "POST_UsersDeviceCmd"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "POST_UsersDeviceCmd"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersDeviceCmd = (function () {
        type Req = ({"params": ({"deviceId": (string),"template": ("full-reboot"|"gateway-restart"),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": (string),});
        return new Endpoint({name: "POST_UsersDeviceCmd",path: "/devices/{deviceId}/run/{template}",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Dispersion"]
 * @summary "POST_UsersDispersionSource"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_UsersDispersionSource"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_UsersDispersionSource = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"data": ({"label": (string)|null,/** @minimum 0 */"area": (number),"latitude": (number),"longitude": (number),"height": (number)|null,"emission": (Array< ({"days": (Array< ("monday"|"tuesday"|"wednesday"|"thursday"|"friday"|"saturday"|"sunday")>),"time": ({"start": ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),}),"end": ({/** @maximum 23
 * @minimum 0 */"HH": (number),/** @maximum 59
 * @minimum 0 */"MM": (number),}),}),"emission_rate": (Array< ({"param": (string),"value": (number),})>),})>),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "POST_UsersDispersionSource",path: "/users/{userId}/dispersion-source",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags []
 * @summary "POST_VideoGeneration"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "POST_VideoGeneration"
 * @security [{"WebAuthorization":[]},{}] */ export const POST_VideoGeneration = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"bgGoogleMaps": ({"apiKey": (string),"lat": (number),"lon": (number),/** @exclusiveMinimum 0 */"zoom": (number),"mapType": (string),"mapStyles"?: (string),}),"width": (number),"height": (number),/** @exclusiveMinimum 0 */"durationInSec": (number),"videoTitle": (string),/** @maximum 1
 * @minimum 0 */"opacity": (number),"legendInBase64": (string),"dataFrames": (Array< ({"frameTitle": (string),"imgsForFrame": (Array< ({"img": (string),"topRight": ({"lat": (number),"lon": (number),}),"bottomLeft": ({"lat": (number),"lon": (number),}),})>),})>),}),});
        type Res = ({"headers": ({"Content-Type": (`video/mp4`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "POST_VideoGeneration",path: "/users/{userId}/generate-map-video",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Units"]
 * @summary "PUT_EnvUserAqi"
 * @description "\n**AccessControl:** \n```json\n{}\n```"
 * @operationId "PUT_EnvUserAqi"
 * @security [{"WebAuthorization":[]},{}] */ export const PUT_EnvUserAqi = (function () {
        type Req = ({"params": ({"user_id": id,"topic": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"identifier": (string),"aqi_id": (string),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PUT_EnvUserAqi",path: "/users/{user_id}/{topic}/aqi",method: "put",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Units"]
 * @summary "PUT_EnvUserUnits"
 * @description "\n**AccessControl:** \n```json\n{}\n```"
 * @operationId "PUT_EnvUserUnits"
 * @security [{"WebAuthorization":[]},{}] */ export const PUT_EnvUserUnits = (function () {
        type Req = ({"params": ({"user_id": id,"topic": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"parameter_id": (string),"unit": ({"parameter_id": (string),"unit_id": (string),"precision"?: env_unit_precision,"custom_zones": ({"lower": (number),"next": (Array< ({"color": (string),"inverted_color": (string),"upper": (number),})>),})|null,"thresholds": (Array< ({"label": (string),"limit": (number),"period_id": (string),"color": (string),})>),}),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PUT_EnvUserUnits",path: "/users/{user_id}/{topic}/units",method: "put",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Device"]
 * @summary "PUT_UsersDevice"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"device\": \"req=>req.path.deviceId\",\n\t\"admin\": \"req=>req.body.forEveryone||req.body.enabled!==void 0||req.body.interval!==void 0||req.body.weather!==void 0\"\n}\n```"
 * @operationId "PUT_UsersDevice"
 * @security [{"WebAuthorization":[]},{}] */ export const PUT_UsersDevice = (function () {
        type Req = ({"params": ({"deviceId": (string),"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"forEveryone"?: (boolean),"data": ({"latitude": (number)|null,"longitude": (number)|null,"loc": (string)|null,"label": (string)|null,"url": (string)|null,"options"?: ({"deviceTags"?: (Array< (string)>)|null,"markedAsFavourite"?: (boolean)|null,})|null,"labels"?: (Array< ({"key": (string),"value": (string),})>)|null,}),"enabled"?: (boolean),"interval"?: (number),"weather"?: (boolean),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "PUT_UsersDevice",path: "/users/{userId}/devices/{deviceId}",method: "put",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🔐 AUTH"]
 * @summary "ResetPassword"
 * @operationId "ResetPassword"
 * @security [{},{}] */ export const ResetPassword = (function () {
        type Req = ({"params": ({"token": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"newPassword": encryptedPassword,"confirmPassword": encryptedPassword,}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "ResetPassword",path: "/users/reset-password/{token}",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🏭 PROJECT"]
 * @summary "SET_OrgArchive"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\"\n}\n```"
 * @operationId "SET_OrgArchive"
 * @security [{"WebAuthorization":[]},{}] */ export const SET_OrgArchive = (function () {
        type Req = ({"params": ({"targetOrgId": (string),"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({"archive": (boolean),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "SET_OrgArchive",path: "/users/{userId}/orgs/{targetOrgId}/archive",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🏭 PROJECT"]
 * @summary "SendOrgBuyEmail"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.path.userId\",\n\t\"admin\": \"()=>true\"\n}\n```"
 * @operationId "SendOrgBuyEmail"
 * @security [{"WebAuthorization":[]},{}] */ export const SendOrgBuyEmail = (function () {
        type Req = ({"params": ({"userId": id,}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @description "value can be [0, 1, 2, 3, 4]" */"plan": (number),"request": ("seats"|"sms"|"api"|"plan"),}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "SendOrgBuyEmail",path: "/user/{userId}/buy",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🔐 AUTH"]
 * @summary "UpdatePassword"
 * @operationId "UpdatePassword"
 * @security [{},{}] */ export const UpdatePassword = (function () {
        type Req = ({"params"?: ({}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @format "email" */"email": (string),"password": encryptedPassword,"newPassword": encryptedPassword,"confirmPassword": encryptedPassword,}),});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": message,});
        return new Endpoint({name: "UpdatePassword",path: "/users/update-password",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Utils"]
 * @summary "UploadImage"
 * @description "\n**AccessControl:** \n```json\n{}\n```"
 * @operationId "UploadImage"
 * @security [{"WebAuthorization":[]},{}] */ export const UploadImage = (function () {
        type Req = ({"params": ({"path": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({/** @format "uri" */"url": (string),}),});
        return new Endpoint({name: "UploadImage",path: "/util/upload/{path}",method: "post",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["Data Flagging"]
 * @summary "UsersDataFlagPdf"
 * @description "\n**AccessControl:** \n```json\n{\n\t\"user\": \"req=>req.query.userId\",\n\t\"device\": \"req=>req.path.deviceId\"\n}\n```"
 * @operationId "UsersDataFlagPdf"
 * @security [{"WebAuthorization":[]},{}] */ export const UsersDataFlagPdf = (function () {
        type Req = ({"params": ({"deviceId": (string),}),"query": ({/** @default true */"getLive"?: (boolean),"lte": timestamp,"gte": timestamp,"keys"?: (/** @minItems 1 */ (Array< (string)>)| (string)),/** @default false */"admin"?: (boolean),"userId": id,} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers": ({"Content-Type": (`application/pdf`),"Content-Disposition": (string),} & {[k: string]: unknown}),"body": file,});
        return new Endpoint({name: "UsersDataFlagPdf",path: "/devices/{deviceId}/data-flag/pdf",method: "get",request: null as never as Req,response: null as never as Res,})
    })();/** @tags ["🔐 AUTH"]
 * @summary "ValidateResetPasswordToken"
 * @operationId "ValidateResetPasswordToken"
 * @security [{},{}] */ export const ValidateResetPasswordToken = (function () {
        type Req = ({"params": ({"token": (string),}),"query"?: ({} & {[k: string]: unknown}),"headers"?: ({} & {[k: string]: unknown}),"body"?: any,});
        type Res = ({"headers"?: ({} & {[k: string]: unknown}),"body": ({"isValid": (boolean),}),});
        return new Endpoint({name: "ValidateResetPasswordToken",path: "/users/reset-password/{token}/validate",method: "get",request: null as never as Req,response: null as never as Res,})
    })();