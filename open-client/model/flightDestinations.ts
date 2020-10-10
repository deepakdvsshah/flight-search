/**
 * Flight Inspiration Search
 *  Before using this API, we recommend you read our **[Authorization Guide](https://developers.amadeus.com/self-service/apis-docs/guides/authorization)** for more information on how to generate an access token.  Please also be aware that our test environment is based on a subset of the production, to see what is included in test please refer to our **[data collection](https://github.com/amadeus4dev/data-collection)**. 
 *
 * OpenAPI spec version: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Dictionaries } from './dictionaries';
import { FlightDestination } from './flightDestination';
import { Issue } from './issue';
import { Meta } from './meta';


export interface FlightDestinations { 
    data?: Array<FlightDestination>;
    dictionaries?: Dictionaries;
    meta?: Meta;
    warnings?: Array<Issue>;
}
