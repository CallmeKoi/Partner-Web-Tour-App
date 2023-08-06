// export class Tour{
//     constructor(
//     public Id: string, 
//     public PartnerId: string,
//     public Name: string,
//     public Location: string,
//     public Contact: string,
//     public Description: string,
//     public Highlights: string[],
//     public BannerUrl: string,
//     public SubimageUrl: string[],
//     public Itinerary: Itinerary[],
//     public State: string,
//     public ServicePrice: number,
//     public Additional: string
//     public Packets: PacketTour[],
//     ){} 
// }

import { PacketTour } from "./packetTour.model";
import { Itinerary } from "./tourItinerary.model";
//Testing Tour
export class Tour {
    constructor(
        public Id: string,
        public Name: string,
        public BannerUrl: string,
        public ForSale: boolean,
        public Highlights: '',
        public Itinerary: Itinerary[],
        public Packets: PacketTour[] | null
    ) { }
}

