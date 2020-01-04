import { Filter, RoomFloor, RoomCount, ContractType } from '../filter';

/**
 * 월세 한도 (단위 만원)
 */
const rentBudget = 10;

/**
 * 보증금 한도 (단위 만원)
 */
const depositBudget = 10000;

const commonFilter: Omit<Filter, 'bounds' | 'id'> = {
    priceRange: {
        rent: { max: rentBudget * 10000 },
        deposit: { max: depositBudget * 10000 },
        shouldIncludeMaintenance: true,
    },
    buildingTypes: [],
    roomFloors: [RoomFloor.lower, RoomFloor.higher],
    roomCounts: [RoomCount.twoRooms, RoomCount.threeAndMoreRooms],
    contractTypes: [ContractType.rent],
    shouldIncludeHalfUndergrounds: false,
    shouldIncludeLofts: true,
    shouldIncludeRooftops: true,
};

const candidates: Filter[] = [
    {
        id: '사당',
        ...commonFilter,
        bounds: {
            max : { lat : 37.4848671, lng : 126.9935427 },
            min : { lat : 37.4682497, lng : 126.9697259 },
        },
    },
    {
        id: '낙성대',
        ...commonFilter,
        bounds: {
            max : { lat : 37.4854269, lng : 126.9753258 },
            min : { lat : 37.4688059, lng : 126.9515129 },
        },
    },
    {
        id: '서울대입구',
        ...commonFilter,
        bounds: {
            max : { lat : 37.489521, lng : 126.9646192 },
            min : { lat : 37.4728978, lng : 126.9408074 },
        },
    },
    {
        id: '봉천',
        ...commonFilter,
        bounds: {            
            max : { lat : 37.4907881, lng : 126.9534802 },
            min : { lat : 37.4741627, lng : 126.9296705 },
        },
    },
    {
        id: '신림',
        ...commonFilter,
        bounds: {            
            max : { lat : 37.4925823, lng : 126.9415811 },
            min : { lat : 37.4759545, lng : 126.9177735 },
        },
    },
    {
        id: '신대방',
        ...commonFilter,
        bounds: {            
            max : { lat : 37.4958339, lng : 126.9251858 },
            min : { lat : 37.4792029, lng : 126.9013808 },
        },
    },
    {
        id: '구로디지털단지',
        ...commonFilter,
        bounds: {            
            max : { lat : 37.4935661, lng : 126.9133741 },
            min : { lat : 37.4769327, lng : 126.8895725 },
        },
    },
];

export default candidates;
